import Image from "next/image";
import React from "react";

type Props = {
  name: string;
  avatarUrl: string;
  content: string;
};

export default function CardTestimonial({ content, name, avatarUrl }: Props) {
  return (
    <div className="p-8 mx-auto text-center bg-white shadow-sm max-w-[500px] rounded-custom lg:px-6 ">
      <figure className="flex flex-col justify-between h-full max-w-screen-md mx-auto">
        <div>
          <svg
            className="h-12 mx-auto mb-3 text-neutral-400"
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            />
          </svg>
          <blockquote>
            <p className="text-lg text-neutral-900">
              &quot;
              {content}
              &quot;
            </p>
          </blockquote>
        </div>
        <figcaption className="flex items-center justify-center mt-6 space-x-3">
          <Image
            className="object-cover w-12 h-12 rounded-full"
            width={50}
            height={50}
            src={avatarUrl}
            loading="lazy"
            alt={name}
          />
          <div className="flex items-center divide-x-2 divide-neutral-500">
            <div className="pr-3 font-medium text-neutral-900">{name}</div>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}
