import React, { useContext } from 'react';
import SideBar from '@components/SideBar';
import { CountryDropdown, AirportDropdown } from '@components/Dropdown';
import { ModalsStateContext } from '@context/ModalsContext';
import { ModalListStateType } from './modal';

export const modalList = {
  SideBar,
  CountryDropdown,
  AirportDropdown,
};

const Modals = () => {
  const openedModals = useContext(ModalsStateContext) as ModalListStateType;

  return (
    <>
      {openedModals?.map((modal, index) => {
        const { Component, props } = modal;
        if (!props || !props.onSubmit || !props.onClose) return <Component key={index} />;

        const { onSubmit, onClose, restProps } = props;
        const handleSubmit = async (value: string) => {
          if (typeof onSubmit === 'function') await onSubmit(value);
          onClose(Component);
        };

        return (
          <Component key={index} onSubmit={handleSubmit} onClose={onClose} restProps={restProps} />
        );
      })}
    </>
  );
};

export default Modals;
