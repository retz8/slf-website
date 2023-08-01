import EggsRemovedNumber from "./EggsRemovedNumber";
import EggsRemovedList from "./EggsRemovedList";
import { outfit } from "@/utils/fonts/globalFont";

type Props = {
  data: any;
  isLoading: boolean;
};

export default function HomeIntroText({ data, isLoading }: Props) {
  const largeTextStyle =
    "text-[80px] md:text-[96px] lg:text-[108px] xl:text-[120px]";

  return (
    <div className="z-10 flex gap-3 md:gap-8 lg:gap-9 ">
      <p
        className={` ${outfit.className} ${largeTextStyle} text-black`}
      >{`"`}</p>
      <div className="flex flex-col pt-5 mt-5">
        <EggsRemovedNumber number={data?.eggsRemoved} isLoading={isLoading} />
        <EggsRemovedList data={data?.eggsRemovedByYears} />
      </div>
      <p
        className={` ${outfit.className} pt-32 md:pt-36 ${largeTextStyle} text-black`}
      >{`"`}</p>
    </div>
  );
}
