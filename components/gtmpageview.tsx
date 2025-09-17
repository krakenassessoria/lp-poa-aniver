"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function GTMPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + (searchParams?.toString() ? `?${searchParams}` : "");
    // @ts-ignore
    window.dataLayer?.push({ event: "page_view", page_path: url });
  }, [pathname, searchParams]);

  return null;
}
