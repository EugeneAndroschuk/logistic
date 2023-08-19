
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {getAllDrives} from "../../redux/drives/drivesThunks"
import { getAllDrivesSelector } from "../../redux/drives/drivesSelectors";
import { getUserIsLoggedIn } from "../../redux/auth/authSelectors";
import Drive from "../DriveItemShort/DriveItemShort";

import {
  DriveListWrap,
  DriveListHeader,
  HeaderItem,
  HeaderItemName,
  DriveListBody,
  DriveItemShortWrap,
} from "./DriveList.styled";


const DriveList = () => {
  const {allDrives} = useSelector(getAllDrivesSelector);
  const isLoggedIn = useSelector(getUserIsLoggedIn);
  const dispatch = useDispatch();

  // console.log(allDrives.allDrives);

  // useEffect(() => {
  //   if (isLoggedIn) dispatch(getAllDrives());
  // },[dispatch, isLoggedIn]);

  return (
    <DriveListWrap>
      <DriveListHeader>
        <HeaderItem>
          <HeaderItemName>Shipment date</HeaderItemName>
        </HeaderItem>
        <HeaderItem>
          <HeaderItemName>Unloading date</HeaderItemName>
        </HeaderItem>
        <HeaderItem>
          <HeaderItemName>Carrier</HeaderItemName>
        </HeaderItem>
        <HeaderItem>
          <HeaderItemName>Client</HeaderItemName>
        </HeaderItem>
        <HeaderItem>
          <HeaderItemName>Departure point</HeaderItemName>
        </HeaderItem>
        <HeaderItem>
          <HeaderItemName>Arrival point</HeaderItemName>
        </HeaderItem>
        <HeaderItem>
          <HeaderItemName>Vehicle data</HeaderItemName>
        </HeaderItem>
        <HeaderItem>
          <HeaderItemName>User</HeaderItemName>
        </HeaderItem>
      </DriveListHeader>
      <DriveListBody>
        {allDrives && allDrives.map((drive) => (
          <DriveItemShortWrap key={drive._id}>
            <Drive drive={drive} />
          </DriveItemShortWrap>
        ))}
      </DriveListBody>

      
    </DriveListWrap>
  );
};

export default DriveList;
