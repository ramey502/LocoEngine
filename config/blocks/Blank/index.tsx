import { ComponentConfig } from "@measured/puck";
import { useTranslation } from "next-i18next";
import getClassNameFactory from "../../../lib/get-class-name-factory";
import styles from "./styles.module.css";

export type HeroProps = {};

const Blank = () => {
  const {} = useTranslation("lang");
  const getClassName = getClassNameFactory("hero", styles);
  return <div className={getClassName()}></div>;
};
export const Hero: ComponentConfig<HeroProps> = {
  fields: {},
  defaultProps: {},

  render: () => {
    return <Blank />;
  },
};
