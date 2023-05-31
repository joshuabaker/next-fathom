"use client";

import { load, LoadOptions, trackPageview } from "fathom-client";
import React, { FC, Suspense, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

type FathomProps = { siteId: string; options?: LoadOptions };

function TrackPageView({ siteId, options }: FathomProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    load(siteId, options);
  }, []);

  useEffect(() => {
    trackPageview();
  }, [pathname, searchParams]);

  return null;
}

export const Fathom: FC<FathomProps> = (props) => {
  return (
    <Suspense fallback={null}>
      <TrackPageView {...props} />
    </Suspense>
  );
};
