import { useState } from "react";
import "./style.scss";
import Tokenhub from "../Tokenhub";

const JPEG = () => {
  const [tab, setTab] = useState(1);
  return (
    <div className="jpeg">
      <div className="col-header">
        <div className="title">$JPEG</div>
        <div className="subtitle">
          <p>
            Purchase $JPEG, explore our tokenomics and
            <br /> tax info, and claim revenue sharing funds.
          </p>
          <div className="buttons">
            <div
              className={`button ${tab === 0 ? "active" : "deactive"}`}
              onClick={() => setTab(0)}
            >
              Token hub
            </div>
            <div
              className={`button ${tab === 1 ? "active" : "deactive"}`}
              onClick={() => setTab(1)}
            >
              Revenue
            </div>
            <div
              className={`button ${tab === 2 ? "active" : "deactive"}`}
              onClick={() => setTab(2)}
            >
              Tokenomics
            </div>
          </div>
        </div>
      </div>
      {tab === 0 && <Tokenhub />}
    </div>
  );
};

export default JPEG;
