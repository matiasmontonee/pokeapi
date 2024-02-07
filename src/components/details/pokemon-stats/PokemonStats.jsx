import React from 'react';

const PokemonStats = ({ stats }) => {
  const statNames = [
    "HP", 
    "Attack", 
    "Defense", 
    "Sp. Atk", 
    "Sp. Def", 
    "Speed"
  ];

  const getColorClass = (index) => {
    if (index === 0) return "bg-green-400";      
    if (index === 1) return "bg-red-500";     
    if (index === 2) return "bg-blue-500";       
    if (index === 3) return "bg-red-600";        
    if (index === 4) return "bg-blue-600";       
    if (index === 5) return "bg-yellow-400";     

    return "bg-gray-400";
  }

  const totalStats = stats.reduce((acc, curr) => acc + curr.base_stat, 0);

  return (
    <div className="overflow-x-scroll sm:overflow-x-hidden">
      <div className="min-w-[430px]">
        <div className="flex items-center gap-4">
          <p className="text-sm font-bold mt-3">Battle Stats</p>
          <div className="flex-1"></div>
          <div className="flex gap-2 min-w-[100px] justify-between">
            <p className="text-sm font-bold mt-3">Effort</p>
            <p className="text-sm font-bold mt-3">Total</p> 
          </div>
        </div>

        {stats.map((stat, index) => (
          <div className="flex items-center gap-4" key={index}>
            <div className="flex min-w-[110px] justify-between">
              <p>{(statNames[index])}</p>
              <p className="capitalize">{stat.base_stat}</p>
            </div>

            <div className="flex-1 bg-neutral-200 rounded-full h-2">
              <div className={`h-full mb-2 rounded-full ${getColorClass(index)}`} style={{ width: `${(stat.base_stat / 230) * 100}%` }}></div>
            </div>

            <div className="flex min-w-[100px] justify-between">
              <p className="capitalize">{stat.effort}</p>
              <p className="capitalize">{((stat.effort / totalStats) * 100).toFixed(2)}%</p> 
            </div>
          </div>
        ))}

        <div className="flex items-center gap-4">
          <div className="flex gap-2 min-w-[110px] justify-between">
            <p className="font-bold">Total</p>
            <p>{totalStats}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonStats;