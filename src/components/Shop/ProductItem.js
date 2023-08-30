import { useDispatch } from 'react-redux';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { addItemToCart } from '../store/CartSlice';

const ProductItem = (props) => {
  const dispatch = useDispatch()
  const { title, price, description, id} = props;

  const AddItemHandler = () =>{
    dispatch(addItemToCart({title,price,id}))
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={AddItemHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
