import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../../../context/CartContext";

const Product = ({ id, name, description }) => {

   // Note: this id should come from api
  // const product = { id: 1 };
  const {
    getCartItemCountByProductId,
    addItemToCart,
    removeItemFromCart,
    itemcount,
  } = useContext(CartContext);
  const [count, setCount] = useState(0);

  const upda = async (newCount) => {
    await itemcount(id, newCount);
    setCount(newCount);
  };

  const remove = async () => {
    await removeItemFromCart(id);
    setCount(0);
  };

  useEffect(() => {
    if (id) {
      setCount(getCartItemCountByProductId(id));
    }
  }, [id, getCartItemCountByProductId]);

  return (
    // <div data-cy={`product-${product.id}`}></div>
    <div
      data-cy="product"
      style={{
        backgroundColor: "yellow",
        border: "10px solid black",
        borderRadius: "30px",
        padding: "20px",
        minWidth: "200px",
      }}
    >
      <h3 data-cy="product-name">{name}</h3>
      <h6 data-cy="product-description">{description}</h6>
      {count === 0 ? (
        <button
          data-cy="product-add-item-to-cart-button"
          onClick={() => {
            addItemToCart({
              productId: id,
              count: 1,
            });
          }}
        >
          Add To Cart
        </button>
      ) : (
        <div>
          <button
            data-cy="product-increment-cart-item-count-button"
            onClick={() => upda(count + 1)}
          >
            +
          </button>
          <span data-cy="product-count">
          {
            // Count here from CartItems
          }
          {count}
          </span>
          <button
            data-cy="product-decrement-cart-item-count-button"
            onClick={() => upda(count - 1)}
          >
            -
          </button>
          <button
            data-cy="product-remove-cart-item-button"
            onClick={remove}
          >
            Remove from cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Product;
