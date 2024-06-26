import React from "react";

function MetricCard({ label, value, bannerImg }) {
  return (
    <div
      className={`bg-[#FFFFFF] text-black text-xl h-[29vh] w-[42vh] flex flex-col rounded-xl drop-shadow-md`}
    >
      <div
        style={{ backgroundImage: `url(${bannerImg})` }}
        className="bg-[length:22vh_30vh] bg-center bg-end bg-no-repeat h-full w-full"
      ></div>
      <div className="flex flex-col gap-3 w-full bg-slate-100 px-4 py-4 backdrop-blur-xl rounded-b-xl">
        <h1 className="text-red-500 text-[2rem]">{value > 0 ? value : 0}</h1>
        <p className="text-slate-600">{label}</p>
      </div>
    </div>
  );
}

export default MetricCard;
