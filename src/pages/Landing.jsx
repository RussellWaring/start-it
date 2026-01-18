// src/pages/Landing.jsx
import { Link } from "react-router-dom";
import Testimonials from "../components/Testimonials";
import { testimonials } from "../data/testimonials";
import logo1 from "../assets/logo1.png";
import "./Landing.css";

export default function Landing() {
    return (
        <div className="landing">
            <div className="landing-shell">
                <div className="landing-quotes">
                    <Testimonials items={testimonials} intervalMs={8000} />
                </div>

                <div className="landing-cta">
                    {/* Get Started -> Home */}
                    <Link to="/jobs" className="btn landing-btn">
                        Get Started
                    </Link>

                    <div className="landing-signin">
                        <div>or</div>
                        {/* sign in -> Account */}
                        <Link to="/account">sign in</Link>
                    </div>

                    <div className="landing-statement">
                        Your source for vetted, truly entry level roles with honest opportunities <br/>and expectations.
                    </div>
                </div>
            </div>

            <img className="landing-logo" src={logo1} alt="start-it" />

            <div className="landing-partner">
                <div style={{ fontWeight: 700 }}>Trusted Partner</div>
                <div style={{ color: "var(--muted)" }}>Placeholder</div>
            </div>
        </div>
    );
}
