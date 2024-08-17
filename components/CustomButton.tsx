import Image from "next/image";
import { CustomButtonProps } from "../types/index";

const Button = ({ title, containerStyles, Icon, textStyles,imageStyle,line1Styles,line2Styles }: CustomButtonProps) => {
  const titleLines = title.split('<br>');

  return (
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
  </div>

  );
};

export default Button;


    {/* Hover Effect
      import React from 'react';
import Image from 'next/image';
import { CustomButtonProps } from '@/types';

const CustomButton = ({ title, buttonStyle, iconStyle, Icon, titleStyle }: CustomButtonProps) => {
  return (
    <div>
      <button
        type="submit"
        className={`flex items-center gap-2 rounded-full whitespace-nowrap transition-transform duration-300 ${buttonStyle}`}
      >
        <span
          className={`btn-text transform transition-transform duration-300 ease-in-out hover:translate-x-1 ${titleStyle}`}
        >
          {title}
        </span>
        <Image
          alt="buttonIcon"
          src={Icon}
          width={20}
          height={20}
          className={`transform transition-transform duration-300 ease-in-out hover:translate-x-1 ${iconStyle}`}
        />
      </button>
    </div>
  );
}

export default CustomButton;
 */}


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

