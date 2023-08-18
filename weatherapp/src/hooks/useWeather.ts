import { useState, useEffect, ChangeEvent } from "react";
import { optionType, weatherType } from "../types";

const useWeather = () => {
  //states
  const [term, setTerm] = useState<string>("");
  const [options, setOptions] = useState<[]>([]);
  const [city, setCity] = useState<optionType | null>(null);
  const [weather, setWeather] = useState<weatherType | null>(null);

  const key = "f495d7f97a6e57761e65fbd47325f9b1";

  const getSearchOptions = async (term: string) => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${term.trim()}&limit=5&appid=${key}`
    )
      .then((res) => res.json())
      .then((data) => setOptions(data))
      .catch((error) => {
        console.error("Error fetching location:", error);
      });  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setTerm(value);

    if (value === "") return;
    getSearchOptions(value);
  };

  const getWeather = (city: optionType) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&units=metric&appid=${key}`
    )
      .then((res) => res.json())
      .then((data) => setWeather(data))
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  };
  const onSubmit = () => {
    if (!city) return;

    getWeather(city);
  };
  const onOptionSelect = (option: optionType) => {
    setCity(option);
  };

  useEffect(() => {
    if (city) {
      setTerm(city.name);
      setOptions([]);
    }
  }, [city]);

  return {
    weather,
    options,
    term,
    onOptionSelect,
    onSubmit,
    onInputChange,
  };
};

export default useWeather;
