import type { Metadata } from "next";
import { ProjectsContent } from "@/components/projects/ProjectsContent";

export const metadata: Metadata = {
  title: "My Project List | Anucha Srilakaew",
  description: "Project archive and portfolio list of Anucha Srilakaew.",
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
