interface CategoryProps {
  value: string;
}

const tagBackgroundMapping: Record<string, string> = {
  Opinion: "tag-opinion",
  "UX Map": "tag-ux",
  "UX Theory": "tag-ux",
  "Product Design": "tag-design",
  "Case Study": "tag-case",
  Literature: "tag-literature",
};

export default function Category({ value }: CategoryProps) {
  const bgColor = tagBackgroundMapping[value] || "gray-100";

  return (
    <div
      className={`bg-${bgColor} rounded-full  py-0.5 px-2 text-white text-xs `}
    >
      {value}
    </div>
  );
}
