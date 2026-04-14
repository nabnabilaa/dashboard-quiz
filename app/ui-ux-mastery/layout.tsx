export default function BelajarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800">
      {children}
    </div>
  );
}
