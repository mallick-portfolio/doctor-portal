import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init.js";
import Loading from "../Shared/Loading.jsx";
const MyAppoinment = () => {
  const [user] = useAuthState(auth);
  const [loading, setLoading] = useState(true);
  const [appoinments, setAppoinment] = useState([]);
  useEffect(() => {
    if (user) {
      axios
        .get(`http://localhost:5000/booking?patient=${user?.email}`)
        .then((res) => {
          setAppoinment(res.data);
          setLoading(false);
        });
    }
  }, [user]);
  return (
    <div class="overflow-x-auto">
      <table class="table w-full">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Treatment</th>
            <th>Job</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <Loading />
          ) : (
            appoinments.map((appoinment, i) => (
              <tr key={appoinment._id}>
                <th>{i+1}</th>
                <td>{appoinment.patientName}</td>
                <td>{appoinment.name}</td>
                <td>{appoinment.time}</td>
                <td>{appoinment.date}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MyAppoinment;
