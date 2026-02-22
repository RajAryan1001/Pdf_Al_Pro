import { Paperclip, Image, Send, ThumbsUp, RefreshCw, Sparkles, ThumbsDown } from "lucide-react";
import { useState } from "react";

const ChatPanel = () => {
  const [message, setMessage] = useState("");

  return (
    <div className="w-[340px] flex flex-col bg-chat-bg border-l border-border h-full">
      {/* Header */}
      <div className="h-12 flex items-center gap-2.5 px-4 border-b border-border">
        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
          <Sparkles className="w-6 h-8 p-1.5 bg-blue-700 text-white rounded-[25%]" />
        </div>
        <span className="text-sm font-semibold text-foreground">AI Assistant</span>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-auto p-4 space-y-4">
        {/* User message */}
        <div className="flex flex-col items-end">
          <div className="bg-chat-user rounded-xl rounded-tr-sm px-4 py-3 max-w-[85%]">
            <p className="text-sm text-primary-foreground">
              Summarize the risk factors mentioned on page 12.
            </p>
          </div>
          <span className="text-[10px] text-muted-foreground mt-1.5">YOU • 2:41 PM</span>
        </div>

        {/* AI message */}
        <div className="flex gap-2">
          <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
            <Sparkles className="w-6 h-6 p-1.5 bg-blue-700 text-white rounded-[25%]" />
          </div>
          <div>
            <div className="bg-[#0b1f3a] rounded-xl rounded-tl-sm px-4 py-3 text-white">
              <p className="text-sm mb-3">
                Based on page 12, the primary risk factors for Q3 include:
              </p>

              <ul className="space-y-2.5 text-sm">
                <li className="flex gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white flex-shrink-0" />
                  <span>
                    <strong>Market Volatility:</strong> Shifts in sentiment impacting revenue targets.
                  </span>
                </li>

                <li className="flex gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white flex-shrink-0" />
                  <span>
                    <strong>Supply Chain Integrity:</strong> Semiconductor dependency and single-source supplier risks.
                  </span>
                </li>

                <li className="flex gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white flex-shrink-0" />
                  <span>
                    <strong>Regulatory Changes:</strong> High exposure to GDPR penalties and infrastructure requirements.
                  </span>
                </li>
              </ul>
            </div>

            <div className="flex items-center gap-3 mt-2 text-[10px] text-white/60">
              <span>AI ASSISTANT • NOW</span>

              <div className="flex items-center gap-1.5">
                <button className="hover:text-white transition-colors">
                  <ThumbsDown className="w-3 h-3" />
                </button>

                <button className="hover:text-white transition-colors">
                  <ThumbsUp className="w-3 h-3" />
                </button>

                <button className="hover:text-white transition-colors">
                  <RefreshCw className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Status pill */}
        <div className="flex justify-center mt-2">
          <span className="text-[11px] text-muted-foreground border border-border rounded-full px-3 py-1">
            AI processing completed for Page 12
          </span>
        </div>
      </div>

      {/* Input */}
      <div className="p-3 border-t border-border">
        <div className="bg-muted rounded-xl px-4 py-3">
          <input
            type="text"
            placeholder="Ask anything about the report..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none mb-2"
          />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button className="text-muted-foreground hover:text-foreground transition-colors">
                <Paperclip className="w-4 h-4" />
              </button>
              <button className="text-muted-foreground hover:text-foreground transition-colors">
                <Image className="w-4 h-4" />
              </button>
              <span className="text-xs text-muted-foreground ml-1">GPT-4 Turbo</span>
            </div>
            <button className="w-8 h-8 rounded-full bg-primary flex items-center justify-center hover:opacity-90 transition-opacity">
              <Send className="w-3.5 h-3.5 text-primary-foreground" />
            </button>
          </div>
        </div>
        <p className="text-[10px] text-muted-foreground text-center mt-2">
          AI can make mistakes. Verify important information.
        </p>
      </div>
    </div>
  );
};

export default ChatPanel;
