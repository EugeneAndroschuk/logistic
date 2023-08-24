
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
} from "./DriveItemFormSecond.styled";

const DriveItemFormSecond = ({
  isEditEnabled,
  drive,
  driveId,
  onSetSecondStep,
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
    // if (drive) {
    //   setValue("shipmentDate", dayjs(drive.shipmentDate));
    //   setValue("unloadingDate", dayjs(drive.unloadingDate));
    //   setValue("carrier", drive.carrier);
    //   setValue("client", drive.client);
    //   setValue("departurePoint", drive.departurePoint);
    //   setValue("arrivalPoint", drive.arrivalPoint);
    //   setValue("vehicleData", drive.vehicleData);
    // }
  }, [drive, setValue]);

  const onFormSubmit = (data) => {
    onSetSecondStep({ ...data });
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
            <Label>Driver name</Label>
            <Input
              {...register("driverName", { required: true })}
              disabled={!isEditEnabled ? driveId : false}
              $color={
                (isEditEnabled && driveId) || (!isEditEnabled && !driveId)
                  ? "black"
                  : "white"
              }
            />
          </FormItem>
          <FormItem>
            <Label>Driver phone</Label>
            <Input
              {...register("driverPhone", { required: true })}
              disabled={!isEditEnabled ? driveId : false}
              $color={
                (isEditEnabled && driveId) || (!isEditEnabled && !driveId)
                  ? "black"
                  : "white"
              }
            />
          </FormItem>
          <FormItem>
            <Label>Truck number</Label>
            <Input
              {...register("truckNumber", { required: true })}
              disabled={!isEditEnabled ? driveId : false}
              $color={
                (isEditEnabled && driveId) || (!isEditEnabled && !driveId)
                  ? "black"
                  : "white"
              }
            />
          </FormItem>
          <FormItem>
            <Label>Crossing point</Label>
            <Input
              {...register("crossingPoint", { required: true })}
              disabled={!isEditEnabled ? driveId : false}
              $color={
                (isEditEnabled && driveId) || (!isEditEnabled && !driveId)
                  ? "black"
                  : "white"
              }
            />
          </FormItem>
          <FormItem>
            <Label>CMR data</Label>
            <Input
              {...register("cmrData", { required: true })}
              disabled={!isEditEnabled ? driveId : false}
              $color={
                (isEditEnabled && driveId) || (!isEditEnabled && !driveId)
                  ? "black"
                  : "white"
              }
            />
          </FormItem>
          <FormItem>
            <Label>Cargo weight</Label>
            <Input
              {...register("cargoWeight", { required: true })}
              disabled={!isEditEnabled ? driveId : false}
              $color={
                (isEditEnabled && driveId) || (!isEditEnabled && !driveId)
                  ? "black"
                  : "white"
              }
            />
          </FormItem>
          <FormItem>
            <Label>Goods description</Label>
            <Input
              {...register("goodsDescription", { required: true })}
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
          <button>Back</button>
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

DriveItemFormSecond.propTypes = {
  isEditEnabled: PropTypes.bool.isRequired,
  drive: PropTypes.object.isRequired,
  driveId: PropTypes.string.isRequired,
  onSetSecondStep: PropTypes.func.isRequired,
};

export default DriveItemFormSecond;