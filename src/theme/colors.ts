import { Colors } from "./types";

export const baseColors = {
  failure: "#DA5863",
  primary: "#fff",
  primaryBright: "#555ED5",
  primaryDark: "#43349c",
  secondary: "#DA5863",
  success: "#fff",
  warning: "#FFB237",
  white: "#fff",
  black: "#000",
  principal: "#ff5b20"
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#ccebff",
  backgroundDisabled: "#E9EAEB",
  backgroundAlt: "#ccebff",
  contrast: "#191326",
  dropdown: "#F6F6F6",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputSecondary: "#d7caec",
  tertiary: "#EFF4F5",
  text: "#090a0b",
  textDisabled: "#BDC2C4",
  textSubtle: "#090a0b",
  borderColor: "#E9EAEB",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #1C2826 0%, #1C2826 100%)",
    cardHeader: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
    blue: "linear-gradient(180deg, #A7E8F1 0%, #94E1F2 100%)",
    violet: "linear-gradient(180deg, #E2C9FB 0%, #CDB8FA 100%)",
    violetAlt: "linear-gradient(180deg, #CBD7EF 0%, #9A9FD0 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#000",
  background: "#FFFFFF", // main background
  backgroundDisabled: "#000", // buttons disable
  backgroundAlt: "#ff5b20", // menu, header, boxes
  contrast: "#ff5b20",
  dropdown: "#1E1D20",
  invertedContrast: "#fff",
  input: "#000", // modal input
  inputSecondary: "#66578D",
  primaryDark: "#0098A1",
  tertiary: "#ff5b20",
  text: "#ffff", // boxes text
  textDisabled: "#ff5b20",
  textSubtle: "#fff", // menu text
  borderColor: "#524B63",
  gradients: {
    bubblegum: "linear-gradient(#fff 43%,#fff 100%)",
    cardHeader: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
    blue: "linear-gradient(180deg, #00707F 0%, #19778C 100%)",
    violet: "linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)",
    violetAlt: "linear-gradient(180deg, #434575 0%, #66578D 100%)",
  },
};
