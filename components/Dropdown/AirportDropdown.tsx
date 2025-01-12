import { modalList } from '@components/Modals';
import Overlay from '@components/Common/Overlay';

import DeleteIcon from '@assets/DeleteIcon.svg';
import { dropdownPropType } from '@components/Dropdown/dropdown';
import { SelectorContainer } from './style';

const AirportDropdown = (props?: dropdownPropType): JSX.Element => {
  const {
    restProps: { cityList, airportList },
    onClose,
    onSubmit,
  } = props as dropdownPropType;

  const handleClose = () => {
    onClose(modalList.AirportDropdown);
  };
  const handleClick = (e: React.SyntheticEvent<HTMLLIElement>) => {
    onSubmit(e.currentTarget.dataset.airport as string);
  };

  const combinedList = airportList.map((airport: string, index: number) => [
    airport,
    cityList[index],
  ]);

  return (
    <div className="airport__container">
      <Overlay height={40} onClose={handleClose} />
      <SelectorContainer height={60} isBorder={true}>
        <section>
          <div className="XButton">
            <DeleteIcon onClick={handleClose} />
          </div>
          <ul className="list">
            {combinedList.map(([airport, city]) => {
              return (
                <li className="item" data-airport={airport} key={airport} onClick={handleClick}>
                  <p className="city"> {city}</p>
                  <p className="airport"> {airport}</p>
                </li>
              );
            })}
          </ul>
        </section>
      </SelectorContainer>
    </div>
  );
};

export default AirportDropdown;
