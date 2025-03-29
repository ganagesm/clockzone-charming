import React, { useState, useEffect } from 'react';
import { City, CITIES } from '../utils/timeZones';
import CityCard from './CityCard';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Grid, List, Plus } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const DEFAULT_CITIES = ['Delhi', 'New York', 'London'];

const WorldClock: React.FC = () => {
  const [selectedCities, setSelectedCities] = useState<City[]>([]);
  const [isGridView, setIsGridView] = useState<boolean>(true);
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { toast } = useToast();

  useEffect(() => {
    const savedCities = localStorage.getItem('worldClockCities');
    if (savedCities) {
      try {
        const cityNames = JSON.parse(savedCities) as string[];
        setSelectedCities(
          cityNames.map(name => {
            const city = CITIES.find(city => city.name === name);
            return city || CITIES[0];
          })
        );
      } catch (e) {
        console.error('Error parsing saved cities', e);
        initializeDefaultCities();
      }
    } else {
      initializeDefaultCities();
    }
  }, []);

  const initializeDefaultCities = () => {
    const defaultCitiesList = CITIES.filter(city => DEFAULT_CITIES.includes(city.name));
    setSelectedCities(defaultCitiesList);
  };

  useEffect(() => {
    if (selectedCities.length > 0) {
      const cityNames = selectedCities.map(city => city.name);
      localStorage.setItem('worldClockCities', JSON.stringify(cityNames));
    }
  }, [selectedCities]);

  const addCity = () => {
    if (!selectedCity) {
      toast({ title: "Please select a city", description: "Select a city first.", variant: "destructive" });
      return;
    }

    const city = CITIES.find(city => city.name === selectedCity);
    if (!city) {
      toast({ title: "City not found", description: "City could not be found.", variant: "destructive" });
      return;
    }

    if (selectedCities.some(c => c.name === city.name)) {
      toast({ title: "City already added", description: `${city.name} is already added.`, variant: "destructive" });
      return;
    }

    setSelectedCities([...selectedCities, city]);
    setSelectedCity('');
    setSearchQuery('');
    toast({ title: "City added", description: `${city.name} has been added.` });
  };

  const removeCity = (cityToRemove: City) => {
    setSelectedCities(selectedCities.filter(city => city.name !== cityToRemove.name));
    toast({ title: "City removed", description: `${cityToRemove.name} has been removed.` });
  };

  const getCitiesNotSelected = () => {
    return CITIES.filter(city => !selectedCities.some(selected => selected.name === city.name));
  };

  // Filter cities based on search query
  const filteredCities = getCitiesNotSelected().filter(city =>
    city.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h2 className="text-2xl font-bold">World Clocks</h2>

        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
          <div className="flex-1 md:flex-initial flex gap-2">
            <Select value={selectedCity} onValueChange={setSelectedCity}>
              <SelectTrigger className="w-full md:w-64">
                <SelectValue placeholder="Add a city..." />
              </SelectTrigger>
              <SelectContent className="p-2">
                {/* Search Input */}
                <Input
                  type="text"
                  placeholder="Search city..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full p-2 border rounded-md mb-2"
                />
                
                {/* Filtered Cities */}
                {filteredCities.length > 0 ? (
                  filteredCities.map((city) => (
                    <SelectItem key={city.name} value={city.name}>
                      {city.flag} {city.name}
                    </SelectItem>
                  ))
                ) : (
                  <p className="text-gray-500 text-center py-2">No results found</p>
                )}
              </SelectContent>
            </Select>

            <Button onClick={addCity} className="bg-worldclock-blue hover:bg-worldclock-lightblue">
              <Plus size={18} />
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant={isGridView ? "default" : "outline"}
              onClick={() => setIsGridView(true)}
              className="p-2 h-10 w-10"
              title="Grid View"
            >
              <Grid size={18} />
            </Button>
            <Button
              variant={!isGridView ? "default" : "outline"}
              onClick={() => setIsGridView(false)}
              className="p-2 h-10 w-10"
              title="List View"
            >
              <List size={18} />
            </Button>
          </div>
        </div>
      </div>

      <div className={`grid gap-6 animate-fade-in transition-all duration-300 ${
        isGridView 
          ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
          : 'grid-cols-1'
      }`}>
        {selectedCities.map((city) => (
          <CityCard 
            key={city.name} 
            city={city} 
            onRemove={removeCity} 
            isDark={city.name === "Tokyo"} 
          />
        ))}
      </div>

      {selectedCities.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No cities selected. Add some cities to get started!</p>
        </div>
      )}
    </div>
  );
};

export default WorldClock;
