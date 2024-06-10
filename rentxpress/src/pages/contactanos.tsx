import React from "react";
import dynamic from "next/dynamic";
import Main_footer from "../components/home/main/main-footer";
import Contact_text from "../components/contactanos/contacta";

const MyLocationMap = dynamic(() => import("../components/contactanos/map"), {
  ssr: false,
});

const Contactanos: React.FC = () => {
  const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={24}
      height={24}
      color={"#000000"}
      fill={"black"}
      {...props}
    >
      <path
        d="M2 18.5C3.76504 19.521 5.81428 20 8 20C14.4808 20 19.7617 14.8625 19.9922 8.43797L22 4.5L18.6458 5C17.9407 4.37764 17.0144 4 16 4C13.4276 4 11.5007 6.51734 12.1209 8.98003C8.56784 9.20927 5.34867 7.0213 3.48693 4.10523C2.25147 8.30185 3.39629 13.3561 6.5 16.4705C6.5 17.647 3.5 18.3488 2 18.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
  const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={24}
      height={24}
      color={"#000000"}
      fill={"none"}
      {...props}
    >
      <path
        d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M17.5078 6.5L17.4988 6.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  const Facebook02Icon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={24}
      height={24}
      color={"#000000"}
      fill={"none"}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.18182 10.3333C5.20406 10.3333 5 10.5252 5 11.4444V13.1111C5 14.0304 5.20406 14.2222 6.18182 14.2222H8.54545V20.8889C8.54545 21.8081 8.74951 22 9.72727 22H12.0909C13.0687 22 13.2727 21.8081 13.2727 20.8889V14.2222H15.9267C16.6683 14.2222 16.8594 14.0867 17.0631 13.4164L17.5696 11.7497C17.9185 10.6014 17.7035 10.3333 16.4332 10.3333H13.2727V7.55556C13.2727 6.94191 13.8018 6.44444 14.4545 6.44444H17.8182C18.7959 6.44444 19 6.25259 19 5.33333V3.11111C19 2.19185 18.7959 2 17.8182 2H14.4545C11.191 2 8.54545 4.48731 8.54545 7.55556V10.3333H6.18182Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
  return (
    <div className="main z-10 relative overflow-y-auto w-full h-screen flex flex-col items-center ">
      <div className="flex justify-center items-center w-full mt-[12%]">
        <div className="w-[55%] h-[500px] flex flex-col justify-center bg-[#9CAAF4] text-white p-[8%]">
          <span className="text-[40px] font-noto-serif font-light mb-2 line">
            Nos encantaría hablar contigo puedes contactarnos
          </span>
          <span className="font-cairo text-[20px]">hello@weserve.com</span>
          <span className="font-cairo text-[20px]">+1 234 234 556</span>
          <span className="font-cairo text-[20px]">
            205-167 Union St, Brooklyn, NY 11231
          </span>
        </div>
        <div className="flex justify-center items-center w-[45%] h-auto">
            <MyLocationMap />
        </div>
      </div>
      <div className=" relative flex justify-center items-center w-full mt-[4%]">
        <div className="img-bg w-full h-full absolute"></div>
        <div className="w-[55%] h-full flex flex-col pt-8 p-[8%] z-10 bg-white bg-opacity-[75%]">
          <span className="text-[40px] font-noto-serif font-light mb-2 line">
            Deja un mensaje y conéctate con nosotros
          </span>
          <span className="font-cairo text-[20px]">
            Tambien puedes visitarnos en nuestras redes sociales.
          </span>
          <div className="flex gap-4">
            <TwitterIcon />
            <span className="font-cairo text-[20px]">Twitter</span>
          </div>
          <div className="flex gap-4">
            <InstagramIcon />
            <span className="font-cairo text-[20px]">Instagram</span>
          </div>
          <div className="flex gap-4">
            <Facebook02Icon />
            <span className="font-cairo text-[20px]">Facebook</span>
          </div>
        </div>
        <div className="w-[55%] h-auto flex flex-col  z-10 bg-white bg-opacity-[75%] p-4">
          <Contact_text />
        </div>
      </div>
      <Main_footer />
    </div>
  );
};

export default Contactanos;
