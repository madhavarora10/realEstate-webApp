import { Skeleton } from 'antd';
import React from 'react';

export const LoadingSkeleton:React.FC = () => (
  <div className="flex justify-between flex-wrap ">
    <Skeleton className=" h-56  w-100 " paragraph={{ rows: 4 }} />
    <Skeleton className=" h-56  w-100 " paragraph={{ rows: 4 }} />
    <Skeleton className=" h-56  w-100 " paragraph={{ rows: 4 }} />
    <Skeleton className=" h-56  w-100 " paragraph={{ rows: 4 }} />
    <Skeleton className=" h-56  w-100 " paragraph={{ rows: 4 }} />
    <Skeleton className=" h-56  w-100 " paragraph={{ rows: 4 }} />
    <Skeleton className=" h-56  w-100 " paragraph={{ rows: 4 }} />
  </div>
);
