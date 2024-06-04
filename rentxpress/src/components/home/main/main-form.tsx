import React from "react";

const MainForm: React.FC = () => {
  return (
    <div className="container_form w-11/12 bg-[#9CAAF4] p-2 flex items-center justify-center rounded-lg mt-8 z-[1]">
      <div className="form_bg  h-auto p-1  w-full items-center justify-center flex">
        <form className="car_form flex items-center justify-center text-[12px] sm:flex-wrap xl:flex-nowrap w-full">
          <div className="prt-form flex items-center justify-center flex-col sm:mt-1 text-white w-3/12 text-[10px] ">
            <div className="w-10/12">
             <p className="txt-form mb-2">Ubicación</p>
            </div>
            <select name="" id="" className="locations-form  text-[13px] rounded-lg outline-none h-[40px] text-gray-500 w-10/12">
              <option value="">Text</option>
              <option value="">Text</option>
              <option value="">Text</option>
              <option value="">Text</option>
            </select>
          </div>
          <div className="prt-form flex items-center justify-center flex-col sm:mt-1 text-white w-3/12 text-[10px] ">
            <div className="w-10/12">
             <p className="txt-form mb-2">Vehículo</p>
            </div>
            <select name="" id="" className="locations-form shadow text-[13px] rounded-lg outline-none h-[40px] text-gray-500 w-10/12">
              <option value="">Text</option>
              <option value="">Text</option>
              <option value="">Text</option>
              <option value="">Text</option>
            </select>
          </div>
          <div className="prt-form flex items-center justify-center flex-col sm:mt-1 text-white w-3/12 text-[10px] ">
            <div className="w-10/12">
             <p className="txt-form mb-2">Fecha</p>
            </div>
            <input type="date" name="" id="" className="locations-form shadow text-[13px] rounded-lg outline-none h-[40px] text-gray-500 w-10/12" />
          </div>
          <div className="prt-form flex items-center justify-center flex-col sm:mt-1 text-white w-3/12 text-[10px] ">
            <div className="w-10/12">
             <p className="txt-form mb-2">Fecha</p>
            </div>
            <input type="date" name="" id="" className="locations-form shadow text-[13px] rounded-lg outline-none h-[40px] text-gray-500 w-10/12" />
          </div>
          <div className="prt-form flex items-center justify-center flex-col sm:mt-1 text-white w-3/12 text-[10px] ">
            <div className="w-10/12">
             <p className="txt-form mb-2">Hora</p>
            </div>
            <input type="time" name="" id="" className="locations-form shadow text-[13px] rounded-lg outline-none h-[40px] text-gray-500 w-10/12" />
          </div>
          <div className="prt-form flex items-center justify-center flex-col sm:mt-1 text-white w-3/12 text-[10px] ">
            <p className="text-[#9CAAF4]">0</p>
            <button className="btn-form         bg-[#3E20E4] w-6/12 h-[50px] rounded-lg ">Buscar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MainForm;

