import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import deleteImg from "../../assets/icons/delete-png.png";
import { deleteDrive } from "../../redux/drives/drivesThunks";
import cutItemNameLength from "../../utils/cutItemNameLength";
import { getDateFromUtc } from "../../utils/dateFormatter";
import {
  DriveWrap,
  DriveLinkWrap,
  DriveList,
  DriveItem,
  DriveName,
} from "./DriveItemShort.styled";

const Drive = ({ drive }) => {
  // const dispatch = useDispatch();

  // const onPressDelete = () => {
  //   dispatch(deleteDrive(drive._id));
  // };

  return (
    <DriveWrap>
      <DriveLinkWrap to={`/drives/${drive._id}`}>
        <DriveList>
          <DriveItem>
            <DriveName>{getDateFromUtc(drive.shipmentDate, 15)}</DriveName>
          </DriveItem>
          <DriveItem>
            <DriveName>{getDateFromUtc(drive.unloadingDate, 15)}</DriveName>
          </DriveItem>
          <DriveItem>
            <DriveName>{cutItemNameLength(drive.carrier, 15)}</DriveName>
          </DriveItem>
          <DriveItem>
            <DriveName>{cutItemNameLength(drive.client, 15)}</DriveName>
          </DriveItem>
          <DriveItem>
            <DriveName>
              {cutItemNameLength(drive.departurePoint.name, 15)}
            </DriveName>
          </DriveItem>
          <DriveItem>
            <DriveName>{cutItemNameLength(drive.arrivalPoint.name, 15)}</DriveName>
          </DriveItem>
          <DriveItem>
            <DriveName>{cutItemNameLength(drive.vehicleData, 15)}</DriveName>
          </DriveItem>
          <DriveItem>
            <DriveName>{cutItemNameLength(drive.owner.name, 15)}</DriveName>
          </DriveItem>
        </DriveList>
      </DriveLinkWrap>
      {/* <DropMenu>
        <DeleteBtn src={deleteImg} onClick={onPressDelete} />
      </DropMenu> */}
    </DriveWrap>
  );
};

Drive.propTypes = {
  drive: PropTypes.object.isRequired,
};

export default Drive;
