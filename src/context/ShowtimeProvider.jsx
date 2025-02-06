import { createContext, useEffect, useReducer } from "react";

export const ShowtimeContext = createContext();

const ACTIONS = {
  SET_SHOWTIME: "SET_SHOWTIME",
  TOGGLE_SEAT: "TOGGLE_SEAT",
};

const initialState = {
  showtime: {},
  selectedSeats: [],
  totalPrice: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_SHOWTIME:
      return { ...state, showtime: action.payload, selectedSeats: [] };
    case ACTIONS.TOGGLE_SEAT:
      const seat = action.payload;
      if (seat.status === "occupied") {
        return state;
      }

      const isAlreadySelected = state.selectedSeats.some(
        (selectedSeat) => selectedSeat.id === seat.id
      );

      return {
        ...state,
        selectedSeats: isAlreadySelected
          ? state.selectedSeats.filter(
              (selectedSeat) => selectedSeat.id != seat.id
            )
          : [...state.selectedSeats, seat],
      };
    default:
      return state;
  }
};

function ShowtimeProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchShowtime = async () => {
      const response = await fetch(`${import.meta.env.BASE_URL}showtime.json`);
      const data = await response.json();
      dispatch({ type: ACTIONS.SET_SHOWTIME, payload: data });
    };

    fetchShowtime();
  }, []);

  function toggleSeatSelection(seat) {
    dispatch({ type: ACTIONS.TOGGLE_SEAT, payload: seat });
  }

  return (
    <ShowtimeContext.Provider
      value={{
        showtime: state.showtime,
        selectedSeats: state.selectedSeats,
        toggleSeat: toggleSeatSelection,
      }}
    >
      {children}
    </ShowtimeContext.Provider>
  );
}

export default ShowtimeProvider;
