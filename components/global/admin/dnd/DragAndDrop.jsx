import { useState } from "react";
import ImageUploading from "react-images-uploading";

export default function DragAndDrop() {
  const [images, setImages] = useState([]);
  const handleChangeImages = (image) => setImages(image);
  return (
    <div>
      <p className="text-xs">Images</p>
      <section className="mt-2">
        <ImageUploading
          multiple
          value={images}
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
                className="bg-primary-100 p-5 flex items-center justify-center rounded h-32 cursor-pointer hover:opacity-80"
                style={isDragging ? { border: "2px solid #4FBB8B" } : undefined}
                onClick={onImageUpload}
                {...dragProps}
              >
                Click or Drop here
              </section>
              <section className="flex flex-col gap-5 text-xs mt-5">
                {imageList.map((image, index) => {
                  return (
                    <div key={index} className="flex gap-5 p-1">
                      <img
                        className="rounded-sm"
                        src={image["data_url"]}
                        alt=""
                        width="150"
                      />
                      <div>
                        <p className="mb-2 font-semibold">{image.file.name}</p>
                        <div className="flex gap-2 underline">
                          <button onClick={() => onImageUpdate(index)}>
                            Update
                          </button>
                          <button onClick={() => onImageRemove(index)}>
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
