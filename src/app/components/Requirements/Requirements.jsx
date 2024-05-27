import Image from "next/image";
import React from "react";

const Requirements = () => {
  const infoReq = [
    {
      img: "/assets/req1.png",
      title: "AGE",
      text: "Must be at least 21 years old",
    },
    {
      img: "/assets/req2.png",
      title: "EXPERIENCE",
      text: "Have a clean and stable work history.",
    },
    {
      img: "/assets/req3.png",
      title: "VERIFIABLE REFERENCES",
      text: "You should be able to provide recommendation letters to endorse your experience.",
    },
    {
      img: "/assets/req4.png",
      title: "CLEAN CRIMINAL AND MIGRATORY RECORD",
      text: "Thorough background checks will be conducted, and any false statement or omission of required information will result in the denial of the application.",
    },
    {
      img: "/assets/req5.png",
      title: "GOOD HEALTH",
      text: "You should be in good health and physical condition.",
    },
    {
      img: "/assets/req6.png",
      title: "EXCELLENT ATTITUDE",
      text: "We are looking for motivated, reliable, and professional individuals who are ready to adopt a new culture and seek an opportunity to improve their lives.",
    },
    {
      img: "/assets/req7.png",
      title: "COMMITMENT",
      text: "Your commitment to the sponsoring employer company that will sponsor your Green Card is important, it will provide you with a competitive salary and benefits.",
    },
  ];
  return (
    <>
      <div id="requirements">
        <h1 className="font-bold text-3xl sm:text-5xl flex justify-center">REQUIREMENTS</h1>
        <div className="flex justify-center items-center md:p-20 p-5">
          <div className="grid lg:grid-cols-2 lg:grid-rows-3 grid-cols-1 grid-rows-7 md:w-[80%] justify-center items-center">
            {infoReq.map((item, index) => (
              <div className="flex mb-10" key={index}>
                <Image src={item.img} height={80} width={80} className="h-[80px]" alt={`${item.title}`} />
                <div>
                  <h3 className="mb-3 font-bold">{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div></div>
        <div className="flex justify-center ml-5 mr-5">
          <p className="border-3 rounded-xl text-xs font-bold flex justify-center text-blue-800 p-3 ">
            Honesty is our policy. We expect you to be honest about your skills,
            work experience, and personal information. We will verify your
            background, and any inaccurate or false information provided will
            result in your application being rejected.
          </p>
        </div>
      </div>
    </>
  );
};

export default Requirements;
