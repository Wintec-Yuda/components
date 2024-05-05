import DashboardLayout from "@/components/templates/Dashboard";

export default function Home() {
  const iters = [];
  for (let index = 0; index < 200; index++) {
    iters.push(index);
  }
  return (
    <DashboardLayout>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 grid-cols-10 gap-5">
        {iters.map((i) => (
          <div key={i} className="w-20 h-20 bg-blue-500 rounded"></div>
        ))}
      </div>
    </DashboardLayout>
  );
}
