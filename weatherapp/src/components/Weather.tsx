import { weatherType } from "../types";
import Tile from "./Tile";
type Props = {
  data: weatherType;
};

const Degree = ({ temp }: { temp: number }): JSX.Element => (
  <>
    <span>
      {temp}
      <sup>o</sup>
    </span>
  </>
);
const Weather = ({ data }: Props): JSX.Element => {
  const today = data;
  return (
    <div className="w-full md:max-w-[500px] p-4 md:px-10 lg:px-24 h-full lg:h-auto bg-white bg-opacity-20 backdrop-blur-ls rounded drop-shadow-lg">
      <div className="mx-auto w-[300px]">
        <section className="text-center">
          <h2 className="tex-2xl font-black">
            {data.name} <span className="font-thin">{data.country}</span>
          </h2>
          <h1 className="text-4xl font-extrabold">
            <Degree temp={Math.round(today.main.temp)} />C
          </h1>
          <p className="text-sm">
            {today.weather[0].main} ({today.weather[0].description})
          </p>
        </section>
        <section className="flex flex-wrap justify-between text-zinc-700">
          <Tile
            icon="wind"
            title="Wind"
            info={`${Math.round(today.wind.speed) * 0.28} m/s`}
          />

          <Tile
            icon="humidity"
            title="Humidity"
            info={`${today.main.humidity} %`}
          />
        </section>
      </div>
    </div>
  );
};

export default Weather;
