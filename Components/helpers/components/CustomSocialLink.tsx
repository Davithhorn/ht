import Image from 'next/image'
import Link from 'next/link'
import chainIcon from "@assets/icon/social/chain.svg"
import facebookIcon from '@assets/icon/social/facebook.svg'
import telegramIcon from '@assets/icon/social/telegram.svg'
import React from 'react'

type Props = {
    facebook?: string
    telegram?: string
    chain?: string
}
const CustomSocialLink: React.FC<Props> = ({ facebook = '/', telegram = '/', chain = '/' }) => {
    return (
        <div>
            <div className='d-flex position-relative justify-content-center mb-12 text-white social-icons-group'>
                <Link href={facebook} >
                    <Image width={20} height={20} src={chainIcon} alt="social icon" />
                </Link>
                <Link href={telegram} >
                    <Image width={20} height={20} src={facebookIcon} alt="social icon" />
                </Link>
                <Link href={chain} >
                    <Image width={20} height={20} src={telegramIcon} alt="social icon" />
                </Link>
            </div>
        </div>
    )
}

export default CustomSocialLink