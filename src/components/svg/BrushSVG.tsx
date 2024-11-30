import React from "react";

type Props = {
  width: number;
  height: number;
  fillClassName?: string;
};

export default function BrushSVG({
  width,
  height,
  fillClassName = "fill-primary-500",
}: Props) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 300 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M86.0836 55.6807C38.3688 56.4711 38.0802 56.2527 36.647 54.6302C35.8739 53.7549 28.9413 52.6262 21.2414 52.1219C12.019 51.5179 6.46491 50.5024 4.96588 49.1462C3.71434 48.0139 2.08499 47.0874 1.34514 47.0874C0.605296 47.0874 0 45.8227 0 44.2769C0 42.0367 0.937108 41.4664 4.61856 41.4664C7.15872 41.4664 9.23705 40.8341 9.23705 40.0612C9.23705 39.2883 8.00931 38.656 6.50875 38.656C2.5648 38.656 1.42584 35.8771 5.28861 35.6791C7.07373 35.5876 9.00864 35.5876 9.58846 35.6791C10.1683 35.7706 10.6427 35.2131 10.6427 34.4403C10.6427 33.6674 9.06136 33.035 7.12861 33.035C5.19586 33.035 3.61451 32.4027 3.61451 31.6298C3.61451 30.8569 4.28177 30.2245 5.09726 30.2245C5.87986 30.2245 9.26078 28.9769 12.7402 27.4128C10.9873 27.1418 9.93269 26.785 9.93269 26.3956C9.93269 25.6227 12.3047 24.9817 15.2038 24.9712C16.7919 24.9654 18.6964 24.8278 20.4117 24.6158C22.3705 24.074 24.5201 23.5881 26.927 23.1512L27.5031 22.9904L23.2863 22.0488C20.8736 21.5101 22.898 21.1013 29.0425 20.8699C30.5084 20.7373 31.1089 19.9796 30.6582 18.8053C30.5792 18.5996 30.539 18.3981 30.5358 18.2031C22.6347 18.3912 14.9508 18.7692 11.3384 19.2954C3.76607 20.3983 1.60763 20.1975 3.26167 18.5439C4.67521 17.1308 14.6503 14.9356 18.9611 15.0891C21.2209 15.1696 23.5326 14.4867 24.0984 13.5716C24.664 12.6566 27.2243 11.9675 29.7877 12.0404C30.4198 12.0584 31.0632 12.0435 31.6857 12.0014C30.7708 11.0802 31.5035 10.7001 34.2902 9.43071C34.8251 9.18706 35.3355 8.89958 35.7996 8.58896C33.315 8.56367 29.9624 8.60045 26.0975 8.70765C4.02798 9.3198 11.2947 7.25348 35.5908 6.0082C36.4402 5.96466 37.2898 5.91961 38.1352 5.87337C38.1395 5.83451 38.1417 5.79635 38.1417 5.75893C38.1417 4.70434 40.1678 3.43639 42.6442 2.94125C46.4932 2.17168 46.7482 1.88515 44.4012 0.967289C42.8912 0.376749 60.9481 -0.0558893 84.5276 0.00587105C108.107 0.0676138 124.553 0.560567 121.074 1.10128C115.67 1.94119 115.363 2.1478 118.966 2.51955C120.326 2.65991 129.047 2.83924 141.408 3.00221C153.768 2.83924 162.49 2.65991 163.85 2.51955C167.452 2.1478 167.145 1.94119 161.741 1.10128C158.262 0.560567 174.708 0.0676138 198.288 0.00587105C221.867 -0.0558893 239.924 0.376749 238.414 0.967289C236.067 1.88515 236.322 2.17168 240.171 2.94125C242.648 3.43639 244.674 4.70434 244.674 5.75893C244.674 5.79635 244.676 5.83451 244.68 5.87337C245.526 5.91961 246.375 5.96466 247.225 6.0082C271.521 7.25348 278.788 9.3198 256.718 8.70765C252.853 8.60045 249.501 8.56367 247.016 8.58896C247.48 8.89958 247.99 9.18706 248.525 9.43071C251.312 10.7001 252.045 11.0802 251.13 12.0014C251.752 12.0435 252.396 12.0584 253.028 12.0404C255.591 11.9675 258.151 12.6566 258.717 13.5716C259.283 14.4867 261.595 15.1696 263.854 15.0891C266.811 14.9838 272.434 15.9837 276.13 17.0781C276.613 17.1901 276.985 17.3082 277.248 17.4328C278.38 17.8194 279.214 18.2042 279.554 18.5439C279.637 18.6266 279.71 18.7056 279.773 18.781C280.867 19.1225 282.172 19.3381 283.379 19.3381C286.788 19.3381 287.355 19.8126 286.744 22.1486C286.183 24.2917 286.701 24.9591 288.923 24.9591C290.525 24.9591 291.42 25.3752 290.912 25.8838C290.765 26.0301 290.687 26.2419 290.672 26.4951C296.212 26.8737 299.825 27.3815 299.482 27.9549C299.099 28.5965 295.977 29.5434 292.4 30.1237C292.432 30.3811 292.289 30.4973 291.957 30.4141C290.744 30.1095 287.122 31.6364 284.853 33.093C284.766 33.6593 284.029 34.3808 282.938 35.0429C283.014 35.613 284.09 35.7539 285.394 35.3483C287.237 34.7754 287.149 35.0194 285.042 36.3218C284.578 36.6089 284.093 36.9566 283.626 37.3308C285.104 37.2797 286.932 37.1952 289.142 37.0801C296.482 36.6979 301.032 36.7395 299.254 37.1726C296.857 37.7562 296.405 38.4082 297.506 39.694C298.647 41.0262 297.129 41.8097 290.962 43.0732C282.285 44.851 276.783 46.7691 276.035 48.1683C277.598 48.6877 278.717 49.4128 278.717 50.0933C278.717 50.2197 278.24 50.3335 277.376 50.4312C277.285 52.1316 272.717 54.0861 265.852 55.073C261.426 55.7092 258.755 56.3175 259.917 56.4244C261.645 56.5838 261.597 56.8796 259.648 58.0557C258.339 58.8458 253.442 59.2326 248.766 58.9155C243.69 58.571 240.273 58.8914 240.286 59.7105C240.312 61.4123 217.752 61.7771 199.527 60.3698C172.934 58.3164 166.297 58.0565 170.691 59.2411C174.175 60.1801 173.474 60.3766 166.736 60.3498C162.231 60.3317 158.261 59.8709 157.912 59.3259C157.609 58.8531 156.34 58.4571 154.003 58.1323C150.721 58.606 148.566 59.0491 148.255 59.3602C147.853 59.7615 145.943 60.0904 144.01 60.0904C139.586 60.0904 140.749 58.793 146.032 57.8353C146.529 57.7451 147.016 57.6491 147.474 57.5521C140.468 57.1415 129.759 56.9502 114.761 56.9459C98.0284 56.9409 88.8693 56.5417 86.0836 55.6807ZM272.441 25.8325C276.666 25.886 280.859 26.0009 284.638 26.1652C284.851 25.1143 284.246 24.3202 283.285 24.397C282.319 24.4743 277.891 24.6517 273.446 24.7909C271.507 24.8518 270.051 24.9239 269.017 25.0273C270.551 25.1468 271.809 25.4467 272.441 25.8325ZM26.8004 14.534C26.8004 14.1932 27.433 13.5235 28.2062 13.0458C28.9793 12.5682 29.6118 12.847 29.6118 13.6655C29.6118 14.484 28.9793 15.1537 28.2062 15.1537C27.433 15.1537 26.8004 14.8748 26.8004 14.534ZM232.726 2.50652C232.248 1.73364 232.527 1.10128 233.346 1.10128C234.165 1.10128 234.835 1.73364 234.835 2.50652C234.835 3.2794 234.556 3.91176 234.215 3.91176C233.874 3.91176 233.204 3.2794 232.726 2.50652ZM192.314 1.45953C199.465 1.20448 211.167 1.20448 218.318 1.45953C225.47 1.71458 219.619 1.92323 205.316 1.92323C191.014 1.92323 185.163 1.71456 192.314 1.45953ZM256.015 14.534C256.015 14.1932 255.382 13.5235 254.609 13.0458C253.836 12.5682 253.204 12.847 253.204 13.6655C253.204 14.484 253.836 15.1537 254.609 15.1537C255.382 15.1537 256.015 14.8748 256.015 14.534ZM50.0894 2.50652C50.5672 1.73364 50.2884 1.10128 49.4695 1.10128C48.6508 1.10128 47.9809 1.73364 47.9809 2.50652C47.9809 3.2794 48.2599 3.91176 48.6008 3.91176C48.9417 3.91176 49.6116 3.2794 50.0894 2.50652ZM90.5014 1.45953C83.3502 1.20448 71.6483 1.20448 64.4972 1.45953C57.346 1.71458 63.1969 1.92323 77.4993 1.92323C91.8016 1.92323 97.6526 1.71456 90.5014 1.45953ZM48.9462 53.1218C47.2068 52.7869 44.3603 52.7869 42.6209 53.1218C40.8814 53.4567 42.3046 53.7308 45.7835 53.7308C49.2625 53.7308 50.6857 53.4568 48.9462 53.1218Z"
        className={fillClassName}
      />
    </svg>
  );
}