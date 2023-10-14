import { Link, useNavigate } from "react-router-dom";
import "./Adding.scss";
import { logOut } from "../../assets/img";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Adding = () => {
  const [name, setName] = useState("");
  const [barand, setBrand] = useState("");
  const [code, setCode] = useState("");
  const [price, setPrice] = useState("");
  const [priceSale, setPriceSale] = useState("");
  const [description, setDescription] = useState("");

  const toHome = useNavigate();

  function postProduct(e) {
    if((name,barand,code,price,priceSale,description).trim().length == 0){
      toast.error("Please fill empty field(s)", {
        theme: "colored",
      })
    }
    else{
      axios.post("https://64dcf61be64a8525a0f76c4d.mockapi.io/api/v1/products", {
        name,
        barand,
        code,
        price,
        priceSale,
        description
      });
      setTimeout(() => {
        toHome("/");
      }, 1200);
      toast.success("Product successfully added", {
        theme: "colored",
      })
    }
  }
  return (
    <div className="add">
      <div className="container">
        <div className="add__wrapper">
          <nav>
            <div className="nav__title">
              <h2>Новый товар</h2>
              <div className="nav__title__links">
                <Link to="/">Главная</Link>
                <p>/</p>
                <Link to="/">Товары</Link>
                <p>/</p>
                <Link to="/add-product">Новый товар</Link>
              </div>
            </div>
            <button>
              <img src={logOut} alt="" />
              <p>Выйти</p>
            </button>
          </nav>
          <div className="adding__form">
            <button>Основные</button>
            <div className="adding__inputs">
              <div className="input">
                <label>
                  Название <span>*</span>
                </label>
                <input type="text" onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="flex__input">
                <div className="input1">
                  <label>
                    Бренд <span>*</span>
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setBrand(e.target.value)}
                  />
                </div>
                <div className="input1">
                  <label>Артикул производителя *</label>
                  <input
                    type="text"
                    onChange={(e) => setCode(e.target.value)}
                  />
                </div>
              </div>
              <div className="desc__input">
                <label>
                  Описание <span>*</span>
                </label>
                <input
                  type="text"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="price__flex">
                <div className="input2">
                  <label>Цена</label>
                  <input
                    type="text"
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <div className="input2">
                  <label>Цена со скидкой</label>
                  <input
                    type="text"
                    onChange={(e) => setPriceSale(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="submit__btns">
            <div>
              <button onClick={() => postProduct()}>Сохранить</button>
              <ToastContainer />
            </div>
            <Link to='/'>
              <button>Отмена</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adding;
