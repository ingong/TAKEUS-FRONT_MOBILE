import Overlay from '@components/Common/Overlay';
import DeleteIcon from '@assets/DeleteIcon.svg';
import { dropdownPropType } from '@components/Dropdown/dropdown';
import { SelectorContainer } from './style';
import { modalList } from '@components/Modals';

const CountryDropdown = (props?: dropdownPropType): JSX.Element => {
  const {
    onSubmit,
    onClose,
    restProps: { countryList },
  } = props as dropdownPropType;

  const handleClose = () => {
    onClose(modalList.CountryDropdown);
  };
  const handleClick = (e: React.MouseEvent) => {
    onSubmit(e.currentTarget.textContent as string);
  };

  return (
    <div className="country__container">
      <Overlay onClose={handleClose} />
      <SelectorContainer height={40} isBorder={false}>
        <section>
          <div className="XButton">
            <DeleteIcon onClick={handleClose} />
          </div>
          <ul className="list">
            {countryList.map((country: string) => {
              return (
                <li className="item" key={country} onClick={handleClick}>
                  <p className="city">{country}</p>
                </li>
              );
            })}
          </ul>
        </section>
      </SelectorContainer>
    </div>
  );
};

export default CountryDropdown;
