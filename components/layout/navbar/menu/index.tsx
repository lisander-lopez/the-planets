import { useCallback } from "react";
import styles from "./index.module.scss";

type Props = {
    children?: React.ReactNode;
    allPlanets: {x: any}[];
}

interface MyCustomCSS extends React.CSSProperties {
    '--list-item-hover-color': string;
}

const Menu = ({allPlanets}: Props) => {
    return(
        <div className={`flex lg:justify-between lg:gap-8.5 lg:mb-0 md:mb-6.5 md:justify-between md:mx-13`}>
                    { allPlanets.map((planetSlug, i) => {
                        return (
                            <li key={i} className={`list-none lg:h-full md:flex lg:items-center lg:relative md:relative hidden`}>
                                <h4 className={`uppercase opacity-75 hover:opacity-100 cursor-pointer ${styles['list-item-text']}`}
                                    style={
                                        {
                                            '--list-item-hover-color': planetSlug.color.secondary || '#FFF'
                                        } as MyCustomCSS
                                    }
                                >
                                    {planetSlug.slug}
                                </h4>
                            </li>
                        )
                    })}
                </div>
    )
}

export default Menu;