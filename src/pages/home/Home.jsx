import { useEffect, useState } from "react";
import "./Home.scss";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { editButton, deleteButton, plus, pushArrow } from "../../assets/img";
// ?page=2&limit=5///////////////////////////////

const Home = () => {
  const MAIN_URL =
    "https://64dcf61be64a8525a0f76c4d.mockapi.io/api/v1/products";
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios(`${MAIN_URL}?page=1&limit=3`)
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, []);

  function deleteProduct(productId) {
    axios
      .delete(`${MAIN_URL}/${productId}`)
      .then((response) => console.log(`Product with ${productId} id deleted`))
      .catch((error) => console.log(error));
  }
  const [options, setOptions] = useState(false);

  // const [pagination, setPagination] = useState('')
  // console.log(pagination*1);
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
              <h2>Все товары ({MAIN_URL.length})</h2>
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
            <table key={products.id}>
              <tr>
                <th>
                  <input type="checkbox" /> <p>Наименование</p>
                </th>
                <th>Артикул</th>
                <th>Бренд</th>
                <th>Цена</th>
                <th>Цена со скидкой</th>
              </tr>
              {products.map((product, index) => (
                <>
                  <tr>
                    <td key={index}>
                      <input type="checkbox" />
                      <Link to={`/${product.id}`}>Товар {product.id}</Link>
                    </td>
                    <td>{product.code}</td>
                    <td>{product.brand}</td>
                    <td>{product.price}</td>
                    <td>{product.priceSale}</td>
                    <td className="function__btns">
                      <img src={editButton} alt="" />
                      <img
                        onClick={() => deleteProduct(product.id)}
                        src={deleteButton}
                        alt=""
                      />
                    </td>
                  </tr>
                </>
              ))}
            </table>
            <div className="pagination__navigators">
              <select name="pagination">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
              </select>
              <div className="select__pagination">
                <button>&#60;</button>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>&#62;</button>
              </div>
            </div>
          </div>
          <footer style={options ? { display: "flex" } : { display: "none" }}>
            <Link to='/add-product'>
              <button>
                <img src={plus} alt="plus" /> <p>Новый товар</p>
              </button>
            </Link>
            <h3>© Anymarket 2022</h3>
          </footer>
          <button
            style={
              options
                ? { transform: "rotate(180deg)" }
                : { transform: "rotate(360deg)" }
            }
            onClick={options ? () => setOptions(false) : () => setOptions(true)}
            id="arrow"
          >
            <img src={pushArrow} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
