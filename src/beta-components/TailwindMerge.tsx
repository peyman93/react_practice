import { twMerge } from "tailwind-merge";

type ButtonColor = "bg-blue-400" | "bg-red-400" | "bg-grey-400";

type TailwindMergeProps = {
  title?: string;
  color?: ButtonColor;
};

const TailwindMerge = ({ title, color }: TailwindMergeProps) => {
  return (
    <button className={twMerge("rounded-lg bg-blue-400 px-1 py-2", color)}>
      {title ?? "Submit"}
    </button>
  );
};

export default TailwindMerge;
