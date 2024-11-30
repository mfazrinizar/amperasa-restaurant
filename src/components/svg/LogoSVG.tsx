import React from "react";
import Image from 'next/image';

type Props = {
  width: number;
  height: number;
  bg?: boolean;
}

export default function LogoSVG({ width, height, bg }: Props) {
  return (

    <>
      {bg ? (
        <Image
          src="/logo/amperasa-with-bg.svg"
          width={width}
          height={height}
          alt="Amperasa Logo"
        />
      ) : (
        <Image
          src="/logo/amperasa-no-bg.svg"
          width={width}
          height={height}
          alt="Amperasa Logo"
        />
      )}
    </>

  );
}