import Image from "next/image";
import React, {FC} from "react";
import Link from "next/link";

type Props = {
    animation?: string;
    delay?: string;
    title: string;
    icon: string;
    height?: string;
    className?: string;
    id?: string;
}

const CustomSkillCard: FC<Props> = ({animation, title, delay, icon, className, id}) => {
    return (
        <>
            <div
                data-aos={animation}
                data-aos-delay={delay}>
                <Link href={id ?? ""}>
                    <div className={`${className}`}>
                        <div className="d-flex flex-column align-items-center justify-content-between gap-10">
                            <Image src={icon} alt={title}/>
                            <h1 className="text-normal-20 fw-bolder text-center text-uppercase"
                                dangerouslySetInnerHTML={{__html: title}}/>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default CustomSkillCard;
