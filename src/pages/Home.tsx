//import sample from '../assets/mixkit-pink-rose-underwater-171-medium.mp4'
import sample from '../assets/mixkit-closeup-of-lavender-field-566-medium.mp4'
import gift from '../assets/gift_2349820.png'
import custom from '../assets/aromatherapy.png'
import appointment from '../assets/icons8-popular-woman-96.png'
import './Home.css'
import Carousal from '../components/Carousal'
import Categories from '../components/Categories/Categories'
import Offers from '../components/Offers/Offers'
import Popular from '../components/Popular/Popular'
import Footer from '../components/Footer/Footer'
import Generate from '../components/Generate/Generate'
import Navbar from '../components/Navbar'

export default function Home() {
    return (
        <>
            <Navbar />
            <video className='videoTag' autoPlay loop muted>
                <source src={sample} type='video/mp4' />
            </video>

            <div className="overlay">
                <h2 className='typed-out'>Redefining Luxury</h2>
            </div>

            <div className="new-launches">
                <h2 className='tag'>New Launch</h2>
                <Carousal />
            </div>

            <Popular />
            
            <h2 className='tag'>Shop By Categories</h2>
            <Categories />
            <Generate />
            <Offers />

            <h2 className='tag'>Additional Services</h2>
            <div className="add_services">
                <div className="row">
                    <div className="services">
                        <h2>Gift</h2><br />
                        <img src={gift} alt="Gift your loved ones" className='main-image'/><br /><br />
                        <p><strong>Oh my god! Someone's birthday is coming up and you don't have a gift?</strong><br /><br />Surprise your loved ones with our special gift boxes, wrapped to perfection with a customizable calligraphed love message and fastest delivery...</p>
                    </div>
                    <div className="services">
                        <h2>Genie Creation</h2><br />
                        <img src={custom} alt="Customize perfumes" className='main-image'/><br /><br />
                        <p><strong>Got a scent stuck at you mind?</strong><br /><br />Or are you imagining a scent? Or it could be your chemist coming out to experiment? We've got you covered, Mi Amor! Play with different scents and our experts will create one that is in your mind...</p>
                    </div>
                    <div className="services">
                        <h2>Book an appointment</h2><br />
                        <img src={appointment} alt="Book appointment" className='main-image'/><br /><br />
                        <p><strong>So, what's your aesthetic?</strong><br /><br />Book an appointment with our perfume experts to know which fragrance suits your persona. Next time you can make a strong impression, whether be it an interview or a date ;D</p>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
}