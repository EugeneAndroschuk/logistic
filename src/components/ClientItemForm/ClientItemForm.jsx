import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { getUserIsLoggedIn } from "../../redux/auth/authSelectors";
import { getAllClientsSelector, getUpdateSuccessfulSelector } from "../../redux/clients/clientsSelectors";
import { setUpdateSuccessful } from "../../redux/clients/clientsSlice";
import {
  getClientById,
  updateClient,
  addClient,
} from "../../redux/clients/clientsThunks";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import ModalPort from "../../shared/components/ModalPort/ModalPort";
import ModalDeleteAlert from "../../shared/components/ModalDeleteAlert/ModalDeleteAlert";
import {
  FormWrap,
  FormName,
  FormItem,
  Label,
  Input,
  SubmitFormBtn,
  EditBtnWrap,
  EditBtn,
  BtnWrap,
  DeleteBtn,
} from "./ClientItemForm.styled";

const ClientItemForm = () => {
  const [isEditEnabled, setIsEditEnabled] = useState(false);
const [isModalDeleteAlertOpen, setIsModalDeleteAlertOpen] = useState(false);
  const { clientId } = useParams();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    // formState: { errors },
  } = useForm();
  const clients = useSelector(getAllClientsSelector);
  const isUpdateSuccessful = useSelector(getUpdateSuccessfulSelector);
  const isLoggedIn = useSelector(getUserIsLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (isUpdateSuccessful) {
      navigate("/clients");
      dispatch(setUpdateSuccessful(false));
    }
  }, [dispatch, isUpdateSuccessful, navigate]);

  useEffect(() => {
    if (isLoggedIn && clientId) dispatch(getClientById(clientId));
  }, [clientId, dispatch, isLoggedIn]);

  useEffect(() => {
    if (clients[0]) {
      setValue("code", clients[0].code);
      setValue("name", clients[0].name);
      setValue("comments", clients[0].comments);
    }
  }, [clients, setValue]);

  const onFormSubmit = (data) => {
      if (clientId)
          dispatch(
              updateClient({
                  clientId,
                  code: data.code,
                  name: data.name,
                  comments: data.comments,
              })
          );
      else
          dispatch(addClient(data));
    // setIsFormSubmited(true);
  };

   const toggleModalDeleteAlert = () => {
     setIsModalDeleteAlertOpen(!isModalDeleteAlertOpen);
     document.getElementById("deletedrivebtn").blur();
   };

  return (
    <FormWrap>
      <FormName>Client details</FormName>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <ul>
          <FormItem>
            <Label>Code</Label>
            <Input
              {...register("code", { required: true })}
              disabled={!isEditEnabled ? clientId : false}
              color={
                (isEditEnabled && clientId) || (!isEditEnabled && !clientId)
                  ? "black"
                  : "white"
              }
            />
          </FormItem>
          <FormItem>
            <Label>Name</Label>
            <Input
              {...register("name", { required: true })}
              disabled={!isEditEnabled ? clientId : false}
              color={
                (isEditEnabled && clientId) || (!isEditEnabled && !clientId)
                  ? "black"
                  : "white"
              }
            />
          </FormItem>
          <FormItem>
            <Label>Comments</Label>
            <Input
              {...register("comments", { required: true })}
              disabled={!isEditEnabled ? clientId : false}
              color={
                (isEditEnabled && clientId) || (!isEditEnabled && !clientId)
                  ? "black"
                  : "white"
              }
            />
          </FormItem>
        </ul>

        <BtnWrap>
          <DeleteBtn
            id="deletedrivebtn"
            type="button"
            onClick={() => setIsModalDeleteAlertOpen(true)}
          >
            Delete
          </DeleteBtn>
          <SubmitFormBtn type="submit">Save</SubmitFormBtn>
        </BtnWrap>
      </form>

      {!isEditEnabled && clientId && (
        <EditBtnWrap>
          <EditBtn
            type="button"
            onClick={() => setIsEditEnabled((state) => !state)}
          >
            <BorderColorIcon sx={{ color: "white" }} />
          </EditBtn>
        </EditBtnWrap>
      )}

      {isModalDeleteAlertOpen && (
        <ModalPort toggleModal={toggleModalDeleteAlert}>
          <ModalDeleteAlert
            toggleModal={toggleModalDeleteAlert}
            itemId={{ clientId, driveId: null }}
          />
        </ModalPort>
      )}
    </FormWrap>
  );
};

// DriveItemForm.propTypes = {
//   drive: PropTypes.object.isRequired,
// };

export default ClientItemForm;
