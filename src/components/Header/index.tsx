import { Icon } from "@iconify/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import "./style.scss";

import logo from "../../assets/logo.png";
import { InputAdornment, TextField } from "@mui/material";

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
        <TextField
          variant="standard"
          InputProps={{
            disableUnderline: true,
            startAdornment: (
              <InputAdornment position="start">
                <Icon
                  icon="material-symbols:search"
                  width="24"
                  height="24"
                  color="black"
                />
              </InputAdornment>
            ),
          }}
          placeholder="Search..."
          className="searchbox"
        />

        <ConnectButton.Custom>
          {({
            account,
            chain,
            openAccountModal,
            openChainModal,
            openConnectModal,
            authenticationStatus,
            mounted,
          }) => {
            // Note: If your app doesn't use authentication, you
            // can remove all 'authenticationStatus' checks
            const ready = mounted && authenticationStatus !== "loading";
            const connected =
              ready &&
              account &&
              chain &&
              (!authenticationStatus ||
                authenticationStatus === "authenticated");

            return (
              <div
                {...(!ready && {
                  "aria-hidden": true,
                  style: {
                    opacity: 0,
                    pointerEvents: "none",
                    userSelect: "none",
                  },
                })}
              >
                {(() => {
                  if (!connected) {
                    return (
                      <div className="disconnected">
                        <button onClick={openConnectModal} type="button">
                          Connect Wallet
                        </button>
                      </div>
                    );
                  }

                  if (chain.unsupported) {
                    return (
                      <button
                        className="px-4 py-2 rounded-xl text-white"
                        style={{ background: "red" }}
                        onClick={openChainModal}
                        type="button"
                      >
                        Wrong network
                      </button>
                    );
                  }

                  return (
                    <div className="connected">
                      <button onClick={openAccountModal} type="button">
                        {account.displayName}
                      </button>
                    </div>
                  );
                })()}
              </div>
            );
          }}
        </ConnectButton.Custom>
      </div>
    </div>
  );
};

export default Header;
