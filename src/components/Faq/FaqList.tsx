import { Faq } from "@/model/faq";
import FaqListItem from "./FaqListItem";
import Divider from "../shared/Divider";

type Props = {
  faqs: Faq[];
  isSummary?: boolean;
};

export default function FaqList({ faqs, isSummary = false }: Props) {
  return (
    <ul className="flex flex-col py-3 mb-10">
      {faqs?.map((item) => (
        <li key={item.id}>
          <FaqListItem faq={item} />
          <Divider />
        </li>
      ))}
    </ul>
  );
}
