import React from "react";
import Image from "next/image";

type CardProps = {
  name: string;
  description: string;
  link: string;
  imgSrc: string;
  imgAlt: string;
  priority?: boolean;
};

const Card = ({
  name,
  description,
  link,
  imgSrc,
  imgAlt,
  priority,
}: CardProps) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div className="flex flex-col bg-white rounded-lg shadow-md transition ease-in-out hover:shadow-2xl dark:bg-zinc-900 mb-4">
        <div className="relative w-full md:w-full h-full md:h-full flex-1 md:p-24 p-12">
          <Image
            src={imgSrc}
            alt={imgAlt}
            fill={true}
            sizes="(max-width: 768px) 25%,
            (max-width: 1200px) 50%,
            75%"
            className="transition ease-in-out duration-200 hover:brightness-105 flex absolute inset-0 object-cover w-full h-full rounded-lg"
            priority={priority}
          />
        </div>
        <div className="p-4 flex-1">
          <h1 className="flex text-xs md:text-lg font-semibold dark:text-gray-50">
            {name}
          </h1>
          <p className="flex text-sm text-gray-500 dark:text-gray-300">
            {description}
          </p>
        </div>
      </div>
    </a>
  );
};

export default Card;
