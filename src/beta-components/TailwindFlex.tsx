const TailwindFlex = () => {
  // "justify" for main axis
  // "items" for cross axis
  // "content" just when is flex-wrap (for content lines)

  return (
    <div className="flex h-[500px] max-w-[400px] flex-wrap items-start justify-center bg-black">
      <div className="h-24 w-24 shrink-0 bg-red-400">Red</div>
      <div className="h-24 w-24 bg-green-400">Green</div>
      <div className="h-24 w-24 bg-blue-400">Blue</div>
      <div className="h-24 w-24 bg-purple-400">Purple</div>
      <div className="h-24 w-24 bg-pink-400">Pink</div>
      <div className="h-24 w-24 bg-yellow-400">Yellow</div>
      <div className="h-24 w-24 bg-gray-400">Gray</div>
      <div className="h-24 w-24 bg-orange-400">Orange</div>
    </div>
  );
};

export default TailwindFlex;
