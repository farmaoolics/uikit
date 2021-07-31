import { Colors } from "./types";

export const baseColors = {
  failure: "#DA5863",
  primary: "#FFFFFF",
  primaryBright: "#555ED5",
  primaryDark: "#43349c",
  secondary: "#DA5863",
  success: "#F40000",
  warning: "#FFB237",
  white: "#fff",
  black: "#000",
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
  secondary: "#FFFFFF",
  background: "#FFFFFF", // main background
  backgroundDisabled: "#FFFFFF", // buttons disable
  backgroundAlt: "#696969", // menu, header, boxes
  contrast: "#FFFFFF",
  dropdown: "#1E1D20",
  invertedContrast: "#191326",
  input: "#FFFFFF", // modal input
  inputSecondary: "#66578D",
  primaryDark: "#0098A1",
  tertiary: "#F40000",
  text: "#FFFFFF", // boxes text
  textDisabled: "#666171",
  textSubtle: "#AEAEAE", // menu text
  borderColor: "#524B63",
  gradients: {
    bubblegum: "linear-gradient(#DEF7DE 43%,#DEF7DE 100%)",
    cardHeader: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
    blue: "linear-gradient(180deg, #00707F 0%, #19778C 100%)",
    violet: "linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)",
    violetAlt: "linear-gradient(180deg, #434575 0%, #66578D 100%)",
  },
};
