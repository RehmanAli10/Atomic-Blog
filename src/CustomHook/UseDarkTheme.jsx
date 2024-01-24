import { useState, useEffect } from "react";

export function useDarkTheme() {
  const [isFakeDark, setIsFakeDark] = useState(false);

  useEffect(
    function () {
      document.documentElement.classList.toggle("fake-dark-mode");
    },
    [isFakeDark]
  );

  return { isFakeDark, setIsFakeDark };
}
