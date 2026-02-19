export default function UmlLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col h-full overflow-hidden bg-[#F8FAFC] text-slate-800">
      {children}
    </div>
  );
}
