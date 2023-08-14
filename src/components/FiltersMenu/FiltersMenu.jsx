
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getDrivesByQuery } from "../../redux/drives/drivesThunks";
import PropTypes from "prop-types";
import closeSvg from "../../assets/icons/close-outline.svg";
import { CSSTransition } from "react-transition-group";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import "dayjs/locale/uk";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { FiltersMenuWrap, CloseBtn, DateWrap } from "./FiltersMenu.styled";

const FiltersMenu = ({ toggleModal }) => {
  const [dateFrom, setDateFrom] = useState(dayjs(new Date()));
  const [dateTill, setDateTill] = useState(dayjs(new Date()));
  const dispatch = useDispatch();
  
  const onApplyFilters = () => {
    let str = "";
    const querySearch = str.concat(
      "dateFrom",
      "=",
      dayjs(dateFrom).toString(),
      "&",
      "dateTill",
      "=",
      dayjs(dateTill).toString()
    ); 
    console.log(querySearch);

    dispatch(getDrivesByQuery(querySearch));
  }

    return (
      <FiltersMenuWrap>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {" "}
          {/* adapterLocale="uk" */}
          <CloseBtn src={closeSvg} onClick={toggleModal} />
          <p>Choose range</p>
          <DateWrap>
            <DatePicker
              value={dateFrom}
              onChange={(newValue) => setDateFrom(newValue)}
              format="DD.MM.YYYY"
              sx={{ width: "150px" }}
              slotProps={{ textField: { size: "small" } }}
            />
            <p>-</p>
            <DatePicker
              value={dateTill}
              onChange={(newValue) => setDateTill(newValue)}
              format="DD.MM.YYYY"
              sx={{ width: "150px" }}
              slotProps={{ textField: { size: "small" } }}
            />
          </DateWrap>
          <button type="button" onClick={onApplyFilters}>Apply filter</button>
        </LocalizationProvider>
      </FiltersMenuWrap>
    );
};

FiltersMenu.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};

export default FiltersMenu;