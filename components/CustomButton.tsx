import Image from "next/image";
import { CustomButtonProps } from "../types/index";

const Button = ({ title, containerStyles, Icon, textStyles }: CustomButtonProps) => (
  <div>
    <button type="submit" className={`custom-btn flex items-center gap-2  ${containerStyles}`}>
      <span className={ `  ${textStyles}`}>{title}</span>
      {Icon && (
        <div className="flex-shrink-0">
          <Image src={Icon} alt="arrow_right" width={20} height={20}/>
        </div>
      )}
     
     
    </button>
  </div>
);
export default Button;

/*import Image from "next/image";
import { CustomButtonProps } from "../types/index";

const CustomButton = ({
  title,
  containerStyles,
  Icon,
  textStyles ,
}: CustomButtonProps) => (
  <button
    type="submit"
    className={`custom-btn flex items-center gap-2 ${containerStyles}`}
  >
    {Icon && (
      <div className="flex-shrink-0"> {/* Prevents image from shrinking 
        <Image src={Icon} alt={title} width={20} height={20} />
      </div>
    )}
    <span className={textStyles}>{title}</span>
  </button>
);

export default CustomButton;*/

