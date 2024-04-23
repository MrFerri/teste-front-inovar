"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export function useParams(name: string) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { push } = useRouter();

  let handleParams = (value: string) => {
    const params = new URLSearchParams(searchParams);
    const oldValue = params.get(name);

    if (value && value !== oldValue) params.set(name, value);
    else params.delete(name);
    push(`${pathname}?${params.toString()}`);
  };

  return { searchParams, handleParams };
}
