import React, { useState, useContext } from "react";
const AppContex = React.createContext();
const AppProvider = ({ children }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const openSidebar = () => {
    setIsOpenSidebar(true);
  };
  const closeSidebar = () => {
    setIsOpenSidebar(false);
  };
  const openModal = () => {
    setIsOpenModal(true);
  };
  const closeModal = () => {
    setIsOpenModal(false);
  };
  return (
    <AppContex.Provider value={{isOpenModal,isOpenSidebar,openSidebar,closeSidebar,openModal,closeModal}}>
      {children}
    </AppContex.Provider>
  );
};
// custume hook
export const useGlobalContex = () => {
  return useContext(AppContex);
};

export { AppContex, AppProvider };
