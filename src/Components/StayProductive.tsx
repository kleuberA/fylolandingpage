import IconArrow from '../assets/images/icon-arrow.svg';
import ImageQuotes from '../assets/images/icon-quotes.svg';
import Avatar from '../assets/images/avatar-testimonial.jpg';
import Illustration from '../assets/images/illustration-2.svg';



const StayProductive = () =>{
    return(
        <div className='containerStayProductive bg-no-repeat w-full pt-5 lg:pt-16 bg-contain'>
            <div className='elementStayProductive'>
                <div className='flex flex-col-reverse gap-7 lg:gap-0 lg:flex-row w-4/5 m-auto pb-16'>
                    <div className='flex flex-col gap-4 lg:gap-5'>
                        <h1 className='titleStayProductive text-center lg:text-start text-lg lg:text-3xl font-bold'>Stay productive, wherever you are</h1>
                        <span className='lg:w-4/5'>Never let location be an issue when accessing your files. 
                            Fylo has you covered for all of your file storage needs.
                        </span>
                        <span className='lg:w-4/5'>Securely share files and folders with friends, 
                            family and colleagues for live collaboration. No email attachments required!
                        </span>
                        <a href="#" className='linkFylo flex flex-row gap-4 w-44 items-center justify-center text-center'>See how Fylo works <img className='w-5 h-5' src={IconArrow} alt="" /></a>
                        <div className='flex flex-col lg:w-3/4 bg-white p-4 lg:p-8 rounded-md shadow-lg shadow-gray-400'>
                            <span><img src={ImageQuotes} alt="" /></span>
                            <span  className='text-sm lg:text-xl'>Fylo has improved our team productivity by an order of magnitude. 
                                Since making the switch our team has become a 
                                well-oiled collaboration machine.
                            </span>
                            <div className='flex flex-row justify-start items-center gap-5'>
                                <img className='lg:w-14 w-10 lg:h-14 h-10 rounded-full' src={Avatar} alt="" />
                                <div>
                                    <h1 className='text-xs lg:text-lg font-bold textAvatar'>Kyle Burton</h1>
                                    <span className='text-xs lg:text-lg'>Founder & CEO, Huddle</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={Illustration} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StayProductive;