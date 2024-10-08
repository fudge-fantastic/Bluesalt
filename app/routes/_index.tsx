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
    <div className="bg-slate-300 mx-8 px-0 border-2 border-slate-600 min-h-screen">
      {/* Removed Utilities: rounded-b-[140px] shadow-lg dark:shadow-2xl dark:shadow-slate-200/50 */}
      <div className = "flex h-96 w-full bg-slate-0 p-8 bg-slate-400 items-center">
        <div className="text-4xl border-2 border-red-500 w-full">
            <p className="">Hey there, I&apos;m Aaditya Pandagle,
              <br />
              and I&apos;m a Full-time<FlipWords className="font-semibold" words={["Machine Learning Engineer", "Deep Learning Engineer", "Data Scientist"]} duration={2500} />
            </p>
        </div>
      
      </div>
    </div>
  );
}




