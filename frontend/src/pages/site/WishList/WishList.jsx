import React, { useContext, useEffect } from "react";
import MainContext from "../../../context/context";
import { Helmet } from "react-helmet-async";

const WishList = () => {
  const { wishlist, deleteFromWishlist } = useContext(MainContext);
  return (
    <div className="container my-5 ">
      <Helmet>
        <title>Wishlist</title>
      </Helmet>
      <table class="table my-5 ">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {wishlist.map((item, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>
                <img src={item.image} alt="" width="100px" height="100px" />
              </td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>
                <button className="btn btn-danger " onClick={()=>{
                    deleteFromWishlist(item._id)
                }}>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WishList;
