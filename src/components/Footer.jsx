import React from "react";

const Footer = () => {
    return (
        <>
            <p
                className="text-center py-4 w-[80%] m-auto"
                style={{ borderTop: "1px solid lightgray" }}
            >
                Reduce images is a free online image resizer that allows you to
                resize an image, change their format, compress them, and save
                the resized images as JPG, PNG or GIF.
            </p>

            <div className="text-center py-4 bg-slate-900 text-white capitalize">
                <p className="">
                    2024 © All rights reserved -
                    <span className="text-violet-300">Anas</span>
                </p>
            </div>
        </>
    );
};

export default Footer;
