import { Icon } from "@iconify/react";
import { InputAdornment, TextField } from "@mui/material";

import CustomConnectButton from "../CustomConnectButton";
import "./style.scss";
import logo from "../../assets/logo.png";
import SearchBox from "../SearchBox";

const Header = () => {
  return (
    <div className="header">
      <div className="left">
        <img src={logo} className="h-12 md:h-16 mt-1" />
        <div className="buttons">
          <div>Collections</div>
          <div>News</div>
          <div>$JPEG</div>
          <div>Whitepaper</div>
        </div>
      </div>
      <div className="right">
        <SearchBox />
        <CustomConnectButton />
      </div>
    </div>
  );
};

export default Header;
