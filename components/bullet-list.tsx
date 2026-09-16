export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-2 pl-5 text-sm leading-relaxed text-text-secondary">
      {items.map((item, i) => (
        <li key={i} className="list-disc">
          {item}
        </li>
      ))}
    </ul>
  );
}
