import { IoCloudUploadOutline } from "react-icons/io5";
import UploadForm from "./modules/UploadForm";
import ContainerMotion from "./ContainerMotion";
import TitleBar from "./slices/TitleBar";

export default function UploadProduct({ viewModal, handleNotViewModal }) {
  return (
    <ContainerMotion
      visible={viewModal}
      handleNotViewModal={handleNotViewModal}
    >
      <div className="relative z-30 m-auto bg-white w-[50rem] p-5 tablet:p-8 rounded-md shadow-xl">
        <TitleBar
          title={"Upload product"}
          handleNotViewModal={handleNotViewModal}
          icon={<IoCloudUploadOutline size={25} />}
        />
        <div className="flex gap-7">
          <UploadForm handleNotViewModal={handleNotViewModal} />
        </div>
      </div>
    </ContainerMotion>
  );
}
