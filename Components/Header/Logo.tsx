import classes from "./Logo.module.css";
import Link from "next/link";
import { useScrollChecker } from "../../hooks/useScrollChecker";
import { blackNav } from "../../Types/types";
export const Logo = (props:{black: blackNav}) => {

  const pageY = useScrollChecker();
  return (
    <div className={pageY <= 0 ? `${props.black ? classes.logo__black : classes.logo }` : classes.logo__disabled}>
      <Link href="/" className={`${classes.logo__name} ${props.black ? classes.logo__name__black : ""}`}>
        Kamila Koziara
      </Link>
      <div className={`${classes.logo__proffesion} ${props.black ? classes.logo__proffesion__black : ""}`}>fotografia ślubna</div>
    </div>
  );
};
