import {useLayout} from '../../core'
import Footer from "./Footer";

const FooterWrapper = () => {
    const {config} = useLayout()
    if (!config.app?.footer?.display) {
        return null
    }

    return (
        <div className='app-footer ' style={{backgroundColor: "rgba(27,27,27)"}} id='kt_app_footer'>
            <Footer/>
        </div>
    )
}

export {FooterWrapper}
