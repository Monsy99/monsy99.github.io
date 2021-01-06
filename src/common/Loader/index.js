import loadingCircle from "./loader.svg";
import { LoaderCircle, LoaderHeader } from "./styled";

const Loader = ({ headerContent }) => {
  return (
    <>
      <LoaderHeader>{headerContent}</LoaderHeader>
      <LoaderCircle src={loadingCircle}></LoaderCircle>
    </>
  );
};
export { Loader };
