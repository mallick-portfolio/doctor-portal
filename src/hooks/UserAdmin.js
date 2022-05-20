import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useAdmin = (email) => {
  console.log(email);
  const [admin, setAdmin] = useState(false);
  useEffect(() => {
    if (email) {
      axios
        .get(`http://localhost:5000/users/admin/${email}`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
        .then((res) => {
          console.log(res.status);
          if (res.status === 200) {
            setAdmin(res.data.role);
          }
          else{
            toast('please try again')
          }
        });
    }
  }, [email]);

  return [admin];
};
export default useAdmin;
