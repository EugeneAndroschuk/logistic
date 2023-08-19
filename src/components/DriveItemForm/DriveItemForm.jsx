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
import { getDriveById, updateDrive, addDrive } from "../../redux/drives/drivesThunks";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import {
  FormWrap,
  FormName,
  FormItem,
  Label,
  Input,
  SubmitFormBtn,
  EditBtnWrap,
  EditBtn,
} from "./DriveItemForm.styled";

const DriveItemForm = () => {
  const [isEditEnabled, setIsEditEnabled] = useState(false);
  const [isFormSubmited, setIsFormSubmited] = useState(false);
  const { driveId } = useParams();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    // formState: { errors },
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
    if (isLoggedIn && driveId) dispatch(getDriveById(driveId));
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
    if (driveId)
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
      ); else dispatch(
        addDrive({
          ...data,
          shipmentDate: setDateForBackend(data.shipmentDate),
          unloadingDate: setDateForBackend(data.unloadingDate),
        })
      );
    setIsFormSubmited(true);
  };

  return (
    <FormWrap>
      <FormName>Drive details</FormName>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <ul>
          <FormItem>
            <Label>Shipment date</Label>
            <Input
              {...register("shipmentDate", { required: true })}
              disabled={!isEditEnabled}
              color={isEditEnabled ? "black" : "white"}
            />
          </FormItem>
          <FormItem>
            <Label>Unloading date</Label>
            <Input
              {...register("unloadingDate", { required: true })}
              disabled={!isEditEnabled}
              color={isEditEnabled ? "black" : "white"}
            />
          </FormItem>
          <FormItem>
            <Label>Carrier</Label>
            <Input
              {...register("carrier", { required: true })}
              disabled={!isEditEnabled}
              color={isEditEnabled ? "black" : "white"}
            />
          </FormItem>
          <FormItem>
            <Label>Client</Label>
            <Input
              {...register("client", { required: true })}
              disabled={!isEditEnabled}
              color={isEditEnabled ? "black" : "white"}
            />
          </FormItem>
          <FormItem>
            <Label>Departure point</Label>
            <Input
              {...register("departurePoint", { required: true })}
              disabled={!isEditEnabled}
              color={isEditEnabled ? "black" : "white"}
            />
          </FormItem>
          <FormItem>
            <Label>Arrival point</Label>
            <Input
              {...register("arrivalPoint", { required: true })}
              disabled={!isEditEnabled}
              color={isEditEnabled ? "black" : "white"}
            />
          </FormItem>
          <FormItem>
            <Label>Vehicle data</Label>
            <Input
              {...register("vehicleData", { required: true })}
              disabled={!isEditEnabled}
              color={isEditEnabled ? "black" : "white"}
            />
          </FormItem>
        </ul>

        <SubmitFormBtn type="submit">Save</SubmitFormBtn>
      </form>

      {!isEditEnabled && (
        <EditBtnWrap>
          <EditBtn
            type="button"
            onClick={() => setIsEditEnabled((state) => !state)}
          >
            <BorderColorIcon sx={{ color: "white" }} />
          </EditBtn>
        </EditBtnWrap>
      )}
    </FormWrap>
  );
};

// DriveItemForm.propTypes = {
//   drive: PropTypes.object.isRequired,
// };

export default DriveItemForm;
