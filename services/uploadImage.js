// eslint-disable-next-line no-undef
const cloud_name = process.env.NEXT_PUBLIC_CLOUD_NAME;
// eslint-disable-next-line no-undef
const upload_preset = process.env.NEXT_PUBLIC_UPLOAD_PRESET;

const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`;

export async function uploadImage(images) {
  const imgURL = await Promise.all(
    images.map(async (item) => {
      const formData = new FormData();
      formData.append("upload_preset", `${upload_preset}`);
      formData.append("folder", "fixly-ecommerce");
      formData.append("file", item);
      const res = await fetchCloudinary(formData);
      return res;
    })
  );

  return imgURL;
}

async function fetchCloudinary(formData) {
  try {
    const res = await fetch(cloudinaryUrl, {
      method: "POST",
      body: formData,
    });

    if (!res.ok) return null;

    const data = await res.json();
    return data.secure_url;
  } catch (error) {
    return null;
  }
}
