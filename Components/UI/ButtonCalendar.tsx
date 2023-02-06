import classes from "./ButtonCalendar.module.css";
import Link from "next/link";
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { useScrollChecker } from "../../hooks/useScrollChecker";
import { FontawesomeObject, IconDefinition } from "@fortawesome/fontawesome-svg-core";

export const ButtonCalendar = (props: {text: string, fontAwesome: IconDefinition | null, path: string, black:boolean}): JSX.Element => {
  const pageY = useScrollChecker();
  console.log(pageY);
  return (
    <Link className={pageY <= 1 ? `${props.black ? classes.nav__callendar__black : classes.nav__callendar}` : `${classes.nav__callendar} ${classes.nav__callendar__scrolled}`} href={props.path}>
      {props.fontAwesome && <FontAwesomeIcon className={classes.callendar__icon} icon={props.fontAwesome} />}
      {props.text}
    </Link>
  );
};
 