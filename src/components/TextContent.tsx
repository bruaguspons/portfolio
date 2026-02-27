import TextColor from "@/components/TextColor";

interface Props {
    CONTENT: (string | { highlight: string })[][];
}

const TextContent = ({ CONTENT }: Props): React.ReactNode => {
  return (
    <div data-aos="fade-up" className="max-w-4xl mt-6 text-sm sm:text-base">
      {CONTENT.map((paragraph, i) => (
        <p key={i} className="mb-4">
          {paragraph.map((part, j) =>
            typeof part === "string" ? (
              part
            ) : (
              <TextColor key={j}>{part.highlight}</TextColor>
            )
          )}
        </p>
      ))}
    </div>
  );
};
export default TextContent;