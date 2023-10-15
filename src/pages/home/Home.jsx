import { useEffect, useState } from "react";
import "./Home.scss";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { RxExit } from "react-icons/rx";
import { ToastContainer, toast } from "react-toastify";
import { FiSearch } from "react-icons/fi";
import {VscAccount} from 'react-icons/vsc'
import {
  editButton,
  success,
  deleteButton,
  plus,
  pushArrow,
} from "../../assets/img";
// ?page=2&limit=5///////////////////////////////

const Home = () => {
  const MAIN_URL =
    "https://64dcf61be64a8525a0f76c4d.mockapi.io/api/v1/products";
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios(`${MAIN_URL}?limit=3&page=${pagination[0]}`)
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, []);

  // function searchProduct(e){
  //   let value = e.target.value
  //   setSearch(value)
  // }
  // const [search, setSearch] = useState('')

  function deleteProduct(productId) {
    axios
      .delete(`${MAIN_URL}/${productId}`)
      .then((response) => setDeletedItem(productId))
      .catch((error) => console.log(error));
    setModal(true);
  }
  const [options, setOptions] = useState(false);
  const [modal, setModal] = useState(false);

  const [pagination, setPagination] = useState([1]);
  const [deletedItem, setDeletedItem] = useState("");
  

  function leaveAccaunt() {
    if (JSON.parse(localStorage.getItem("userName"))) {
      localStorage.clear();
      toast.success("You left your account", {
        theme: "colored",
      });
      setTimeout(() => {
        window.location.reload();
      }, 1270);
    }else{
      toast.info('To Login please click on Login button', {
        theme: "colored",
        icon: <VscAccount/>
      });
    }
  }
  const toLogin = useNavigate()
  return !JSON.parse(localStorage.getItem('userName'))?toLogin('/login'):(
    <div className="home">
      <div className="modal__wrapper">
        <div
          className="deleted__modal"
          style={modal ? { top: "-70vh" } : { top: "-700vh" }}
        >
          <img src={success} alt="" />
          <h2>Are you sure to delete ID {deletedItem} product?</h2>
          <button onClick={() => window.location.reload()}>Delete</button>
        </div>
      </div>
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
            <button onClick={leaveAccaunt}>
              <RxExit />
              {JSON.parse(localStorage.getItem("userName")) ? "Выйти" : "Войти"}
            </button>
            <ToastContainer />
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
            <table>
              <thead>
                <tr>
                  <th>
                    <input type="checkbox" />
                    Наименование
                  </th>
                  <th>Артикул</th>
                  <th>Бренд</th>
                  <th>Цена</th>
                  <th>Цена со скидкой</th>
                </tr>
              </thead>
              {products.map((product, index) => (
                <tbody key={index}>
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
                </tbody>
              ))}
            </table>
            <div className="pagination__navigators">
              <select name="pagination">
                <option value="1" defaultValue></option>
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
                <button onClick={()=>setPagination([1])}>1</button>
                <button onClick={()=>setPagination([2])}>2</button>
                <button onClick={()=>setPagination([3])}>3</button>
                <button>&#62;</button>
              </div>
            </div>
          </div>
          <footer style={options ? { display: "flex" } : { display: "none" }}>
            <Link to="/add-product">
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
