import ProductItem from './ProductItem';
import classes from './Products.module.css';



const DUMMY_PRODUCT =[
  {
    id: '1',
    title:'Harry Poter and Sorcerer Stone',
    price: 50,
    description:'One of the most sold book in this month'
  },
  {
    id: '2',
    title:'Harry Poter and fire Cup',
    price: 40,
    description:'Amasing and Facing Story'
  },{
    id: '3',
    title:'Harry Poter and Prisoner  of Azkaban',
    price: 70,
    description:'Best seler Enjoi while reading'
  }
]



const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCT.map((el)=>(
          <ProductItem
          title={el.id}
          price={200}
          description='This is a first product - amazing!'
        />
        ))}
        
      </ul>
    </section>
  );
};

export default Products;
