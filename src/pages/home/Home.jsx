import { useEffect, useState } from "react";
import "./Home.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { editButton, deleteButton } from "../../assets/img";
// ?page=2&limit=5///////////////////////////////

const Home = () => {
  const MAIN_URL =
    "https://64dcf61be64a8525a0f76c4d.mockapi.io/api/v1/products";
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios(`${MAIN_URL}?page=2&limit=4`)
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, []);
  console.log(products);
  return (
    <div className="home">
      <div className="container">
        <div className="home__wrapper">
          <nav>
            <div className="nav__title">
              <h2>Товары</h2>
              <div className="nav__title__links">
                <Link to="/">Главная</Link>
                <p>/</p>
                <Link to="/">Товары</Link>
              </div>
            </div>
          </nav>
          <div className="all__products">
            <div className="all__products__header">
              <h2>Все товары ({products.length})</h2>
              <div className="product__search">
                <label htmlFor="search">
                  <FiSearch />
                </label>
                <input
                  type="search"
                  name="search"
                  id="search"
                  placeholder="Поиск"
                />
              </div>
            </div>
            <table>
              <tr>
                <th>
                  <input type="checkbox" /> <p>Наименование</p>
                </th>
                <th>Артикул</th>
                <th>Бренд</th>
                <th>Цена</th>
                <th>Цена со скидкой</th>
              </tr>
              {products.map((product) => (
                <>
                  <tr>
                    <td>
                      <input type="checkbox" />
                      <h3>Товар {product.id}</h3>
                    </td>
                    <td>{product.code}</td>
                    <td>{product.brand}</td>
                    <td>{product.price}</td>
                    <td>{product.priceSale}</td>
                    <td className="function__btns">
                        <img onClick={()=>product.id} src={editButton} alt="" />
                        <img src={deleteButton} alt="" />
                    </td>
                  </tr>
                </>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
