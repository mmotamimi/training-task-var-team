import { useEffect } from "react";
import { useError } from "./context/ErrorContext";

export default function NotFoundHandler() {
  const { error, setError } = useError();

  useEffect(() => {
    if (!error) {
      setError("Page not found", 404);
    }
  }, [error, setError]);

  return null;
}