import "./HomeView.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import Footer from "../components/Footer";

function HomeView() {
    return (
        <>
            <div className="mainPage">
                <Feature />
                <Hero />
                <Header />
            </div>
            <Footer />
        </>
    )
}

export default HomeView;