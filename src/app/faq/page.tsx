import FaqList from "@/components/Faq/FaqList";
import PageTitle from "@/components/shared/PageTitle";
import React from "react";

export default function FAQPage() {
  return (
    <section className="flex flex-col px-10 xl:px-5 h-full">
      <PageTitle text="FAQ" />
      <div className="h-full flex items-center justify-center">
        <FaqList />
      </div>
    </section>
  );
}
