
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import {getAllDrives} from "../../redux/drives/drivesThunks"
import { getAllDrivesSelector } from "../../redux/drives/drivesSelectors";
import Drive from "../DriveItemShort/DriveItemShort";
import { DriveItemShortWrap } from "./DriveList.styled";


const DriveList = () => {
  const allDrives = useSelector(getAllDrivesSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllDrives())
  },[dispatch]);

  return (
    <div>
      {allDrives.map((drive) => (
        <DriveItemShortWrap key={drive.id}>
          <Link to={`/drives/${drive.id}`}>
            <Drive drive={drive} />
          </Link>
        </DriveItemShortWrap>
      ))}
    </div>
  );
};

export default DriveList;
