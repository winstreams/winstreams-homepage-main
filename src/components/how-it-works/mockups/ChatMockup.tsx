import React from 'react';
import { motion } from 'framer-motion';

const messages = [
  { sender: 'ai', text: "What's not working with your AC?" },
  { sender: 'user', text: "It's not cooling and making a weird noise" },
  { sender: 'ai', text: "How urgent? Today / this week / not urgent?" },
  { sender: 'user', text: "Today if possible" }
];

export function ChatMockup() {
  return (
    <div 
      className="w-full max-w-[280px] mx-auto bg-card border border-border rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)]"
      aria-label="Chat conversation showing AI asking customer about AC problem and urgency to qualify the lead"
    >
      {/* Chat Header */}
      <div className="bg-muted border-b border-border px-4 py-3 flex items-center justify-between">
        <span className="text-sm font-bold text-navy-900">AC Repair Pro Chat</span>
        <span className="text-xs text-green-500">Online • Responds instantly</span>
      </div>

      {/* Message Thread */}
      <div className="p-4 flex flex-col gap-3 min-h-[200px]">
        {messages.map((msg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: msg.sender === 'ai' ? -10 : 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + index * 0.15 }}
            className={`flex ${msg.sender === 'ai' ? 'justify-start' : 'justify-end'}`}
          >
            <div
              className={`text-sm px-3 py-2 max-w-[80%] ${
                msg.sender === 'ai'
                  ? 'bg-blue-500 text-white rounded-xl rounded-tl-sm'
                  : 'bg-gray-100 text-navy-900 rounded-xl rounded-tr-sm'
              }`}
            >
              {msg.text}
            </div>
          </motion.div>
        ))}

        {/* Typing Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="flex items-center gap-1 self-start"
        >
          <div className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
          <span className="text-[10px] text-gray-400 italic ml-2">AC Repair Pro is thinking...</span>
        </motion.div>
      </div>
    </div>
  );
}
