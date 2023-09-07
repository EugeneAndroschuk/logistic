import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import CityItem from "../CityItem/CityItem";
import { CityListWrap, CityItemStyled } from "./CityList.styled";

const CityList = ({ cities, onSelectCity }) => {
  
  return (
    <CityListWrap>
      <ul>
        {cities.length > 0 &&
          cities.map((city) => (
            <CityItemStyled key={nanoid()} onClick={() => onSelectCity(city)}>
              <CityItem city={city} />
            </CityItemStyled>
          ))}
      </ul>
    </CityListWrap>
  );
};

CityList.propTypes = {
  cities: PropTypes.array.isRequired,
  onSelectCity: PropTypes.func.isRequired,
};

export default CityList;
