interface LogoProps {
  width?: string;
}
function Logo({ width = "2" }: LogoProps) {
  const widthClass =
    { sm: "w-16", md: "w-24", lg: "w-32", xl: "w-48", "2-xl": "w-64" }[width] ||
    "w-32";
  return (
    <img
      src="./17bitLogoTransparent.png"
      className={widthClass}
      alt="17bit logo"
    />
  );
}

export default Logo;
