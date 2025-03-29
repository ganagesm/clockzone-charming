
export interface City {
  name: string;
  timezone: string;
  flag: string;
  offset: number;
}

// Define a list of major cities with their time zones
export const CITIES: City[] = [
  { name: "New York", timezone: "America/New_York", flag: "🇺🇸", offset: -5 },
  { name: "London", timezone: "Europe/London", flag: "🇬🇧", offset: 0 },
  { name: "Tokyo", timezone: "Asia/Tokyo", flag: "🇯🇵", offset: 9 },
  { name: "Paris", timezone: "Europe/Paris", flag: "🇫🇷", offset: 1 },
  { name: "Sydney", timezone: "Australia/Sydney", flag: "🇦🇺", offset: 10 },
  { name: "Dubai", timezone: "Asia/Dubai", flag: "🇦🇪", offset: 4 },
  { name: "Moscow", timezone: "Europe/Moscow", flag: "🇷🇺", offset: 3 },
  { name: "Beijing", timezone: "Asia/Shanghai", flag: "🇨🇳", offset: 8 },
  { name: "Los Angeles", timezone: "America/Los_Angeles", flag: "🇺🇸", offset: -8 },
  { name: "Berlin", timezone: "Europe/Berlin", flag: "🇩🇪", offset: 1 },
  { name: "Rio de Janeiro", timezone: "America/Sao_Paulo", flag: "🇧🇷", offset: -3 },
  { name: "Delhi", timezone: "Asia/Kolkata", flag: "🇮🇳", offset: 5.5 },
  { name: "Rome", timezone: "Europe/Rome", flag: "🇮🇹", offset: 1 },
  { name: "Cairo", timezone: "Africa/Cairo", flag: "🇪🇬", offset: 2 },
  { name: "Mexico City", timezone: "America/Mexico_City", flag: "🇲🇽", offset: -6 },
];

// Get a city by its name
export const getCityByName = (name: string): City | undefined => {
  return CITIES.find(city => city.name === name);
};

// Calculate the current time in a specific time zone
export const getCurrentTimeForCity = (city: City): Date => {
  const date = new Date();
  // Get UTC time in ms
  const utcTime = date.getTime() + date.getTimezoneOffset() * 60000;
  // Create new date object for given city using its offset
  return new Date(utcTime + city.offset * 3600000);
};

// Format the time to HH:MM:SS
export const formatTime = (date: Date): string => {
  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  });
};

// Format the date
export const formatDate = (date: Date): string => {
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    day: "2-digit",
    month: "2-digit"
  });
};
