import { ModalsStateContext, ModalsDispatchContext } from 'context/ModalsContext';
import { ReactPortal, ReactChild, useState } from 'react';
import {
  ModalListStateType,
  ModalsDispatchType,
  ModalPropType,
} from '@components/Modals/moda.type';

export function ModalsProvider({ children }: { children: ReactChild | ReactChild[] }) {
  const [openedModals, setOpenedModals] = useState<ModalListStateType>([]);
  const open = (Component: () => ReactPortal | JSX.Element, props: ModalPropType) => {
    setOpenedModals((modals) => {
      return [...modals, { Component, props }];
    });
  };

  const close = (Component: () => ReactPortal | JSX.Element) => {
    setOpenedModals((modals) => {
      return modals.filter((modal) => {
        return modal.Component !== Component;
      });
    });
  };

  const dispatch: ModalsDispatchType = { open, close };

  return (
    <ModalsStateContext.Provider value={openedModals}>
      <ModalsDispatchContext.Provider value={dispatch}>{children}</ModalsDispatchContext.Provider>
    </ModalsStateContext.Provider>
  );
}
