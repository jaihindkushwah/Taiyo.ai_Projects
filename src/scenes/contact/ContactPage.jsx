import React from "react";
import {XCircleIcon} from '@heroicons/react/24/solid'

function ContactPage(){
  return (
    <div className={`p-10 flex justify-center items-center `}>
      <div className="w-[700px]">
        <div className="h-10 w-full flex justify-center items-center bg-blue-700">
          <h2 className="text-xl font-normal">Create Page</h2>
        </div>
        <div className="flex justify-around items-center flex-col border-blue-700 border-[8px] h-[500px] w-full">
              <div>
                <button className="bg-slate-400 pt-2 pb-2 pl-4 pr-4">
                  Create Contact
                </button>
              </div>
              <div className="bg-red-100 p-5 flex justify-around items-center">
                <XCircleIcon className="w-8 h-8 mr-3"/>
                <p className="text-center">No Contact Found Please add contact from Create Contact Button</p>
              </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
