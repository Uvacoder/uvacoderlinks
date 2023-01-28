import React from "react";
import ResourceCard from "./ResourceCard";

type ResourceGridProps = {
  resources: any;
};

function ResourceGrid({ resources }: ResourceGridProps) {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
      {resources.map((resource: any, index: number) => (
        <ResourceCard
          name={resource.name}
          description={resource.description}
          link={resource.link}
          imgSrc={resource.imgSrc}
          imgAlt={resource.imgAlt}
          key={resource.name}
          priority={index < 2}
        />
      ))}
    </div>
  );
}

export default ResourceGrid;
