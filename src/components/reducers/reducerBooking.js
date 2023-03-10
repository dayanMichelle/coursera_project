import { fetchAPI } from "../../apis";

export const initializeTimes = fetchAPI(new Date());

export function updateTimes(state, action) {
  switch (action.type) {
    case "AVAILABLE_TIMES":
      const newDate = new Date(action.payload);
      const newTimes = fetchAPI(newDate);
      return newTimes;
    default:
      return state;
  }
}
