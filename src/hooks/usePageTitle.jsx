import {useEffect} from "react";

export default function usePageTitle(
  title,
  suffix = "Campbelltown Taxi Cabs"
) {
  useEffect(() => {
    document.title = title ? `${title} - ${suffix}` : suffix;
  }, [title, suffix]);
}
