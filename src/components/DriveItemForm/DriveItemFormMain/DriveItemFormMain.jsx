import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
  getAllDrivesSelector,
  getUpdateSuccessfulSelector,
} from "../../../redux/drives/drivesSelectors";
import { setUpdateSuccessful } from "../../../redux/drives/drivesSlice";
import { getUserIsLoggedIn } from "../../../redux/auth/authSelectors";
import {
  getDriveById,
  updateDrive,
  addDrive,
} from "../../../redux/drives/drivesThunks";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import ModalPort from "../../../shared/components/ModalPort/ModalPort";
import ModalDeleteAlert from "../../../shared/components/ModalDeleteAlert/ModalDeleteAlert";
import DriveItemFormFirst from "../DriveItemFormFirst/DriveItemFormFirst";
import DriveItemFormSecond from "../DriveItemFormSecond/DriveItemFormSecond";
import DriveItemFormThird from "../DriveItemFormThird/DriveItemFormThird";
import {
  DriveFormWrap,
  DriveFormName,
  EditBtnWrap,
  EditBtn,
} from "./DriveItemFormMain.styled";

const DriveItemFormMain = () => {
  const [isEditEnabled, setIsEditEnabled] = useState(false);
  const [isModalDeleteAlertOpen, setIsModalDeleteAlertOpen] = useState(false);
  const [formData, setFormData] = useState({});
  const [step, setStep] = useState(1);
  const { driveId } = useParams();
  const dispatch = useDispatch();
  const { allDrives } = useSelector(getAllDrivesSelector);
  const isUpdateSuccessful = useSelector(getUpdateSuccessfulSelector);
  const isLoggedIn = useSelector(getUserIsLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (allDrives.length === 1) {
      const newObj = {};
      const keys = Object.keys(allDrives[0]);
      keys.forEach((key) => {
        if ((key !== "owner") && (key !== "_id")) newObj[`${key}`] = allDrives[0][`${key}`];
      });
      setFormData({ ...newObj });
    }

    // setFormData({ key: allDrives[0][`${key}`] })
  }, [allDrives]);

  useEffect(() => {
    if (isUpdateSuccessful) {
      navigate("/");
      dispatch(setUpdateSuccessful(false));
    }
  }, [dispatch, isUpdateSuccessful, navigate]);

  useEffect(() => {
    if (isLoggedIn && driveId) dispatch(getDriveById(driveId));
  }, [dispatch, driveId, isLoggedIn]);

  const onSetFirstStep = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep((prev) => prev + 1);
    // if (driveId) dispatch(updateDrive({ ...data, driveId }));
    // else dispatch(addDrive(data));
  };

  const onSetSecondStep = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep((prev) => prev + 1);
  };

  const onSetBackStep = (data) => {
    if(step === 3) setFormData((prev) => ({ ...prev, ...data }));
    setStep(prev => prev - 1);
  }

  const toggleModalDeleteAlert = () => {
    setIsModalDeleteAlertOpen(!isModalDeleteAlertOpen);
    document.getElementById("deletedrivebtn").blur();
  };

  return (
    <DriveFormWrap>
      <DriveFormName>Drive details</DriveFormName>

      {step === 1 && (
        <DriveItemFormFirst
          isEditEnabled={isEditEnabled}
          drive={formData}
          driveId={driveId}
          onSetFirstStep={onSetFirstStep}
        />
      )}

      {step === 2 && (
        <DriveItemFormSecond
          isEditEnabled={isEditEnabled}
          drive={formData}
          driveId={driveId}
          onSetSecondStep={onSetSecondStep}
          onSetBackStep={onSetBackStep}
        />
      )}

      {step === 3 && (
        <DriveItemFormThird
          isEditEnabled={isEditEnabled}
          drive={formData}
          driveId={driveId}
          onSetBackStep={onSetBackStep}
        />
      )}

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

      {isModalDeleteAlertOpen && (
        <ModalPort toggleModal={toggleModalDeleteAlert}>
          <ModalDeleteAlert toggleModal={toggleModalDeleteAlert} id={driveId} />
        </ModalPort>
      )}
    </DriveFormWrap>
  );
};

// DriveItemForm.propTypes = {
//   drive: PropTypes.object.isRequired,
// };

export default DriveItemFormMain;
