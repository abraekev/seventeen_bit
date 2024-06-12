import Description from "./Description";
import Logo from "./Logo";
import ButtonLight from "./ButtonLight";
import ButtonDark from "./ButtonDark";
import YoutubeEmbedded from "./YoutubeEmbedded";

function Content() {
  return (
    <div className="flex h-screen mt-28">
      <div className="flex">
        <Logo size={1} />
        <Description />
        <div className="">
          <ButtonLight />
          <ButtonDark />
          <p className="font-bold">Dutch raiding made simple </p>
          <p className="text-darkgrey17b">Copyright by some oelewappers </p>
        </div>
      </div>
      <YoutubeEmbedded />
    </div>
  );
}

export default Content;
