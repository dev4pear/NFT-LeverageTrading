import { Icon } from "@iconify/react";
import "./style.scss";
import Chart from "../../assets/chart.png";

const Tokenhub = () => {
  return (
    <div className="bg-slate-200 w-full mt-8 rounded-xl p-4">
      <div className="tokeninfo">
        <div className="w-1/3">
          <p>$JPEG Contract</p>
          <div className="flex items-center gap-2">
            <p className="text-2xl font-bold">0x1bE02...76d7D</p>
            <Icon
              icon="lucide:copy"
              width="24"
              height="24"
              style={{ color: "black" }}
            />
          </div>
        </div>
        <div className="w-1/6">
          <p>Holders</p>
          <p className="text-2xl font-bold">7022</p>
        </div>
        <div className="w-1/4">
          <p>Market Cap</p>
          <div className="flex">
            <p className="text-2xl font-bold">17.23m</p>
            <div className="flex self-end">
              <Icon icon="ph:arrow-up" height="20" style={{ color: "green" }} />
              <p className="text-green-600">4.1%</p>
            </div>
          </div>
        </div>
        <div className="uniswap">Buy on Uniswap</div>
      </div>
      <div className="chart">
        <img src={Chart} />
      </div>
    </div>
  );
};

export default Tokenhub;
