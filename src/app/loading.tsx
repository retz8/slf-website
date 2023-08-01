import DataLoadingSpinner from "@/components/ui/DataLoadingSpinner";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <DataLoadingSpinner />
    </div>
  );
}
