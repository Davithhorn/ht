import React, {FC} from 'react';
import {Image} from 'react-bootstrap';

interface CardWithEllipsisProps {
    index: number;
    item: { icon: any; name: string, iconActive: any };
    active: number | null;
    setActive: (index: number) => void;
}

const MAX_TITLE_LENGTH = 10;

const CardWithEllipsis: FC<CardWithEllipsisProps> = ({index, item, active, setActive}) => {
    const truncatedTitle = item.name.length > MAX_TITLE_LENGTH ? `${item.name.substring(0, MAX_TITLE_LENGTH)}...` : item.name;

    return (
        <div
            onClick={() => setActive(index)}
            className={`${active === index ? "custom-active-bg text-white" : "bg-white"} border rounded-2 d-flex flex-column justify-content-center align-items-center mx-1`}
        >
            <Image className={`my-2 px-0`} height={40} src={active===index && item.iconActive ? item.iconActive.src : item.icon.src}
                   alt="image"/>
            <p className="fw-bold">{truncatedTitle}</p>
        </div>
    );
};

export default CardWithEllipsis;
