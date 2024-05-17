import axios from "axios";
const api = "https://gymplus-backend.onrender.com";

const getAllGoals = () => async (dispatch) => {
  try {
    dispatch({ type: "INTIATE_LOADER" });
    const response = await axios.get(`${api}/goals`);
    if (response.status === 200) {
      dispatch({ type: "FETCH_GOALS", payload: response.data.goals });
    }
    dispatch({ type: "INTIATE_LOADER" });
  } catch (error) {
    dispatch({ type: "SERVER_ERROR" });
  }
};

const addGoal = (goal) => async (dispatch) => {
  try {
    const response = await axios.post(`${api}/goals`, {
      goalData: goal,
    });
    if (response.status === 201) {
      dispatch({ type: "ADD_GOAL", payload: response.data.goal });
    }
  } catch (error) {
    dispatch({ type: "SERVER_ERROR" });
  }
};

const deleteGoal = (goalId) => async (dispatch) => {
  try {
    const response = await axios.delete(`${api}/goals/${goalId}`);
    if (response.status === 200) {
      dispatch({ type: "DELETE_GOAL", payload: goalId });
    }
  } catch (error) {
    dispatch({ type: "SERVER_ERROR" });
  }
};

export { getAllGoals, addGoal, deleteGoal };
