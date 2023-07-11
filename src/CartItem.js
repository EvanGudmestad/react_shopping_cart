import { useState } from "react";
//UseState hook is used to store data 

function CartItem(props){

    //useState method returns 2 items
    //It returns a value for the itemName variable
    //It also returns a function to modify that data called setItemName

    //const [itemName, setItemName] = useState("Hat");
    //const [itemQuantity, setItemQuantity] = useState(2);

    return(
        
            <div className='row mt-3'>
                <div className='col-md-4'>
                    <input type="text" className='form-control' value={props.name} onChange={(evt) => props.onNameChange(evt)} />
                </div>
                <div className='col-md-3 text-center'>
                    <span className="text-center">{props.quantity}</span>
                </div>
                <div className='col-md-2'>
                    <button className="btn btn-primary rounded-5" onClick={(evt) => props.onQuantityAdd(evt)} >
                        <span>Add</span>
                    </button>
                </div>
                <div className='col-md-2'>
                    <button className="btn btn-danger rounded-5" onClick={(evt) => props.onQuantityRemove(evt)}>
                        <span>Remove</span>
                     </button>
                </div>
            </div>
      
    );
}

export default CartItem;