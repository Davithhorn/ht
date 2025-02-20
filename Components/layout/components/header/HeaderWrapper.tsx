import React, {useState} from "react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import {useLayout} from "../../core";
import {Header} from "./Header";
import Logo from "../../../../public/next.svg";
import {Navbar} from "./Navbar";


export const HeaderWrapper = () => {
    const {config, classes} = useLayout();
    const [isToggled, setIsToggled] = useState(false);
    const handleToggle = () => {
        setIsToggled(!isToggled);
    };


    return (
        <div
            id="main_app_header"
            className={clsx("app-header header-scrolled")}
        >
            <div
                id="main_app_header_container"
                className={clsx(
                    "w-100 container pe-lg-0 ps-lg-3 px-5",
                    classes.headerContainer.join(" "),
                    config.app?.header?.default?.containerClass
                )}
            >
                <div className="d-flex align-items-center flex-grow-1 flex-lg-grow-0 me-lg-15">
                    <Link href="/" className={clsx({"pe-md-auto": isToggled})}>
                        <h5 className='fs-24px fw-bold'>H _ D A V I D</h5>
                    </Link>
                </div>

                <div
                    id="main_app_header_wrapper"
                    className="d-flex align-items-stretch justify-content-between "
                >
                    <div
                        className='app-header-menu app-header-mobile-drawer align-items-stretch z-index-99'
                        data-kt-drawer='true'
                        data-kt-drawer-name='app-header-menu'
                        data-kt-drawer-activate='{default: true, lg: false}'
                        data-kt-drawer-overlay='true'
                        // data-kt-drawer-width='250px'
                        data-kt-drawer-width='100%'
                        data-kt-drawer-direction='end'
                        data-kt-drawer-toggle='#main_app_header_menu_toggle'
                        data-kt-swapper='true'
                        data-kt-swapper-mode="{default: 'append', lg: 'prepend'}"
                        data-kt-swapper-parent="{default: '#main_app_body', lg: '#main_app_header_wrapper'}"
                    >
                        <Header/>
                    </div>
                    <Navbar handleToggle={handleToggle} isToggled={isToggled}/>

                </div>

            </div>
        </div>
    );
};
