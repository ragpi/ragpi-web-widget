interface Props {
  text?: string;
  onClick: () => void;
}

export const ChatButton = ({ text = "Ask AI", onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 bg-primary hover:bg-primary/90 text-secondary rounded-lg p-4 z-50 cursor-pointer text-lg"
      aria-label="Open chat"
    >
      {text}
    </button>
  );
};
