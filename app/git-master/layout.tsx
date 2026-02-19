export default function GitMasterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 flex flex-col">
      {children}
    </div>
  );
}
