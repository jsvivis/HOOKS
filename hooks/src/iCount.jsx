import { useState } from "react";
import './icount.css';

export function iCount(){
const [value, setValue] = useState(1);
    const[buttonStyle, setButtonStyle] = useState('couter-button-minus-active');

    function down(){
        if (value <=1){
                setButtonStyle('couter-button-minus-active')

        }
    if (value >0){
        setValue(value-1);
    }
}

function up(){
   setValue(value+1)
   setButtonStyle('couter-button-minus-active')
}

}
