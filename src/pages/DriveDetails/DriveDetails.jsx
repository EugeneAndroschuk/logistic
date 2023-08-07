
import { useParams } from "react-router-dom";
import DriveItemForm from "../../components/DriveItemForm/DriveItemForm";
import CityFinder from "../../components/CityFinder/CityFinder";

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

const DriveDetails = () => {
    const { driveId } = useParams();
    console.log(driveId);

    return (
      <>
        <h1>DriveDetails Page</h1>
            <DriveItemForm drive={drives[driveId - 1]} />
            <CityFinder/>
      </>
    );
}

export default DriveDetails;