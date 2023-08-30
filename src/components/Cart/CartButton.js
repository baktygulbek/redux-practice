import { useDispatch, useSelector } from 'react-redux';
import { toggle } from '../store/ui-slice';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispatch = useDispatch()
const {totalQuantity} = useSelector(state =>state.cart)


  const toggleHandler = () =>{
    dispatch(toggle())
  }
  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
