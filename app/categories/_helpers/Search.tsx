"use client";

import React, { useState } from "react";

const Search = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="flex justify-end items-center w-96">
            {open ? (
                <input
                    placeholder="Search"
                    className="bg-transparent placeholder:opacity-50 w-full placeholder:text-white border-b border-opacity-15 border-white"
                    onBlur={() => setOpen((prevState) => !prevState)}
                />
            ) : (
                <button
                    className="btn-primary"
                    onClick={() => setOpen((prevState) => !prevState)}
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M23.561 21.4455L18.9159 16.7984C22.3916 12.1536 21.4439 5.57058 16.7991 2.09486C12.1543 -1.38086 5.57131 -0.433144 2.09559 4.21163C-1.38013 8.8564 -0.432411 15.4394 4.21236 18.9151C7.94343 21.7071 13.068 21.7071 16.7991 18.9151L21.4462 23.5622C22.0302 24.1462 22.977 24.1462 23.561 23.5622C24.1449 22.9782 24.1449 22.0314 23.561 21.4475L23.561 21.4455ZM10.5445 18.0182C6.4164 18.0182 3.06998 14.6718 3.06998 10.5437C3.06998 6.41566 6.4164 3.06925 10.5445 3.06925C14.6725 3.06925 18.0189 6.41566 18.0189 10.5437C18.0145 14.6699 14.6707 18.0138 10.5445 18.0182Z"
                            fill="#D3D4D9"
                        />
                    </svg>
                </button>
            )}
        </div>
    );
};

export default Search;
