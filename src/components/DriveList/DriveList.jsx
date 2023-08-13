
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {getAllDrives} from "../../redux/drives/drivesThunks"
import { getAllDrivesSelector } from "../../redux/drives/drivesSelectors";
import { getUserIsLoggedIn } from "../../redux/auth/authSelectors";
import Drive from "../DriveItemShort/DriveItemShort";
import { DriveListWrap, DriveItemShortWrap } from "./DriveList.styled";


const DriveList = () => {
  const allDrives = useSelector(getAllDrivesSelector);
  const isLoggedIn = useSelector(getUserIsLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) dispatch(getAllDrives());
  },[dispatch, isLoggedIn]);

  return (
    <DriveListWrap>
      <ul>
        {allDrives.map((drive) => (
          <DriveItemShortWrap key={drive._id}>
            <Drive drive={drive} />
          </DriveItemShortWrap>
        ))}
      </ul>
    </DriveListWrap>
  );
};

export default DriveList;
