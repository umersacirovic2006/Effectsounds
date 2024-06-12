import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <footer>
            <div className="links px-80 py-10 flex justify-between items-start bg-secondary font-semibold">
                <div>
                    <p className="text-neutral py-5 syne">Product</p>
                    <div className="gap-2 flex flex-col text-primary lato">
                        <button className="btn-primary text-left">
                            Sound effects
                        </button>
                        <button className="btn-primary text-left">FAQ</button>
                        <Link href="/pricing" className="btn-primary text-left">
                            Pricing
                        </Link>
                        <Link href="/" className="btn-primary text-left">
                            Home
                        </Link>
                        <Link
                            href="?showDialog=y"
                            className="btn-primary text-left"
                        >
                            Log in
                        </Link>
                    </div>
                </div>
                <div>
                    <p className="text-neutral py-5 syne">Company</p>
                    <div className="gap-2 flex flex-col text-primary lato">
                        <button className="btn-primary text-left">
                            Contact
                        </button>
                        <button className="btn-primary text-left">
                            Community
                        </button>
                        <button className="btn-primary text-left">
                            Work with us
                        </button>
                    </div>
                </div>
                <div>
                    <p className="text-neutral py-5 syne">Categories</p>
                    <div className="gap-2 flex flex-col text-primary lato">
                        <Link href='/category' className="btn-primary text-left">
                            Ambient
                        </Link>
                        <Link href='/category' className="btn-primary text-left">
                            Medieval
                        </Link>
                        <Link href='/category' className="btn-primary text-left">
                            Explosion
                        </Link>
                        <Link href='/category' className="btn-primary text-left">
                            Swoosh
                        </Link>
                        <Link href='/category' className="btn-primary text-left">Guns</Link>
                    </div>
                </div>
                <div>
                    <p className="text-neutral py-5 syne">Legal</p>
                    <div className="gap-2 flex flex-col text-primary lato">
                        <button className="btn-primary text-left">
                            Effect license
                        </button>
                        <button className="btn-primary text-left">
                            Terms of use
                        </button>
                        <button className="btn-primary text-left">
                            Privacy policy
                        </button>
                        <button className="btn-primary text-left">
                            Cookies settings
                        </button>
                        <button className="btn-primary text-left">Help</button>
                    </div>
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
