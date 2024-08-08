import { twMerge } from "tailwind-merge";
import TailwindMerge from "./beta-components/TailwindMerge";

const App = () => {
  return (
    <div className={twMerge("flex items-center justify-center")}>
      <TailwindMerge color="bg-red-400" />
    </div>
  );
};

export default App;
