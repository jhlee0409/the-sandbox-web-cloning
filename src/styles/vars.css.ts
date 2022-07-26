import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  navHeight: "60px",
  space: {
    none: "0",
    "0x": "0px",
    "1x": "10px",
    "2x": "20px",
    "3x": "30px",
    "4x": "40px",
    "5x": "50px",
    "6x": "60px",
    "7x": "70px",
    "8x": "80px",
  },
  spaceVw: {
    none: "0",
    "0x": "0vw",
    "1x": "10vw",
    "2x": "20vw",
    "3x": "30vw",
    "4x": "40vw",
    "5x": "50vw",
    "6x": "60vw",
    "7x": "70vw",
    "8x": "80vw",
    "9x": "90vw",
    "10x": "100vw",
  },
  spaceVh: {
    none: "0",
    "0x": "0vh",
    "1x": "10vh",
    "2x": "20vh",
    "3x": "30vh",
    "4x": "40vh",
    "5x": "50vh",
    "6x": "60vh",
    "7x": "70vh",
    "8x": "80vh",
    "9x": "90vh",
    "10x": "100vh",
  },
  color: {
    none: "none",
    red: "red",
    point: "#caf1f8",
    yellow: "#ffbf36",
    lightBlue: "#00b0ff",
  },
  borderRadius: {
    base: "12px",
    mobile: "8px",
  },
  fontFamily: {},
  fontSize: {
    "1x": "1.2rem",
    none: "none",
  },
  lineHeight: {},
});
