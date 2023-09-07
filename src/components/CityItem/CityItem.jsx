
import PropTypes from "prop-types";
import { CityItemName } from "./CityItem.styled";

const CityItem = ({ city }) => {
    return (
      <div>
        <CityItemName>
          {city.name}, {city.address.countryCode}
        </CityItemName>
      </div>
    );
}

CityItem.propTypes = {
  city: PropTypes.object.isRequired,
};

export default CityItem;