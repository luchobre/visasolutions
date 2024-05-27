import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <>
      <div className="flex flex-col items-center mb-5 mt-5" id="aboutus">
        <div className="font-bold text-3xl sm:text-5xl p-5 mt-10">ABOUT US</div>
        <div className="mb-10 mt-10 md:w-[50vw] w-64">
          <p>
            For over a decade, Visa Solutions has been the leading international
            recruitment and migration company, successfully helping thousands of
            people from over 70 countries to process their visas and move to the
            United States of America. As an organization founded by immigrants,
            our passion is to help others achieve their American Dream and live
            life to the fullest. Through our program, you will have the
            opportunity to live, work, and thrive in the United States with your
            family by obtaining Permanent Resident status, commonly known as a
            Green Card, through employment sponsorship.
          </p>
        </div>
        <div className="grid md:grid-cols-4 md:grid-rows-1 grid-cols-2 grid-rows-2 mt-10 mb-10">
          <div className="flex flex-col items-center">
            <Image src={"/assets/about1.png"} width={120} height={120} alt="about1"/>
            <p className="text-3xl text-blue-800 font-bold">+14</p>
            <p className="text-red-600">Years of experience</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src={"/assets/about2.png"} width={150} height={150} alt="about2" />
            <p className="text-3xl text-blue-800 font-bold">+6</p>
            <p className="text-red-600">Offices around the world</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src={"/assets/about3.png"} width={130} height={130} alt="about3" />
            <p className="text-3xl text-blue-800 font-bold">+70</p>
            <p className="text-red-600">Countries</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src={"/assets/about4.png"} width={130} height={130} alt="about4"/>
            <p className="text-3xl text-blue-800 font-bold">+1,000</p>
            <p className="text-red-600">Success stories</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
