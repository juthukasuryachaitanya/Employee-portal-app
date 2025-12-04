import { ErrorBoundary } from "react-error-boundary";

export default function MyErrorBoundary({ children }) {
  return (
    <ErrorBoundary
      FallbackComponent={({ error, resetErrorBoundary }) => (
        <div
          style={{ padding: 20, color: "red", textAlign: "center" }}
        >
          <h2>Something went wrong.</h2>
          <p>{error.message}</p>
          <button onClick={resetErrorBoundary}>Try Again</button>
        </div>
      )}
    >
      {children}
    </ErrorBoundary>
  );
}
