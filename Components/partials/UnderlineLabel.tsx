import React, {FC} from "react";
import Link from "next/link";


export const UnderlineLabel: FC<{
    title?: string,
    headerTitle?: any,
    className?: string
    link?: string;
}> = ({title, headerTitle, className, link}) => {
    return <div className={className}>
        <div className="mt-10 mt-md-0">
            {
                headerTitle && <Link href={link ?? ""} className="text-dark">
                    <p className="fw-bolder text-normal-20 mb-10px">{headerTitle}</p>
                </Link>
            }
            <h1 className="title-shape text-white mb-0 fw-bolder">{title}</h1>
            <div className="line mt-20px mb-banner-responsive"></div>
        </div>
    </div>
}