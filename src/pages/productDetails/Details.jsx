import { useEffect, useState } from "react";
import "./Details.scss";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";

const Details = () => {
  const [detail, setDetail] = useState([]);
  const param = useParams()
  const paramId = param.id;
  const URL =
    `https://64dcf61be64a8525a0f76c4d.mockapi.io/api/v1/products`;
  useEffect(()=>{
    axios.get(`${URL}/${paramId}`)
    .then(response=>setDetail(response.data))
    .catch(err=>console.log(err))
  }, [])
  let details = [detail]
  console.log(details);
  return (
    <>
    <div className="product">
      <div className="container">
        <div className="product__wrapper">
          {details.map((product, index) => (
              <div className="product__item" key={index}>
                <div className="detail__image">
                  <img src={product.image} alt="" />
                </div>
                <div className="detail__content">
                  <h1>{product.name}</h1>
                  <div className="detail__price">
                    <p>${product.price}</p>
                    <h6>$ {product.priceSale}</h6>
                  </div>
                  <h2>{product.brand}</h2>
                  <h3>{product.description}</h3>
                  <h4>Code: <span>{product.code}</span></h4>
                </div>
              </div>
          ))}
        </div>
      </div>
    </div></>
  );
};

export default Details;
