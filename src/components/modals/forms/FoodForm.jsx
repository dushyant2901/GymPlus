import React, { useState } from "react";

function FoodForm({ action, setOpenModal, btnStyle }) {
  const [data, setData] = useState({
    name: "",
    calories: 0,
    protein: 0,
    carbohydrates: 0,
    fat: 0,
  });

  const formValidation = () => {
    if (
      (data.name === "") |
      (data.calories === "") |
      (data.protein === "") |
      (data.carbohydrates === "") |
      (data.fat === "")
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
        <div className="flex items-center text-lg">
          <div className="w-[16vh]">Calories</div>
          <input
            value={data.calories}
            onChange={(e) => setData({ ...data, calories: e.target.value })}
            type="number"
            className="border-2 p-1 w-[20vh] rounded-md text-md"
          />
        </div>
        <div className="flex items-center text-lg">
          <div className="w-[16vh]">Protein</div>
          <input
            value={data.protein}
            onChange={(e) => setData({ ...data, protein: e.target.value })}
            type="number"
            className="border-2 p-1 w-[20vh] rounded-md text-md"
          />
        </div>
        <div className="flex items-center text-lg">
          <div className="w-[16vh]">Carbs</div>
          <input
            value={data.carbohydrates}
            onChange={(e) =>
              setData({ ...data, carbohydrates: e.target.value })
            }
            type="number"
            className="border-2 p-1 w-[20vh] rounded-md text-md"
          />
        </div>
        <div className="flex items-center text-lg">
          <div className="w-[16vh]">Fat</div>
          <input
            value={data.fat}
            onChange={(e) => setData({ ...data, fat: e.target.value })}
            type="number"
            className="border-2 p-1 w-[20vh] rounded-md text-md"
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
            Please fill all input fields to Add a food
          </p>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default FoodForm;
