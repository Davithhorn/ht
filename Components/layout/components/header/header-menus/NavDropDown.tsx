import Link from "next/link";

const NavDropDown = () => {
    return(
        <>

            <div
                className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px'
                data-kt-menu='true'>


                <div className='menu-item px-5'>
                    <Link href={'/account'} className='menu-link px-5'>
                        About KiloIT
                    </Link>
                </div>

                <div className='separator my-2'></div>
                <div className='menu-item px-5'>
                    <Link href={'/account'} className='menu-link px-5'>
                        Our Leadership
                    </Link>
                </div>
            </div>
        </>
    )
}

export default NavDropDown;