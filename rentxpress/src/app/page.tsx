import LoaderComponent from "./components/home/loader/main-load";
import Main_Menu from "./components/home/main/main-menu";
import Main_Info from "./components/home/main/main-info";
import Main_Info_img from "./components/home/main/main-info-img";
import Main_Form from "./components/home/main/main-form";
import Main_corp from "./components/home/main/main-corp";
import Main_vector from "./components/home/main/main-vectors";

import "./css/animations.css";
import "./css/style.css";
export default function Home() {
  return (
    <div className=" relative h-auto w-full flex justify-center items-center overflow-hidden bg-transparent">
      {/* Pantalla de carga */}
      <div className=" line loader w-full h-full absolute overflow-hidden">
        <LoaderComponent />
      </div>
      {/* Pantalla inicio */}
      <div className="main z-10 relative overflow-auto  w-full h-screen flex flex-col items-center">
          <Main_vector />
          <Main_Menu />
        <div className="w-full h-full flex z-0  items-center">
          <div className=" info w-1/2 h-full relative flex justify-center items-center z-0">
            <Main_Info />
          </div>
          <div className="img w-1/2 h-full relative flex justify-center items-center z-0">
            <Main_Info_img />
          </div>
        </div>
        <div className="form  w-full  h-auto relative flex justify-center items-center z-0 border">
          <Main_Form />
        </div>
        <div className="info h-52 w-full" >
          {/* <Main_corp/> */}
        </div>
      </div>
    </div>
  );
}
