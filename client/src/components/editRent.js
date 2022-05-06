import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URL = "http://localhost:8000/rentals/";

const EditRent = () => {
  const [pricePerDay, setPricePerDay] = useState();
  const [totalPrice, setTotalPrice] = useState();
  const [state, setState] = useState();
  const [paymentMethod, setPaymentMethod] = useState();
  const [car, setCar] = useState();
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const { id } = useParams();

  const update = async (e) => {
    e.preventDefault();
    await axios.put(URL + id, {
      pricePerDay: pricePerDay,
      totalPrice: totalPrice,
      state: state,
      paymentMethod: paymentMethod,
      car: car,
      user: user,
    });
    navigate("/");
  };

  useEffect(() => {
    getRentById();
  }, []);

  const getRentById = async () => {
    const res = await axios.get(URL + id);
    setPricePerDay(res.data.pricePerDay);
    setTotalPrice(res.data.totalPrice);
    setState(res.data.state);
    setPaymentMethod(res.data.paymentMethod);
    setCar(res.data.car);
    setUser(res.data.user);
  };

  return (
    <div className="container mt-2">
      <h3>Edit Rent</h3>
      <form onSubmit={update}>
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
          onChange={(e) => setState(e.target.value)}
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

export default EditRent;
