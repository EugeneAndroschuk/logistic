
import { Link } from "react-router-dom";
import DriveItemForm from "../../components/DriveItemForm/DriveItemForm";
import CityFinder from "../../components/CityFinder/CityFinder";

const DriveDetails = () => {
  
  

    return (
      <>
        <Link to="/">go to Main page</Link>
        <h1>DriveDetails Page</h1>
        <DriveItemForm />
        <CityFinder />
      </>
    );
}

export default DriveDetails;