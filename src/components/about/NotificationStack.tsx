import { motion } from "framer-motion";
import { PhoneOff, MessageSquare, CheckCircle2 } from "lucide-react";

const notifications = [
  {
    icon: PhoneOff,
    title: "Missed Call",
    subtitle: "Incoming call detected",
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/20",
  },
  {
    icon: MessageSquare,
    title: "AI Handling",
    subtitle: "Engaging with caller...",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
  },
  {
    icon: CheckCircle2,
    title: "Appointment Booked",
    subtitle: "Tomorrow at 2:00 PM",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20",
  },
];

const NotificationStack = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative flex flex-col gap-4"
    >
      {notifications.map((notification, index) => {
        const Icon = notification.icon;
        return (
          <motion.div
            key={notification.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.4 + index * 0.15,
              ease: "easeOut",
            }}
            className={`flex items-center gap-4 rounded-2xl border ${notification.borderColor} ${notification.bgColor} backdrop-blur-xl p-4 shadow-lg`}
          >
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-full ${notification.bgColor}`}
            >
              <Icon className={`h-6 w-6 ${notification.color}`} />
            </div>
            <div>
              <p className="font-semibold text-gray-900">{notification.title}</p>
              <p className="text-sm text-gray-600">{notification.subtitle}</p>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default NotificationStack;
