import { ReactPortal } from 'react';
type AllowedKeys = 'countryList' | 'cityList' | 'airportList';
type onSubmitType = (value: string) => Promise<void> | void;

export type dropdownPropType = {
  restProps: {
    [key in AllowedKeys]: Array<string>;
  };
  onSubmit: onSubmitType;
  onClose: (Component: () => ReactPortal | JSX.Element) => void;
};
