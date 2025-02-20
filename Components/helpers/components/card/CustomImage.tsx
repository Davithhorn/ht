import {FC} from "react";
import Image from "next/image";
import DefaultCardimg from "@assets/kilo-health-image/event/no-thumbnail.jpg";

type Props = {
    height?: number;
    width?: number;
    src: string | null
    alt: string;
    className?: string;
    layout?: "fixed" | "intrinsic" | "responsive" | "fill";
};
const CustomImage: FC<Props> = ({height, width, src, alt, className, layout}) => {
    const getImageSrc = (event: string | null) => {
        if (event && event)
            return event
        else
            return DefaultCardimg
    }
    return (
        <>
            <Image className={className} src={getImageSrc(src)} layout={layout} height={height} width={width}
                   alt={alt}/>
        </>
    )
}


export default CustomImage