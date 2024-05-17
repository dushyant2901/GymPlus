const initialState = {
  exercises: [],
  goals: [],
  foods: [],
  loading: false,
  error: null,
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_EXERCISES":
      return {
        ...state,
        exercises: action.payload,
      };
    case "ADD_EXERCISE":
      return {
        ...state,
        exercises: [...state.exercises, action.payload],
      };
    case "DELETE_EXERCISE":
      return {
        ...state,
        exercises: state.exercises.filter(({ _id }) => _id !== action.payload),
      };
    case "FETCH_GOALS":
      return {
        ...state,
        goals: action.payload,
      };
    case "ADD_GOAL":
      return {
        ...state,
        goals: [...state.goals, action.payload],
      };
    case "DELETE_GOAL":
      return {
        ...state,
        goals: state.goals.filter(({ _id }) => _id !== action.payload),
      };
    case "FETCH_FOODS":
      return {
        ...state,
        foods: action.payload,
      };
    case "ADD_FOOD":
      return {
        ...state,
        foods: [...state.foods, action.payload],
      };
    case "DELETE_FOOD":
      return {
        ...state,
        foods: state.foods.filter(({ _id }) => _id !== action.payload),
      };
    case "INITIATE_LOADER":
      return {
        ...state,
        loading: !state.loading,
      };
    case "SERVER_ERROR":
      return {
        ...state,
        error: "Server Error, Please Try Again Later",
      };
    default:
      return state;
  }
};

export default AppReducer;
