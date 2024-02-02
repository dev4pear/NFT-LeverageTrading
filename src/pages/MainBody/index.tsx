import styled from "@emotion/styled";
import React, { useRef, useState } from "react";
import { Icon } from "@iconify/react";

import "./style.scss";
import Pattern1 from "../../assets/backPattern1.svg";
import News from "../../assets/news.png";
import { Collections, newsItems } from "../../utils/constants";
import JPEG from "../../components/JPEG";

const ListItem = styled("div")({
  listStyle: "none",
});

const MainBody = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const placeholderImages = Array.from(
    { length: 20 },
    (_, index) => `https://via.placeholder.com/150?text=NFT+${index + 1}`
  );
  const [netType, setNetType] = useState(0);
  return (
    <div className="mainbody">
      <div className="content">
        <div className="left">
          <h2 className="md:text-7xl text-5xl mb-4">
            <b>NFTs, redefined.</b>
          </h2>
          <p className="mb-6 text-gray-700 md:mt-8 mt-12">
            At JPEG, we've elevated NFT trading by introducing a cutting-edge
            platform that seamlessly integrates leveraged trading with your
            favorite NFT collections.
          </p>
          <div className="nfts">
            <ListItem>
              <div
                className="grid grid-cols-3 md:grid-cols-10 gap-1 mb-6 mt-12"
                ref={ref}
              >
                {placeholderImages.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`NFT ${index + 1}`}
                    className="rounded-lg w-full h-auto"
                  />
                ))}
              </div>
            </ListItem>
          </div>
        </div>
        <div className="right">
          <div className="md:p-4 p-2 rounded-lg mt-8">
            <h3 className="text-lg mb-3">
              Top trades<span className="text-[#9F97BB]"> / Recent trades</span>
            </h3>
            <div className="border border-white rounded-lg">
              <ul className="divide-y divide-white">
                <li className="grid grid-cols-3 gap-4 p-2">
                  <span>Pudgy Penguins</span>
                  <span className="text-red-500">Short 9.9x</span>
                  <span className="text-green-500">+171.22%</span>
                </li>
                <li className="grid grid-cols-3 gap-4 p-2">
                  <span>Azuki</span>
                  <span className="text-green-500">Long 33.1x</span>
                  <span className="text-green-500">+98.23%</span>
                </li>
                <li className="grid grid-cols-3 gap-4 p-2">
                  <span>The Grapes</span>
                  <span className="text-green-500">Long 62.8x</span>
                  <span className="text-green-500">+195.67%</span>
                </li>
                <li className="grid grid-cols-3 gap-4 p-2">
                  <span>My Pet Hooligan</span>
                  <span className="text-red-500">Short 33.1x</span>
                  <span className="text-green-500">+211.45%</span>
                </li>
                <li className="grid grid-cols-3 gap-4 p-2">
                  <span>Pixelmon</span>
                  <span className="text-green-500">Long 62.8x</span>
                  <span className="text-green-500">+112.34%</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <img src={Pattern1} />
      <div className="collections">
        <div className="col-header">
          <div className="title">Collections</div>
          <div className="subtitle">
            <p>Swap between Ethereum, Solana and Ordinals</p>
            <div className="nType">
              <div
                className={`${
                  netType === 0 ? "chain-e" : "chain-d"
                } cursor-pointer`}
                onClick={() => setNetType(0)}
              >
                <Icon
                  icon="mdi:ethereum"
                  width="24"
                  height="24"
                  style={{ color: "white" }}
                />
              </div>
              <div
                className={`${
                  netType === 1 ? "chain-e" : "chain-d"
                } cursor-pointer`}
                onClick={() => setNetType(1)}
              >
                <Icon
                  icon="formkit:solana"
                  width="24"
                  height="24"
                  style={{ color: "white" }}
                />
              </div>
              <div
                className={`${
                  netType === 2 ? "chain-e" : "chain-d"
                } cursor-pointer`}
                onClick={() => setNetType(2)}
              >
                <Icon
                  icon="formkit:bitcoin"
                  width="24"
                  height="24"
                  style={{ color: "white" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-8 gap-4 mt-12 ml-2 text-xs mb-4">
            <div className="text-[runic] ml-5">#</div>
            <div className="text-[runic] col-span-2">Collection</div>{" "}
            <div className="text-[runic]">Floor</div>
            <div className="text-[runic]">Average</div>
            <div className="text-[runic]">Ceiling</div>
            <div className="text-[runic]">Volume</div>
            <div className="text-[runic]">Change</div>
          </div>
          <div className="bg-white bg-opacity-50 flex flex-col gap-4 p-4 rounded-lg mt-8">
            {Collections.map((item, index) => (
              <div className="grid grid-cols-8 gap-4" key={index}>
                <div className="p-2">{index + 1}</div>
                <div className="flex items-center space-x-2 col-span-2">
                  {" "}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="rounded-lg w-12 h-12 mr-2"
                  />
                  <span>{item.name}</span>
                </div>
                <div className="p-2">{item.floor}</div>
                <div className="p-2">{item.average}</div>
                <div className="p-2">{item.ceiling}</div>
                <div className="p-2">{item.volume}</div>
                <div className="text-green-500 p-2">{item.change}</div>
              </div>
            ))}
          </div>
          <div className="flex justify-center pt-4">
            <div className="px-3 py-1 rounded-md border-[1px] border-gray-500">
              See More
            </div>
          </div>
        </div>
      </div>
      <div className="news">
        <div className="col-header">
          <div className="title">News</div>
          <div className="subtitle">
            <p>Swap between Ethereum, Solana and Ordinals</p>
            <div className="nType">View all posts</div>
          </div>
        </div>
        <div className="flex mb-24 mt-12">
          <div className="w-1/3 bg-[#E6E4F4] rounded-2xl rounded-tr-2xl rounded-br-2xl">
            <img
              src={News}
              alt="Featured"
              className="w-full h-2/3 object-cover rounded-lg"
            />
            <div className="text-black px-6 bg-[#E6E4F4] ml-4">
              <h3 className="text-3xl font-bold mt-4">We are live!</h3>
              <div className="mt-2 text-md">
                In a groundbreaking moment for the world of NFTs, JPEG has
                officially launched its highly anticipated platform, ushering in
                a new era of...{" "}
                <span className="text-[#6C65BE]">Read in full</span>
              </div>
            </div>
          </div>
          <div className="w-2/3 bg-[#E6E4F4] ml-16 p-6 rounded-2xl rounded-tr-2xl rounded-br-2xl flex flex-col justify-between">
            {newsItems.map((item, index) => (
              <React.Fragment key={index}>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-2xl font-semibold text-gray-500 uppercase">
                      {item.category}
                    </div>
                    <div className="text-5xl md:mt-4 md:mr-34 font-bold">
                      {item.title}
                    </div>
                  </div>
                  <img
                    src="https://via.placeholder.com/400"
                    alt={item.title}
                    className="w-40 h-40 object-cover rounded-lg"
                  />
                </div>
                {index < newsItems.length - 1 && (
                  <hr className="my-4 hr-white" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      <JPEG />
    </div>
  );
};

export default MainBody;
