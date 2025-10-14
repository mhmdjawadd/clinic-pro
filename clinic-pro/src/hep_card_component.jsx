import React from 'react';

export default function HEPCard() {
  return (
    <div className="relative flex items-center w-[750px] h-[135px] bg-white shadow-md rounded-[10px] overflow-hidden">
      {/* Left Section */}
      <div className="absolute left-[30px] top-[16px] flex flex-col items-center gap-[15px] w-[541px] h-[109px]">
        {/* Header Row */}
        <div className="flex flex-row items-center justify-between w-full h-[28px]">
          <h2 className="text-[18px] font-normal text-black">New HEP for Wimtach Client</h2>
          <span className="text-[12px] text-[#8C8C8C]">Edited 16 hours ago</span>
        </div>

        {/* Sessions and Total Reps Section */}
        <div className="flex flex-row justify-between items-center w-[529px] h-[62px]">
          {/* Sessions per Day */}
          <div className="flex flex-col items-center gap-[6px] w-[264.5px]">
            <span className="text-[14px] text-[#6C757D]">Sessions per Day</span>
            <span className="text-[16px] text-black">5</span>
          </div>

          {/* Divider */}
          <div className="border border-[#DEE2E6] rotate-[-90deg] w-[62px]"></div>

          {/* Total Reps */}
          <div className="flex flex-col items-center gap-[6px] w-[264.5px]">
            <span className="text-[14px] text-[#6C757D]">Total Reps</span>
            <span className="text-[16px] text-black">254</span>
          </div>
        </div>
      </div>

      {/* Right Section - Edit Button */}
      <div className="absolute right-0 top-0 bg-[#E791D9] w-[150px] h-full flex items-center justify-center text-white text-[18px] font-medium cursor-pointer">
        Edit HEP
      </div>
    </div>
  );
}
