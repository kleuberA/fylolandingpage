const Getearly = () =>{
    return(
        <div className="containerGetEarly">
            <div className="flex flex-col lg:flex-row w-4/5 m-auto h-80 items-center text-white">
                <div className="flex flex-col gap-6 lg:w-1/2 pb-6 lg:pb-0 pt-6 lg:pt-0">
                    <h1 className="text-white text-xl lg:text-3xl font-bold text-center lg:text-start">Get early access today</h1>
                    <span className="text-white font-normal lg:w-3/4 text-center lg:text-start">It only takes a minute to sign up and our 
                        free starter tier is extremely generous. If you 
                        have any questions, our support team would be happy to help you.
                    </span>
                </div>
                <div className="flex flex-col lg:w-1/2 gap-3 lg:gap-6 ">
                    <input className="lg:w-96 h-9 pl-4 text-black outline-none rounded-sm" type="text" placeholder="email@example.com"/>
                    <button className="buttonGetStarted w-48 h-9 rounded-sm">Get Started For Free</button>
                </div>
            </div> 
        </div>
    )
}

export default Getearly;