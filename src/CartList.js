import CartItem from "./CartItem";
import { useState } from "react";
import { nanoid } from "nanoid";
import _ from 'lodash';


function CartList(){

    // const [item1Name, setItem1Name] = useState("Hat");
    // const [item1Quantity, setItem1Quantity] = useState(1);

    // const [item2Name, setItem2Name] = useState("Tie")
    // const [item2Quantity, setItem2Quantity] = useState(2);
    const [items,setItems] = useState([
        {id:nanoid(),name:'Hat', quantity:2},
        {id:nanoid(),name:'Tie', quantity:3},
        {id:nanoid(),name:'Belt', quantity:1}
    ])

    function onNameChange(evt, item){
        const newName = evt.currentTarget.value;
        setItems(
            _.map(items, (x) => (x.id) === item.id ? {...x, name: newName} : x
        )
      );
    }


    return(
        <>
            {/* <CartItem name={items[0].name} quantity={items[0].quantity} />
            <CartItem name={items[1].name} quantity={items[1].quantity} />
            <CartItem name={items[2].name} quantity={items[2].quantity} /> */}

            {items.map(item => 
               <CartItem name={item.name} quantity={item.quantity} key={item.id} onNameChange={(evt) => onNameChange(evt,item)} />
            )}
        </>
    );
}

export default CartList;