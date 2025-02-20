import React, {FC} from "react";
import Image, {StaticImageData} from "next/image";
import Link from "next/link";


// Import Image
import PlaceHolder from "@assets/kilo-health-image/place-holder/no-thumbnail.jpg"

type Props = {
    link?: string;
    featureImage?: string | StaticImageData
    title?: string;
    effect?: string;
    delay?: string
};

const CustomCard1: FC<Props> = ({link, featureImage, title, effect, delay}) => {
    return (

        <Link href={link ?? ""} passHref>
            <div className="card hover-card-zoom-image bg-transparent" data-aos={effect} data-aos-delay={delay}>
                <Image
                    src={featureImage ?? PlaceHolder}
                    alt={title ?? ""}
                    layout="responsive"
                    width={601}
                    height={318}
                    className="card-img"
                />
                <div className="card-body card-body-zoom card-body-padding">
                    <h1 className="text-black-44 text-normal">{title}</h1>
                </div>
            </div>
        </Link>

    );
};

export default CustomCard1;
