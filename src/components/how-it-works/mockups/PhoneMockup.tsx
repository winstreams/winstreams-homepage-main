import React from 'react';
import { motion } from 'framer-motion';
import { PhoneMissed, Check } from 'lucide-react';

export function PhoneMockup() {
  return (
    <div 
      className="w-full max-w-[280px] mx-auto"
      aria-label="Phone interface showing missed call notification from John Smith triggering instant text message response"
    >
      {/* Phone Frame */}
      <div className="relative bg-gray-900 rounded-[32px] p-2 shadow-[0_10px_30px_rgba(0,0,0,0.2),inset_0_0_20px_rgba(0,0,0,0.3)]">
        {/* Phone Inner */}
        <div className="bg-background rounded-[28px] overflow-hidden" style={{ aspectRatio: '9/16' }}>
          {/* Status Bar */}
          <div className="bg-gray-900 h-6 px-3 flex items-center justify-between">
            <span className="text-xs text-white font-semibold">9:41</span>
            <div className="flex items-center gap-1 text-white text-xs">
              <span>📶</span>
              <span>🔋</span>
            </div>
          </div>

          {/* Notification Banner */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-red-50 border-b border-red-200 p-3"
          >
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                <PhoneMissed className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-red-500">Missed Call</p>
                <p className="text-xs text-red-500">John Smith • (555) 123-4567</p>
                <p className="text-[10px] text-red-400">Just now</p>
              </div>
            </div>
          </motion.div>

          {/* Chat Section */}
          <div className="p-3 bg-background flex-1">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-blue-500 text-white text-sm rounded-xl rounded-tl-sm p-3 max-w-[85%]"
            >
              Hi John, this is AC Repair Pro. Thanks for calling! How can we help you today?
            </motion.div>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-[10px] text-gray-400">Just now</span>
              <Check className="w-3 h-3 text-teal-500" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
