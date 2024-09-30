import { cn } from "../../@/lib/utils";
type HomeCardProps = {
  Role: string;
  Content: string;
  url: string;
};

export function HomeCard({ Role, Content, url }: HomeCardProps) {
  return (
    <div className="max-w-xs w-full flex items-center justify-center ">
      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          `bg-[url(${url})] bg-cover bg-center `,
          // Preload hover image by setting it in a pseudo-element
          `before:bg-[url(${url})] before:fixed before:inset-0 before:opacity-0 before:z-[-1]`,
          `hover:bg-[url(${url})]`,
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50 hover:text-white",
          "transition-all duration-500  rounded-3xl shadow-2xl shadow-slate-600"
        )}
      >
        <div className="text relative z-50 ">
          <h1 className="font-bold text-xl md:text-3xl relative ">{Role}</h1>
          <p className="font-normal text-base relative my-4">{Content}</p>
        </div>
      </div>
    </div>
  );
}
