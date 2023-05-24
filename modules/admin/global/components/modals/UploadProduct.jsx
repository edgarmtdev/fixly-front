import UploadForm from "../form/UploadForm";
import ContainerMotion from "./ContainerMotion";
import TitleBar from "./components/TitleBar";

export default function UploadProduct({ viewModal, handleNotViewModal }) {
  return (
    <ContainerMotion visible={viewModal}>
      <div
        onClick={handleNotViewModal}
        className="absolute z-20 top-0 bg-[#00000078] left-0 h-[100vh] w-[100%]"
      ></div>
      <div className="absolute z-30 top-0 left-0 bottom-0 right-0 m-auto bg-white w-[48rem] min-h-[75%] h-[75%] p-6 rounded-md shadow-xl">
        <TitleBar
          title={"Upload product"}
          handleNotViewModal={handleNotViewModal}
        />
        <UploadForm />
      </div>
    </ContainerMotion>
  );
}
