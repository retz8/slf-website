import { PulseLoader } from "react-spinners";

type Props = {
  size?: "small" | "medium" | "large";
  color?: string;
};

export default function DataLoadingSpinner({
  size = "medium",
  color = "#80AE3C",
}: Props) {
  const spinnerSize = size === "medium" ? 10 : 6;

  return <PulseLoader size={spinnerSize} color={color} />;
}
