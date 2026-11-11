import type { Demo } from "@/components/data/demos";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router";

function DemoCard({ demo }: { demo: Demo }) {
  return (
    <Link to={demo.path}>
      <Card>
        <CardContent>{demo.title}</CardContent>
      </Card>
    </Link>
  );
}

export default DemoCard;
