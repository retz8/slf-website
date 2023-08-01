import DataLoadingSpinner from "@/components/ui/DataLoadingSpinner";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className=" w-full h-full flex justify-center items-center">
      <DataLoadingSpinner />
    </div>
  );
}
