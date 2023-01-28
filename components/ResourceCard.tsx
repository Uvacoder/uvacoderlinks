import React from "react";
import Image from "next/image";

type ResourceCardProps = {
  name: string;
  description: string;
  link: string;
  imgSrc: string;
  imgAlt: string;
  priority?: boolean;
};

const ResourceCard = ({
  name,
  description,
  link,
  imgSrc,
  imgAlt,
  priority,
}: ResourceCardProps) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div className="flex bg-white rounded-lg shadow-md dark:bg-zinc-900 mb-4">
        <div className="relative w-24 md:w-36 h-36 md:h-36 flex-1">
          <Image
            src={imgSrc}
            alt={imgAlt}
            fill={true}
            sizes="(max-width: 768px) 25%,
            (max-width: 1200px) 50%,
            75%"
            className="flex absolute inset-0 object-cover w-full h-full rounded-lg"
            priority={priority}
          />
        </div>
        <div className="p-6 flex-1">
          <div className="">
            <h1 className="flex text-xl font-semibold dark:text-gray-50">
              {name}
            </h1>
          </div>
          <p className="flex text-sm text-gray-500 dark:text-gray-300">
            {description}
          </p>
        </div>
      </div>
    </a>
  );
};

export default ResourceCard;
