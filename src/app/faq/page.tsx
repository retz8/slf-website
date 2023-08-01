// ISR (revalidate: 1 week)

import FaqList from "@/components/Faq/FaqList";
import PageTitle from "@/components/shared/PageTitle";
import { twoWeeks } from "@/utils/revalidateConstants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Questions and answers about Princeton SLF and Spotted Lanternflies",
};

export default async function FAQPage() {
  const res = await fetch(`${process.env.WEBSITE_URL}/api/faq`, {
    next: { revalidate: twoWeeks },
  });

  // handle error
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  return (
    <section className="flex flex-col">
      <PageTitle text="FAQ" />
      <div className="h-full flex justify-center">
        <FaqList faqs={data} />
      </div>
    </section>
  );
}
