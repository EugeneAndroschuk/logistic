import ClientItemForm from "../../components/ClientItemForm/ClientItemForm";
import Container from "../../styles/Container";
import { GoBackBtn } from "./ClientDetailsPage.styled";

const ClientDetailsPage = () => {
  return (
    <>
      <Container>
        <GoBackBtn to="/clients">go Back</GoBackBtn>

        <ClientItemForm />
      </Container>
    </>
  );
};

export default ClientDetailsPage;
