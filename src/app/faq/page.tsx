import FaqList from "@/components/Faq/FaqList";
import PageTitle from "@/components/shared/PageTitle";
import React from "react";

export default function FAQPage() {
  return (
    <section className="max-w-4xl mx-auto">
      <PageTitle text="FAQ" />
      <FaqList />
    </section>
  );
}
