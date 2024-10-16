import ButtonSvg from "../assets/svg/ButtonSvg";
import { Link } from "react-router-dom";

const Button = ({ className, href, onClick, children, px, white,to }) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1  ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;
  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  ); 

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );
  const renderRoute = () => (
    <Link to={to} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </Link>
  );
  

  return href ? renderLink() : to ? renderRoute() : renderButton();
};

export default Button;
