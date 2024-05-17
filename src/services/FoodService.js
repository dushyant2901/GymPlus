import axios from "axios";
const api = "https://gymplus-backend.onrender.com";

const getAllFoods = () => async (dispatch) => {
  try {
    dispatch({ type: "INITIATE_LOADER" });
    const response = await axios.get(`${api}/food`);
    if (response.status === 200) {
      dispatch({ type: "FETCH_FOODS", payload: response.data.foods });
    }
    dispatch({ type: "INITIATE_LOADER" });
  } catch (error) {
    dispatch({ type: "SERVER_ERROR" });
  }
};

const addFood = (food) => async (dispatch) => {
  try {
    const response = await axios.post(`${api}/food`, {
      foodData: food,
    });
    if (response.status === 201) {
      dispatch({ type: "ADD_FOOD", payload: response.data.food });
    }
  } catch (error) {
    dispatch({ type: "SERVER_ERROR" });
  }
};

const deleteFood = (foodId) => async (dispatch) => {
  try {
    const response = await axios.delete(`${api}/food/${foodId}`);
    if (response.status === 200) {
      dispatch({ type: "DELETE_FOOD", payload: foodId });
    }
  } catch (error) {
    dispatch({ type: "SERVER_ERROR" });
  }
};

export { getAllFoods, addFood, deleteFood };
