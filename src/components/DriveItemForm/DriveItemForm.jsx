import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { getDateFromUtc, setDateForBackend } from "../../utils/dateFormatter";
import {
  getAllDrivesSelector,
  getUpdateSuccessfulSelector,
} from "../../redux/drives/drivesSelectors";
import { setUpdateSuccessful } from "../../redux/drives/drivesSlice";
import { getUserIsLoggedIn } from "../../redux/auth/authSelectors";
import { getDriveById, updateDrive } from "../../redux/drives/drivesThunks";

const DriveItemForm = () => {
  const [isEditEnabled, setIsEditEnabled] = useState(false);
  const [isFormSubmited, setIsFormSubmited] = useState(false);
  const { driveId } = useParams();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const drives = useSelector(getAllDrivesSelector);
  const isUpdateSuccessful = useSelector(getUpdateSuccessfulSelector);
  const isLoggedIn = useSelector(getUserIsLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (isUpdateSuccessful) {navigate("/");
    dispatch(setUpdateSuccessful(false));}
  }, [dispatch, isUpdateSuccessful, navigate]);

  useEffect(() => {
    if (isLoggedIn) dispatch(getDriveById(driveId));
  }, [dispatch, driveId, isLoggedIn]);

  useEffect(() => {
    if (drives[0]) {
      setValue("shipmentDate", getDateFromUtc(drives[0].shipmentDate));
      setValue("unloadingDate", getDateFromUtc(drives[0].unloadingDate));
      setValue("carrier", drives[0].carrier);
      setValue("client", drives[0].client);
      setValue("departurePoint", drives[0].departurePoint);
      setValue("arrivalPoint", drives[0].arrivalPoint);
      setValue("vehicleData", drives[0].vehicleData);
    }
  }, [drives, setValue]);

  const onFormSubmit = (data) => {
    dispatch(
      updateDrive({
        driveId,
        shipmentDate: setDateForBackend(data.shipmentDate),
        unloadingDate: setDateForBackend(data.unloadingDate),
        carrier: data.carrier,
        client: data.client,
        departurePoint: data.departurePoint,
        arrivalPoint: data.arrivalPoint,
        vehicleData: data.vehicleData,
      })
    );
    setIsFormSubmited(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <ul>
          <li>
            <label>Shipment date</label>
            <input
              {...register("shipmentDate", { required: true })}
              disabled={!isEditEnabled}
            />
          </li>
          <li>
            <label>Unloading date</label>
            <input
              {...register("unloadingDate", { required: true })}
              disabled={!isEditEnabled}
            />
          </li>
          <li>
            <label>Carrier</label>
            <input
              {...register("carrier", { required: true })}
              disabled={!isEditEnabled}
            />
          </li>
          <li>
            <label>Client</label>
            <input
              {...register("client", { required: true })}
              disabled={!isEditEnabled}
            />
          </li>
          <li>
            <label>Departure point</label>
            <input
              {...register("departurePoint", { required: true })}
              disabled={!isEditEnabled}
            />
          </li>
          <li>
            <label>Arrival point</label>
            <input
              {...register("arrivalPoint", { required: true })}
              disabled={!isEditEnabled}
            />
          </li>
          <li>
            <label>Vehicle data</label>
            <input
              {...register("vehicleData", { required: true })}
              disabled={!isEditEnabled}
            />
          </li>
        </ul>
        <button
          type="button"
          onClick={() => setIsEditEnabled((state) => !state)}
        >
          {isEditEnabled ? "Save" : "Edit"}
        </button>
        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
};

// DriveItemForm.propTypes = {
//   drive: PropTypes.object.isRequired,
// };

export default DriveItemForm;
