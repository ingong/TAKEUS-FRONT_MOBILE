import { createContext } from 'react';
import { ModalListStateType, ModalsDispatchType } from '@components/Modals/modal';

export const ModalsStateContext = createContext<ModalListStateType | null>(null);
export const ModalsDispatchContext = createContext<ModalsDispatchType>({
  open: () => {},
  close: () => {},
});
