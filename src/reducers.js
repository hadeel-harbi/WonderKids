import { combineReducers } from "redux";

const scoreReducer = (state = 0, action) => {
  switch (action.type) {
    case "CORRECT":
      return state + 10;

    case "RESET":
      return 0;

    default:
      return state;
  }
};

const usernameReducer = (state = "user", action) => {
  switch (action.type) {
    case "USERNAME":
      return action.payload;

    default:
      return state;
  }
};

const leaderBoardReducer = (state = [], action) => {
  switch (action.type) {
    case "NEWSCORE":
      return [...state, ...action.payload];

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  score: scoreReducer,
  username: usernameReducer,
  leaderBoard: leaderBoardReducer,
});

export default rootReducer;
