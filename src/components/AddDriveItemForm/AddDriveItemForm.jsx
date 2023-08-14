import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  getUpdateSuccessfulSelector,
} from "../../redux/drives/drivesSelectors";
import { setUpdateSuccessful } from "../../redux/drives/drivesSlice";
import { addDrive } from "../../redux/drives/drivesThunks";
import { setDateForBackend } from "../../utils/dateFormatter";

const AddDriveItemForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const isUpdateSuccessful = useSelector(getUpdateSuccessfulSelector);
  const navigate = useNavigate();

  useEffect(() => {
    if (isUpdateSuccessful) {
      navigate("/");
      dispatch(setUpdateSuccessful(false));
    }
  }, [dispatch, isUpdateSuccessful, navigate]);

  const onFormSubmit = (data) => {
    // console.log(data.shipmentDate);
    // console.log(getDateFromString(data.shipmentDate));
   
    dispatch(
      addDrive({
        ...data,
        shipmentDate: setDateForBackend(data.shipmentDate),
        unloadingDate: setDateForBackend(data.unloadingDate),
      })
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <ul>
          <li>
            <label>Shipment date</label>
            <input {...register("shipmentDate", { required: true })} />
          </li>
          <li>
            <label>Unloading date</label>
            <input {...register("unloadingDate", { required: true })} />
          </li>
          <li>
            <label>Carrier</label>
            <input {...register("carrier", { required: true })} />
          </li>
          <li>
            <label>Client</label>
            <input {...register("client", { required: true })} />
          </li>
          <li>
            <label>Departure point</label>
            <input {...register("departurePoint", { required: true })} />
          </li>
          <li>
            <label>Arrival point</label>
            <input {...register("arrivalPoint", { required: true })} />
          </li>
          <li>
            <label>Vehicle data</label>
            <input {...register("vehicleData", { required: true })} />
          </li>
        </ul>
        <button type="submit">Add drive</button>
      </form>
    </div>
  );
};

// DriveItemForm.propTypes = {
//   drive: PropTypes.object.isRequired,
// };

export default AddDriveItemForm;
