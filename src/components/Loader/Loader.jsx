
import { ThreeDots } from "react-loader-spinner";
import { LoaderWrap } from "./Loader.styled";

const Loader = () => {
    return (
      <LoaderWrap>
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="rgb(219, 167, 22)"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </LoaderWrap>
    );
};

export default Loader;
