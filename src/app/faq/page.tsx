// ISR (revalidate: 2 weeks)

import FaqList from "@/components/Faq/FaqList";
import PageTitle from "@/components/shared/PageTitle";
import { getAllFAQs } from "@/service/faq";
import { twoWeeks } from "@/utils/revalidateConstants";
import { Metadata } from "next";

export const revalidate = 3;

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Questions and answers about Princeton SLF and Spotted Lanternflies",
};

export default async function FAQPage() {
  const data = await getAllFAQs();

  return (
    <section className="flex flex-col">
      <PageTitle text="FAQ" />
      <div className="h-full flex justify-center">
        <FaqList faqs={data} />
      </div>
    </section>
  );
}
