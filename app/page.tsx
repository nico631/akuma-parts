'use client';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export default function Home() {
  const [productos, setProductos] = useState<any[]>([]);

  useEffect(() => {
    async function getProductos() {
      const { data, error } = await supabase.from('productos').select('*');
      if (data) setProductos(data);
      if (error) console.error('Error:', error);
    }
    getProductos();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="text-center mb-16">
        <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase leading-none">
          AKU<span className="text-red-600">MA</span>
        </h1>
        <p className="text-gray-400 tracking-[0.3em] uppercase text-sm mt-4 font-light">
          Garage & Luxury Parts
        </p>
        <div className="mt-4 h-1 w-20 bg-red-600 mx-auto"></div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {productos.length > 0 ? (
          productos.map((prod) => (
            <div key={prod.id} className="group relative border border-zinc-800 bg-zinc-950 p-6 transition-all hover:border-red-600">
              <div className="absolute top-0 right-0 p-2 text-[10px] font-mono text-zinc-700 uppercase tracking-widest">
                ID-{prod.id.toString().slice(0, 4)}
              </div>
              
              <span className="text-red-600 text-[10px] font-black uppercase tracking-[0.2em]">
                {prod.categoria}
              </span>
              
              <h2 className="text-2xl font-black uppercase mt-1 mb-4 italic group-hover:text-red-500 transition-colors">
                {prod.nombre}
              </h2>
              
              {/* Aquí corregimos la descripción para que se vea */}
              <p className="text-zinc-400 text-sm leading-relaxed mb-8 min-h-[60px] border-l-2 border-zinc-800 pl-4 italic">
                {prod.descripcion || "Sin descripción disponible"}
              </p>
              
              <div className="flex justify-between items-end border-t border-zinc-900 pt-6">
                <div className="flex flex-col">
                  <span className="text-zinc-500 text-[9px] uppercase font-bold tracking-tighter">Precio de lista</span>
                  <span className="text-3xl font-mono font-black text-white">${prod.precio}</span>
                </div>
                
                <button className="bg-red-600 text-white px-6 py-2 text-[11px] font-black uppercase tracking-tighter hover:bg-white hover:text-black transition-all">
                  Explorar Pieza
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-20 animate-pulse font-mono text-zinc-600 uppercase text-xs">
            [ Escaneando base de datos... ]
          </div>
        )}
      </div>
    </main>
  );
}