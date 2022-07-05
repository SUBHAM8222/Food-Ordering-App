
import CartContext from "../../../Store/cart-context";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import { useContext } from "react";

const MealItemForm = (props) => {
  
  const Cartcntx=useContext(CartContext);
  
  

  const additemtocart=(event)=>{
    event.preventDefault();
    const quantity =document.getElementById("amount_" +props.id).value;
    Cartcntx.addItem({...props.item,quantity:quantity});
console.log(props.item);
  }
  return (
    <form className={classes.form}>
      <Input
        label="amount"
        input={{
          id: "amount_" +props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button onClick={additemtocart}>+ADD</button>

    </form>
  );
};
export default MealItemForm;
