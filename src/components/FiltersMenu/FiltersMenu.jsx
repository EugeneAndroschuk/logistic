
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDrivesSelector } from "../../redux/drives/drivesSelectors";
import { getDrivesByQuery } from "../../redux/drives/drivesThunks";
import { setDateForQuerySearch } from "../../utils/dateFormatter";
import makeUniqUsers from "../../utils/makeUniqUsers";
import PropTypes from "prop-types";
import closeSvg from "../../assets/icons/close-outline.svg";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import "dayjs/locale/uk";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {MenuItem, Select} from "@mui/material";
import {
  FiltersMenuWrap,
  CloseBtn,
  DateWrap,
  ApplyFilterBtn,
} from "./FiltersMenu.styled";

const FiltersMenu = ({ toggleModal, onSetQuery }) => {
  const [dateFrom, setDateFrom] = useState(dayjs(new Date()));
  const [dateTill, setDateTill] = useState(dayjs(new Date()));
  const [user, setUser] = useState("");
  const [queryString, setQueryString] = useState(null);
  const dispatch = useDispatch();
  const {allDrives} = useSelector(getAllDrivesSelector);
  const owners = allDrives.map((drive) => drive.owner);
  const uniqOwners = makeUniqUsers(owners);

  const onApplyFilters = () => {
    let queryId = "";
    
    if (user !== "") {
      const { _id } = uniqOwners.find(owner => owner.name === user);
      queryId = `&userId=${_id}`;
    }
    
    const queryDate = `&dateFrom=${setDateForQuerySearch(
      dateFrom
    )}&dateTill=${setDateForQuerySearch(dateTill)}`;

    let queryFilters = "";
    
    queryFilters = queryFilters.concat(queryDate);

    if (queryId) queryFilters = queryFilters.concat(queryId);
    
    onSetQuery(queryFilters);
    toggleModal();
  }

  // useEffect(() => {
  //   console.log('selected user ==> ', user)
  // },[user]);

  const handleChange = (event) => {
    setUser(event.target.value);
  };

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
          <p>Choose user</p>
          <Select
            value={user}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">
              <em>All users</em>
            </MenuItem>
            {uniqOwners.map((owner) => (
              <MenuItem value={owner.name} key={owner._id}>
                {owner.name}
              </MenuItem>
            ))}
          </Select>
          <ApplyFilterBtn type="button" onClick={onApplyFilters}>
            Apply filter
          </ApplyFilterBtn>
        </LocalizationProvider>
      </FiltersMenuWrap>
    );
};

FiltersMenu.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  onSetQuery: PropTypes.func.isRequired,
};

export default FiltersMenu;