import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Resumator" },
    { name: "description", content: "Welcome to Remix Project!" },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen">
      <h1 className = "text-3xl text-center font-semibold p-20">Resumator</h1>
    </div>
  );
}


