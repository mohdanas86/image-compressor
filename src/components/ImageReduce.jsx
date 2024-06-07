import { useState, useEffect } from "react";
import Compressor from "compressorjs";
import { saveAs } from "file-saver";
import "../assets/ImageReducer.css";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { TbResize } from "react-icons/tb";
import img from "../assets/all-pages-2.png";

const ImageReduce = () => {
    const [originalImage, setOriginalImage] = useState(null);
    const [compressedImage, setCompressedImage] = useState(null);
    const [compressedSize, setCompressedSize] = useState(null);
    const [originalFile, setOriginalFile] = useState(null);
    
    const [reduceValue, setReduceValue] = useState("");
    // const reduceHandel=()=>{
    //   setReduceValue(reduceValue)
    // }
      console.log(reduceValue)

    const handleChange = async e => {
        const file = e.target.files[0];
        if (file) {
            setOriginalFile(file);
            setOriginalImage(`${(file.size / 1024).toFixed(2)} KB`);

            new Compressor(file, {
                quality: reduceValue ? reduceValue : 0.6,
                success(result) {
                    const reader = new FileReader();
                    reader.readAsDataURL(result);
                    reader.onload = () => {
                        setCompressedSize(
                            `${(result.size / 1024).toFixed(2)} KB`
                        );
                        setCompressedImage(reader.result);
                    };
                }
            });
        }
    };

    const downloadFile = () => {
        const url = compressedImage;
        fetch(url)
            .then(res => res.blob())
            .then(blob => saveAs(blob, "compressedImageAnas.jpg"));
    };

    return (
        <div className="grid w-[80%] m-auto grid-cols-1 gap-4 py-4">
            <div className="heroImageCon flex justify-center items-center">
                <img src={img} className="heroImage" />
            </div>
            <div className="heroTitle text-center">
                <h2 className="text-3xl font-bold">Resize an Image</h2>
            </div>
            <div className="heroSubTitle text-center  ">
                <h3 className="md:text-lg font-medium">
                    100% Automatically and Free
                </h3>
            </div>

            <div className="flex flex-col justify-center items-start py-4 pb-0 border-t-[2px] pl-2 mt-8 border-slate-300 w-full md:w-[40%] m-auto">
            <label>size in number. example 10, 50, 90</label>
            <input type="text" className=" border border-slate-300 rounded-lg py-2 px-4 mt-2 w-full" onChange={(e)=>setReduceValue(e.target.value /100)} />
            </div>

            <div className="heroInput  flex justify-center items-center flex-col py-4">
                <label class="custum-file-upload" for="file">
                    <div class="icon">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill=""
                            viewBox="0 0 24 24"
                        >
                            <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                            <g
                                stroke-linejoin="round"
                                stroke-linecap="round"
                                id="SVGRepo_tracerCarrier"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                                {" "}
                                <path
                                    fill=""
                                    d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z"
                                    clip-rule="evenodd"
                                    fill-rule="evenodd"
                                ></path>{" "}
                            </g>
                        </svg>
                    </div>
                    <div class="text">
                        <span>Click to upload image</span>
                    </div>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleChange}
                        id="file"
                        name="file"
                    />
                </label>
            </div>

            {/* COMPRESED IMAGE */}
            {compressedImage && (
                <div className="showImageCon flex justify-center items-center flex-col py-4">
                    <img src={compressedImage} alt="Compressed" />
                    <p>
                        SIZE {originalImage} to{" "}
                        <span className="text-green-700">{compressedSize}</span>
                    </p>
                    <button
                        onClick={downloadFile}
                        className="btn mt-4 rounded-xl bg-violet-500 py-2 w-[80%] md:w-[40%] hover:bg-transparent hover:text-slate-900 hover:border-slate-900 flex justify-center items-center gap-4"
                    >
                        <IoCloudDownloadOutline /> download
                    </button>
                </div>
            )}

            <div className="flex justify-center items-start text-start flex-col gap-3 mb-4 p-4">
                <h2 className="w-full text-2xl text-slate-700">
                    What is an image file size?
                </h2>
                <p className="text-slate-600">
                    Images are composed by several dots called pixels, and each
                    of them has a color, represented as a combination of three
                    basic colors (red, green and blue). To store each of these
                    pixels, 3 bytes (24 ones or zeros) are generally used. When
                    an image is large, it may have millions of pixels, and that
                    means storing all information for an image like that in a
                    computer or any device will take millions of bytes.
                </p>
                <p className="text-slate-600">
                    When a camera or cellphone says it takes 10 megapixels
                    photos, it means that each photo has 10 million pixels (mega
                    = million). And having 10 million pixels means it takes 30
                    million bytes (or 30 megabytes) to store that photo (which
                    is a lot of space!). If you want to send this photo (or many
                    photos) to a friend by e-mail, it will have to transfer 30
                    megabytes of data and it will take a while to upload it and
                    a lot for the recipient to download it later.
                </p>
            </div>
        </div>
    );
};

export default ImageReduce;
