import React from "react";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = () => {
  return (
    <img alt="Ladybug Swap" src="/images/ladybug/header_logo_wide_white.png" style={{width: "auto", height: "35px"}} />
  );
};

export default Logo;
