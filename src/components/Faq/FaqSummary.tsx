"use client";

import useSWR from "swr";
import PageTitle from "../shared/PageTitle";
import FaqList from "./FaqList";
import Link from "next/link";
import LinkButton from "../shared/LinkButton";
import { Faq } from "@/model/faq";

export default function FaqSummary() {
  const { data: faqs, isLoading, error } = useSWR<Faq[]>("/api/faq");

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="flex flex-col md:flex-row mb-12 pb-10 mt-10 md:mt-0">
      <PageTitle text="FAQ" isSummary={true} />
      <div className="ml-3 flex flex-col items-center md:items-end">
        {faqs !== undefined && <FaqList faqs={faqs} isSummary={true} />}
        <Link href="/faq">
          <LinkButton text="View More" link="" isRouting={true} />
        </Link>
      </div>
    </div>
  );
}