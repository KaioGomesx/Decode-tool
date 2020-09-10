import axios from "axios";

async function getExifData(imageUrl: string): Promise<any> {
  try {
    const { data } = await axios.post(
      "https://decode-tool-api-nodejs.herokuapp.com/exif",
      {
        imageUrl,
      }
    );

    return data;
  } catch (error) {
    console.error(error);
  }
}

export default getExifData;
