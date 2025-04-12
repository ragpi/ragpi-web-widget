import { useState, useEffect, useRef } from "react";

export const ChatFooter = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const recaptchaToolTipRef = useRef<HTMLDivElement>(null);
  const recaptchaBtnRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        showTooltip &&
        recaptchaToolTipRef.current &&
        !recaptchaToolTipRef.current.contains(event.target as Node) &&
        recaptchaBtnRef.current &&
        !recaptchaBtnRef.current.contains(event.target as Node)
      ) {
        setShowTooltip(false);
      }
    };

    if (showTooltip) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showTooltip]);

  return (
    <div className="flex justify-between relative">
      <span className="text-xs text-gray-500">
        Powered by{" "}
        <a
          href="https://github.com/ragpi/ragpi"
          target="_blank"
          className="hover:underline"
        >
          Ragpi
        </a>
      </span>

      <span className="text-xs text-gray-500">
        Protected by{" "}
        <span
          ref={recaptchaBtnRef}
          className="cursor-pointer hover:underline"
          onClick={() => setShowTooltip(!showTooltip)}
        >
          reCAPTCHA
        </span>
      </span>

      {showTooltip && (
        <div
          ref={recaptchaToolTipRef}
          className="absolute bottom-6 right-0 bg-white shadow-md rounded p-3 w-64 text-xs text-gray-700 border border-solid border-gray-200 z-100"
        >
          This site is protected by reCAPTCHA and the Google{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            Privacy Policy
          </a>{" "}
          and{" "}
          <a
            href="https://policies.google.com/terms"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            Terms of Service
          </a>{" "}
          apply.
        </div>
      )}
    </div>
  );
};

export default ChatFooter;
