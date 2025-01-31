import { useContext } from "react";
import { ShowtimeContext } from "../context/ShowtimeProvider";

function Legend() {
  const { showtime } = useContext(ShowtimeContext);

  return <section className="legend">{formatPriceNote(showtime)}</section>;
}

function formatPriceNote(showtime) {
  if (!showtime || !showtime.price) return "";

  const { currency, adult, senior, youth, disabled } = showtime.price;

  const formatPrice = (amount) =>
    `${currency === "EUR" ? "€" : currency}${amount.toFixed(2)}`;

  return `Seat ${formatPrice(adult)} • Youth ${formatPrice(
    youth
  )} • Senior ${formatPrice(senior)} • Disabled ${formatPrice(disabled)}`;
}

export default Legend;
