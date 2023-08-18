export type optionType = {
  name: string;
  lat: number;
  lon: number;
};

export type weatherType = {
  name: string;
  country: string;
  weather: [{ main: string; description: string; icon: string }];
  main: {
    temp: number;
    humidity: number;
  };
  wind: {
    speed: number;
    gust: number;
    deg: number;
  };
};




