import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const URL = "http://localhost:8000/rentals/";

const ShowRents = () => {
  const [rents, setRent] = useState([]);
  useEffect(() => {
    getRents();
  }, []);

  const getRents = async () => {
    try {
      const res = await axios.get(URL);
      setRent(res.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  const deleteRent = async (id) => {
    await axios.delete(`${URL}${id}`);
    getRents();
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col">
          <Link to="/create" className="btn btn-primary mt-2 mb-2">
            + add rent
          </Link>
          <table className="table">
            <thead className="table-primary">
              <tr>
                <th>ID</th>
                <th>Price per day</th>
                <th>Total Price</th>
                <th>State</th>
                <th>Payment Method</th>
                <th>Car</th>
                <th>User</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {rents.map((rent) => (
                <tr key={rent.id}>
                  <td>{rent.id}</td>
                  <td>{rent.pricePerDay}</td>
                  <td>{rent.totalPrice}</td>
                  <td>{rent.state}</td>
                  <td>{rent.paymentMethod}</td>
                  <td>{rent.car}</td>
                  <td>{rent.user}</td>
                  <td>
                    <Link to={`/edit/${rent.id}`} className="btn btn-info">
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteRent(rent.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ShowRents;
