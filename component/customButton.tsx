import Image from "next/image";
import { CustomButtonProps } from "../types/index";

const Button = ({ title }: CustomButtonProps) => (
  <div>
    <button
      type="submit"
      className="btn-bg text-white" 
    >
      <span>{title}</span>
    </button>
  </div>
);

export default Button;
