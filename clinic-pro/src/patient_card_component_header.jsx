import React from "react";
import { Pencil } from "lucide-react";

export default function PatientCard() {
  return (
    <div className="flex flex-col p-4 w-[1297px] h-[174.5px] bg-white border border-[#E4E4E4] shadow-md rounded-md overflow-hidden">
      {/* Breadcrumb */}
      <div className="text-[#4D4482] font-semibold text-[12px] mb-4">
        Dashboard / Wimtach Client
      </div>

      {/* Frame 23998 structure */}
      <div className="flex flex-row justify-between items-start gap-[12px] w-[1235px] h-[121px] mx-auto">
        {/* Left Column - Frame 24024 */}
        <div className="flex flex-col justify-start items-start gap-[8px] w-[234.95px] h-[94.02px]">
          {/* Frame 23935 */}
          <div className="flex flex-row items-center gap-[12px] w-[279.88px] h-[64px]">
            {/* Avatar */}
            <div className="relative w-[41.88px] h-[39.92px]">
              <div className="absolute w-[41.88px] h-[39.92px] bg-[#ADB5BD] rounded-full" />
              <div className="absolute inset-0 flex items-center justify-center text-white font-medium text-[15px]">
                WI
              </div>
            </div>

            {/* Client Info */}
            <div className="flex flex-col items-start justify-center gap-[3px] w-[200px]">
              <div className="text-[18px] font-medium leading-[24px] tracking-[0.4px] text-black">
                Wimtach Client
              </div>
              <div className="text-[#6C757D] text-[12px] font-medium leading-[18px]">
                Last Active: Mar 20, 2019 23:14
              </div>
            </div>
          </div>

          {/* Discharge Button - contained properly */}
          <button className="flex justify-center items-center px-[12px] py-[6px] w-[143px] h-[36px] bg-[#845EC0] rounded-[10px] text-white text-[14px] font-medium mt-1">
            Discharge Patient
          </button>
        </div>

        {/* Right Column - Info Box */}
        <div className="flex flex-row items-start gap-[12px] w-[741.01px] h-[121px] mx-auto relative top-[-8px]">
          <div className="flex flex-col border border-[#DEE2E6] rounded-[10px] p-[10px_24px] gap-[8px] w-[654px] h-[110px] justify-center">
            <div className="flex flex-row items-start gap-[60px] w-[606px]">
              {/* Left Column */}
              <div className="flex flex-col justify-center items-start gap-[8px] w-[110px]">
                <div>
                  <p className="text-[#6C757D] text-[14px] leading-[20px]">Phone:</p>
                  <p className="font-medium text-[14px]">(555) 555-5555</p>
                </div>
                <div>
                  <p className="text-[#6C757D] text-[14px] leading-[20px]">Injury Location:</p>
                  <p className="font-medium text-[14px]">Right</p>
                </div>
              </div>

              {/* Right Column */}
              <div className="flex flex-col justify-center items-start gap-[8px] w-[436px]">
                <div>
                  <p className="text-[#6C757D] text-[14px] leading-[20px]">Email:</p>
                  <p className="font-medium text-[14px]">wimtachclient@hotmail.com</p>
                </div>
                <div>
                  <p className="text-[#6C757D] text-[14px] leading-[20px]">Diagnosis:</p>
                  <p className="font-medium text-[14px] leading-[20px]">
                    Other specified malignant neoplasm of skin, unspecified - C4499
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Edit Icon - square rounded with soft corners and shadow */}
          <div className="flex items-center justify-center">
            <div className="w-[45px] h-[45px] bg-[#ADB5BD] rounded-[12px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] flex items-center justify-center">
              <Pencil className="text-white w-[22px] h-[22px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
