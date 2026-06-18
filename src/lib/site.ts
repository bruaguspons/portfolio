export const SITE_URL = process.env.NODE_ENV === "production" ? "https://bruaguspons.github.io/portfolio/": "http://localhost:54321/";
export const SITE_TITLE = "Bruno Pons | Software Developer";
export const SITE_DESCRIPTION = "Bruno Pons | Software Developer | Computer Science Student";
export const SITE_NAME = "Bruno Pons Portfolio";

// export const BASE_PATH = process.env.NODE_ENV === "production" ? "/portfolio" : "";

export const SITE_ICONS = {
  default: `${SITE_URL}/favicon.svg`,
  dark: `${SITE_URL}/favicon-dark.svg`,
};

export const SITE_OG_IMAGE = `${SITE_URL}/image_preview_2026_2.png`;
