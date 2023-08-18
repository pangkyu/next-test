import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <form>
      <h2>create</h2>
      {children}
    </form>
  );
}
