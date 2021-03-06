import classes from './CartItem.module.css';

const CartItem = (props) => {
   
    const price = props.price.toFixed(2);
    let totalprice=Number(price)*Number(props.amount);
    totalprice=Number(totalprice).toFixed(2);;
  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick= { props.onadd} >+</button>
        <div className={classes.linebreak}>${totalprice}</div>
      </div>
    </li>
  );
};

export default CartItem;
