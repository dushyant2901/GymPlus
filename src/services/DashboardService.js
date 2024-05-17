export const totalCaloriesBurned = (exercises) => {
  return exercises.reduce(
    (total, { caloriesBurned }) => total + caloriesBurned,
    0
  );
};

export const totalCaloriesConsumed = (foods) => {
  return foods.reduce((total, { calories }) => total + calories, 0);
};

export const totalCaloriesGoal = (goals) => {
  return goals.reduce((total, { targetCalories }) => total + targetCalories, 0);
};
