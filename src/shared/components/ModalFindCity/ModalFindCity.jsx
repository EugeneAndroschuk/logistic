import PropTypes from "prop-types";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useDebounce from "../../../utils/useDebounce";
import { getUserToken } from "../../../redux/auth/authSelectors";
import CloseIcon from "@mui/icons-material/Close";
import CityList from "../../../components/CityList/CityList";
import { ModalWrap, SearchWrap, SearchInput } from "./ModalFindCity.styled";

const ModalFindCity = ({ toggleModal, onFindCity }) => {
  const [search, setSearch] = useState("");
  const [value, setValue] = useState("");
  const [cities, setCities] = useState([]);
  const [isAmadeusTokenExpired, setIsAmadeusTokenExpired] = useState(true);
  const token = useSelector(getUserToken);
  const tokenApi = import.meta.env.VITE_AMADEUS_API_TOKEN;
  // const controller = new AbortController();
  // const signal = controller.signal;
  const LOCALHOST_URL = "http://localhost:3000";
  const DEPLOY_URL = "https://logistics-db.onrender.com";

  const debouncedSearch = useDebounce((value) => setSearch(value), 1100);

  useEffect(() => {
    if (!isAmadeusTokenExpired) return;

    console.log("sending request=========")

    axios(
      {
        method: "POST",
        url: "https://test.api.amadeus.com/v1/security/oauth2/token",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        data: {
          grant_type: "client_credentials",
          client_id: import.meta.env.VITE_AMADEUS_API_KEY,
          client_secret: import.meta.env.VITE_AMADEUS_API_SECRET,
        },
      }
    ).then(res=>console.log(res));

  },[isAmadeusTokenExpired]);

  useEffect(() => {
    if (search === "") return;

    const controller = new AbortController();
    const signal = controller.signal;

    const findCity = async () => {
      try {
        const response = await axios.get(
          `https://test.api.amadeus.com/v1//reference-data/locations/cities?keyword=${search}&max=10`,
          {
            headers: { Authorization: `Bearer ${tokenApi}` },
            signal,
          }
        );

        console.log("==code==", response.data.errors[0].code);
        console.log("==title==", response.data.errors[0].title);

        const citiesArray = response.data.data;
        setCities([...citiesArray]);
      } catch (e) {
        if (!signal?.aborted) {
          const errorCode = e.response.data.errors[0].code;
          if (errorCode === 38192) setIsAmadeusTokenExpired(true);
        }
      }
    };

    // const lardiTransFetch = async () => {
    //   try {
    //     // const response = await axios.get(
    //     //   `${DEPLOY_URL}/api/drives/findcity?city=${search}`,
    //     //   {
    //     //     headers: { Authorization: `Bearer ${token}` },
    //     //     signal,
    //     //   }
    //     // );
    //   } catch (e) {
    //     if (!signal?.aborted) {
    //       const errorCode = e.response.data.errors[0].code;
    //       if (errorCode === 38192) setIsAmadeusTokenExpired(true);
    //     }
    //   }
    // };

    findCity();

    return () => {
      controller.abort();
    };
  }, [search, tokenApi]);

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
          placeholder={"enter the name of city in ENGLISH"}
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
