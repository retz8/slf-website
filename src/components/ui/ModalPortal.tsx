import { createPortal } from "react-dom";

type Props = {
  children: React.ReactNode;
};

export default function ModalPortal({ children }: Props) {
  // children을 DOM의 portal node와 연결

  // only in browser environemnt
  if (typeof window === "undefined") return null;

  const node = document.getElementById("portal") as Element;
  return createPortal(children, node);
}
