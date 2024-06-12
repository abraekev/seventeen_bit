import Logo from "./Logo";
import ButtonLight from "./ButtonLight";
import ButtonDark from "./ButtonDark";
import YoutubeEmbedded from "./YoutubeEmbedded";
import Description from "./Description";

function Content() {
  return (
    <div className="flex justify-center  ">
      <div className="grid pt-28 px-4 w-1/2 bg-lightgrey17b space-y-8 justify-center">
        <div className="grid grid-cols-2">
          <Logo size={3} />
          <div className="grid grid-rows-3 ml-4">
            <p className="font-bold italic font text-2xl">
              "Dutch raiding made simple"
            </p>
            <ButtonLight />
            <ButtonDark />
          </div>
        </div>
        <div className="flex justify-center">
          <YoutubeEmbedded />
        </div>
        <Description />
        <p className="flex justify-center text-darkgrey17b ">
          ©Copyright by some oelewappers{" "}
        </p>
      </div>
    </div>
  );
}

export default Content;
