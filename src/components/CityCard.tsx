
import React from 'react';
import { City, formatTime, formatDate, getCurrentTimeForCity } from '../utils/timeZones';
import { Card, CardContent } from '@/components/ui/card';
import AnalogClock from './AnalogClock';
import { XCircle } from 'lucide-react';

interface CityCardProps {
  city: City;
  onRemove: (city: City) => void;
  isDark?: boolean;
}

const CityCard: React.FC<CityCardProps> = ({ city, onRemove, isDark = false }) => {
  const [time, setTime] = React.useState(getCurrentTimeForCity(city));

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCurrentTimeForCity(city));
    }, 1000);

    return () => clearInterval(interval);
  }, [city]);

  const formattedTime = formatTime(time);
  const formattedDate = formatDate(time);

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <CardContent className="p-4 relative">
        <button 
          onClick={() => onRemove(city)}
          className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition-colors duration-200 z-10"
          aria-label={`Remove ${city.name}`}
        >
          <XCircle size={20} />
        </button>
        
        <div className="mb-4 h-40 relative">
          <AnalogClock city={city} isDark={isDark} />
        </div>
        
        <div className="flex items-center justify-center text-center mb-2" style={{paddingTop: "20px"}}>
  <span className="text-2xl mr-2">{city.flag}</span>
  <h3 className="text-lg font-bold">{city.name}</h3>
</div>
        
        <div className="text-center">
          <p className="text-2xl font-mono">{formattedTime}</p>
          <p className="text-sm text-gray-500">{formattedDate}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default CityCard;
