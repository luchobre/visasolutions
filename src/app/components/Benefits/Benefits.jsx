import Image from "next/image";
import React from "react";
import ben1 from "../../../../public/assets/ben1.png";
import ben2 from "../../../../public/assets/ben2.png";
import ben3 from "../../../../public/assets/ben3.png";
import ben4 from "../../../../public/assets/ben4.png";
import ben5 from "../../../../public/assets/ben5.png";
import ben6 from "../../../../public/assets/ben6.png";

const Benefits = () => {
  const Info = [
    {
      img: ben1,
      title: "OPPORTUNITY TO OBTAIN A GREEN CARD",
      text: "The EB-3 visa is valid for 10 years and can be renewed if you meet the requirements.",
    },
    {
      img: ben2,
      title: "BRING YOUR FAMILY WITH YOU",
      text: "You can include in your application your spouse and children under 21 years old.",
    },
    {
      img: ben3,
      title: "BETTER EDUCATION FOR YOUR CHILDREN",
      text: "Your children can attend public schools in the country for free.",
    },
    {
      img: ben4,
      title: "ATTRACTIVE BENEFITS",
      text: "You  will be able to receive life insurance, medical expenses insurance, a retirement plan, and much more!",
    },
    {
      img: ben5,
      title: "COMPETITIVE SALARY",
      text: "Work in the best companies in the United States and earn an attractive salary.",
    },
    {
      img: ben6,
      title: "LIVE YOUR AMERICAN DREAM",
      text: "Enjoy a better quality of life in one of the safest and most stable countries in the world.",
    },
  ];
  return (
    <>
      <div className="flex justify-center font-bold text-3xl sm:text-5xl mt-24" id="benefits">
        BENEFITS
      </div>
      <div className="grid lg:grid-cols-3 lg:grid-rows-2 grid-cols-1 grid-rows-6 md:grid-cols-2 md:grid-rows-3 mt-24 mb-24 md:ml-28 md:mr-28">
        {Info.map((item, index) => (
          <div className="flex items-center justify-center p-5" key={index}>
            <div className="font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs h-[380px]">
              <h1 className="text-lg text-gray-700">{item.title}</h1>
              <Image
                className="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto"
                src={item.img}
                width={300}
                height={300}
                alt={`Benefits: ${index}`}
              />
              <p className="text-sm text-gray-400 mt-8">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Benefits;
