import ImageUploading from "react-images-uploading";
import { GiPaperClip } from "react-icons/gi";

export default function DragAndDrop({ handleChangeImages, image }) {
  return (
    <div className="mt-5">
      <div className="flex items-center gap-3">
        <span>
          <GiPaperClip size={20} />
        </span>
        <h5>Upload Images</h5>
      </div>
      <section className="mt-4">
        <ImageUploading
          multiple
          value={image}
          onChange={handleChangeImages}
          maxNumber={10}
          dataURLKey="data_url"
        >
          {({
            imageList,
            onImageUpload,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            <div>
              <section
                className="bg-gray-100 p-5 flex items-center justify-center rounded h-40 cursor-pointer border-dashed border-2 border-primary-200 hover:bg-gray-50"
                style={isDragging ? { border: "2px solid #4FBB8B" } : undefined}
                onClick={onImageUpload}
                {...dragProps}
              >
                Click or Drop here
              </section>
              <section className="flex flex-col gap-5 text-xs mt-5">
                {imageList.map((image, index) => {
                  return (
                    <div key={index} className="flex gap-5">
                      <img
                        className="rounded"
                        src={image.data_url}
                        alt=""
                        width="150"
                      />
                      <div>
                        <p className="mb-2 font-semibold">{image.file.name}</p>
                        <div className="flex gap-2 underline">
                          <button
                            type="button"
                            onClick={() => onImageUpdate(index)}
                          >
                            Update
                          </button>
                          <button
                            type="button"
                            onClick={() => onImageRemove(index)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </section>
            </div>
          )}
        </ImageUploading>
      </section>
    </div>
  );
}
