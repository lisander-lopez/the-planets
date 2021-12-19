import { MouseEventHandler, useState } from "react";
import { KeyPoint, Planet } from "../../../lib/interfaces";
import Picture from "./picture";
import BlockContent from '@sanity/block-content-to-react';
import Image from "next/image";

type Props = {
    planet: Planet;
    preview: boolean;
}
const MainContent = ({planet, preview}: Props) => {
    const [currentKeypointIndex, setCurrentKeypointIndex] = useState(0);
    const currentKeypoint = planet.keyPoints[currentKeypointIndex];

    const keyPointHandler = (index: number) => {
        setCurrentKeypointIndex(index);
    }

    return(
    <div className={`flex justify-between`}>
        <div className={`flex items-center`}>
            <Picture planet={planet} keyPointIndex={currentKeypointIndex} preview={preview} />
        </div>
        <div className={``}
        style={{
        }}>
            <h1 className={`uppercase text-white`}>{ planet.planetName }</h1>
            <BlockContent className={`text-white my-6`} blocks={currentKeypoint.keyPointText} renderContainerOnSingleChild={true}/>
            <span className={`text-white text-opacity-50`}>
                Source :&nbsp; 
                <a className={`underline`} href={`${currentKeypoint.sourceURL}`}>{ currentKeypoint.sourceName } <Image src={`/assets/external-link.svg`} alt="External Link Icon" width="12" height="12"/></a>
            </span>
            {planet.keyPoints.map((keyPoint, i) => {
                return <KeyPoint key={i} 
                            isActive={i === currentKeypointIndex} 
                            title={keyPoint.keyPointTitle} index={i} 
                            activeColor={planet.mainColor.value} 
                            clickHandler={()=>{keyPointHandler(i)}}
                        />
            })}
        </div>
    </div>)
}

type newProps = {
    isActive: boolean;
    title: string;
    index: number;
    activeColor: string;
    clickHandler: MouseEventHandler<HTMLDivElement>;

};

const KeyPoint = ({isActive, title, index, activeColor, clickHandler}: newProps) => {
    return(
        <div className={`flex items-center pl-7 my-4 gap-6 w-85 h-12 border border-white border-opacity-20 ${!isActive ? 'hover:bg-lightGray cursor-pointer' : ''}`}
            style={{
                backgroundColor: isActive ? activeColor : '',
                borderWidth: isActive ? '0px' : '1px'
            }}
            onClick={clickHandler}
        >
            <h3 className={`text-white text-opacity-50`}>0{index + 1}</h3>
            <h3 className={`text-white uppercase ${index === 0 ? 'ml-0.5' : ''}`}> {title} </h3>
        </div>
    )
}

export default MainContent;