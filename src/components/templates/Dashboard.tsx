import { Button } from "../ui/button";
import { SiHomeassistantcommunitystore } from "react-icons/si";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex flex-col">
      <aside className="fixed w-12 sm:w-48 h-screen backdrop-blur flex flex-col items-center justify-center sm:justify-normal gap-8 p-2">
        <div className="hidden sm:flex h-20 w-20 rounded-full bg-white shadow shadow-white"></div>
        <div className="flex flex-col gap-4 w-full">
          <Button className="bg-sky-300 bg-opacity-60 hover:bg-sky-300 hover:bg-opacity-100 p-1">
            <SiHomeassistantcommunitystore className="text-black text-xl" />
            <label className="ml-2 text-black font-semibold text-lg hidden sm:flex">Home</label>
          </Button>
        </div>
      </aside>
      <main className="overflow-hidden bg-lamp">
        <div className="w-[calc(100vw-3rem)] sm:w-[calc(100vw-12rem)] relative left-12 sm:left-48 bg-slate-900 text-white p-8">{children}</div>
      </main>
    </section>
  );
};

export default DashboardLayout;
