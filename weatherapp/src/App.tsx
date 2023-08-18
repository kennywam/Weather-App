import Search from "./components/Search";
import useWeather from "./hooks/useWeather";
import Weather from "./components/Weather";

const App = (): JSX.Element => {
  const { weather, options, term, onOptionSelect, onSubmit, onInputChange } =
     useWeather();

  return (
    <main className="flex justify-center items-center bg-gradient-to-br from-sky-400  h-[100vh] w-full">
      {weather ? (
        <Weather data={weather} />
      ) : (
        <Search
          term={term}
          options={options}
          onInputChange={onInputChange}
          onOptionSelect={onOptionSelect}
          onSubmit={onSubmit}
        />
      )}
    </main>
  );
};

export default App;
