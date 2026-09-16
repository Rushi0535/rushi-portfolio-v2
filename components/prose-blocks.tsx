import { BulletList } from "@/components/bullet-list";

export type ProseBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "bullets"; items: string[] };

export function ProseBlocks({ blocks }: { blocks: ProseBlock[] }) {
  return (
    <div className="flex flex-col gap-4">
      {blocks.map((block, i) => {
        if (block.type === "heading") {
          return (
            <h3 key={i} className="mt-2 font-display text-lg font-semibold text-text-primary">
              {block.text}
            </h3>
          );
        }
        if (block.type === "bullets") {
          return <BulletList key={i} items={block.items} />;
        }
        return (
          <p key={i} className="text-sm leading-relaxed text-text-secondary">
            {block.text}
          </p>
        );
      })}
    </div>
  );
}
