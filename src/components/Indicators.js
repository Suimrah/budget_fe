const Indicators = () => {
  return (
    <div className="border-solid, border-2 p-2 m-2 w-30  ">
      <div className="bg-blue-400 p-4 border-solid, border-2 m-2 rounded-md">
        Total Budget Amount: $US 500,000
      </div>
      <div className="bg-sky-400 p-4 border-solid, border-2 m-2 rounded-md">
        Total Used Budget: $US 200,000
      </div>
      <div className="bg-teal-400 p-4 border-solid, border-2 m-2 rounded-md">
        Pending Budget: $US 300,000
      </div>
      <div className="bg-orange-400 p-4 border-solid, border-2 m-2 rounded-md">
        Something More: DUNNO =)
      </div>
    </div>
  );
};

export default Indicators;
