import { demos } from "@/components/data/demos";
import DemoCard from "@/components/demo-card";

function Home() {
  return (
    <div className="flex justify-center gap-4">
      {demos.map((demo) => (
        <DemoCard key={demo.id} demo={demo} />
      ))}
    </div>
  );
}

export default Home;
