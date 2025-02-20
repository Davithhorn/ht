import {FC, useEffect, useRef} from 'react';
import {useRouter} from 'next/router';
import clsx from 'clsx';
import {checkIsActive, KTSVG, WithChildren} from '../../../../helpers';
import localFont from "next/font/local";
import {Roboto} from "next/font/google";

type Props = {
    to: string;
    title: any;
    icon?: string;
    fontIcon?: string;
    menuTrigger?: 'click' | `{default:'click', lg: 'hover'}`;
    menuPlacement?: 'right-start' | 'bottom-start' | 'left-start';
    hasArrow?: boolean;
    hasBullet?: boolean;
    isMega?: boolean;
    isScrolled?: boolean;
};

// const khmerOSPheatra = localFont({src: '../../../../assets/fonts/khmer-os-pheatra-c5.ttf'})
const roboto = Roboto({subsets: ['latin'], weight: '400'})
const MenuInnerWithSub: FC<Props & WithChildren> = ({
                                                        children,
                                                        to,
                                                        title,
                                                        icon,
                                                        fontIcon,
                                                        menuTrigger,
                                                        menuPlacement,
                                                        hasArrow = false,
                                                        hasBullet = false,
                                                        isMega = false,
                                                        isScrolled = false
                                                    }) => {
    const menuItemRef = useRef<HTMLDivElement>(null);
    const router = useRouter(); // Use Next.js useRouter hook instead of useLocation

    useEffect(() => {
        if (menuItemRef.current && menuTrigger && menuPlacement) {
            menuItemRef.current.setAttribute('data-kt-menu-trigger', menuTrigger);
            menuItemRef.current.setAttribute('data-kt-menu-placement', menuPlacement);
        }
    }, [menuTrigger, menuPlacement]);

    return (
        <div ref={menuItemRef} className={`menu-item menu-lg-down-accordion me-lg-1`}>
      <span
          className={clsx('menu-link py-3', {
              active: checkIsActive(router.pathname, to), // Use router.pathname from useRouter
          })}
      >
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

          <span className={clsx(`menu-title ${roboto.className}`, {
              "text-black": isScrolled
          })}>{title}</span>

          {hasArrow && <span className='menu-arrow'></span>}
      </span>
            <div
                className={clsx(
                    'menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown p-1',
                    isMega ? 'w-100 w-lg-850px' : 'menu-rounded-0 w-lg-225px'
                )}
                data-kt-menu-dismiss='true'
            >
                {children}
            </div>
        </div>
    );
};

export {MenuInnerWithSub};
