import React, { useEffect, useState } from 'react';
import tailwindConf from '../../../tailwind.config';
import Menu from './menu';
import MobileMenu from './mobileMenu';
type Props = {
    children?: React.ReactNode;
    allPlanets: {x: any}[];
}

const isPhoneWidthHelper = (width: number) => {
    const newCompareString = tailwindConf.theme.screens.md.replace("px", "");
    return width <= parseInt(newCompareString);
}

const NavBar = ({children, allPlanets}: Props) => {
    console.log("All plans", allPlanets);
    const [isMobileWidth, setIsMobileWidth] = useState(isPhoneWidthHelper(window.innerWidth));

    useEffect(() => {
        function handleResize() {
            setIsMobileWidth(isPhoneWidthHelper(window.innerWidth));
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
        
    }, []);

    return (
        <div className={`text-white border-b border-solid border-white border-opacity-20`}>
            <div className={`container mx-auto flex
                lg:pr-10 lg:pl-8 lg:h-21 lg:justify-between lg:content-center lg:flex-row
                md:h-39 md:flex-col sm:justify-between 
                sm:h-18`}>
                <div className={`uppercase lg:mt-5.5 font-Antonio text-lg leading-fit 
                    md:text-center md:mt-8 md:block
                    sm:flex sm:items-center`}>
                    the planets
                </div>
                { isMobileWidth ? <MobileMenu allPlanets={allPlanets} /> : <Menu allPlanets={allPlanets} />}
                {children}
            </div>
        </div>
    )
}
// 800-449-2819
export default NavBar;