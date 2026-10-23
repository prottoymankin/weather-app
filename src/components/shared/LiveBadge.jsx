const LiveBadge = ({ label }) => {
  
  return (

    <div 
      className="bg-white flex font-medium gap-2 items-center py-1 px-4 rounded-full shadow-xl text-blue-600 text-xs uppercase w-fit"
    >
      <span className="relative flex size-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
        <span className="relative inline-flex size-2 rounded-full bg-blue-500"></span>
      </span>

      {label}
    </div>

  );

};

export default LiveBadge;