import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { setDateForQuerySearch } from "../../../utils/dateFormatter";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import RoomIcon from "@mui/icons-material/Room";
import isObjectEmpty from "../../../utils/emptyObjectTest";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import ModalPort from "../../../shared/components/ModalPort/ModalPort";
import ModalClientsList from "../../../shared/components/ModalClientsList/ModalClientsList";
import ModalDeleteAlert from "../../../shared/components/ModalDeleteAlert/ModalDeleteAlert";
import ModalMap from "../../../shared/components/ModalMap/ModalMap";
import ModalFindCity from "../../../shared/components/ModalFindCity/ModalFindCity";
import {
  FormWrap,
  FormListWrap,
  FormItem,
  Label,
  Input,
  ClientListBtn,
  FindCityBtn,
  BtnWrap,
  SubmitFormBtn,
  DeleteBtn,
  OpenMapWrap,
} from "./DriveItemFormFirst.styled";

const DriveItemFormFirst = ({
  isEditEnabled,
  drive,
  driveId,
  onSetFirstStep,
}) => {
  const [isModalClientsListOpen, setIsModalClientsListOpen] = useState(false);
  const [isModalDeleteAlertOpen, setIsModalDeleteAlertOpen] = useState(false);
  const [isModalMapOpen, setIsModalMapOpen] = useState(false);
  const [isModalFindCityDepartureOpen, setIsModaFindCityDepartureOpen] =
    useState(false);
  const [isModalFindCityArrivalOpen, setIsModaFindCityArrivalOpen] =
    useState(false);
  const [cityDepartureCoords, setCityDepartureCoords] = useState({
    lat: null,
    lng: null,
  });
  const {
    register,
    handleSubmit,
    control,
    setValue,
    // formState: { errors },
  } = useForm();

  useEffect(() => {
    if (!isObjectEmpty(drive)) {
      setValue("shipmentDate", dayjs(drive.shipmentDate));
      setValue("unloadingDate", dayjs(drive.unloadingDate));
      setValue("carrier", drive.carrier);
      setValue("client", drive.client);
      setValue("departurePoint", drive.departurePoint.name);
      setValue("arrivalPoint", drive.arrivalPoint);
      setValue("vehicleData", drive.vehicleData);

      setCityDepartureCoords({
        lat: drive.departurePoint.lat,
        lng: drive.departurePoint.lng,
      });
    } else {
      setValue("shipmentDate", dayjs(new Date()));
      setValue("unloadingDate", dayjs(new Date()));
    }
  }, [drive, setValue]);

  const onFormSubmit = (data) => {
    console.log(data);
    onSetFirstStep({
      ...data,
      shipmentDate: setDateForQuerySearch(data.shipmentDate),
      unloadingDate: setDateForQuerySearch(data.unloadingDate),
      departurePoint: {
        name: data.departurePoint,
        lat: cityDepartureCoords.lat,
        lng: cityDepartureCoords.lng,
      },
    });
  };

  const toggleModalClientsList = () => {
    setIsModalClientsListOpen(!isModalClientsListOpen);
    document.getElementById("clientlistbtn").blur();
  };

  const toggleModalMap = () => {
    setIsModalMapOpen(!isModalMapOpen);
  };

  const toggleModalFindCityDeparture = () => {
    setIsModaFindCityDepartureOpen(!isModalFindCityDepartureOpen);
    document.getElementById("findcitybtndep").blur();
  };

  const toggleModalFindCityArrival = () => {
    setIsModaFindCityArrivalOpen(!isModalFindCityArrivalOpen);
    document.getElementById("findcitybtnarr").blur();
  };

  const toggleModalDeleteAlert = () => {
    setIsModalDeleteAlertOpen(!isModalDeleteAlertOpen);
    document.getElementById("deletedrivebtn").blur();
  };

  const onSelectClient = (name) => {
    setValue("client", name);
  };

  const onFindCityDeparture = (city) => {
    setValue("departurePoint", `${city.name}, ${city.countrySign}`);
    setCityDepartureCoords({ lat: city.lat, lng: city.lon });
  };

  const onFindCityArrival = (city) => {
    setValue("arrivalPoint", `${city.name}, ${city.countrySign}`);
  };

  return (
    <FormWrap>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <FormListWrap>
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
              <FindCityBtn
                id="findcitybtndep"
                type="button"
                onClick={() => toggleModalFindCityDeparture()}
              >
                <MoreHorizIcon sx={{ color: "black", borderRadius: "5px" }} />
              </FindCityBtn>
              <OpenMapWrap onClick={toggleModalMap}>
                <RoomIcon sx={{ color: "rgb(219, 167, 22)" }} />
              </OpenMapWrap>
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
              <FindCityBtn
                id="findcitybtnarr"
                type="button"
                onClick={() => toggleModalFindCityArrival()}
              >
                <MoreHorizIcon sx={{ color: "black", borderRadius: "5px" }} />
              </FindCityBtn>
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
        </FormListWrap>

        <BtnWrap>
          <DeleteBtn
            id="deletedrivebtn"
            type="button"
            onClick={() => setIsModalDeleteAlertOpen(true)}
          >
            Delete
          </DeleteBtn>
          <SubmitFormBtn type="submit">Next</SubmitFormBtn>
        </BtnWrap>
      </form>

      {isModalMapOpen && (
        <ModalPort toggleModal={toggleModalMap}>
          <ModalMap toggleModal={toggleModalMap} center={cityDepartureCoords} />
        </ModalPort>
      )}

      {isModalFindCityDepartureOpen && (
        <ModalPort toggleModal={toggleModalFindCityDeparture}>
          <ModalFindCity
            toggleModal={toggleModalFindCityDeparture}
            onFindCity={onFindCityDeparture}
          />
        </ModalPort>
      )}

      {isModalFindCityArrivalOpen && (
        <ModalPort toggleModal={toggleModalFindCityArrival}>
          <ModalFindCity
            toggleModal={toggleModalFindCityArrival}
            onFindCity={onFindCityArrival}
          />
        </ModalPort>
      )}

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
          <ModalDeleteAlert
            toggleModal={toggleModalDeleteAlert}
            itemId={{ driveId, clientId: null }}
          />
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
