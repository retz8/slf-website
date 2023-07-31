"react";
import PageTitle from "../shared/PageTitle";
import TutorialsLinkGrid from "./TutorialsLinkGrid";

export default function TutorialsSummary() {
  return (
    <div className="flex flex-col mb-24 pb-10" id="tutorial-section">
      <PageTitle text="Tutorials" isSummary={true} />
      <div className="flex justify-center mt-5 px-5">
        <TutorialsLinkGrid />
      </div>
    </div>
  );
}
