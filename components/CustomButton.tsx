import Image from "next/image";
import { CustomButtonProps } from "../types/index";

const Button = ({ title, containerStyles, Icon, textStyles,imageStyle,line1Styles,line2Styles }: CustomButtonProps) => {
  const titleLines = title.split('<br>');

  return (
    <div>
  <button
    type="submit"
    className={`custom-btn flex items-center gap-2 bg-buttonBlue ${containerStyles} relative overflow-hidden transition-all duration-500 ease-out group`}
  >
    <div className={`absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out z-0`}></div>
    <div className="relative z-10">
      <div className={textStyles}>
        {titleLines.map((line, index) =>
          index === 0 ? (
            <div key={index} className={line1Styles}>
              {line}
            </div>
          ) : (
            <div key={index} className={line2Styles}>
              {line}
            </div>
          )
        )}
      </div>
    </div>
    {Icon && (
      <div className="relative z-10 flex-shrink-0">
        <Image
          src={Icon}
          alt="icon"
          width={20}
          height={20}
          className={`${imageStyle} transition-transform duration-500 ease-out group-hover:rotate-180`}
        />
      </div>
    )}
  </button>
</div>

  );
};

export default Button;
{/*
  <div>
      <button type="submit" className={`custom-btn flex items-center gap-2 bg-buttonBlue ${containerStyles}`}>
        <div className={textStyles}>
         {titleLines.map((line, index) => (
            index === 0 ? (
              <div key={index} className={line1Styles}>{line}</div>
            ) : (
              <div key={index} className={line2Styles}>{line}</div>
            )
          ))}
        </div>
        {Icon && (
          <div className="flex-shrink-0">
            <Image src={Icon} alt="icon" width={20} height={20} className={`${imageStyle}`} />
          </div>
        )}
      </button>
    </div> */}


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

