import { Skeleton } from "../ui/skeleton";

export function TableSkeleton() {
  return (
    <div>
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index}>
          {/* Desktop View */}
          <div className="py-2 px-4 hidden lg:flex items-center gap-4">
            <Skeleton className="h-10 w-10 rounded" />
            <Skeleton className="h-4 w-48" />
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-40" />
          </div>

          {/* Mobile View */}
          <div className="px-4 flex lg:hidden items-center gap-4 py-2">
            <Skeleton className="h-10 w-10 rounded" />
            <div className="flex flex-col gap-1">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-3 w-24" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
