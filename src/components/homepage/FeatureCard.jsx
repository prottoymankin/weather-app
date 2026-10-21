const FeatureCard = ({ icon, title, text }) => {

  return (

    <div className="bg-white flex gap-2 items-center p-4 rounded-2xl shadow-xl text-sm">
      <div 
        className="bg-linear-to-r from-blue-500 to-blue-600 flex items-center justify-center h-10 text-white rounded-lg text-xl w-12"
      >
        {icon}
      </div>

      <div>
        <h3 className="font-bold text-slate-900">{title}</h3>
        <p className="font-medium text-slate-600">{text}</p>
      </div>
    </div>

  );

};

export default FeatureCard;