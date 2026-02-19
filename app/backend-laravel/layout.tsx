import { Navigation } from "@backend/components/Navigation";

export default function BackendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800">
      <main className="pb-24">
        {children}
      </main>
      <Navigation />
    </div>
  );
}
