import { useNextSanityImage } from "next-sanity-image";
import { Planet } from "../../../../lib/interfaces";
import { getClient } from '../../../../lib/sanity.server';
import Image from 'next/image';
type Props = {
    planet: Planet;
    keyPointIndex: number;
    preview: boolean;
}
const Picture = ({planet, keyPointIndex, preview}: Props) => {
    const imageProps = useNextSanityImage(
		getClient(preview ?? false),
		planet.keyPoints[keyPointIndex].picture
	);
    return(
        <div>
            <Image {...imageProps} layout="fixed" alt="Planet Image" loader={imageProps.loader} width={290} height={290} />
        </div>
    )
}

export default Picture;