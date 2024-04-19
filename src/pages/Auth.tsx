import { useState } from "react"
import './Auth.css'

export default function Auth() {
    const [state, setstate] = useState(false)
    const changestate = () => {
        setstate(true)
    }
    function Item() {
        if (state) {
            return (
                <div className="main">
                    <form className="login-signup">
                        <h1 className="heading">Perfumarie</h1>
                        <h1>Sign-In</h1>
                        <input className="fields" name="email" placeholder="Email" />
                        <input className="fields" name="name" placeholder="Name" />
                        <input className="fields" name="password" placeholder="Password" />
                        <input className="fields" name="c-password" placeholder="Confirm Password" />
                        <button className="submit" type="submit">Sign-In</button>
                        <div className="alt"><p>Already have an account?</p><button className="alt-btn" onClick={changestate}>Log-In</button></div>
                    </form>
                </div>
            );
        }
        else {
            return (
                <div className="main">
                    <form className="login-signup">
                        <h1 className="heading">Perfumarie</h1>
                        <h1>Log-In</h1>
                        <input className="fields" name="email" placeholder="Email" />
                        <input className="fields" name="password" placeholder="Password" />
                        <button className="submit" type="submit">Log-In</button>
                        <span className="alt"><p>Don't have an account?</p><button className="alt-btn" onClick={changestate}>Sign-In</button></span>
                    </form>
                </div>
            );
        }
    }
    return (
        <>
            <section className="form">
                <Item />
            </section>
        </>
    )
}