import { useRouter } from "next/router";
import { getBaseUrl } from "utils";

interface UseCanonicalUrlArgs {
  slug?: string;
}

export function useCanonicalUrl({ slug }: UseCanonicalUrlArgs) {
  const router = useRouter();
  const baseUrl = getBaseUrl();

  if (router.pathname.startsWith("/posts/")) {
    return `${baseUrl}${router.asPath}`;
  }

  if (router.pathname.startsWith("/p/") && slug) {
    return `${baseUrl}/p/${slug}`;
  }

  return `${baseUrl}/`;
}
