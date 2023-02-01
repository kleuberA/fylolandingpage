import Allfiles from "../Components/Allfiles";
import Footer from "../Components/Footer";
import Getearly from "../Components/Getearly";
import NavBar from "../Components/Navbar"
import StayProductive from "../Components/StayProductive";

const Home = () =>{
    return(
        <>
            <NavBar/>
            <Allfiles/>
            <StayProductive/>
            <Getearly/>
            <Footer/>
        </>
    )
}

export default Home;