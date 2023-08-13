import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteDrive } from "../../redux/drives/drivesThunks";
import getFormattedDate from "../../utils/dateFormatter";
import { DriveWrap, DriveLinkWrap, DeleteBtn } from "./DriveItemShort.styled";

const Drive = ({ drive }) => {
  const dispatch = useDispatch();

  const onPressDelete = () => {
    // console.log(drive._id)
    dispatch(deleteDrive(drive._id));
  };

  return (
    <DriveWrap>
      <DriveLinkWrap to={`/drives/${drive._id}`}>
        <div>{getFormattedDate(drive.shipmentDate)}</div>
        <div>{getFormattedDate(drive.unloadingDate)}</div>
        <div>{drive.carrier}</div>
        <div>{drive.client}</div>
        <div>{drive.departurePoint}</div>
        <div>{drive.arrivalPoint}</div>
        <div>{drive.vehicleData}</div>
        <div>{drive.owner.name}</div>
      </DriveLinkWrap>
      <DeleteBtn type="button" onClick={onPressDelete}>
        ==DELETE==
      </DeleteBtn>
    </DriveWrap>
  );
};

Drive.propTypes = {
  drive: PropTypes.object.isRequired,
};

export default Drive;
