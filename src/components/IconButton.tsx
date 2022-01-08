import * as React from "react";
import Link from "next/link";

function LinkedinIcon({ hovered }: { hovered: boolean }) {
  return (
    <div
      className={`flex gap-2 lg:gap-3 items-baseline ${
        hovered ? "text-orange dark:text-white" : "text-white"
      } transition-none `}
    >
      <svg
        width="17"
        height="16"
        viewBox="0 0 23 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mt-[0px]"
      >
        <path
          d="M0.899414 2.45339C0.899414 1.76886 1.14267 1.20413 1.62917 0.759204C2.11567 0.314259 2.74815 0.0917969 3.52655 0.0917969C4.29107 0.0917969 4.90962 0.31083 5.38223 0.748936C5.86873 1.20072 6.11199 1.78939 6.11199 2.515C6.11199 3.17214 5.87569 3.71974 5.40308 4.15785C4.91658 4.60963 4.27716 4.83552 3.48485 4.83552H3.464C2.69948 4.83552 2.08094 4.60963 1.60832 4.15785C1.13571 3.70606 0.899414 3.1379 0.899414 2.45339ZM1.17047 20.422V6.70426H5.79924V20.422H1.17047ZM8.36382 20.422H12.9926V12.7623C12.9926 12.2831 13.0482 11.9134 13.1594 11.6533C13.354 11.1879 13.6494 10.7943 14.0455 10.4725C14.4417 10.1508 14.9386 9.98995 15.5363 9.98995C17.0932 9.98995 17.8716 11.0236 17.8716 13.0908V20.422H22.5003V12.5569C22.5003 10.5307 22.0138 8.99398 21.0408 7.94666C20.0678 6.89935 18.782 6.37569 17.1835 6.37569C15.3904 6.37569 13.9934 7.13551 12.9926 8.65514V8.69621H12.9717L12.9926 8.65514V6.70426H8.36382C8.39162 7.14234 8.40552 8.50453 8.40552 10.7908C8.40552 13.0771 8.39162 16.2875 8.36382 20.422Z"
          fill="white"
          className={`${hovered ? "fill-orange dark:fill-white" : ""}`}
        />
      </svg>
      <span className="uppercase font-poppinsSemibold transition-none text-[14px]  self-start">
        LinkedIn
      </span>
    </div>
  );
}

function FacebookIcon({ hovered }: { hovered: boolean }) {
  return (
    <div
      className={`flex gap-2 lg:gap-3 items-baseline transition-none ${
        hovered ? "text-orange dark:text-white" : "text-white"
      }`}
    >
      <span className="self-start">
        <svg
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.5 19C14.7467 19 19 14.7467 19 9.5C19 4.25329 14.7467 0 9.5 0C4.25329 0 0 4.25329 0 9.5C0 14.7467 4.25329 19 9.5 19Z"
            className={`${
              hovered ? "fill-orange dark:fill-white" : "fill-white"
            }`}
          />
          <path
            d="M12.5888 2.91602H10.4843C9.23548 2.91602 7.84638 3.44127 7.84638 5.25157C7.85248 5.88234 7.84638 6.48644 7.84638 7.16631H6.40161V9.46538H7.89109V16.084H10.6281V9.4217H12.4346L12.598 7.15986H10.5809C10.5809 7.15986 10.5854 6.1537 10.5809 5.8615C10.5809 5.14611 11.3253 5.18708 11.3701 5.18708C11.7243 5.18708 12.413 5.18811 12.5899 5.18708V2.91602H12.5888Z"
            fill="#094367"
          />
        </svg>
      </span>
      <span className="uppercase font-poppinsSemibold transition-none text-[14px]">
        Facebook
      </span>
    </div>
  );
}

function BehanceIcon({ hovered }: { hovered: boolean }) {
  return (
    <div
      className={`flex gap-2 lg:gap-3 items-baseline transition-none ${
        hovered ? "text-orange dark:text-white" : "text-white"
      }`}
    >
      <svg
        width="19"
        height="12"
        viewBox="0 0 19 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.67 5.36486C7.67 5.36486 9.46771 5.23174 9.46771 3.12906C9.46771 1.02622 7.99695 0 6.13392 0H0.00341797V11.7509H6.13392C6.13392 11.7509 9.87638 11.8689 9.87638 8.2826C9.87638 8.28264 10.0395 5.36486 7.67 5.36486ZM5.69266 2.0886H6.13392C6.13392 2.0886 6.96724 2.0886 6.96724 3.31123C6.96724 4.53372 6.47716 4.71096 5.92128 4.71096H2.7046V2.0886H5.69266ZM5.96069 9.66241H2.7046V6.52212H6.13392C6.13392 6.52212 7.37594 6.50588 7.37594 8.13591C7.37594 9.51039 6.44828 9.65203 5.96069 9.66241ZM14.8676 2.98979C10.3369 2.98979 10.341 7.50485 10.341 7.50485C10.341 7.50485 10.0301 11.9967 14.8676 11.9967C14.8676 11.9967 18.8988 12.2264 18.8988 8.87198H16.8256C16.8256 8.87198 16.8947 10.1352 14.9367 10.1352C14.9367 10.1352 12.8632 10.2738 12.8632 8.09082H18.9679C18.9679 8.09078 19.6359 2.98979 14.8676 2.98979ZM12.8404 6.52212C12.8404 6.52212 13.0936 4.71092 14.9136 4.71092C16.7333 4.71092 16.7105 6.52212 16.7105 6.52212H12.8404ZM17.1935 2.13932H12.3329V0.692281H17.1935V2.13932Z"
          fill="white"
          className={`${hovered ? "fill-orange dark:fill-white" : ""}`}
        />
      </svg>
      <span className="uppercase font-poppinsSemibold transition-none text-[14px]">
        Behance
      </span>
    </div>
  );
}

interface IconButtonInterface {
  name: "LinkedIn" | "Facebook" | "Behance";
}

const IconButton: React.FC<IconButtonInterface> = ({ name }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {name === "LinkedIn" && (
        <a href="#" target="_blank">
          <LinkedinIcon hovered={hovered} />
        </a>
      )}
      {name === "Facebook" && (
        <a href="#" target="_blank">
          <FacebookIcon hovered={hovered} />
        </a>
      )}
      {name === "Behance" && (
        <a href="#" target="_blank">
          <BehanceIcon hovered={hovered} />
        </a>
      )}
    </div>
  );
};

export default IconButton;
