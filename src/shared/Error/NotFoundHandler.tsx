import { useEffect, useRef } from "react";
import { useError } from "./context/ErrorContext";

export default function NotFoundHandler() {
  const { error, setError } = useError();
  const calledRef = useRef(false);

  useEffect(() => {
    if (!error && !calledRef.current) {
      setError("Page not found", 404);
      calledRef.current = true;
    }
  }, [error, setError]);

  return null;
}