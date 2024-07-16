import Image from "next/image";
import { CustomButtonProps } from "../types/index";

const Button = ({ title, containerStyles, Icon, textStyles }: CustomButtonProps) => {
  const titleLines = title.split('<br>');

  return (
    <div>
      <button type="submit" className={`custom-btn flex items-center gap-2 ${containerStyles}`}>
        <div className={textStyles}>
          {titleLines.map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </div>
        {Icon && (
          <div className="flex-shrink-0">
            <Image src={Icon} alt="icon" width={20} height={20} />
          </div>
        )}
      </button>
    </div>
  );
};

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

