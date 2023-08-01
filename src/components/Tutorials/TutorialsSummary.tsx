import { TutorialsImages } from "@/model/home";
import PageTitle from "../shared/PageTitle";
import TutorialsLinkGrid from "./TutorialsLinkGrid";

type Props = {
  images: TutorialsImages;
};

export default function TutorialsSummary({ images }: Props) {
  return (
    <div className="flex flex-col mb-24 pb-10" id="tutorial-section">
      <PageTitle text="Tutorials" isSummary={true} />
      <div className="flex justify-center mt-5 px-5">
        <TutorialsLinkGrid images={images} />
      </div>
    </div>
  );
}
