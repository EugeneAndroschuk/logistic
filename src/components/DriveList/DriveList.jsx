const drives = [
  {
    id: "1",
    shipmentDate: "01.01.2023",
    unloadingDate: "02.01.2023",
    carrier: "A.P. Moller",
    client: "JP Morgan",
    departurePoint: "New York, USA",
    arrivalPoint: "Tokio, Japan",
    vehicleData: "Tanker 13027",
  },
  {
    id: "2",
    shipmentDate: "03.02.2023",
    unloadingDate: "04.03.2023",
    carrier: "Evergreen Marine",
    client: "Apple",
    departurePoint: "Pekin, China",
    arrivalPoint: "Denver, USA",
    vehicleData: "Tanker 1805",
  },
  {
    id: "3",
    shipmentDate: "08.05.2023",
    unloadingDate: "10.05.2023",
    carrier: "China COSCO Shipping",
    client: "Shell",
    departurePoint: "London, GB",
    arrivalPoint: "Irving, USA",
    vehicleData: "Tanker 58",
  },
];

import { Link } from "react-router-dom";

import Drive from "../DriveItemShort/DriveItemShort";
import { DriveItemShortWrap } from "./DriveList.styled";

const DriveList = () => {
  return (
    <div>
      {drives.map((drive) => (
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
