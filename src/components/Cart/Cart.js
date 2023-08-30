import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartList = useSelector((state) => state.cart.items);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartList.map((el) => {
          return (
            <CartItem
              item={{
                title: el.title,
                quantity: el.quantity,
                total: el.totalPrice,
                price: el.price,
                key: el.id,
              }}
            />
          );
        })}
      </ul>
    </Card>
  );
};

export default Cart;
