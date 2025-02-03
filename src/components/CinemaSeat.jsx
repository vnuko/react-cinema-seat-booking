import { useContext } from "react";
import { ShowtimeContext } from "../context/ShowtimeProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWheelchair } from "@fortawesome/free-solid-svg-icons";

const STATUS = {
  FREE: "free",
  OCCUPIED: "occupied",
};

function CinemaSeat({ seat }) {
  const { selectedSeats, toggleSeat } = useContext(ShowtimeContext);

  function onSeatClick(seat) {
    if (seat.status === STATUS.FREE) {
      toggleSeat(seat);
    }
  }

  let seatClassName = "seat";
  if (seat.accessible && seat.accessible === true) {
    seatClassName += " accessible";
  }

  if (seat.status === "occupied") {
    seatClassName += " occupied";
  } else if (seat.status === "free") {
    seatClassName += selectedSeats.some(
      (selectedSeat) => selectedSeat.id === seat.id
    )
      ? " selected"
      : "";
  }

  return (
    <div className={seatClassName} onClick={() => onSeatClick(seat)}>
      {seat.accessible === true ? (
        <FontAwesomeIcon icon={faWheelchair} />
      ) : (
        seat.name
      )}
    </div>
  );
}

export default CinemaSeat;
