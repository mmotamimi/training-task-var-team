import React from "react";
import { Outlet } from "@tanstack/react-router";
import { ErrorProvider, useError } from "../shared/Error/context/ErrorContext"
import ErrorDialog from "../shared/Error/ErrorDialog";

const RootLayout = () => {
  return (
    <ErrorProvider>
      <InnerLayout />
    </ErrorProvider>
  )
}

const InnerLayout = () => {
  const { error, clearError } = useError();

  return (
    <div>
      <Outlet />

      {error && (
        <ErrorDialog
          open={!!error}
          onClose={clearError}
          message={error.message}
          code={error.code}
        />
      )}
    </div>
  )
}
export default RootLayout;