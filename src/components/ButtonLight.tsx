interface ButtonLightProps {
  text?: string;
  link?: string;
}

function ButtonLight({ text = "default", link = "" }: ButtonLightProps) {
  return (
    <a href={link}>
      <button className="bg-orange17b text-white17b font-bold py-2 px-4 rounded-full cursor-pointer hover:bg-yellow17b w-full text-left">
        {text}
      </button>
    </a>
  );
}

export default ButtonLight;
