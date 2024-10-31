import React, { useState, useEffect, useRef } from 'react'
import a16 from '../assets/images/icons/16.png'

const Footer = () => {

    const [width, setWidth] = useState(window.innerWidth);  // state to track window width   
    const h3Refs = useRef([]);  // ref to store h3 elements for toggle
    const ulRefs = useRef([]);  // ref to store ul elements for toggle

    // Effect to update state on window resize
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Effect to toggle h3 and ul elements  
    useEffect(() => {
        if (width < 768) {
            h3Refs.current.forEach((h3, index) => {
                h3.onclick = () => {
                    console.log(h3.textContent);
                    ulRefs.current[index].style.display =
                        ulRefs.current[index].style.display === "none" ? "block" : "none";
                    h3.classList.toggle("before");
                    h3.classList.toggle("after");
                };
            });
        }
    }, [width]);

    // Render the footer
    return (
        // Footer container
        <footer className="footer-wrapper">
            <div className="container">

                {/* Upper Text */}
                <div className="upper-text-container">
                    <p>
                        1. Trade In: Trade‑in values vary. iPhone 11 and iPhone 11 Pro
                        promotional pricing is after trade‑in of iPhone 8 Plus and
                        iPhone X in good condition. Additional trade‑in values require
                        purchase of a new iPhone, subject to availability and limits.
                        Must be at least 18. Apple or its trade-in partners reserve the
                        right to refuse or limit any Trade In transaction for any
                        reason. In‑store trade‑in requires presentation of a valid,
                        government-issued photo ID (local law may require saving this
                        information). Sales tax may be assessed on full value of new
                        iPhone. Additional terms from Apple or Apple’s trade-in partners
                        may apply. Monthly pricing: Available to qualified customers and
                        requires 0% APR, 24-month installment loan with Citizens One or
                        Apple Card Monthly Installments and iPhone activation with AT&T,
                        Sprint, T-Mobile, or Verizon. Taxes and shipping not included.
                        Additional Apple Card Monthly Installments terms are in the
                        <a href="https://www.goldmansachs.com/terms-and-conditions/Apple-Card-Customer-Agreement.pdf" target="_blank">
                            Customer Agreement
                        </a>
                        . Additional iPhone Payments terms are
                        <a href="https://www.apple.com/legal/sales-support/iphoneinstallments_us/">
                            here
                        </a>
                        .
                    </p>
                    <p>
                        2. Subscription required.
                        <br />
                        <br />
                        Magic Keyboard sold separately.
                        <br />
                        <br />
                        Apple TV+ is $4.99/month after free trial. One subscription per
                        Family Sharing group. Offer good for 3 months after eligible
                        device activation. Plan automatically renews until cancelled.
                        Restrictions and other
                        <a href="https://www.apple.com/promo/">terms </a> apply.
                    </p>
                </div>

                {/* Footer Links grid structure */}
                <div className="footer-links-wrapper row">

                    {/* Shop and learn link */}
                    <div className="links-wrapper-1 col-sm-12 col-md">
                        <h3 ref={(el) => (h3Refs.current[0] = el)} className="before">
                            Shop and Learn
                        </h3>
                        <ul ref={(el) => (ulRefs.current[0] = el)} className="hide-mobile">
                            <li><a href="#">Mac</a></li>
                            <li><a href="#">iPad</a></li>
                            <li><a href="#">iPhone</a></li>
                            <li><a href="#">Watch</a></li>
                            <li><a href="#">TV</a></li>
                            <li><a href="#">Music</a></li>
                            <li><a href="#">AirPods</a></li>
                            <li><a href="#">HomePod</a></li>
                            <li><a href="#">iPod touch</a></li>
                            <li><a href="#">Accessories</a></li>
                            <li><a href="#">Gift Cards</a></li>
                        </ul>
                    </div>

                    {/* Services link */}
                    <div className="links-wrapper-2 col-sm-12 col-md">
                        <h3 ref={(el) => (h3Refs.current[1] = el)} className="before">
                            Services
                        </h3>
                        <ul ref={(el) => (ulRefs.current[1] = el)} className="hide-mobile">
                            <li><a href="#">Apple Music</a></li>
                            <li><a href="#">Apple News+</a></li>
                            <li><a href="#">Apple TV+</a></li>
                            <li><a href="#">Apple Arcade</a></li>
                            <li><a href="#">Apple Card</a></li>
                            <li><a href="#">iCloud</a></li>
                        </ul>
                        <h3 ref={(el) => (h3Refs.current[2] = el)} className="before">
                            Account
                        </h3>
                        <ul ref={(el) => (ulRefs.current[2] = el)} className="hide-mobile">
                            <li><a href="#">Manage Your Apple ID</a></li>
                            <li><a href="#">Apple Store Account</a></li>
                            <li><a href="#">iCloud.com</a></li>
                        </ul>
                    </div>

                    {/* Apple Store link */}
                    <div className="links-wrapper-3 col-sm-12 col-md">
                        <h3 ref={(el) => (h3Refs.current[3] = el)} className="before">
                            Apple Store
                        </h3>
                        <ul ref={(el) => (ulRefs.current[3] = el)} className="hide-mobile">
                            <li><a href="#">Find a Store</a></li>
                            <li><a href="#">Genius Bar</a></li>
                            <li><a href="#">Today at Apple</a></li>
                            <li><a href="#">Apple Camp</a></li>
                            <li><a href="#">Field Trip</a></li>
                            <li><a href="#">Apple Store App</a></li>
                            <li><a href="#">Refurbished and Clearance</a></li>
                            <li><a href="#">Financing</a></li>
                            <li><a href="#">Apple Trade In</a></li>
                            <li><a href="#">Order Status</a></li>
                            <li><a href="#">Shopping Help</a></li>
                        </ul>
                    </div>

                    {/* For Business link */}
                    <div className="links-wrapper-4 col-sm-12 col-md">
                        <h3 ref={(el) => (h3Refs.current[4] = el)} className="before">
                            For Business
                        </h3>
                        <ul ref={(el) => (ulRefs.current[4] = el)} className="hide-mobile">
                            <li><a href="#">Apple and Business</a></li>
                            <li><a href="#">Shop for Business</a></li>
                        </ul>
                        <h3 ref={(el) => (h3Refs.current[5] = el)} className="before">
                            For Education
                        </h3>
                        <ul ref={(el) => (ulRefs.current[5] = el)} className="hide-mobile">
                            <li><a href="#">Apple and Education</a></li>
                            <li><a href="#">Shop for College</a></li>
                        </ul>
                        <h3 ref={(el) => (h3Refs.current[6] = el)} className="before">
                            For Healthcare
                        </h3>
                        <ul ref={(el) => (ulRefs.current[6] = el)} className="hide-mobile">
                            <li><a href="#">Manage Your Apple ID</a></li>
                            <li><a href="#">Apple Store Account</a></li>
                            <li><a href="#">iCloud.com</a></li>
                        </ul>
                        <h3 ref={(el) => (h3Refs.current[7] = el)} className="before">
                            For Government
                        </h3>
                        <ul ref={(el) => (ulRefs.current[7] = el)} className="hide-mobile">
                            <li><a href="#">Apple and Education</a></li>
                            <li><a href="#">Shop for College</a></li>
                        </ul>
                    </div>

                    {/* Apple Values link */}
                    <div className="links-wrapper-5 col-sm-12 col-md">
                        <h3 ref={(el) => (h3Refs.current[8] = el)} className="before">
                            Apple Values
                        </h3>
                        <ul ref={(el) => (ulRefs.current[8] = el)} className="hide-mobile">
                            <li><a href="#">Find a Store</a></li>
                            <li><a href="#">Genius Bar</a></li>
                            <li><a href="#">Today at Apple</a></li>
                            <li><a href="#">Apple Camp</a></li>
                            <li><a href="#">Field Trip</a></li>
                            <li><a href="#">Apple Store App</a></li>
                        </ul>
                        <h3 ref={(el) => (h3Refs.current[9] = el)} className="before">
                            About Apple
                        </h3>
                        <ul ref={(el) => (ulRefs.current[9] = el)} className="hide-mobile">
                            <li><a href="#">Find a Store</a></li>
                            <li><a href="#">Genius Bar</a></li>
                            <li><a href="#">Today at Apple</a></li>
                            <li><a href="#">Apple Camp</a></li>
                            <li><a href="#">Field Trip</a></li>
                            <li><a href="#">Apple Store App</a></li>
                        </ul>
                    </div>
                </div>

                {/* Second section starts here */}
                <div className="my-apple-wrapper">
                    More ways to shop: <a href="#">Find an Apple Store</a> or{" "}
                    <a href="#">other retailer</a> near you. Or call 1-800-MY-APPLE.
                </div>
                <div className="copyright-wrapper row">
                    <div className="copyright col-sm-12 order-2 col-md-8 order-md-1 col-lg-4 order-lg-1">
                        Copyright &copy; 2020 Apple Inc. All rights reserved.
                    </div>
                    <div className="footer-links-terms  col-sm-12 order-3 col-lg-6 order-lg-2">
                        <ul>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Use</a></li>
                            <li><a href="#">Sales and Refunds</a></li>
                            <li><a href="#">Legal</a></li>
                            <li><a href="#">Site Map</a></li>
                        </ul>
                    </div>
                    <div className="footer-country  col-sm-12 order-1 col-md-4 order-md-2 text-md-right col-lg-2 order-lg-3">
                        <div className="flag-wrapper">
                            <img src={a16} />
                        </div>
                        <div className="footer-country-name">United States</div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
