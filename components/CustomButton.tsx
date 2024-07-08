import Image from "next/image";
import { CustomButtonProps } from "../types/index";

const Button = ({ title, containerStyles, Icon }: CustomButtonProps) => (
  <div>
    <button type="submit" className={`flex flex-row items-center text-fontColor   ${containerStyles}`}>
      <span>{title}</span>
      {Icon && (
        <div>
          <Image src={Icon} alt="arrow_right" width={20} height={20}  className=""/>
        </div>
      )}
    </button>
  </div>
);

export default Button;
