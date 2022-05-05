import axios from "axios";
import { createRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const URL = "http://localhost:8000/rentals/";

const CreateRent = () => {
  const [pricePerDay, setPricePerDay] = useState("");
  const [totalPrice, setTotalPrice] = useState("");
  const [state, setSate] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [car, setCar] = useState("");
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  const form = async (e) => {
    e.preventDefault();
    try {
      await axios.post(URL, {
        pricePerDay: pricePerDay,
        totalPrice: totalPrice,
        state: state,
        paymentMethod: paymentMethod,
        car: car,
        user: user,
      });
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="container mt-2">
      <h3>Create Rent</h3>
      <form onSubmit={form}>
        <div className="form-label">Price per day</div>
        <input
          value={pricePerDay}
          onChange={(e) => setPricePerDay(e.target.value)}
          type="number"
          className="form-control"
        />
        <div className="form-label">Total price</div>
        <input
          value={totalPrice}
          onChange={(e) => setTotalPrice(e.target.value)}
          type="number"
          className="form-control"
        />
        <div className="form-label">State</div>
        <input
          value={state}
          onChange={(e) => setSate(e.target.value)}
          type="text"
          className="form-control"
        />
        <div className="form-label">Payment method</div>
        <input
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          type="text"
          className="form-control"
        />
        <div className="form-label">Car</div>
        <input
          value={car}
          onChange={(e) => setCar(e.target.value)}
          type="text"
          className="form-control"
        />
        <div className="form-label">Client</div>
        <input
          value={user}
          onChange={(e) => setUser(e.target.value)}
          type="text"
          className="form-control"
        />
        <button className="btn btn-primary mt-2" type="submit">
          Save
        </button>
      </form>
    </div>
  );
};

export default CreateRent;
