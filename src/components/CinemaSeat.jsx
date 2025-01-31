import { useContext } from "react";
import { ShowtimeContext } from "../context/ShowtimeProvider";

function CinemaSeat({ seat }) {
  const { selectedSeats, toggleSeat } = useContext(ShowtimeContext);

  return (
    <div
      className={selectedSeats.includes(seat.id) ? "seat selected" : "seat"}
      onClick={() => toggleSeat(seat)}
    >
      {seat.name}
    </div>
  );
}

export default CinemaSeat;
