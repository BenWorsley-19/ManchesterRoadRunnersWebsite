import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx"
import { slides } from "../constants";

// TODO replace react icons
const ImageSlider = () => {
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
        <div className="max-w-[900px] h-[580px] w-full m-auto py-16 px-4 relative group">
            {/* # TODO update this to not uses style */}
            {/* <div 
                style={{backgroundImage: `url(${slides[currentIndex].img})`}} 
                className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
            /> */}
                {/* TODO click on the next buttons highlights img*/}
            <img 
                src={slides[currentIndex].img} alt="TODO"
                className="select-none w-full h-full rounded-2xl object-cover duration-500"
            />
            {/* </div> */}
        
            <div 
                className='hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[-50%] 
                left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'
            >
                <BsChevronCompactLeft
                    onClick={prevSlide} 
                    size={30}
                />
            </div>
            <div 
                className='hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[-50%] right-5 text-2xl rounded-full 
                p-2 bg-black/20 text-white cursor-pointer'
            >
                <BsChevronCompactRight
                onClick={nextSlide}
                     size={30} 
                />
            </div>
            <div className="flex top-4 justify-center py-2">
                {slides.map((slide, index) => (
                    <div key={index} onClick={() => goToSlide(index)} className="text-2xl cursor-pointer" >
                        <RxDotFilled />
                    </div>    
                ))}
            </div>
        </div>
            // {/* <ul className="list-none sm:flex hidden justify-end items-center flex-1">
            //     {slides.map((slide, index) => (
            //         <li
            //             key={slide.id} 
            //         >
            //             <img src={slide.img} alt="TODO" />
            //         </li>
            //     ))}
            // </ul> */}
            // // <ul className="list-none sm:flex hidden justify-end items-center flex-1">
            // //     {navLinks.map((nav, index) => (
            // //         <li
            // //             key={nav.id} 
            // //             className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white`}
            // //         >
            // //             <a href={`#${nav.id}`}>
            // //                 {nav.title}
            // //             </a>
            // //         </li>
            // //     ))}
            // // </ul>
    )
};

export default ImageSlider