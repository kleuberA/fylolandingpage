import Logo from '../assets/images/logo.svg';
import IconPhone from '../assets/images/icon-phone.svg';
import IconEmail from '../assets/images/icon-email.svg';

const Footer = () => {
    return(
        <div className='containerFooter text-white pt-14 pb-14'>
            <div className='flex w-4/5 m-auto flex-col lg:flex-row lg:justify-between'>
                <div className='flex flex-col w-80 gap-5 items-baseline pb-9 lg:pb-0'>
                    <img src={Logo} alt="" />
                    <span className='flex flex-row gap-2 justify-start items-baseline'><img src={IconPhone} alt="" /> Phone: +1-543-123-4567</span>
                    <span className='flex flex-row gap-2 justify-start items-baseline'><img src={IconEmail} alt="" /> example@fylo.com</span>
                </div>
                <div className='flex flex-col lg:content-center flex-wrap gap-x-7 lg:h-40 gap-5'>
                    <span className='item'>About Us</span>
                    <span className='item'>Jobs</span>
                    <span className='item'>Press</span>
                    <span className='item'>Blog</span>
                    <span className='item'>Contact Us</span>
                    <span className='item'>Terms</span>
                    <span className='item'>Privacy</span>
                </div>
                <div></div>
            </div>
        </div> 
    )
}

export default Footer;