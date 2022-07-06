import CartContext from "../../Store/cart-context";
import "./Cart.css";
import Modal from '../UI/Modal';
import { useContext } from "react";
import CartItem from "./CartItem";
const Cart = (props) => {
   let total=0;
  const cartcntx=useContext(CartContext);
const hasItems=cartcntx.items.length>0;

 ////let totalamount=cartcntx.items.forEach((item) => {
 // total=total+(Number(item.quantity)*Number(item.price));
 // });

  //totalamount= `$${total.toFixed(2)}`;
const removeitemhandler=(item)=>{
  if(item.quantity>0){
    cartcntx.addItem({...item,quantity:-1})

    }
    else
    cartcntx.removeItem(item)
}
const additemhandler=(item)=>{
  cartcntx.addItem({ ...item,quantity:1})
  
}

  const cartItems = (
    <ul className='cart-items'>
    {cartcntx.items.map((item) => (
        <CartItem key={item.id} name={item.name} price={Number(item.price)} amount={item.quantity} onRemove={removeitemhandler.bind(null,item)}
        onadd={additemhandler.bind(null,item)}></CartItem>
        
      ))}
      
    </ul>
  )
  cartcntx.items.forEach((item) => {
    total=total+(Number(item.quantity)*Number(item.price));
    });

    total= `$${total.toFixed(2)}`;

    const display=()=>{
      console.log('hello');
      alert('thakyoufor ordering');
    }

  return (
    <Modal onclose={props.onclose}>
      {cartItems}
      <div className='total'>
        <span>Total Amount</span>
        <span>{total}</span>
      
    
      </div>
      <div className='actions'>
        <button className='button--alt' onClick={props.onclose}>Close</button>
       {hasItems&&<button className='button' onClick={display}>Order</button>}

      </div>
      </Modal>
    
  );
};

export default Cart;
