type State = {
  selectedTip: number;
  billValue: number;
  personCount: number;
};

type Action =
  | { type: "SET_TIP"; payload: number }
  | { type: "SET_BILL_VALUE"; payload: number }
  | { type: "SET_PERSON_COUNT"; payload: number }
  | { type: "RESET" };

export const initialState: State = {
  selectedTip: 0,
  billValue: 0,
  personCount: 1,
};

export function reducer(state: State, action: Action) {
  switch (action.type) {
    case "SET_TIP":
      return {
        ...state,
        selectedTip: action.payload,
      };
    case "SET_BILL_VALUE":
      return {
        ...state,
        billValue: action.payload,
      };
    case "SET_PERSON_COUNT":
      return {
        ...state,
        personCount: action.payload,
      };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}
