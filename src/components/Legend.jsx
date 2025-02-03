import { useContext } from "react";
import { ShowtimeContext } from "../context/ShowtimeProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicket, faWheelchair } from "@fortawesome/free-solid-svg-icons";

function Legend() {
  const { selectedSeats, showtime } = useContext(ShowtimeContext);
  if (!showtime || !showtime.price) return "";

  const { adult, disabled, currency } = showtime.price;

  let totalPrice = 0;
  if (selectedSeats && selectedSeats.length > 0) {
    selectedSeats.map((seat) => {
      if (seat.accessible && seat.accessible === true) {
        totalPrice += showtime.price.disabled;
      } else {
        totalPrice += showtime.price.adult;
      }
    });
  }

  return (
    <div className="legend">
      <span>
        <FontAwesomeIcon icon={faTicket} /> {formatPrice(adult, currency)}
        {" • "}
        <FontAwesomeIcon icon={faWheelchair} />{" "}
        {formatPrice(disabled, currency)}
      </span>
      <span className="total-price">
        Total Price: {formatPrice(totalPrice, currency)}
      </span>
    </div>
  );
}

function formatPrice(value, currency) {
  return (currency === "EUR" ? "€" : currency) + " " + value.toFixed(2);
}

export default Legend;
