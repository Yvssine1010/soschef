import { cn } from "@/lib/utils";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'circular' | 'rectangular' | 'text';
  animation?: 'pulse' | 'wave' | 'shimmer';
}

const Skeleton = ({ 
  className, 
  variant = 'default', 
  animation = 'shimmer',
  ...props 
}: SkeletonProps) => {
  return (
    <div
      className={cn(
        "skeleton",
        {
          "rounded-md": variant === 'default',
          "rounded-full": variant === 'circular',
          "rounded-none": variant === 'rectangular',
          "h-4": variant === 'text',
          "animate-pulse": animation === 'pulse',
          "animate-shimmer": animation === 'shimmer',
        },
        className
      )}
      {...props}
    />
  );
};

const SkeletonCard = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("space-y-3 p-4", className)} {...props}>
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
    <Skeleton className="h-4 w-[150px]" />
  </div>
);

const SkeletonImage = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <Skeleton className={cn("h-48 w-full", className)} {...props} />
);

const SkeletonText = ({ lines = 3, className, ...props }: { lines?: number } & React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("space-y-2", className)} {...props}>
    {Array.from({ length: lines }).map((_, i) => (
      <Skeleton 
        key={i} 
        className={cn(
          "h-4",
          i === lines - 1 ? "w-3/4" : "w-full"
        )} 
      />
    ))}
  </div>
);

const SkeletonAvatar = ({ size = 'md', className, ...props }: { size?: 'sm' | 'md' | 'lg' } & React.HTMLAttributes<HTMLDivElement>) => (
  <Skeleton 
    variant="circular"
    className={cn(
      {
        "h-8 w-8": size === 'sm',
        "h-12 w-12": size === 'md',
        "h-16 w-16": size === 'lg',
      },
      className
    )} 
    {...props} 
  />
);

const LoadingSpinner = ({ size = 'md', className, ...props }: { size?: 'sm' | 'md' | 'lg' } & React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "animate-spin rounded-full border-2 border-primary border-t-transparent",
      {
        "h-4 w-4": size === 'sm',
        "h-8 w-8": size === 'md',
        "h-12 w-12": size === 'lg',
      },
      className
    )}
    {...props}
  />
);

const LoadingDots = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex space-x-1", className)} {...props}>
    {[0, 1, 2].map((i) => (
      <div
        key={i}
        className="h-2 w-2 bg-primary rounded-full animate-bounce"
        style={{ animationDelay: `${i * 0.1}s` }}
      />
    ))}
  </div>
);

const LoadingPulse = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "h-4 w-4 bg-primary rounded-full animate-pulse",
      className
    )}
    {...props}
  />
);

export {
  Skeleton,
  SkeletonCard,
  SkeletonImage,
  SkeletonText,
  SkeletonAvatar,
  LoadingSpinner,
  LoadingDots,
  LoadingPulse,
};
