import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import img1 from "../assets/01.svg";
import img2 from "../assets/02.svg";
import img3 from "../assets/03.svg";
import img4 from "../assets/04.svg";

import MetricCard from "../components/MetricCard";

import { getAllExercises } from "../services/ExerciseService";
import { getAllFoods } from "../services/FoodService";
import { getAllGoals } from "../services/GoalService";

import {
  totalCaloriesBurned,
  totalCaloriesConsumed,
  totalCaloriesGoal,
} from "../services/DashboardService";

function Dashboard() {
  const dispatch = useDispatch();

  const exercises = useSelector((state) => state.exercises);
  const goals = useSelector((state) => state.goals);
  const foods = useSelector((state) => state.foods);

  useEffect(() => {
    dispatch(getAllExercises());
    dispatch(getAllFoods());
    dispatch(getAllGoals());
  }, [dispatch]);

  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl w-full pl-20 pt-9 font-[sintony]">Dashboard</div>
      <div className="text-lg mx-[12vh] lg:mx-[32vh] mt-8 font-[poppins] text-slate-600">
        GymPlus is your all-in-one fitness companion designed to help you
        achieve your health and wellness goals. Whether you're a seasoned
        athlete or just starting your fitness journey, this app is here to
        support you every step of the way. GymPlus is more than just a fitness
        app, it's a comprehensive tool to help you lead a healthier, happier
        life.
        <p className="mt-3">
          Start your journey to a better you today with GymPlus!
        </p>
      </div>
      <div className="flex flex-wrap justify-center items-center my-[4vh] mx-[16vh] gap-16 font-[poppins]">
        <MetricCard
          label={"Total Calories Burned"}
          value={totalCaloriesBurned(exercises)}
          bannerImg={img1}
        />
        <MetricCard
          label={"Total Calories Consumed"}
          value={totalCaloriesConsumed(foods)}
          bannerImg={img2}
        />
        <MetricCard
          label={"Total Calories Goal"}
          value={totalCaloriesGoal(goals)}
          bannerImg={img3}
        />
        <MetricCard
          label={"Remaining Calories to Goal"}
          value={totalCaloriesGoal(goals) - totalCaloriesBurned(exercises)}
          bannerImg={img4}
        />
      </div>
    </div>
  );
}

export default Dashboard;
