function StockDetails({ stockData }) {
  return (
    <div className="p-4">
      <div className="font-medium border-b-4 mb-3">{stockData.Name}</div>
      <span>{stockData.Description}</span>
      <div className="flex mt-6 p-6">
        <div className="bg-[#d7996a] rounded-xl mr-8 h-8 p-2 text-sm text-[#78350f] font-bold">
          INDUSTRY: {stockData.Industry}
        </div>
        <div className="bg-[#d7996a] rounded-xl h-8 p-2 text-sm text-[#78350f] font-bold">
          SECTOR: {stockData.Sector}
        </div>
      </div>
    </div>
  );
}

export default StockDetails;
