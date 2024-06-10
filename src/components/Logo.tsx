interface LogoProps {
  width: string;
}
function Logo(props: LogoProps) {
  return (
    <img
      src="./17bitLogoTransparent.png"
      className="logo"
      alt="17bit logo"
      style={{ width: props.width }}
    />
  );
}

export default Logo;
