import React from "react";
import PageTitle from "../shared/PageTitle";

export default function TutorialsSummary() {
  return (
    <div className="flex flex-col mb-24 pb-10">
      <PageTitle text="Tutorials" isSummary={true} />
    </div>
  );
}
