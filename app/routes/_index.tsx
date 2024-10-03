import type { MetaFunction } from "@remix-run/node";
import { FlipWords } from "~/shared/components/FlipWords";

export const meta: MetaFunction = () => {
  return [
    { title: "Resumator" },
    { name: "description", content: "Welcome to Remix Project!" },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen">
      {/* Removed Utilities: rounded-b-[140px] shadow-lg dark:shadow-2xl dark:shadow-slate-200/50 */}
      <div className = "m-2 h-96 w-full bg-slate-0 p-5">
        <div className="text-4xl">
            <p className="">Hey there, I'm Aaditya Pandagle,</p>
            and I'm a Full-time<FlipWords className="font-semibold" words={["Machine Learning Engineer", "Deep Learning Engineer", "Data Scientist"]} duration={3000} />
        </div>
      
      </div>
    </div>
  );
}




