import React, { useState } from "react";

function ExerciseForm({ action, setOpenModal, btnStyle }) {
  const [data, setData] = useState({
    name: "",
    duration: 0,
    caloriesBurned: 0,
  });

  const formValidation = () => {
    if (
      (data.name === "") |
      (data.duration === "") |
      (data.caloriesBurned === "")
    ) {
      return true;
    }
    return false;
  };

  return (
    <>
      <div className="flex flex-col justify-end items-center gap-4 font-[poppins]">
        <div className="flex items-center text-lg">
          <div className="w-[14vh]">Name</div>
          <input
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            type="text"
            className="border-2 p-1 w-[18vh] rounded-md"
          />
        </div>
        <div className="flex items-center text-lg">
          <div className="w-[14vh]">Duration</div>
          <input
            value={data.duration}
            onChange={(e) => setData({ ...data, duration: e.target.value })}
            type="number"
            className="border-2 p-1 w-[18vh] rounded-md"
          />
        </div>
        <div className="flex items-center text-lg">
          <div className="w-[14vh]">Calories Burned</div>
          <input
            value={data.caloriesBurned}
            onChange={(e) =>
              setData({ ...data, caloriesBurned: e.target.value })
            }
            type="number"
            className="border-2 p-1 w-[18vh] rounded-md"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <button
          disabled={formValidation()}
          onClick={() => {
            action(data);
            setOpenModal(false);
          }}
          className={`${
            formValidation() ? "bg-slate-300" : btnStyle
          } mx-auto px-12 py-2 mb-4 rounded-full text-lg`}
        >
          Add
        </button>
        {formValidation() ? (
          <p className="text-[12px] text-red-500">
            Please fill all input fields to Add an exercise
          </p>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default ExerciseForm;
