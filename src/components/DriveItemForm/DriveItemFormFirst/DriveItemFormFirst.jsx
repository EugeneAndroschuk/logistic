import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { setDateForQuerySearch } from "../../../utils/dateFormatter";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import ModalPort from "../../../shared/components/ModalPort/ModalPort";
import ModalClientsList from "../../../shared/components/ModalClientsList/ModalClientsList";
import ModalDeleteAlert from "../../../shared/components/ModalDeleteAlert/ModalDeleteAlert";
import {
  FormWrap,
  FormItem,
  Label,
  Input,
  ClientListBtn,
  BtnWrap,
  SubmitFormBtn,
  DeleteBtn,
} from "./DriveItemFormFirst.styled";

const DriveItemFormFirst = ({
  isEditEnabled,
  drive,
  driveId,
  onSetFirstStep,
}) => {
  const [isModalClientsListOpen, setIsModalClientsListOpen] = useState(false);
  const [isModalDeleteAlertOpen, setIsModalDeleteAlertOpen] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    setValue,
    // formState: { errors },
  } = useForm();

  useEffect(() => {
    if (drive) {
      setValue("shipmentDate", dayjs(drive.shipmentDate));
      setValue("unloadingDate", dayjs(drive.unloadingDate));
      setValue("carrier", drive.carrier);
      setValue("client", drive.client);
      setValue("departurePoint", drive.departurePoint);
      setValue("arrivalPoint", drive.arrivalPoint);
      setValue("vehicleData", drive.vehicleData);
    }
  }, [drive, setValue]);

  const onFormSubmit = (data) => {
    onSetFirstStep({
      ...data,
      shipmentDate: setDateForQuerySearch(data.shipmentDate),
      unloadingDate: setDateForQuerySearch(data.unloadingDate),
    });
  };

  const toggleModalClientsList = () => {
    setIsModalClientsListOpen(!isModalClientsListOpen);
    document.getElementById("clientlistbtn").blur();
  };

  const toggleModalDeleteAlert = () => {
    setIsModalDeleteAlertOpen(!isModalDeleteAlertOpen);
    document.getElementById("deletedrivebtn").blur();
  };

  const onSelectClient = (name) => {
    setValue("client", name);
  };

  return (
    <FormWrap>
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
                    disableFuture
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
                    disableFuture
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
              <ClientListBtn
                id="clientlistbtn"
                type="button"
                onClick={() => toggleModalClientsList()}
              >
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

        <BtnWrap>
          <SubmitFormBtn type="submit">Next</SubmitFormBtn>

          {/* <DeleteBtn
            id="deletedrivebtn"
            type="button"
            onClick={() => setIsModalDeleteAlertOpen(true)}
          >
            Delete
          </DeleteBtn> */}
        </BtnWrap>
      </form>

      {isModalClientsListOpen && (
        <ModalPort toggleModal={toggleModalClientsList}>
          <ModalClientsList
            toggleModal={toggleModalClientsList}
            onSelectClient={onSelectClient}
          />
        </ModalPort>
      )}

      {isModalDeleteAlertOpen && (
        <ModalPort toggleModal={toggleModalDeleteAlert}>
          <ModalDeleteAlert toggleModal={toggleModalDeleteAlert} id={driveId} />
        </ModalPort>
      )}
    </FormWrap>
  );
};

DriveItemFormFirst.propTypes = {
  isEditEnabled: PropTypes.bool.isRequired,
  drive: PropTypes.object.isRequired,
  driveId: PropTypes.string,
  onSetFirstStep: PropTypes.func.isRequired,
};

export default DriveItemFormFirst;
