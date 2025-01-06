import React from "react";

const BarLevel = ({
  voltasePercentage,
  voltase,
  power,
  powerPercentage,
  amper,
  amperPercentage,
  fr,
  frPercentage,
  pf,
  pfPercentage,
}) => {
  return (
    <>
  
      <div className="flex justify-center ">
        {/* Bar untuk Voltase */}
        <div className="card w-full h-24 bg-primary-content flex flex-row items-center shadow px-2 flex-wrap">
          <div
            className="h-20 card bg-secondary flex justify-center items-center shadow-inner shadow-black text-secondary-content"
            style={{ width: `${voltasePercentage}%` }}
          ></div>
          <div className=" flex flex-col flex-wrap w-full text-center text-secondary-content justify-center  absolute">
          <h3 className="text-left ml-4 mt-2 font-semibold ">Voltase</h3>
            <h1 className="font-bold text-lg ">{voltase}</h1>
            <p>V</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-2 ">
        {/* Bar untuk kWh */}
        <div className="card w-full h-24 bg-primary-content flex flex-row items-center shadow px-2 flex-wrap">
          <div
            className="h-20 card bg-secondary flex justify-center items-center shadow-inner shadow-black text-secondary-content"
            style={{ width: `${powerPercentage}%` }}
          ></div>
          <div className="flex flex-col flex-wrap w-full text-center text-secondary-content absolute">
          <h3 className="text-left ml-4 mt-2 font-semibold ">Power</h3>
            <h1 className="font-bold text-lg ">{power}</h1>
            <p>Watt</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-2 ">
        {/* Bar untuk amper*/}
        <div className="card w-full h-24 bg-primary-content flex flex-row items-center shadow px-2 flex-wrap">
          <div
            className="h-20 card bg-secondary flex justify-center items-center shadow-inner shadow-black text-secondary-content"
            style={{ width: `${amperPercentage}%` }}
          ></div>
          <div className="flex flex-col flex-wrap w-full text-center text-secondary-content absolute">
          <h3 className="text-left ml-4 mt-2 font-semibold ">Current</h3>
            <h1 className="font-bold text-lg ">{amper}</h1>
            <p>A</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-2 ">
        {/* Bar untuk frequency*/}
        <div className="card w-full h-24 bg-primary-content flex flex-row items-center shadow px-2 flex-wrap">
          <div
            className="h-20 card bg-secondary flex justify-center items-center shadow-inner shadow-black text-secondary-content"
            style={{ width: `${frPercentage}%` }}
          ></div>
          <div className="flex flex-col flex-wrap w-full text-center text-secondary-content absolute">
          <h3 className="text-left ml-4 mt-2 font-semibold ">Frequency</h3>
            <h1 className="font-bold text-lg ">{fr}</h1>
            <p>Hz</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-2 ">
        {/* Bar untuk Power Faktor*/}
        <div className="card w-full h-24 bg-primary-content flex flex-row items-center shadow px-2 flex-wrap">
          <div
            className="h-20 card bg-secondary flex justify-center items-center shadow-inner shadow-black text-secondary-content"
            style={{ width: `${pfPercentage}%` }}
          ></div>
          <div className="flex flex-col flex-wrap w-full text-center text-secondary-content absolute">
          <h3 className="text-left ml-4 mt-2 font-semibold ">Power Faktor</h3>
            <h1 className="font-bold text-lg ">{pf}</h1>
            <p></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BarLevel;
