import PropTypes from "prop-types";
import axios from "axios";
import { useEffect, useState} from "react";
import { useSelector} from "react-redux";
import useDebounce from "../../../utils/useDebounce";
import { getUserToken } from "../../../redux/auth/authSelectors";
import CloseIcon from "@mui/icons-material/Close";
import CityList from "../../../components/CityList/CityList";
import { ModalWrap, SearchWrap, SearchInput } from "./ModalFindCity.styled";

const ModalFindCity = ({ toggleModal, onFindCity }) => {
  const [search, setSearch] = useState("");
  const [value, setValue] = useState("");
  const [cities, setCities] = useState([]);
  const token = useSelector(getUserToken);
  const controller = new AbortController();
  const signal = controller.signal;

  const debouncedSearch = useDebounce((value)=>setSearch(value), 1000);

  useEffect(() => {
    if (search === "") return;

    const controller = new AbortController();
    const signal = controller.signal;

    const lardiTransFetch = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/drives/findcity?city=${search}`,
          {
            headers: { Authorization: `Bearer ${token}` },
            signal,
          }
        );
        setCities([...response.data]);
      } catch (e) {
        if (!signal?.aborted) {
          console.error(e);
        }
      }
    };

    lardiTransFetch();

    return () => {
      controller.abort();
    };

  },[search, token]);

  const onHandleInput = (e) => {
    setValue(e.target.value);
    debouncedSearch(e.target.value);
  };

  const onSelectCity = (city) => {
    onFindCity(city);
    toggleModal();
  };

  return (
    <ModalWrap>
      <CloseIcon
        onClick={toggleModal}
        sx={{
          cursor: "pointer",
          display: "block",
          marginLeft: "auto",
          marginBottom: "16px",
        }}
      />

      <SearchWrap>
        <SearchInput
          value={value}
          onChange={onHandleInput}
          placeholder={"Enter the name of city"}
        />

        <CityList cities={cities} onSelectCity={onSelectCity} />
      </SearchWrap>
    </ModalWrap>
  );
};

ModalFindCity.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  onFindCity: PropTypes.func.isRequired,
};

export default ModalFindCity;
