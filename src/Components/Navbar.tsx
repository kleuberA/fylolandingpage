import Logo from '../assets/images/logo.svg';

const NavBar = () =>{
    return(
        <div>
            <div className='flex w-4/5 m-auto justify-between flex-column lg:flex-row items-center h-16'>
                <img className='w w-28' src={Logo} alt="Logo App" />
                <ul className='flex flex-row lg:w-60 justify-between gap-2 lg:gap-0'>
                    <li className='itemNavbar'><a href=""></a>Features</li>
                    <li className='itemNavbar'><a href=""></a>Team</li>
                    <li className='itemNavbar'><a href=""></a>Sign In</li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;