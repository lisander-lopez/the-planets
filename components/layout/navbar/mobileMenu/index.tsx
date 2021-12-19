import { useCallback, useState } from "react";
import Items from './items/index';

type Props = {
    children?: React.ReactNode;
    allPlanets: {x: any}[];
}

const MobileMenu = ({allPlanets} : Props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMenuClick = useCallback(
        () => {
            setIsMenuOpen(!isMenuOpen);
        },
        [isMenuOpen],
    )
    return (
        <>
            <div className={`self-center`}>
                <button className={`flex flex-col justify-between h-4.5 w-6`} onClick={handleMenuClick}>
                    <span className={`w-full h-1.5 bg-white ${isMenuOpen ? 'opacity-25' : ''}`}></span>
                    <span className={`w-full h-1.5 bg-white ${isMenuOpen ? 'opacity-25' : ''}`}></span>
                    <span className={`w-full h-1.5 bg-white ${isMenuOpen ? 'opacity-25' : ''}`}></span>
                </button>
            </div>
            {isMenuOpen ? <Items allPlanets={allPlanets}/> : <></>}
        </>
    )
}

export default MobileMenu;