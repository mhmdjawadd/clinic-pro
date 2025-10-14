import React from 'react';

/**
 * MoneyCard
 * - Blue rounded card with a white dollar SVG and label text.
 * - Dimensions follow the Figma spec: 407x72, 12px padding, 24px gap.
 */
export default function MoneyCard() {
  return (
    <div className="flex items-center w-[407px] h-[72px] bg-[#2196F3] rounded-[10px] p-[12px] gap-[24px]">
      {/* Dollar SVG icon (provided by user) */}
      <svg
        width="18"
        height="30"
        viewBox="0 0 18 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Dollar sign"
      >
        <path
          d="M7.21107 29.25V25.8458C5.59162 25.5292 4.19371 24.9222 3.01732 24.025C1.84093 23.1278 0.977734 21.8611 0.427734 20.225L3.8194 19.0375C4.27773 20.3042 4.9576 21.2674 5.85898 21.9271C6.76037 22.5868 7.9444 22.9167 9.41107 22.9167C10.6638 22.9167 11.7257 22.6726 12.5965 22.1844C13.4673 21.6962 13.9027 20.9375 13.9027 19.9083C13.9027 18.9847 13.5666 18.2524 12.8944 17.7115C12.2222 17.1705 10.6638 16.5569 8.2194 15.8708C5.59162 15.1583 3.78885 14.3073 2.81107 13.3177C1.83329 12.3281 1.3444 11.1208 1.3444 9.69583C1.3444 7.98056 1.98607 6.64792 3.2694 5.69792C4.55273 4.74792 5.86662 4.20694 7.21107 4.075V0.75H10.8777V4.075C12.4055 4.28611 13.6659 4.76771 14.659 5.51979C15.652 6.27188 16.3777 7.18889 16.8361 8.27083L13.4444 9.5375C13.0777 8.69306 12.5583 8.05972 11.8861 7.6375C11.2138 7.21528 10.2972 7.00417 9.13607 7.00417C7.79162 7.00417 6.76801 7.26146 6.06523 7.77604C5.36246 8.29063 5.01107 8.93056 5.01107 9.69583C5.01107 10.5667 5.4694 11.2528 6.38607 11.7542C7.30273 12.2556 8.89162 12.7833 11.1527 13.3375C13.2611 13.8653 14.8576 14.7031 15.9423 15.851C17.027 16.999 17.5694 18.325 17.5694 19.8292C17.5694 21.7028 16.9277 23.1278 15.6444 24.1042C14.3611 25.0806 12.7722 25.6875 10.8777 25.925V29.25H7.21107Z"
          fill="white"
        />
      </svg>

      {/* Label */}
      <span className="text-white text-[16px] font-medium leading-[18px]">
        View Billing Details
      </span>
    </div>
  );
}

/** Example usage for quick visual check (non-blocking):
 * Render <MoneyCard/> inside your page or playground to verify styling.
 */
export function Demo() {
  return (
    <div className="p-4 bg-gray-50">
      <MoneyCard />
    </div>
  );
}