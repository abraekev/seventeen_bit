interface LogoProps {
  size?: number;
}
function Logo({ size = 2 }: LogoProps) {
  const sizeClass: string =
    { 1: "w-1/5", 2: "w-2/5", 3: "w-3/5", 4: "w-4/5", 5: "w-full" }[size] ||
    "w-2/5";
  return (
    <img
      src="./17bitLogoTransparent.png"
      className={`h-fit ${sizeClass}`}
      alt="17bit logo"
    />
  );
}

export default Logo;
