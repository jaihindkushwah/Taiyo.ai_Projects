import React from "react";


function MainComponent({children,title}){

  return (
    <div className={`pb-[60px] pl-2 pr-2 pt-[100px] flex w-full h-full justify-center items-center `}>
      <div className="max-w-4xl h-full">
        <div className="h-10 w-full flex justify-center items-center bg-blue-700">
          <h2 className="text-xl font-normal">{title}</h2>
        </div>
        <div className="flex justify-around items-center flex-col  border-blue-700 bg-slate-300 mt-[-1px] border-[8px] min-h-[400px] w-full sm:min-w-[640px]">
              {children}
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
