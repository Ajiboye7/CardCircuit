

export interface CustomButtonProps{
    title: string
    containerStyles ?: string
    textStyles?: string
    Icon: string
    imageStyle?:string
    line1Styles?:string
    line2Styles? :string
}
export interface TestimonialProps {
    testimonial:{
    id: number;
    name: string;
    profession: string;
    skill: string;
    testimony: string;
    img: string;
    alt: string;
    }
  }
  
  export interface Settings {
    dots?: boolean;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    nextArrow?: JSX.Element;
    prevArrow?: JSX.Element;
    [key: string]: any;
  }
  