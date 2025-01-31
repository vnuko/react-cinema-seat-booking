import "./App.css";
import CartButton from "./components/CartButton";
import Cinema from "./components/Cinema";
import Header from "./components/Header";
import Legend from "./components/Legend";
import ShowtimeProvider from "./context/ShowtimeProvider";

function App() {
  return (
    <>
      <ShowtimeProvider>
        <Header />
        <Legend />
        <Cinema />
        <CartButton />
      </ShowtimeProvider>
    </>
  );
}

export default App;
