import Image from "next/image";
import { CustomButtonProps } from "../types/index";

const Button = ({ title, containerStyles, Icon, textStyles }: CustomButtonProps) => (
  <div>
    <button type="submit" className={`custom-btn  ${containerStyles}`}>
      <span className={ ` mr-3 ${textStyles}`}>{title}</span>
      {Icon && (
        <div>
          <Image src={Icon} alt="arrow_right" width={20} height={20}/>
        </div>
      )}
     
     
    </button>
  </div>
);

export default Button;
