import { URL } from "url";

const isValidUrl = (url: string): string | any => {
  try {
    const { href } = new URL(url);

    return href;
  } catch (e) {
    console.error("Invalid URL");
  }
};

export default isValidUrl;
