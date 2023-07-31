"use client";

"react";
import useSWR from "swr";
import Carousel from "./Carousel";
import DataLoadingSpinner from "../ui/DataLoadingSpinner";
import { Member } from "@/model/member";
import CarouselItem from "./CarouselItem";
import Link from "next/link";
import LinkButton from "../shared/LinkButton";
import CarouselItemFlip from "./CarouselItemFlip";

export default function MembersCarousel() {
  const { data: members, isLoading, error } = useSWR<Member[]>("/api/members");

  if (isLoading) return <DataLoadingSpinner />;

  const images = members?.map((member) => {
    return member.image;
  });

  return (
    <div className="flex flex-col max-w-screen-2xl w-full items-center">
      <Carousel loop>
        {members?.map((member, i) => {
          return (
            <div
              className="group max-h-72 flex-[0_0_50%] sm:flex-[0_0_33%] md:flex-[0_0_25%] lg:flex-[0_0_20%] aspect-square"
              key={i}
            >
              <div
                className="rounded-2xl 
                ml-5 mr-5 z-20
                transition-all duration-500 [transform-style:preserve-3d]
                group-hover:[transform:rotateY(180deg)]"
                key={i}
              >
                <CarouselItem image={member.image} />
                <div
                  className="absolute inset-0 flex aspect-square p-5 md:p-7 lg:p-10 rounded-2xl bg-less-dark-brown
              [transform:rotateY(180deg)] [backface-visibility:hidden]"
                >
                  <CarouselItemFlip
                    name={member.name}
                    period={member.period}
                    roles={member.roles}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>

      <Link href="/members" className="mt-5 md:mt-8 lg:mt-10 lg:py-5">
        <LinkButton text="View More" link="" isRouting={true} />
      </Link>
    </div>
  );
}
