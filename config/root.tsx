import { DefaultRootProps } from "@measured/puck";
import { appWithTranslation } from "next-i18next";
import { Header } from "./components/Header";

export type RootProps = DefaultRootProps;

const Root: any = ({ children, puck }: RootProps) => {
  return (
    <>
      <Header editMode={puck.isEditing} />
      {children}
    </>
  );
};

export default appWithTranslation(Root);
