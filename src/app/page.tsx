import DashboardLayout from "@/components/templates/Dashboard";

export default function Home() {
  const iters = [];
  for (let index = 0; index < 200; index++) {
    iters.push(index);
  }
  return <DashboardLayout><h1 className="text-3xl font-bold underline">Mochamad Yuda Trinurais</h1></DashboardLayout>;
}
