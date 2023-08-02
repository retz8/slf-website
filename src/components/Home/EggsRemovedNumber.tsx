import { formatNumberWithCommas } from "@/utils/numberFormatter";
import { outfit } from "@/utils/fonts/globalFont";

type Props = {
  number: number;
  isLoading: boolean;
};

export default function EggsRemovedNumber({ number, isLoading }: Props) {
  return (
    <div className="flex flex-col">
      {isLoading ? (
        <div className="flex">
          <p
            className={` hidden sm:block ${outfit.className} 
     text-[80px] md:text-[96px] lg:text-[108px] xl:text-[120px] 
    font-bold text-[#86BD08]`}
          >
            Princeton SLFI
          </p>
          <p
            className={` block sm:hidden ${outfit.className} 
     text-[80px] md:text-[96px] lg:text-[108px] xl:text-[120px] 
    font-bold text-[#86BD08]`}
          >
            PSLFI
            {/* maybe put logo instead */}
          </p>
        </div>
      ) : (
        <p
          className={` ${outfit.className} 
     text-[80px] md:text-[96px] lg:text-[108px] xl:text-[120px] 
    font-bold text-[#86BD08]`}
        >
          {formatNumberWithCommas(number)}
        </p>
      )}
      {!isLoading && (
        <p
          className={`text-dark-brown ${outfit.className} 
            text-[36px] md:text-[42px] lg:text-[50px] xl:text-[54px] 
            font-extrabold`}
        >{`Eggs Removed`}</p>
      )}
    </div>
  );
}
