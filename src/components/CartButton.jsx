import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { ShowtimeContext } from "../context/ShowtimeProvider";

function CartButton() {
  const { selectedSeats } = useContext(ShowtimeContext);

  return (
    <footer>
      <div className="btn btn-cart">
        <FontAwesomeIcon icon={faCartShopping} /> Cart
        {selectedSeats && selectedSeats.length > 0 && (
          <span className="badge">{selectedSeats.length}</span>
        )}
      </div>
    </footer>
  );
}

export default CartButton;
