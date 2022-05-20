import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading.jsx";

const AllUsers = () => {
  const {
    isLoading,
    error,
    data: users,
    refetch,
  } = useQuery("repoData", () =>
    fetch("http://localhost:5000/users", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    console.log(error);
  }

  const handleAdmin = async (email) => {
    await axios
      .put(`http://localhost:5000/users/admin/${email}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        if (res) {
          toast("Admin create successfully");
          refetch();
          console.log(res);
        }
      });
  };

  return (
    <table class="table w-full">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Role</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, i) => (
          <tr key={user._id}>
            <th>{i + 1}</th>
            <td>{user.email}</td>
            <td>Editor</td>
            <td>
              {user.role !== "admin" && (
                <button
                  onClick={() => handleAdmin(user.email)}
                  className="btn btn-primary text-white"
                >
                  Make Admin
                </button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AllUsers;
