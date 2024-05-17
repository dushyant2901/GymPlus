import React, { useEffect, useState } from "react";
import FoodCard from "../components/FoodCard";
import Modal from "../components/modals/Modal";
import { useDispatch, useSelector } from "react-redux";
import { addFood, deleteFood, getAllFoods } from "../services/FoodService";

function Foods() {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);

  const foods = useSelector((state) => state.foods);

  const handleAddFood = (food) => {
    dispatch(addFood(food));
  };

  const handleDeleteFood = (foodId) => {
    dispatch(deleteFood(foodId));
  };

  useEffect(() => {
    dispatch(getAllFoods());
  }, [dispatch]);

  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl w-full pl-20 pt-9 font-[sintony]">Foods</div>
      <div className="text-lg mx-[12vh] lg:mx-[32vh] mt-8 font-[poppins] text-slate-600">
        Food Tracking is your personal nutrition companion, carefully crafted
        tool to make informed dietary choices. Whether you're striving for
        weight management, muscle gain, or simply want to eat healthier, this is
        your gateway to understanding and optimizing your food intake.
      </div>
      <div
        onClick={() => setOpenModal(true)}
        className="flex gap-2 justify-center items-center mt-6 text-black hover:bg-[#d852b0] bg-[#dd7fc6] rounded-full drop-shadow-md cursor-pointer"
      >
        <span className="pl-4 py-3 text-slate-200">Add Food </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="42"
          height="42"
          viewBox="0 0 50 50"
        >
          <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24 13 L 24 24 L 13 24 L 13 26 L 24 26 L 24 37 L 26 37 L 26 26 L 37 26 L 37 24 L 26 24 L 26 13 L 24 13 z"></path>
        </svg>
      </div>
      <div className="flex flex-wrap justify-center items-center mx-[12vh] lg:mx-[28vh] my-[4vh] gap-16 font-[poppins]">
        {foods.map((food, index) => (
          <FoodCard key={index} food={food} action={handleDeleteFood} />
        ))}
      </div>
      {openModal && (
        <Modal
          setOpenModal={setOpenModal}
          action={handleAddFood}
          btnStyle={"hover:bg-[#52c6d8] bg-[#7ECFDB]"}
        />
      )}
    </div>
  );
}

export default Foods;
