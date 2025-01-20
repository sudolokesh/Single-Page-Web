import React from "react";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import ContactLogo from "../assets/contact.svg";

export default function Contact() {
  return (
    <div className="mt-8 mx-48">
      <h1 className="grid justify-center items-center text-6xl font-extrabold">
        Contact Us
      </h1>

      <p className="mt-6 font-semibold">
        LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
        WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
        REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
        EMAIL, OR SOCIAL MEDIA.
      </p>

      <div className="flex text-lg">
        <div>
          <div className="grid grid-cols-2 gap-6 mt-16">
            <button className="flex justify-center px-6 py-2 bg-black text-white rounded-lg">
              <div className="mt-1 mr-2">
                <MdMessage className="size-5" />
              </div>
              <div>VIA SUPPORT CHAT</div>
            </button>

            <button className="flex justify-center px-6 py-2 bg-black text-white rounded-lg">
              <div className="mt-1 mr-2">
                <FaPhoneAlt className="size-5" />
              </div>
              <div>VIA CALL</div>
            </button>

            <button className="flex justify-center col-span-2 px-6 py-2 bg-black text-white rounded-lg">
              <div className="mt-1 mr-2">
                <HiMail className="size-6" />
              </div>
              <div>VIA EMAIL FROM</div>
            </button>
          </div>

          <div className="grid mt-6 gap-5">
            <div className="grid w-full">
              <label htmlFor="name" className=" absolute left-52 top-[423px] px-2 bg-white">Name</label>
              <input type="text" name="name" className="border-2 py-2 px-5"/>
            </div>
            <div className="grid w-full">
              <label htmlFor="email" className=" absolute left-52 top-[490px] px-2 bg-white">Email</label>
              <input type="email" name="email" className="border-2 py-2 px-5"/>
            </div>
            <div className="grid w-full">
              <label htmlFor="text" className=" absolute left-52 top-[558px] px-2 bg-white">Text</label>
              <textarea name="text" rows={5} className="border-2 py-2 px-5"/>
            </div>
            <div>
              <button className="flex justify-center px-56 py-2 bg-black text-white rounded-lg text-lg">
                Submit 
              </button>
            </div>
          </div>
        </div>

        <div className="ml-9">
          <img src={ContactLogo} alt="Contact" />
        </div>
      </div>
    </div>
  );
}
