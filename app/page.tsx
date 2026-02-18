export default function Home() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center p-6">
      <div className="text-center">
        {/* AKUMA en estilo agresivo */}
        <h1 className="text-7xl md:text-9xl font-black italic tracking-tighter text-white uppercase leading-none">
          AKU<span className="text-red-600">MA</span>
        </h1>
        
        <p className="mt-4 text-gray-400 text-sm md:text-lg tracking-[0.3em] uppercase font-light">
          Garage & Luxury Parts
        </p>

        <div className="mt-8 h-1 w-24 bg-red-600 mx-auto"></div>

        <div className="mt-12">
          <p className="text-white font-mono text-xs opacity-50 animate-pulse">
            [ INITIALIZING SYSTEM... ]
          </p>
        </div>
      </div>

      <footer className="absolute bottom-10 text-gray-600 text-[10px] tracking-widest uppercase italic">
        High Performance Modification • 2026
      </footer>
    </main>
  );
}