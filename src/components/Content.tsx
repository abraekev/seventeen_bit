import ButtonDark from "./ButtonDark";
import ButtonLight from "./ButtonLight";
import ButtonMenu from "./ButtonMenu";
import Description from "./Description";
import Logo from "./Logo";
import Section from "./Section";
import YoutubeEmbedded from "./YoutubeEmbedded";

const ButnList1: React.ReactNode[] = [<ButtonLight />, <ButtonDark />];
function Content() {
  return (
    <div className="content">
      <div className="flex flex-col gap-2 pb-16">
        <Section>
          <Logo size={2} />
          <ButtonMenu list={ButnList1} />{" "}
        </Section>
        <Section>
          <Description />
        </Section>
        <Section>
          <div className="flex flex-col items-center w-full h-auto">
            <p className="font-bold text-xl">Vibe Check</p>
            <YoutubeEmbedded tailwind="w-fit md:w-3/5 h-40 md:h-80" />
          </div>
        </Section>
      </div>
    </div>
  );
}

export default Content;
