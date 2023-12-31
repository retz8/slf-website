"use client";

type Props = {
  color?: string;
};

export default function DonateButton({ color = "bg-[#D76B64]" }: Props) {
  const navigateToGoFundMe = () => {
    // If you want to change donate link, please change a link below
    window.open(
      "https://www.gofundme.com/f/princeton-spotted-lanternfly-iniative",
      "_blank"
    );
  };

  return (
    <button
      className={`w-[135px] h-[51px] ${color} shadow-sm shadow-bottom shadow-gray-400
      rounded-3xl border-4 border-white 
    text-white font-extrabold tracking-wider`}
      onClick={navigateToGoFundMe}
    >
      DONATE!
    </button>
  );
}
