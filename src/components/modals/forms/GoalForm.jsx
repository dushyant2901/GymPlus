import React, { useState } from "react";

function GoalForm({ action, setOpenModal, btnStyle }) {
  const [data, setData] = useState({
    name: "",
    description: "",
    targetDate: null,
    targetCalories: null,
    status: "",
  });

  const formValidation = () => {
    if (
      (data.name === "") |
      (data.description === "") |
      (data.description.length > 30) |
      (data.description.length < 20) |
      (data.targetDate === null) |
      (data.targetCalories === "") |
      (data.status === "")
    ) {
      return true;
    }
    return false;
  };

  return (
    <>
      <div className="flex flex-col justify-end items-center gap-4 font-[poppins]">
        <div className="flex items-center text-lg">
          <div className="w-[16vh]">Name</div>
          <input
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            type="text"
            className="border-2 p-1 w-[20vh] rounded-md"
          />
        </div>
        <div className="flex text-lg">
          <div className="w-[16vh]">Description</div>
          <div className="flex flex-col items-center">
            <textarea
              value={data.description}
              onChange={(e) =>
                setData({ ...data, description: e.target.value })
              }
              className="border-2 p-1 h-[10vh] w-[20vh] rounded-md text-sm"
            ></textarea>
            {(data.description.length > 30) | (data.description.length < 20) ? (
              <p className="text-[10px] mt-1 text-red-500">Enter between 20-30 characters</p>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="flex items-center text-lg">
          <div className="w-[16vh]">Target Date</div>
          <input
            value={data.targetDate}
            onChange={(e) => setData({ ...data, targetDate: e.target.value })}
            type="date"
            className="border-2 p-1 w-[20vh] rounded-md"
          />
        </div>
        <div className="flex items-center text-lg">
          <div className="w-[16vh]">Calories</div>
          <input
            value={data.targetCalories}
            onChange={(e) =>
              setData({ ...data, targetCalories: e.target.value })
            }
            type="number"
            className="border-2 p-1 w-[20vh] rounded-md"
          />
        </div>
        <div className="flex items-center text-lg">
          <div className="w-[16vh]">Status</div>
          <select
            value={data.status}
            onChange={(e) => setData({ ...data, status: e.target.value })}
            className="border-2 p-1 w-[20vh] rounded-md"
          >
            <option value="">Select Status</option>
            <option value="In Progress">In Progress</option>
            <option value="Achieved">Achieved</option>
            <option value="Abandoned">Abandoned</option>
          </select>
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
          <p className="text-[12px] text-red-500">Please fill all input fields to Add a goal</p>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default GoalForm;
