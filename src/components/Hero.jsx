import { logo } from "../assets";

// TODO replace react icons
const Hero = () => {
    return (
        <div className="relative flex flex-col justify-center items-center w-full mx-auto pt-20 pb-4 px-4">
            <p className="font-oswald text-tertiary mt-2">
                welcome to...
            </p>
            <div className="text-center">
                {/* TODO text sizes */} 
                <h1 className="font-oswald font-black text-tertiary mt-2 lg:mt-0 lg:text-[70px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px]">
                    MANCHESTER <span className="text-secondary italic">ROAD RUNNERS!</span>
                </h1>
                <h3 className="font-oswald font-black text-tertiary text-base lg:text-xl mt-0">
                    We're a <span className="text-secondary">free sociable running group</span> based in Manchester City Centre
                </h3>
            </div>
            {/* <img 
                src={logo} alt="TODO"
                className=""
            /> */}
        </div>
    )
};

export default Hero