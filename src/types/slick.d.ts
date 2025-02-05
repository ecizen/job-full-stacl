// react-slick.d.ts
declare module "react-slick" {
    import { ComponentType } from "react";
  
    interface SliderProps {
      // sesuaikan dengan props yang sesuai
      dots?: boolean;
      infinite?: boolean;
      speed?: number;
      slidesToShow?: number;
      slidesToScroll?: number;
      autoplay?: boolean;
      arrows?: boolean;
      [key: string]: any; // untuk mendukung props lain yang tidak diketahui
    }
  
    const Slider: ComponentType<SliderProps>;
  
    export default Slider;
  }
  