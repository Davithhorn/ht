import Image from "next/image";
import React, {FC} from 'react';
import BlackBurger from '@assets/icon/burger/burger-mobile.svg';
import XIcon from '@assets/icon/burger/exit-burger.svg';
import {ThemeModeSwitcher} from "../../../partials";


type Props = {
    handleToggle: () => void;
    isToggled: boolean;
}
const Navbar: FC<Props> = ({handleToggle, isToggled}) => {
    return (
        <div className='app-navbar flex-shrink-0 z-index-999'>
            <div className='app-navbar-item d-lg-none ms-2 me-n3' title='Show header menu'>
                <div
                    className='btn btn-icon btn-active-color-primary'
                    id='main_app_header_menu_toggle'
                    onClick={handleToggle}
                >
                    <Image
                        src={isToggled ? XIcon : BlackBurger}
                        className="w-30px h-30px"
                        alt="Toggle icon"
                    />
                </div>
            </div>
            {/*<ThemeModeSwitcher/>*/}
        </div>
    );
};

export {Navbar};
