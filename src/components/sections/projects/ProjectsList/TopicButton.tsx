export const TopicButton = ({
  topic,
  onSelect,
  onDeselect,
  isActive,
}: {
  topic: string;
  onSelect: () => void;
  isActive: () => boolean;
  onDeselect: () => void;
}) => {
  return (
    <button
      class={`px-4 py-2 rounded-xl ${
        isActive() ? "bg-primary" : "bg-secondary-background"
      }`}
      onClick={() => (isActive() ? onDeselect() : onSelect())}
    >
      {topic}
    </button>
  );
};
