
import PropTypes from "prop-types";
import getFormattedDate from "../../utils/dateFormatter";
import { DriveWrap } from "./DriveItemShort.styled";

const Drive = ({ drive }) => {
  
    return (
      <DriveWrap>
        <div>{getFormattedDate(drive.shipmentDate)}</div>
        <div>{getFormattedDate(drive.unloadingDate)}</div>
        <div>{drive.carrier}</div>
        <div>{drive.client}</div>
        <div>{drive.departurePoint}</div>
        <div>{drive.arrivalPoint}</div>
        <div>{drive.vehicleData}</div>
      </DriveWrap>
    );
}

Drive.propTypes = {
  drive: PropTypes.object.isRequired,
};

export default Drive;