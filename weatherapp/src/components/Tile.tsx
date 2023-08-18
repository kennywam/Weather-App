import Humidity from "./Icons/Humidity";
import Wind from "./Icons/Wind";

type Props = {
  icon: "wind" | "humidity";
  title: string
  info: string | JSX.Element
  
};

const icons = {
  wind: Wind,
  humidity: Humidity,
};

const Tile = ({
  icon, title, info
}: Props): JSX.Element => {
  const Icon = icons[icon];
  return (
    <div>
      <article className="w-[140px] h-[130px] text-zinc-700 bg-white/20 backdrop-blur-ls rounded drop-shadow-lg p-2 mb-5 flex flex-col justify-between">
        {" "}
        <Icon />
      </article>
    </div>
  );
};
export default Tile;
