import { ComponentConfig } from "@measured/puck";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import dynamic from "next/dynamic";
import { ReactElement } from "react";
import getClassNameFactory from "../../../lib/get-class-name-factory";
import styles from "./styles.module.css";

const getClassName = getClassNameFactory("Card", styles);

const icons = Object.keys(dynamicIconImports).reduce<
  Record<string, ReactElement>
>((acc, iconName) => {
  const El = dynamic((dynamicIconImports as any)[iconName]);

  return {
    ...acc,
    [iconName]: <El />,
  };
}, {});

const iconOptions = Object.keys(dynamicIconImports).map((iconName) => ({
  label: iconName,
  value: iconName,
}));

export type CardProps = {
  title: string;
  description: string;
  icon?: string;
  mode: "flat" | "card";
};

export const Card: ComponentConfig<CardProps> = {
  fields: {
    title: { type: "text" },
    description: { type: "textarea" },
    icon: {
      type: "select",
      options: iconOptions,
    },
    mode: {
      type: "radio",
      options: [
        { label: "card", value: "card" },
        { label: "flat", value: "flat" },
      ],
    },
  },
  defaultProps: {
    title: "Title",
    description: "Description",
    icon: "Feather",
    mode: "flat",
  },
  render: ({ title, icon, description, mode }) => {
    return (
      <div className={getClassName({ [mode]: mode })}>
        <div className={getClassName("icon")}>{icon && icons[icon]}</div>
        <div className={getClassName("title")}>{title}</div>
        <div className={getClassName("description")}>{description}</div>
      </div>
    );
  },
};
