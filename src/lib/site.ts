export const SITE_URL = "https://bruaguspons.github.io/portfolio/";
export const SITE_TITLE = "Bruno Pons | Software Developer";
export const SITE_DESCRIPTION = "Bruno Pons | Software Developer | Computer Science Student";
export const SITE_NAME = "Bruno Pons Portfolio";

export const BASE_PATH = process.env.NODE_ENV === "production" ? "/portfolio" : "";

export const SITE_ICONS = {
  default: `${BASE_PATH}/favicon.svg`,
  dark: `${BASE_PATH}/favicon-dark.svg`,
};

export const SITE_OG_IMAGE = `${BASE_PATH}/image_preview_2026.png`;
