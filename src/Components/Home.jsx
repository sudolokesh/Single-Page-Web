import React from "react";
import { Link } from "react-router";

import amazon from "../assets/amazon.png";
import flipkart from "../assets/flipkart.png";
import hero from "../assets/hero-image.png";

export default function Home() {
  return (
    <main className="flex items-center h-[calc(100vh-72px)] max-w-7xl mx-auto px-4">
      <div className="flex flex-col gap-9">
        <h1 className="text-[108px] font-extrabold leading-[102px]">
          YOUR FEET DESERVE THE BEST
        </h1>
        <p className="font-semibold text-[#2e2e2e] max-w-[400px]">
          YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>

        <div className="flex gap-10">
          <Link to='https://www.nike.com/in/u/custom-phantom-luna-2-elite-by-you-10001758/8777413058'>
          <button className="bg-[#d01c28] text-white text-2xl px-4 py-1.5 rounded-xl">
            Shop Now
          </button>
          </Link>
          <button className="border border-gray-400 text-[#2e2e2e] text-2xl px-4 py-1.5 rounded-xl">
            Category
          </button>
        </div>

        <div>
          <p className="text-sm mb-2">Also Available On</p>
          <div className="flex gap-4 cursor-pointer">
            <Link to="https://www.amazon.in/Nike-mens-Sneaker-Red-9/dp/B09PHP91GN/ref=sr_1_2?crid=20MUULZ8RX1O0&dib=eyJ2IjoiMSJ9.m1Axeco0cbGBu7hqTKjx_jI-IKNotVyuCGhlJey0YK_GjHj071QN20LucGBJIEps.IalYNQaKeKMRhcrYL9Tpp3y0GGpNDiXS5wlb7Q1NojU&dib_tag=se&keywords=nike+red+shoes+for+men&nsdOptOutParam=true&qid=1737102410&refinements=p_36%3A3050000-%2Cp_n_size_two_browse-vebin%3A2022304031%2Cp_123%3A234394&rnid=4516629031&s=shoes&sprefix=%2Cshoes%2C171&sr=1-2">
              <img src={amazon} alt="amazon-logo" />
            </Link>
            <Link to="https://www.flipkart.com/nike-free-metcon-4-training-gym-shoes-men/p/itmacf7fbeda8e37?pid=SHOGKV3JQHCSS2CM&lid=LSTSHOGKV3JQHCSS2CMYTECPW&marketplace=FLIPKART&q=nike+red+shoes&store=osp%2Fcil%2F1cu&srno=s_1_2&otracker=AS_QueryStore_OrganicAutoSuggest_1_9_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_9_na_na_na&fm=search-autosuggest&iid=dc94091c-11f0-4a52-8c4f-45dad55ce487.SHOGKV3JQHCSS2CM.SEARCH&ppt=sp&ppn=sp&ssid=5wzarhf73k0000001737102453846&qH=1a8ef6b0fda83a00">
              <img src={flipkart} alt="flipkart-logo" />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full h-auto">
        <img src={hero} alt="hero-image" />
      </div>
    </main>
  );
}

/* export default function HeroSection() {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>

        <div className="hero-btn">
          <button>Shop Now </button>
          <button className="secondary-btn">Category</button>
        </div>

        <div className="shopping">
          <p>Also Available On</p>

          <div className="brand-icons">
            <img src="amazon.png" alt="amazon-logo" />
            <img src="/images/flipkart.png" alt="flipkart-logo" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/hero-image.png" alt="hero-image" />
      </div>
    </main>
  );
}; */
