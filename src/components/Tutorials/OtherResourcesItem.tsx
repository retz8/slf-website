"use client";

import { OtherResourceItem } from "@/model/tutorial";

export default function OtherResourcesItem({ name, url }: OtherResourceItem) {
  const navigateToLink = () => {
    const formattedLink = url.includes("://") ? url : `https://${url}`;
    window.open(formattedLink, "_blank");
  };

  return (
    <div onClick={() => navigateToLink()}>
      <p className="cursor-pointer underline leading-loose text-lg my-6">
        {name}
      </p>
    </div>
  );
}
