type Props = {
    children?: React.ReactNode;
    allPlanets: {x: any}[];
}
const Items = ({allPlanets}: Props) => {
    return (
        <div className={`fixed top-17 left-0 w-screen h-full bg-darkBlue`}>
            <ul className={`container mx-auto`}>
                {allPlanets.map((planetSlug, i) => {
                    console.log("color", planetSlug.color.secondary);
                    return(
                        <li key={i} className={`border-b border-solid border-white border-opacity-10 py-5 last:pb-0 last:border-b-0`}>
                            <a className={`flex justify-between`} href="#">
                                <div className={`h-5 w-5 rounded-full`}
                                    style={{backgroundColor: planetSlug.color.secondary}}></div>
                                <span className={`uppercase ml-6 mr-auto font-Spartan font-bold text-md leading-normal tracking-tight`} >{planetSlug.slug}</span>
                                <div className={`opacity-40`}>{ '>' }</div>
                            </a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Items;