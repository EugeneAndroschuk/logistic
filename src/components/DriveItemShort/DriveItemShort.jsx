import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import deleteImg from "../../assets/icons/delete-png.png";
import { deleteDrive } from "../../redux/drives/drivesThunks";
import { getDateFromUtc } from "../../utils/dateFormatter";
import {
  DriveWrap,
  DriveLinkWrap,
  DriveList,
  DriveItem,
  DriveName,
  DropMenu,
  DeleteBtn,
} from "./DriveItemShort.styled";

const Drive = ({ drive }) => {
  const dispatch = useDispatch();

  const onPressDelete = () => {
    dispatch(deleteDrive(drive._id));
  };

  return (
    <DriveWrap>
      <DriveLinkWrap to={`/drives/${drive._id}`}>
        <DriveList>
          <DriveItem>
            <DriveName>{getDateFromUtc(drive.shipmentDate)}</DriveName>
          </DriveItem>
          <DriveItem>
            <DriveName>{getDateFromUtc(drive.unloadingDate)}</DriveName>
          </DriveItem>
          <DriveItem>
            <DriveName>{drive.carrier}</DriveName>
          </DriveItem>
          <DriveItem>
            <DriveName>{drive.client}</DriveName>
          </DriveItem>
          <DriveItem>
            <DriveName>{drive.departurePoint}</DriveName>
          </DriveItem>
          <DriveItem>
            <DriveName>{drive.arrivalPoint}</DriveName>
          </DriveItem>
          <DriveItem>
            <DriveName>{drive.vehicleData}</DriveName>
          </DriveItem>
          <DriveItem>
            <DriveName>{drive.owner.name}</DriveName>
          </DriveItem>
        </DriveList>
      </DriveLinkWrap>
      <DropMenu>
        <DeleteBtn src={deleteImg} onClick={onPressDelete} />
      </DropMenu>
    </DriveWrap>
  );
};

Drive.propTypes = {
  drive: PropTypes.object.isRequired,
};

export default Drive;
