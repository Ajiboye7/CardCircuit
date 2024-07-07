import Image from "next/image";
import { CustomButtonProps } from "../types/index";

const Button = ({ title, containerStyles, rightIcon }: CustomButtonProps) => (
  <div>
    <button
      type="submit"
      className={`  ${containerStyles}`}
    >
      <span>{title}</span>
      {rightIcon && (
        <div>
            <Image
            src={rightIcon}
            alt="arrow_right"
            width={113}
            height={20}
            />
        </div>
      )}
    </button>
  </div>
);

export default Button;
