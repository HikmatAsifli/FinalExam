import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ROUTES from "./routes/routes";
import MainContext from "./context/context";
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "./config/config";
import { HelmetProvider } from "react-helmet-async";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

function App() {
  const [data, setData] = useState([]);
  const router = createBrowserRouter(ROUTES);
  const [basket, setBasket] = useState(
    localStorage.getItem("basket")
      ? JSON.parse(localStorage.getItem("basket"))
      : []
  );
  const [wishlist, setWishlist] = useState(
    localStorage.getItem("wishlist")
      ? JSON.parse(localStorage.getItem("wishlist"))
      : []
  );
  useEffect(() => {
    axios.get(BASE_URL).then((res) => {
      setData([...res.data]);
      console.log(res.data);
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  function addToWishlist(id) {
    let wishlistItem = wishlist.find((x) => x._id == id);

    if (!wishlistItem) {
      let target = data.find((x) => x._id == id);

      let newItem = {
        ...target,
        count: 1,
        totalPrice: target.price,
      };
      setWishlist([...wishlist, newItem]);
    } else if (target.count > 1) {
      target.count -= 1;
      setWishlist([...wishlist]);
    } else {
      setWishlist([...wishlist.filter((x) => x._id != id)]);
    }
  }
  function deleteFromWishlist(id) {
    let target = wishlist.find((x) => x._id == id);
    if (target.count > 1) {
      target.count -= 1;
      target.totalPrice -= target.price;
      setWishlist([...wishlist]);
    } else {
      setWishlist([...wishlist.filter((x) => x._id != id)]);
    }
  }

  function addToBasket(id) {
    let basketItem = basket.find((x) => x._id == id);

    if (!basketItem) {
      let target = data.find((x) => x._id == id);

      let newItem = {
        ...target,
        count: 1,
        totalPrice: target.price,
      };
      setBasket([...basket, newItem]);
    } else {
      basketItem.count += 1;
      basketItem.totalPrice += basketItem.price;
      setBasket([...basket]);
    }
  }

  function deleteFromBasket(id) {
    let target = basket.find((x) => x._id == id);
    if (target.count > 1) {
      target.count -= 1;
      target.totalPrice -= target.price;
      setBasket([...basket]);
    } else {
      setBasket([...basket.filter((x) => x._id != id)]);
    }
  }

  const contextData = {
    data,
    setData,
    addToBasket,
    deleteFromBasket,
    basket,
    setBasket,
    wishlist,
    setWishlist,
    addToWishlist,
    deleteFromWishlist,
  };

  return (
    <>
      <MainContext.Provider value={contextData}>
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      </MainContext.Provider>
    </>
  );
}

export default App;
