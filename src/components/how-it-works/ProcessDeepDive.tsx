import React from 'react';
import { motion } from 'framer-motion';
import { PhoneMissed, MessageSquare, CheckCircle, Bell, User, Wrench, Calendar } from 'lucide-react';

const steps = [
  {
    number: 1,
    badge: 'STEP 1',
    title: 'The Handoff (Capture)',
    description: 'A call comes in while you\'re working. Instead of going to voicemail, WinStreams instantly sends a personalized text and starts the conversation—before they call a competitor.',
    visual: 'step1',
    alignment: 'left'
  },
  {
    number: 2,
    badge: 'STEP 2',
    title: 'The Conversation (Qualify)',
    description: 'The AI asks the right questions to understand their needs, filters out spam, and confirms this is a real job opportunity.',
    visual: 'step2',
    alignment: 'right'
  },
  {
    number: 3,
    badge: 'STEP 3',
    title: 'The Booking (Convert)',
    description: 'Once qualified, WinStreams checks your calendar availability and books the job directly—then sends confirmation to the customer. All in under 60 seconds.',
    visual: 'step3',
    alignment: 'left'
  },
  {
    number: 4,
    badge: 'STEP 4',
    title: 'The Update (Notify)',
    description: 'You receive an instant notification with all the details—customer info, service requested, and appointment time—already synced to your calendar and CRM. You just show up and do the work.',
    visual: 'step4',
    alignment: 'right'
  }
];

function Step1Visual() {
  return (
    <div className="bg-gradient-to-br from-blue-50/50 to-white rounded-2xl p-8 border border-gray-200">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white shadow-sm border border-red-100 rounded-xl p-4 mb-4"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center flex-shrink-0">
            <PhoneMissed className="text-red-600" size={20} />
          </div>
          <div>
            <p className="font-semibold text-red-600 text-sm">Missed Call</p>
            <p className="text-xs text-gray-600">John Smith • (555) 123-4567</p>
            <p className="text-xs text-gray-400">Just now</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: 40 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="w-px bg-gradient-to-b from-gray-300 to-transparent mx-auto mb-4"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="bg-white shadow-md border border-blue-100 rounded-2xl p-4"
      >
        <p className="text-navy-900 text-sm leading-relaxed">
          Hi John, this is WinStreams. Thanks for calling! How can we help you today?
        </p>
        <p className="text-xs text-gray-400 mt-2">Just now</p>
      </motion.div>
    </div>
  );
}

function Step2Visual() {
  const messages = [
    { sender: 'ai', text: 'Is this for residential or commercial?' },
    { sender: 'user', text: 'Residential' },
    { sender: 'ai', text: 'Got it. What service do you need today?' },
    { sender: 'user', text: 'AC repair - not cooling' },
    { sender: 'ai', text: 'Perfect. When works best for you?' }
  ];

  return (
    <div className="bg-gradient-to-br from-purple-50/50 to-white rounded-2xl p-8 border border-gray-200">
      <div className="space-y-3">
        {messages.map((msg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: msg.sender === 'ai' ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className={`flex ${msg.sender === 'ai' ? 'justify-start' : 'justify-end'}`}
          >
            <div className={`${msg.sender === 'ai' 
              ? 'bg-blue-50 border border-blue-100 rounded-2xl rounded-tl-none' 
              : 'bg-gray-100 rounded-2xl rounded-tr-none'
            } px-4 py-3 max-w-[80%]`}>
              <p className="text-sm text-navy-900">{msg.text}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
        className="mt-6 flex items-center justify-center gap-2 bg-green-50 border border-green-200 rounded-lg py-2 px-4"
      >
        <CheckCircle className="text-green-600" size={16} />
        <p className="text-sm font-semibold text-green-700">Verified Customer</p>
      </motion.div>
    </div>
  );
}

function Step3Visual() {
  return (
    <div className="bg-gradient-to-br from-green-50/50 to-white rounded-2xl p-8 border border-gray-200">
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <Calendar className="text-navy-900" size={20} />
            <h4 className="font-bold text-navy-900">Your Calendar</h4>
          </div>
          <span className="text-xs text-gray-500">Thursday, Nov 30</span>
        </div>

        <div className="space-y-3">
          <div className="bg-white border border-dashed border-gray-300 rounded-lg p-3">
            <p className="text-gray-400 text-sm">9:00 AM - Available</p>
          </div>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white border-2 border-magenta-600 rounded-lg p-4 shadow-md"
          >
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="font-bold text-navy-900">10:30 AM</p>
                <p className="text-sm text-gray-600">John Smith</p>
                <p className="text-xs text-gray-500">AC Repair</p>
              </div>
              <motion.div
                animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-8 h-8 bg-magenta-600 rounded-full flex items-center justify-center"
              >
                <CheckCircle className="text-white" size={20} />
              </motion.div>
            </div>
          </motion.div>

          <div className="bg-white border border-dashed border-gray-300 rounded-lg p-3">
            <p className="text-gray-400 text-sm">2:00 PM - Available</p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-6 pt-4 border-t border-gray-200"
        >
          <p className="text-sm font-semibold text-green-600 flex items-center gap-2">
            <CheckCircle size={16} />
            Confirmation sent to customer
          </p>
        </motion.div>
      </div>
    </div>
  );
}

function Step4Visual() {
  const statusChecks = [
    { label: 'Added to Calendar', delay: 0.3 },
    { label: 'Synced to CRM', delay: 0.5 },
    { label: 'Customer notified', delay: 0.7 }
  ];

  return (
    <div className="bg-gradient-to-br from-magenta-50/50 to-white rounded-2xl p-8 border border-gray-200">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg"
      >
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
          <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
            <Bell className="text-blue-600" size={24} />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-navy-900">New Appointment Booked</h4>
            <p className="text-xs text-gray-500">2 minutes ago</p>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <div className="flex items-start gap-3">
            <User className="text-gray-400 mt-1 flex-shrink-0" size={18} />
            <div>
              <p className="text-xs text-gray-500 mb-1">Customer</p>
              <p className="font-semibold text-navy-900">John Smith</p>
              <p className="text-sm text-gray-600">(555) 123-4567</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Wrench className="text-gray-400 mt-1 flex-shrink-0" size={18} />
            <div>
              <p className="text-xs text-gray-500 mb-1">Service</p>
              <p className="font-semibold text-navy-900">AC Repair</p>
              <p className="text-sm text-gray-600">Issue: Not cooling</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Calendar className="text-gray-400 mt-1 flex-shrink-0" size={18} />
            <div>
              <p className="text-xs text-gray-500 mb-1">Appointment</p>
              <p className="font-semibold text-navy-900">Thu, Nov 30 @ 10:30 AM</p>
              <p className="text-sm text-gray-600">123 Main St, Miami FL</p>
            </div>
          </div>
        </div>

        <div className="space-y-2 pt-4 border-t border-gray-200">
          {statusChecks.map((check, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: check.delay }}
              className="flex items-center gap-2"
            >
              <CheckCircle className="text-green-600 flex-shrink-0" size={16} />
              <p className="text-sm text-gray-600">{check.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export function ProcessDeepDive() {
  const visualComponents = {
    step1: Step1Visual,
    step2: Step2Visual,
    step3: Step3Visual,
    step4: Step4Visual
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy-900 mb-4">
            How It Actually Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The entire process happens in seconds and adapts to every caller.
          </p>
        </motion.div>

        <div className="space-y-32">
          {steps.map((step, index) => {
            const VisualComponent = visualComponents[step.visual as keyof typeof visualComponents];
            const isLeft = step.alignment === 'left';

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                {/* Text Side */}
                <div className={`space-y-4 ${isLeft ? 'md:order-1' : 'md:order-2'}`}>
                  <div className="inline-block">
                    <span className="px-4 py-2 bg-magenta-50 text-magenta-600 rounded-full text-sm font-bold">
                      {step.badge}
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-heading font-bold text-navy-900">
                    {step.title}
                  </h3>

                  <p className="text-lg text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Visual Side */}
                <div className={isLeft ? 'md:order-2' : 'md:order-1'}>
                  <VisualComponent />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
