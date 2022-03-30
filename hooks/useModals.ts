import { useContext, ReactPortal } from 'react';
import { ModalsDispatchContext } from '@context/ModalsContext';
import { ModalPropType } from '@components/Modals/modal';

export default function useModals() {
  const { open, close } = useContext(ModalsDispatchContext);
  const preventScroll = () => (document.body.style.overflow = 'hidden');
  const ableScroll = () => (document.body.style.overflow = 'scroll');

  const openModal = (Component: () => ReactPortal | JSX.Element, props?: ModalPropType) => {
    open(Component, props);
    preventScroll();
  };

  const closeModal = (Component: () => ReactPortal | JSX.Element) => {
    close(Component);
    ableScroll();
  };

  return {
    openModal,
    closeModal,
  };
}
