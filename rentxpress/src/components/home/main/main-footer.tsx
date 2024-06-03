import React from "react";
import Image from "next/image";
import facebook from "../../../images/svg/ico-facebook.svg"
import instagram from "../../../images/svg/ico-instagram.svg"
import twitter from "../../../images/svg/ico-twitter.svg"
import phone from "../../../images/svg/phone-foot.svg"

const Main_footer: React.FC=()=>{
    return(
        <div className="w-full h-auto bg-black bg-opacity-[50%] flex flex-col justify-center items-center mt-[5%]">
            <div className="h-[200px] w-11/12 flex flex-col items-center justify-center">
                <div className="icons w-full flex justify-center items-center gap-5 m-5">
                    <Image src={facebook} alt=""/>
                    <Image src={instagram} alt=""/>
                    <Image src={twitter} alt=""/>
                    <Image src={phone} alt="" className="fill-none" width={35} height={34}/>
                </div>
                <div className="border border-black w-11/12"></div>
                <div className="corp m-5 font-plus-jakarta-sans text-[16px]">
                    ©2024  RentXpress. All rights reserved
                </div>
            </div>
        </div>
    );
};

export default Main_footer;