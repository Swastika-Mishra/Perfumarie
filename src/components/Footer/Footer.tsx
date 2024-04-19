import './Footer.css'
// import footer_logo from '../../assets/footer_logo.png'
import instagram from '../../assets/instagram.png'
import pintrest from '../../assets/pinterest.png'
import whatsapp from '../../assets/whatsapp.png'

const Footer = () => {
    return (
        <div className="Footer">
            <div className="footer-logo">
                {/* <img src={footer_logo} alt="" /> */}
                <p>Perfumarie</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Stores</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icons">
                <div className="footer-icons-container">
                    <img src={instagram} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={pintrest} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={whatsapp} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer