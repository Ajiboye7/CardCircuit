"use client"
import Image  from "next/image";
import { text } from "stream/consumers";
import {CustomButtonProps} from "@types"
const Button = ({title}:) => {
  return (
    <div>
      <button 
       type={"submit"}
       className={".btn-bg"}
       >
        <span>{title}</span>
      </button>
    </div>
  );
}

export default Button;
