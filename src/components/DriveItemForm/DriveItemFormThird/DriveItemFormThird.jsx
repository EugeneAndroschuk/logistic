import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addDrive, updateDrive } from "../../../redux/drives/drivesThunks";
import ModalPort from "../../../shared/components/ModalPort/ModalPort";
import ModalClientsList from "../../../shared/components/ModalClientsList/ModalClientsList";
import ModalDeleteAlert from "../../../shared/components/ModalDeleteAlert/ModalDeleteAlert";
import {
  FormWrap,
  FormListWrap,
  FormItem,
  Label,
  Input,
  ClientListBtn,
    BtnWrap,
  GoBackBtn,
  SubmitFormBtn,
  DeleteBtn,
} from "./DriveItemFormThird.styled";

const DriveItemFormThird = ({
  isEditEnabled,
  drive,
  driveId,
  onSetBackStep,
}) => {
  const [isModalClientsListOpen, setIsModalClientsListOpen] = useState(false);
    const [isModalDeleteAlertOpen, setIsModalDeleteAlertOpen] = useState(false);
    const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
      setValue,
    getValues,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (drive) {
      setValue("carrierCost", drive.carrierCost);
      setValue("clientCost", drive.clientCost);
      setValue("clientVat", drive.clientVat);
      setValue("clientTotalCost", drive.clientTotalCost);
    }
  }, [drive, setValue]);

    const onFormSubmit = (data) => {
    //   console.log(drive);
    if (driveId) dispatch(updateDrive({ ...drive, ...data, driveId }));
    else dispatch(addDrive({...drive, ...data}));
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
    
    const onHandleBackBtn = (e) => {
        e.preventDefault();
        const values = getValues();
        onSetBackStep(values);
    }

  return (
    <FormWrap>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <FormListWrap>
          <ul>
            <FormItem>
              <Label>Carrier cost</Label>
              <Input
                {...register("carrierCost", { required: true })}
                disabled={!isEditEnabled ? driveId : false}
                $color={
                  (isEditEnabled && driveId) || (!isEditEnabled && !driveId)
                    ? "black"
                    : "white"
                }
              />
            </FormItem>
            <FormItem>
              <Label>Client cost</Label>
              <Input
                {...register("clientCost", { required: true })}
                disabled={!isEditEnabled ? driveId : false}
                $color={
                  (isEditEnabled && driveId) || (!isEditEnabled && !driveId)
                    ? "black"
                    : "white"
                }
              />
            </FormItem>
            <FormItem>
              <Label>Client VAT</Label>
              <Input
                {...register("clientVat", { required: true })}
                disabled={!isEditEnabled ? driveId : false}
                $color={
                  (isEditEnabled && driveId) || (!isEditEnabled && !driveId)
                    ? "black"
                    : "white"
                }
              />
            </FormItem>
            <FormItem>
              <Label>Client total cost</Label>
              <Input
                {...register("clientTotalCost", {
                  required: true,
                  validate: (value) => !isNaN(value) || "must be a number",
                })}
                disabled={!isEditEnabled ? driveId : false}
                $color={
                  (isEditEnabled && driveId) || (!isEditEnabled && !driveId)
                    ? "black"
                    : "white"
                }
              />
              {errors.clientTotalCost && (
                <p>{errors.clientTotalCost.message}</p>
              )}
            </FormItem>
          </ul>
        </FormListWrap>

        <BtnWrap>
          <GoBackBtn onClick={onHandleBackBtn}>Back</GoBackBtn>
          <SubmitFormBtn type="submit">Save</SubmitFormBtn>

          {/* <DeleteBtn
            id="deletedrivebtn"
            type="button"
            onClick={() => setIsModalDeleteAlertOpen(true)}
          >
            Delete
          </DeleteBtn> */}
        </BtnWrap>
      </form>

      {/* {isModalClientsListOpen && (
        <ModalPort toggleModal={toggleModalClientsList}>
          <ModalClientsList
            toggleModal={toggleModalClientsList}
            onSelectClient={onSelectClient}
          />
        </ModalPort>
      )} */}

      {/* {isModalDeleteAlertOpen && (
        <ModalPort toggleModal={toggleModalDeleteAlert}>
          <ModalDeleteAlert toggleModal={toggleModalDeleteAlert} id={driveId} />
        </ModalPort>
      )} */}
    </FormWrap>
  );
};

DriveItemFormThird.propTypes = {
  isEditEnabled: PropTypes.bool.isRequired,
  drive: PropTypes.object.isRequired,
  driveId: PropTypes.string,
  onSetBackStep: PropTypes.func.isRequired,
};

export default DriveItemFormThird;
