import { Planet } from "../../../lib/interfaces";
import Box from "./box/index";

type Props = {
    planet: Planet;
}

const PlanetInfo = ({planet}: Props) => {
    return(
    <div className={`mb-14 flex justify-between`}>
        <Box title={`ROTATION TIME`} text={planet.rotationTime.timeFormatted}/>
        <Box title={`REVOLUTION TIME`} text={planet.revolutionTime.timeFormatted}/>
        <Box title={`RADIUS`} text={planet.radius.distanceFormatted}/>
        <Box title={`AVERAGE TEMP.`} text={planet.averageTemperature.temperatureFormatted}/>
    </div>
    )
}

export default PlanetInfo;