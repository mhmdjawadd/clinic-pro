import React from 'react';
import captureImg from "./assets/Capture.PNG";
export default function PatientEducationCard() {
  return (
    <div className="flex flex-col justify-center items-center p-[14px_19px] gap-[10px] w-[750px] h-[245px] bg-white shadow-md rounded-[10px]">
      {/* Inner Container */}
      <div className="flex flex-col items-center w-[698px] h-[215px]">
        {/* Header Section */}
        <div className="flex flex-col items-start gap-[12px] w-[698px] h-[62px]">
          {/* Title and Line */}
          <div className="flex flex-col items-start gap-[3px] w-full h-[31px]">
            <h2 className="text-[18px] font-normal text-black">Patient Education</h2>
            <div className="border-b border-[#DEE2E6] w-full"></div>
          </div>

          {/* Coming Soon */}
          <span className="text-[16px] text-black">Coming soon</span>
        </div>

        {/* Illustration */}
        <div className="mt-[10px]">
          <img
            src={captureImg}
            alt="Range of Motion Restoration"
            className="w-[318px] h-[153px] object-contain"
          />
        </div>
      </div>
    </div>
  );
}
