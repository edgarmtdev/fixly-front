export default function UploadProduct({ handleNotViewModal }) {
  return (
    <section>
      <div
        onClick={handleNotViewModal}
        className="absolute z-20 top-0 bg-[#00000078] left-0 h-[100vh] w-[100%]"
      ></div>
      <div className="absolute top-0 left-0 bottom-0 right-0 m-auto bg-white z-30 w-[48rem] h-[50%]">
        <button onClick={handleNotViewModal}>Cerrar</button>
      </div>
    </section>
  );
}
