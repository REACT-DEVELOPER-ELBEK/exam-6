import { useEffect, useState } from "react";
import "./Details.scss";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Details = () => {
  const [detail, setDetail] = useState([])
  const location = useLocation()
  const MAIN_URL =
    "https://64dcf61be64a8525a0f76c4d.mockapi.io/api/v1/products";
  useEffect(() => {
    axios(`${MAIN_URL}/${location.pathname.slice(-1)}`)
      .then((response) => setDetail(response.data))
      .catch((error) => console.log(error));
  }, []);
  console.log(detail);

  return <div>
      <h1>Product detail</h1>
  </div>;
};

export default Details;
