
import DriveItemForm from "../../components/DriveItemForm/DriveItemForm";
import CityFinder from "../../components/CityFinder/CityFinder";
import Container from "../../styles/Container";
import { GoToMainBtn } from "./DriveDetailsPage.styled";

const DriveDetails = () => {
  
  

    return (
      <>
        <Container>
          <GoToMainBtn to="/">go Back</GoToMainBtn>
          
          <DriveItemForm />
          <CityFinder />
        </Container>
      </>
    );
}

export default DriveDetails;