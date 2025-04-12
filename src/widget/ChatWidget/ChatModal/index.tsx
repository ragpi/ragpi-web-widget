import { ChatHeader } from "./ChatHeader";
import { ChatInput } from "./ChatInput";
import { ChatMessage } from "../types";
import { ChatMessages } from "./ChatMessages";
import { ChatFooter } from "./ChatFooter";

interface Props {
  recaptchaSiteKey: string;
  onCloseModal: () => void;
  onSendMessage: (message: string, recaptchaToken: string) => void;
  messages: ChatMessage[];
  loading: boolean;
  error: string | null;
  logoUrl: string;
}

export const ChatModal = ({
  recaptchaSiteKey,
  onCloseModal,
  onSendMessage,
  messages,
  loading,
  error,
  logoUrl,
}: Props) => {
  return (
    <div
      className="fixed inset-0 bg-gray-800/50 flex items-center justify-center p-4 z-50"
      onClick={onCloseModal}
    >
      <div
        className="bg-white rounded-lg w-full max-w-md md:max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <ChatHeader onCloseModal={onCloseModal} logoUrl={logoUrl} />

        <div
          className="bg-white max-h-[80vh] flex flex-col p-4 rounded-lg"
          onClick={(e) => e.stopPropagation()}
        >
          <ChatMessages messages={messages} />

          <ChatInput
            recaptchaSiteKey={recaptchaSiteKey}
            onSendMessage={onSendMessage}
            loading={loading}
            error={error}
          />

          <ChatFooter />
        </div>
      </div>
    </div>
  );
};
