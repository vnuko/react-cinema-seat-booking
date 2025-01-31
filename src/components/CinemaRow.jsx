import CinemaSeat from "./CinemaSeat";

function CinemaRow({ rowName, seats }) {
  return (
    <div className="row">
      <div className="row-name">{rowName}</div>
      {seats.map((seat) => (
        <CinemaSeat key={seat.id} seat={seat} />
      ))}
      <div className="row-name">{rowName}</div>
    </div>
  );
}

export default CinemaRow;
