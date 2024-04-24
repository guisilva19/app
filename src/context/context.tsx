import React from "react";

interface IContext {
  isAuth: boolean;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Context = React.createContext<IContext>({} as IContext);

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isAuth, setIsAuth] = React.useState<boolean>(false);
  return (
    <Context.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </Context.Provider>
  );
};

export const useGlobalContext = () => {
  const context = React.useContext(Context);
  if (!context) {
    throw new Error(
      "useMyContext deve ser usado dentro de um MyContextProvider"
    );
  }
  return context;
};
