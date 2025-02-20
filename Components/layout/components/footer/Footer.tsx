import React from 'react';
import Link from 'next/link';
import Image from "next/image";

// Import Icon
import Facebook from "@assets/icon/social/facebook.svg";
import Telegram from "@assets/icon/social/telegram.svg";
import TikTok from "@assets/icon/social/tik-tok.svg";
import Youtube from "@assets/icon/social/youtube.svg";
import Phone from "@assets/icon/social/phone.svg";
import Email from "@assets/icon/social/email.svg";
import {Roboto} from "next/font/google";


const roboto = Roboto({subsets: ['latin'], weight: '400'})

// const khmerOSPheatra = localFont({src: '../../../assets/fonts/khmer-os-pheatra-c5.ttf'})
const Footer = () => {
    return (
        <div className="container mt-10">
            <footer className="text-center text-lg-start text-white">
                <div className="text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12 text-center text-md-start">
                            <span className="fw-bolder fs-24px ">Horn David</span>

                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12 text-center text-md-start">
                            <div className="text-normal mt-5 mt-md-0">
                                <span className="fs-3 fw-bolder">Page</span>
                                <div
                                    className={`d-flex flex-column gap-5 mt-3 mt-md-7 ${roboto.className} `}>
                                    <div>
                                        <Link href="/"
                                              className="text-white hover-underline-animation-white">Home</Link>
                                    </div>
                                    <div>
                                        <Link href="/"
                                              className="text-white hover-underline-animation-white">About </Link>
                                    </div>
                                    <div>
                                        <Link href="/"
                                              className="text-white hover-underline-animation-white">Portfolio</Link>
                                    </div>
                                    <div>
                                        <Link href="/"
                                              className="text-white hover-underline-animation-white">Contact</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12 text-center text-md-start">
                            <div className="text-normal mt-5 mt-md-0">
                                <span className="fs-3 fw-bolder">Page</span>
                                <div
                                    className={`d-flex flex-column gap-5 mt-3 mt-md-7 ${roboto.className} `}>
                                    <div>
                                        <Link href="/"
                                              className="text-white hover-underline-animation-white">Home</Link>
                                    </div>
                                    <div>
                                        <Link href="/"
                                              className="text-white hover-underline-animation-white">About </Link>
                                    </div>
                                    <div>
                                        <Link href="/"
                                              className="text-white hover-underline-animation-white">Portfolio</Link>
                                    </div>
                                    <div>
                                        <Link href="/"
                                              className="text-white hover-underline-animation-white">Contact</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*<div className="col-lg-3 col-md-3 col-sm-4 col-xs-12 text-center text-md-end">*/}
                        {/*    <div className="text-normal mt-10 mt-md-0">*/}
                        {/*        <span className="fs-3 fw-bolder">តាមដានពួកយើងនៅលើ</span>*/}
                        {/*        <div className="d-flex justify-content-center justify-content-md-end gap-3 mt-5">*/}
                        {/*            <Link href="https://web.facebook.com/kilohealthcambodia" target="_blank"*/}
                        {/*                  className="bg-hover-icon">*/}
                        {/*                <Image src={Facebook} alt="Facebook"/>*/}
                        {/*            </Link>*/}
                        {/*            <Link href="/" target="_blank" className="bg-hover-icon">*/}
                        {/*                <Image src={Telegram} alt="Telegram"/>*/}
                        {/*            </Link>*/}
                        {/*            <Link href="/" target="_blank" className="bg-hover-icon">*/}
                        {/*                <Image src={TikTok} alt="TikTok"/>*/}
                        {/*            </Link>*/}
                        {/*            <Link href="/" target="_blank" className="bg-hover-icon">*/}
                        {/*                <Image src={Youtube} alt="Youtube"/>*/}
                        {/*            </Link>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    <div className="mt-12 mt-md-8">*/}
                        {/*        <div className="fs-3 text-center fw-bolder text-md-end">ទំនាក់ទំនងមកកាន់យើង</div>*/}
                        {/*        <div*/}
                        {/*            className={`d-flex flex-column gap-3 justify-content-center justify-content-md-end text-normal`}>*/}
                        {/*            <div className="d-flex gap-5 justify-content-center justify-content-md-end">*/}
                        {/*                <Image src={Email} alt="Email"/>*/}
                        {/*                <a href="mailto: info@kiloit.com" target="_blank"*/}
                        {/*                   className={`text-white hover-underline-animation-white ${roboto.className}}`}>info@kiloit.com</a>*/}
                        {/*            </div>*/}
                        {/*            <div className="d-flex gap-5 justify-content-center justify-content-md-end">*/}
                        {/*                <Image src={Phone} className="me-2" alt="Phone"/>*/}
                        {/*                <div>*/}
                        {/*                    <div>*/}
                        {/*                        <a href="tel:07133450" target="_blank"*/}
                        {/*                           className="text-white hover-underline-animation-white">០៧១ ៣៣៣*/}
                        {/*                            ៤៥០</a>*/}
                        {/*                    </div>*/}
                        {/*                    <div>*/}
                        {/*                        <a href="tel:023966601" target="_blank"*/}
                        {/*                           className="text-white hover-underline-animation-white">០២៣ ៩៦៦*/}
                        {/*                            ៦០១</a>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>
                <div className="line-footer mt-8"/>
                <div className="mt-18 mb-8">
                    <p className={`text-normal ${roboto.className}`}>
                        © Horn david {new Date().getFullYear()}. All Rights Reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
