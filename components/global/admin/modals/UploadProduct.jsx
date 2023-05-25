import UploadForm from "../form/UploadForm";
import ContainerMotion from "./ContainerMotion";
import TitleBar from "./slices/TitleBar";

export default function UploadProduct({ viewModal, handleNotViewModal }) {
  return (
    <ContainerMotion visible={viewModal}>
      <div
        className="absolute z-20 top-0 left-0 right-0 bottom-0 p-10 flex"
        onClick={handleNotViewModal}
      ></div>
      <div className="z-30 m-auto bg-white w-[48rem] p-6 rounded-md shadow-xl">
        <TitleBar
          title={"Upload product"}
          handleNotViewModal={handleNotViewModal}
        />
        <UploadForm />
      </div>
    </ContainerMotion>
  );
}
