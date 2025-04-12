interface Props {
  logoUrl: string;
  heading?: string;
  onCloseModal: () => void;
}

export const ChatHeader = ({
  logoUrl,
  heading = "Ask AI",
  onCloseModal,
}: Props) => {
  return (
    <div className="flex justify-between items-center p-4 border-b border-solid border-gray-300">
      <div className="flex items-center">
        <img src={logoUrl} alt="RAGPI Logo" className="h-8 mr-3" />
        <p className="text-2xl font-semibold text-gray-800">{heading}</p>
      </div>
      <button
        onClick={onCloseModal}
        className="text-gray-400 hover:text-gray-600 cursor-pointer"
        aria-label="Close modal"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};
