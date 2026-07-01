export default function Loading() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-14 h-14">
          <div className="absolute inset-0 rounded-full border-4 border-amber-100" />
          <div className="absolute inset-0 rounded-full border-4 border-t-amber-500 animate-spin" />
        </div>
        <p className="text-sm font-medium text-slate-400 tracking-wide">Loading…</p>
      </div>
    </div>
  );
}
