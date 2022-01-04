import * as React from "react";
import { useWindowSize } from "react-use";

const svgPath1920 = (
  <svg
    width="1316"
    height="822"
    viewBox="0 0 1316 822"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M247.19 110.131C668.551 224.274 979.41 -191.622 1250.8 118.024C1467.92 365.74 1070.45 420.401 963.624 409.455C471.834 359.062 133.687 529.924 345.548 699.064C640.622 934.638 -207.792 542.882 50.4744 811.387"
      stroke="#FF6D42"
      strokeOpacity="0.4"
      strokeWidth="1.2143"
      strokeDasharray="7.29 7.29"
    />
    <circle cx="46.2211" cy="805.315" r="16.393" fill="white" />
    <circle
      cx="46.2211"
      cy="805.315"
      r="15.7858"
      stroke="#FF6D42"
      strokeOpacity="0.7"
      strokeWidth="1.2143"
    />
    <circle cx="783.295" cy="394.883" r="16.393" fill="white" />
    <circle
      cx="783.295"
      cy="394.883"
      r="15.7858"
      stroke="#FF6D42"
      strokeOpacity="0.7"
      strokeWidth="1.2143"
    />
    <circle cx="252.655" cy="109.524" r="16.393" fill="white" />
    <circle
      cx="252.655"
      cy="109.524"
      r="15.7858"
      stroke="#FF6D42"
      strokeOpacity="0.7"
      strokeWidth="1.2143"
    />
    <circle cx="252.651" cy="109.524" r="7.89292" fill="#094367" />
    <circle cx="783.299" cy="394.883" r="7.89292" fill="#094367" />
    <circle cx="46.221" cy="805.315" r="7.89292" fill="#094367" />
  </svg>
);

const svgPath1440 = (
  <svg
    width="1084"
    height="677"
    viewBox="0 0 1084 677"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M204.001 91.001C551.001 185 807.001 -157.499 1030.5 97.5005C1209.3 301.501 881.974 346.515 794.001 337.501C389.001 296.001 110.529 436.71 285.001 576C528.001 770.001 -170.687 447.381 42.0016 668.501"
      stroke="#FF6D42"
      strokeOpacity="0.4"
      strokeDasharray="6 6"
    />
    <circle cx="38.5" cy="663.5" r="13.5" fill="white" />
    <circle cx="38.5" cy="663.5" r="13" stroke="#FF6D42" strokeOpacity="0.7" />
    <circle cx="645.5" cy="325.5" r="13.5" fill="white" />
    <circle cx="645.5" cy="325.5" r="13" stroke="#FF6D42" strokeOpacity="0.7" />
    <circle cx="208.5" cy="90.5" r="13.5" fill="white" />
    <circle cx="208.5" cy="90.5" r="13" stroke="#FF6D42" strokeOpacity="0.7" />
    <circle cx="208.5" cy="90.5" r="6.5" fill="#094367" />
    <circle cx="645.5" cy="325.5" r="6.5" fill="#094367" />
    <circle cx="38.5" cy="663.5" r="6.5" fill="#094367" />
  </svg>
);

const svgPath414 = (
  <svg
    width="378"
    height="1006"
    viewBox="0 0 378 1006"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="234.393" cy="31.393" r="16.393" fill="white" />
    <circle
      cx="234.393"
      cy="31.393"
      r="15.7858"
      stroke="#FF6D42"
      strokeOpacity="0.7"
      strokeWidth="1.2143"
    />
    <circle cx="234.389" cy="31.3929" r="7.89292" fill="#094367" />
    <path
      d="M247.499 21.4992C247.499 21.4992 345.348 -59.1252 372.971 100.362C415.86 347.989 82.9766 363.997 25.0002 383.499C-79.9402 418.799 194.146 514.443 194.149 681.194C194.153 922.527 -17.7272 716.59 33.2903 984.999"
      stroke="#FF6D42"
      strokeOpacity="0.4"
      strokeWidth="1.2143"
      strokeDasharray="7.29 7.29"
    />
    <circle cx="16.393" cy="380.393" r="16.393" fill="white" />
    <circle
      cx="16.393"
      cy="380.393"
      r="15.7858"
      stroke="#FF6D42"
      strokeOpacity="0.7"
      strokeWidth="1.2143"
    />
    <circle cx="16.3968" cy="380.393" r="7.89292" fill="#094367" />
    <circle cx="17.1117" cy="989.393" r="16.393" fill="white" />
    <circle
      cx="17.1117"
      cy="989.393"
      r="15.7858"
      stroke="#FF6D42"
      strokeOpacity="0.7"
      strokeWidth="1.2143"
    />
    <circle cx="17.1117" cy="989.393" r="7.89292" fill="#094367" />
  </svg>
);

const svgPath = (
  <svg
    width="328"
    height="1057"
    viewBox="0 0 328 1057"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="218.393" cy="34.393" r="16.393" fill="white" />
    <circle
      cx="218.393"
      cy="34.393"
      r="15.7858"
      stroke="#FF6D42"
      strokeOpacity="0.7"
      strokeWidth="1.2143"
    />
    <circle cx="218.389" cy="34.3929" r="7.89292" fill="#094367" />
    <path
      d="M224.999 17.9995C224.999 17.9995 298.564 -56.5004 323.576 102.968C362.411 350.566 79.4969 440 26.9999 459.5C-68.0222 494.795 161.652 517 161.655 683.731C161.659 925.035 -32.1957 754.622 14 1023"
      stroke="#FF6D42"
      strokeOpacity="0.4"
      strokeWidth="1.2143"
      strokeDasharray="7.29 7.29"
    />
    <circle cx="48.393" cy="452.393" r="16.393" fill="white" />
    <circle
      cx="48.393"
      cy="452.393"
      r="15.7858"
      stroke="#FF6D42"
      strokeOpacity="0.7"
      strokeWidth="1.2143"
    />
    <circle cx="48.3968" cy="452.393" r="7.89292" fill="#094367" />
    <circle cx="17.1117" cy="1040.39" r="16.393" fill="white" />
    <circle
      cx="17.1117"
      cy="1040.39"
      r="15.7858"
      stroke="#FF6D42"
      strokeOpacity="0.7"
      strokeWidth="1.2143"
    />
    <circle cx="17.1117" cy="1040.39" r="7.89292" fill="#094367" />
  </svg>
);

const PathSvg: React.FC = () => {
  const { width, height } = useWindowSize();

  return (
    <>
      <span className="absolute top-[110px] left-[14px]  hidden xs:inline-block">
        {svgPath}
      </span>
      <span className="absolute top-[114px] left-[18px] xs:hidden inline-block lg:hidden">
        {svgPath414}
      </span>
      <span className="absolute top-[49px] -left-[27px] hidden lg:inline-block 3xl:hidden">
        {svgPath1440}
      </span>
      <span className="absolute top-[82px] -left-[33px] hidden 3xl:inline-block">
        {svgPath1920}
      </span>
    </>
  );
};

export default PathSvg;
