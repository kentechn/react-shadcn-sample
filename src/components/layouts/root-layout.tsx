import { Toaster } from "sonner";

export const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-red-400">header</header>
      <main className="flex flex-1 flex-col px-4">{children}</main>
      <footer className="bg-red-400">footer</footer>
      <Toaster />
    </div>
  );
};
