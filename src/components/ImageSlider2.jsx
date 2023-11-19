import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx"
import { slides } from "../constants";

// TODO replace react icons
const ImageSlider2 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    
    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="max-w-[1400px] w-full flex items-center justify-center m-auto relative py-4 px-9">
            <div className="whitespace-nowrap w-full flex m-auto overflow-hidden">
                {/* TODO loop, left and right margin */}
                <img className="select-none h-[340px] w-[100%] md:w-[calc(100%/2)] lg:w-[calc(100%/3)] ml-[0px] object-cover" src={slides[0].img} alt="TODO" />
                <img className="select-none h-[340px] w-[100%] md:w-[calc(100%/2)] lg:w-[calc(100%/3)] ml-[14px] object-cover" src={slides[1].img} alt="TODO" />
                <img className="select-none h-[340px] w-[100%] md:w-[calc(100%/2)] lg:w-[calc(100%/3)] ml-[14px] object-cover" src={slides[2].img} alt="TODO" />
                <img className="select-none h-[340px] w-[100%] md:w-[calc(100%/2)] lg:w-[calc(100%/3)] ml-[14px] object-cover" src={slides[3].img} alt="TODO" />
            </div>
            <div 
                className='absolute top-[50%] -translate-x-0 -translate-y-[-50%] 
                left-[1rem] text-2xl rounded-full p-2 bg-black/60 text-white cursor-pointer'
            >
                <BsChevronCompactLeft
                    onClick={prevSlide} 
                    size={20}
                />
            </div>
            <div 
                className='absolute top-[50%] -translate-x-0 -translate-y-[-50%] 
                right-[1rem] text-2xl rounded-full p-2 bg-black/60 text-white cursor-pointer'
            >
                <BsChevronCompactRight
                onClick={nextSlide}
                        size={20} 
                />
            </div>
        </div>
    )
};

export default ImageSlider2