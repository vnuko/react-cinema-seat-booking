import { useContext } from "react";
import { ShowtimeContext } from "../context/ShowtimeProvider";

function Header() {
  const { showtime } = useContext(ShowtimeContext);
  const movie = showtime.movie || {};
  const cinema = showtime.cinema || {};
  const room = showtime.room || {};

  return (
    <header>
      <div className="title">
        <h6>{movie.title}</h6>
        <span>
          <button>?</button>
        </span>
        <span>
          <button>ENG</button>
        </span>
      </div>
      <div className="sub-title">
        <div>
          <span>{formatTimestamp(showtime.timestamp)}</span>
          <span> • </span>
          <span>{cinema.name}</span>
          <span> • </span>
          <span>{room.name}</span>
        </div>
        <span className="note">{formatMovieNote(showtime)}</span>
      </div>
    </header>
  );
}

function formatTimestamp(timestamp) {
  if (!timestamp) return "";

  const date = new Date(timestamp);
  const weekday = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
    date
  );
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const year = date.getFullYear();
  const time = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(date);

  return `${weekday} • ${month}/${day}/${year} • ${time}`;
}

function formatMovieNote(showtime) {
  if (!showtime || !showtime.movie) return "";

  const { type, language, age_restriction, features } = showtime.movie;

  const ageText = age_restriction
    ? `Not suitable for viewers under ${age_restriction} years`
    : "Suitable for all ages";

  const featuresText =
    features.length > 0 ? features.join(", ") : "No special features";

  return `${type} projection • ${language} • ${ageText} • ${featuresText}`;
}

export default Header;
