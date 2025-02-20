import {MenuItem} from './MenuItem'
import React, {FC} from "react";
import Image from "next/image";
import {MenuInnerWithSub} from "./MenuInnerWithSub";
import Down from "@assets/icon/burger/down.svg";
import {ThemeModeSwitcher} from "../../../../partials";


type Props = {
    isScrolled?: boolean;
}


export const MenuInner: FC<Props> = () => {

    return (
        <>
            <MenuItem title="Home " to='/health-articles'/>
            <MenuItem title="About" to='/specialist'/>
            <MenuItem title="DavidPortfolio" to='/five-tips-for-health'/>
            <MenuItem title="Contact" to='/interview'/>
        </>
    )
}
