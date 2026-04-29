type RoadmapItemType = {
  title: string;
  sub: string;
  status: "done" | "current" | "upcoming";
};

export function RoadmapItem({ item, index }: { item: RoadmapItemType; index: number }) {
  return (
    <article className={`roadmap-item roadmap-${item.status}`}>
      <span className="roadmap-dot">{String(index + 1).padStart(2, "0")}</span>
      <div>
        <h3>{item.title}</h3>
        <p>{item.sub}</p>
      </div>
    </article>
  );
}
