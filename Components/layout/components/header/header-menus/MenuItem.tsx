import {FC} from 'react';
import clsx from 'clsx';
import {checkIsActive, KTSVG} from '../../../../helpers';
import {useRouter} from 'next/router';
import Link from 'next/link';
import {Roboto} from "next/font/google";

type Props = {
    to: string;
    title: string;
    icon?: string;
    fontIcon?: string;
    hasArrow?: boolean;
    hasBullet?: boolean;
    isButton?: boolean;
    isSub?: boolean;
    className?: string;
    titleStyle?: string;
};

// const khmerOSPheatra = localFont({src: '../../../../assets/fonts/khmer-os-pheatra-c5.ttf'});
const roboto = Roboto({subsets: ['latin'], weight: '400'})

const MenuItem: FC<Props> = ({
                                 to,
                                 title,
                                 icon,
                                 className = '',
                                 fontIcon,
                                 hasArrow = false,
                                 hasBullet = false,
                                 isButton = false,
                                 titleStyle,
                             }) => {
    const {pathname} = useRouter();
    if (isButton) {
        return (
            <div className='menu-item me-lg-1'>
                <div className='menu-link'>
                    <span className='text-muted fw-bolder'>{title}</span>
                </div>
            </div>
        );
    }

    return (
        <div className={`menu-item me-lg-1`}>
            <Link href={to} passHref>
                <span className={clsx('menu-link py-3 hover-underline-animation-nav', {
                    'active menu-here': checkIsActive(pathname, to),
                })}>
                    {hasBullet && (
                        <span className='menu-bullet'>
              <span className='bullet bullet-dot'></span>
            </span>
                    )}

                    {icon && (
                        <span className='menu-icon'>
              <KTSVG path={icon} className='svg-icon-2'/>
            </span>
                    )}

                    {fontIcon && (
                        <span className='menu-icon'>
              <i className={clsx('bi fs-3', fontIcon)}></i>
            </span>
                    )}

                    <span className={`${roboto.className} ${'menu-title text-body fw-bold' + className}`}>
            <span className='text-muted me-1 fw-bold'>{titleStyle}</span>
                        {title}
          </span>

                    {hasArrow && <span className='menu-arrow'></span>}
                </span>
            </Link>
        </div>
    );
};

export {MenuItem};
