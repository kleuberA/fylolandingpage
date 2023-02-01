import IllustrationAllfiles from '../assets/images/illustration-1.svg'

const Allfiles = () =>{
    return(
        <div className='flex flex-col-reverse lg:flex-row w-4/5 m-auto gap-11 pt-9 pb-16 containerAllFilles'> 
            <div className='flex lg:w-1/2 justify-center items-center flex-col'>
                <h1 className='textFeatures font-bold text-xl lg:text-3xl text-center lg:text-start'>All your files in one secure location, accessible anywhere.</h1>
                <span className='descricao pt-4 lg:pt-6 text-center lg:text-start'>Fylo stores your most important files in one secure location. 
                    Access them wherever you need, 
                    share and collaborate with friends, family, and co-workers.
                </span>
                <div className='flex flex-col lg:flex-row justify-between w-full pt-4 lg:pt-6 gap-5 lg:gap-0'>
                    <input className='lg:w-96 h-9 text-black outline-none inputEmail pl-4 rounded-sm' type="text" placeholder="Enter your email..." />
                    <button className='buttonGetStarted lg:w-48 h-9 rounded-sm text-white'>Get Started</button>
                </div>
            </div>
            <div className='flex lg:w-1/2'>
                <img src={IllustrationAllfiles} alt="Illustration" />
            </div>
        </div>
    )
}


export default Allfiles;