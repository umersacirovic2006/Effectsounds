import React from "react";

const Footer = () => {
    return (
        <footer>
            <div className="links px-80 py-10 flex justify-between items-start bg-secondary font-semibold">
                <div>
                    <p className="text-neutral py-5 syne">Product</p>
                    <ul className="gap-2 flex flex-col text-primary lato">
                        <li>Sound effects</li>
                        <li>FAQ</li>
                        <li>Pricing</li>
                        <li>Home</li>
                        <li>Log in</li>
                    </ul>
                </div>
                <div>
                    <p className="text-neutral py-5 syne">Company</p>
                    <ul className="gap-2 flex flex-col text-primary lato">
                        <li>Contact</li>
                        <li>Community</li>
                        <li>Work with us</li>
                    </ul>
                </div>
                <div>
                    <p className="text-neutral py-5 syne">Categories</p>
                    <ul className="gap-2 flex flex-col text-primary lato">
                        <li>Ambient</li>
                        <li>Medieval</li>
                        <li>Explosion</li>
                        <li>Swoosh</li>
                        <li>Guns</li>
                    </ul>
                </div>
                <div>
                    <p className="text-neutral py-5 syne">Legal</p>
                    <ul className="gap-2 flex flex-col text-primary lato">
                        <li>Effect license</li>
                        <li>Terms of use</li>
                        <li>Privacy policy</li>
                        <li>Cookies settings</li>
                        <li>Help</li>
                    </ul>
                </div>
            </div>
            <div className="bg-neutral py-2 flex justify-center items-center w-full">
                <h3 className="text-primary lato">
                    Copyright © 2023 - 2023 Effectsounds. All Rights Reserved
                </h3>
            </div>
        </footer>
    );
};

export default Footer;
