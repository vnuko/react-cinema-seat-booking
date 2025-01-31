import { useContext } from "react";
import CinemaRow from "./CinemaRow";
import { ShowtimeContext } from "../context/ShowtimeProvider";

function Cinema() {
  const { showtime } = useContext(ShowtimeContext);

  return (
    <div className="cinema-container">
      <div className="screen-wrap">
        <div className="screen"></div>
      </div>
      {showtime.rows &&
        showtime.rows.map((row) => (
          <CinemaRow key={row.name} rowName={row.name} seats={row.seats} />
        ))}
    </div>
  );
}

export default Cinema;
