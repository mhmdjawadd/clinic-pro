import { MdLocalFireDepartment, MdCheckCircleOutline, MdMotionPhotosOn } from "react-icons/md";

export default function StatsCard() {
  const days = ["Wed", "Thru", "Fri", "Sat", "Sun", "Mon", "Today"];
  const activeDay = "Sat";

  return (
    <div
      className="flex flex-row items-center p-0 gap-[12px] w-[407px] h-[198px] bg-white rounded-[10px] font-inter shadow"
      style={{ flex: 'none', order: 0, alignSelf: 'stretch', flexGrow: 0 }}
    >
      {/* Left Section */}
      <div className="flex flex-col justify-between p-3 w-[245px]">
        {/* Header */}
        <div className="flex justify-between items-start w-full">
          <div>
            <p className="text-[18px] text-black leading-[28px]">Stats</p>
            <p className="text-[12px] text-grayText leading-[24px]">for Period 3</p>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-[12px] text-black leading-[18px]">Streaks</p>
            <div className="flex items-end gap-1">
              <p className="text-[12px] text-grayText">1</p>
              <MdLocalFireDepartment className="text-[18px] text-[#EEA63A]" />
            </div>
          </div>
        </div>

        {/* Circles + Days */}
        <div className="flex flex-col gap-[4px]">
          {/* Icons */}
          <div className="flex items-center justify-between w-[216px] h-[24px]">
            {days.map((day, index) => (
              <div key={day} className="flex flex-col justify-center items-center relative w-[24px] h-[24px]">
                {day === activeDay ? (
                  <MdCheckCircleOutline className="text-[24px] text-[#2196F3]" />
                ) : (
                  <MdMotionPhotosOn className="text-[24px] text-[#CED4DA]" />
                )}
                {index < days.length - 1 && (
                  <div className="absolute right-[-6px] top-[12px] w-[1px] h-[12px] bg-[#E9ECEF] transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>

          {/* Labels */}
          <div className="flex items-center justify-between w-[216px] h-[18px] gap-[4px]">
            {days.map((day, index) => (
              <div key={day} className="flex flex-col items-center relative w-[24px] h-[18px]">
                <span className="text-[10px] text-grayText leading-[18px] text-center">{day}</span>
                {index < days.length - 1 && (
                  <div className="absolute right-[-6px] top-[9px] w-[1px] h-[12px] bg-[#E9ECEF] transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex justify-between items-center mt-2">
          <div className="flex flex-col items-center gap-[6px] w-[102px]">
            <p className="text-[14px] text-grayText leading-[17px]">Weeks Enrolled</p>
            <p className="text-[16px] text-black leading-[19px]">9</p>
          </div>

          <div className="w-[1px] h-[42px] bg-[#DEE2E6]" />

          <div className="flex flex-col items-center gap-[6px] w-[95px]">
            <p className="text-[14px] text-grayText leading-[17px]">Compliance</p>
            <p className="text-[16px] text-black leading-[19px]">16/30</p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex justify-center items-center bg-[#EEA63A] w-[150px] h-[198px] cursor-pointer hover:bg-[#d88d2f] transition rounded-r-[10px]">
        <p className="text-white text-[16px] font-medium leading-[30px]">View Stats</p>
      </div>
    </div>
  );
}
