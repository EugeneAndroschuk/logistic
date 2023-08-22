import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { getDateFromUtc, setDateForBackend } from "../../utils/dateFormatter";
import {
  getAllDrivesSelector,
  getUpdateSuccessfulSelector,
} from "../../redux/drives/drivesSelectors";
import { setUpdateSuccessful } from "../../redux/drives/drivesSlice";
import { getUserIsLoggedIn } from "../../redux/auth/authSelectors";
import {
  getDriveById,
  updateDrive,
  addDrive,
} from "../../redux/drives/drivesThunks";
import { setDateForQuerySearch } from "../../utils/dateFormatter";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ModalPort from "../../shared/components/ModalPort/ModalPort";
import ModalClientsList from "../../shared/components/ModalClientsList/ModalClientsList";
import {
  FormWrap,
  FormName,
  FormItem,
  Label,
  Input,
  ClientListBtn,
  SubmitFormBtn,
  EditBtnWrap,
  EditBtn,
} from "./DriveItemForm.styled";

const DriveItemForm = () => {
  const [isEditEnabled, setIsEditEnabled] = useState(false);
  const [isFormSubmited, setIsFormSubmited] = useState(false);
  const [isModalClientsListOpen, setIsModalClientsListOpen] = useState(false);
  const [dateFrom, setDateFrom] = useState(dayjs(new Date()));
  const { driveId } = useParams();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    control,
    setValue,
    // formState: { errors },
  } = useForm();
  const drives = useSelector(getAllDrivesSelector);
  const isUpdateSuccessful = useSelector(getUpdateSuccessfulSelector);
  const isLoggedIn = useSelector(getUserIsLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (isUpdateSuccessful) {
      navigate("/");
      dispatch(setUpdateSuccessful(false));
    }
  }, [dispatch, isUpdateSuccessful, navigate]);

  useEffect(() => {
    if (isLoggedIn && driveId) dispatch(getDriveById(driveId));
  }, [dispatch, driveId, isLoggedIn]);

  useEffect(() => {
    if (drives[0]) {
      // setValue("shipmentDate", getDateFromUtc(drives[0].shipmentDate));
      // setValue("unloadingDate", getDateFromUtc(drives[0].unloadingDate));

      setValue("shipmentDate", dayjs(drives[0].shipmentDate));
      setValue("unloadingDate", dayjs(drives[0].unloadingDate));
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
          shipmentDate: setDateForQuerySearch(data.shipmentDate),
          unloadingDate: setDateForQuerySearch(data.unloadingDate),
          carrier: data.carrier,
          client: data.client,
          departurePoint: data.departurePoint,
          arrivalPoint: data.arrivalPoint,
          vehicleData: data.vehicleData,
        })
      );
    else
      dispatch(
        addDrive({
          ...data,
          shipmentDate: setDateForQuerySearch(data.shipmentDate),
          unloadingDate: setDateForQuerySearch(data.unloadingDate),
        })
      );
    // console.log(data.shipmentDate);
    // console.log(setDateForQuerySearch(data.shipmentDate));
  };

  const toggleModal = () => {
    setIsModalClientsListOpen(!isModalClientsListOpen);
  };

  const onSelectClient = (name) => {
    setValue("client", name);
  };

  return (
    <FormWrap>
      <FormName>Drive details</FormName>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <ul>
          <FormItem>
            <Label>Shipment date</Label>
            <Controller
              name="shipmentDate"
              control={control}
              render={({ field: { onChange, value } }) => (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    value={dayjs(value)}
                    onChange={onChange}
                    format="DD.MM.YYYY"
                    sx={{
                      width: "600px",
                      backgroundColor:
                        (isEditEnabled && driveId) ||
                        (!isEditEnabled && !driveId)
                          ? "white"
                          : "rgba(239, 239, 239, 0.3)",
                      borderRadius: "10px",
                      "& input": {
                        color:
                          (isEditEnabled && driveId) ||
                          (!isEditEnabled && !driveId)
                            ? "black"
                            : "white",
                        padding: "8px",
                        fontSize: "13px",
                      },
                      "& svg": {
                        color:
                          (isEditEnabled && driveId) ||
                          (!isEditEnabled && !driveId)
                            ? "black"
                            : "white",
                      },
                    }}
                  />
                </LocalizationProvider>
              )}
            />
          </FormItem>
          <FormItem>
            <Label>Unloading date</Label>

            <Controller
              name="unloadingDate"
              control={control}
              render={({ field: { onChange, value } }) => (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    value={dayjs(value)}
                    onChange={onChange}
                    format="DD.MM.YYYY"
                    sx={{
                      width: "600px",
                      backgroundColor:
                        (isEditEnabled && driveId) ||
                        (!isEditEnabled && !driveId)
                          ? "white"
                          : "rgba(239, 239, 239, 0.3)",
                      borderRadius: "10px",
                      "& input": {
                        color:
                          (isEditEnabled && driveId) ||
                          (!isEditEnabled && !driveId)
                            ? "black"
                            : "white",
                        padding: "8px",
                        fontSize: "13px",
                      },
                      "& svg": {
                        color:
                          (isEditEnabled && driveId) ||
                          (!isEditEnabled && !driveId)
                            ? "black"
                            : "white",
                      },
                    }}
                  />
                </LocalizationProvider>
              )}
            />
          </FormItem>
          <FormItem>
            <Label>Carrier</Label>
            <Input
              {...register("carrier", { required: true })}
              disabled={!isEditEnabled ? driveId : false}
              $color={
                (isEditEnabled && driveId) || (!isEditEnabled && !driveId)
                  ? "black"
                  : "white"
              }
            />
          </FormItem>
          <FormItem>
            <Label>Client</Label>
            <Input
              {...register("client", { required: true })}
              disabled={true}
              // disabled={!isEditEnabled ? driveId : false}
              $bgdcolor={
                (isEditEnabled && driveId) || (!isEditEnabled && !driveId)
                  ? "white"
                  : "rgba(239, 239, 239, 0.3)"
              }
              $color={
                (isEditEnabled && driveId) || (!isEditEnabled && !driveId)
                  ? "black"
                  : "white"
              }
            />
            {((isEditEnabled && driveId) || (!isEditEnabled && !driveId)) && (
              <ClientListBtn type="button" onClick={() => toggleModal()}>
                <MoreHorizIcon sx={{ color: "black", borderRadius: "5px" }} />
              </ClientListBtn>
            )}
          </FormItem>
          <FormItem>
            <Label>Departure point</Label>
            <Input
              {...register("departurePoint", { required: true })}
              disabled={!isEditEnabled ? driveId : false}
              $color={
                (isEditEnabled && driveId) || (!isEditEnabled && !driveId)
                  ? "black"
                  : "white"
              }
            />
          </FormItem>
          <FormItem>
            <Label>Arrival point</Label>
            <Input
              {...register("arrivalPoint", { required: true })}
              disabled={!isEditEnabled ? driveId : false}
              $color={
                (isEditEnabled && driveId) || (!isEditEnabled && !driveId)
                  ? "black"
                  : "white"
              }
            />
          </FormItem>
          <FormItem>
            <Label>Vehicle data</Label>
            <Input
              {...register("vehicleData", { required: true })}
              disabled={!isEditEnabled ? driveId : false}
              $color={
                (isEditEnabled && driveId) || (!isEditEnabled && !driveId)
                  ? "black"
                  : "white"
              }
            />
          </FormItem>
        </ul>

        <SubmitFormBtn type="submit">Save</SubmitFormBtn>
      </form>

      {!isEditEnabled && driveId && (
        <EditBtnWrap>
          <EditBtn
            type="button"
            onClick={() => setIsEditEnabled((state) => !state)}
          >
            <BorderColorIcon sx={{ color: "white" }} />
          </EditBtn>
        </EditBtnWrap>
      )}

      {isModalClientsListOpen && (
        <ModalPort toggleModal={toggleModal}>
          <ModalClientsList
            toggleModal={toggleModal}
            onSelectClient={onSelectClient}
          />
        </ModalPort>
      )}
    </FormWrap>
  );
};

// DriveItemForm.propTypes = {
//   drive: PropTypes.object.isRequired,
// };

export default DriveItemForm;
