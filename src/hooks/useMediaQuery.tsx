import { useState, useEffect, useCallback } from "react";

function useMediaQuery(query: string) {
  const [hasMatches, setHasMatches] = useState(false);

  const handleChange = useCallback(() => {
    function getMatches(query: string): boolean {
      return window.matchMedia(query).matches;
    }

    setHasMatches(getMatches(query));
  }, [query]);

  useEffect(() => {
    const matchMedia = window.matchMedia(query);
    handleChange(); 

    matchMedia.addEventListener("change", handleChange);
    return () => {
      matchMedia.removeEventListener("change", handleChange);
    };
  }, [query, handleChange]);

  return hasMatches;
}

export default useMediaQuery;