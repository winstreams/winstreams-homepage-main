import { PhoneSlash, Voicemail, ArrowBendUpRight, WarningCircle, PhoneIncoming, ChatCircleDots, ListChecks, CalendarCheck } from '@phosphor-icons/react';
export function BeforeAfterComparison() {
  return <section className="py-16 md:py-24 bg-brand-dark">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-[27px]">
        {/* Headline + Subheadline */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">From Missed Call to Booked Job In 60 Seconds</h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Never{" "}
            <span className="text-brand-magenta font-semibold">
              Lose a Lead Again
            </span>{" "}
            — WinStreams captures missed calls, qualifies real customers, and
            books jobs{" "}
            <span className="text-brand-magenta font-semibold">
              Automatically
            </span>
            .
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* WITHOUT WinStreams */}
          <div className="rounded-3xl bg-slate-900/60 border border-slate-800 p-6 md:p-8">
            <div className="inline-flex items-center rounded-full bg-slate-800 text-slate-300 px-3 py-1 text-xs font-medium mb-6">
              Without WinStreams
            </div>

            <div className="space-y-5">
              {/* Step 1 */}
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <PhoneSlash size={24} weight="duotone" className="text-slate-400" />
                </div>
                <div className="flex-1">
                  <div className="text-base font-semibold tracking-tight text-slate-100 mb-1">
                    Missed Call
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    You're mid-job when the phone rings. You can't
                    pick up—and the lead starts slipping away.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <Voicemail size={24} weight="duotone" className="text-slate-400" />
                </div>
                <div className="flex-1">
                  <div className="text-base font-semibold tracking-tight text-slate-100 mb-1">
                    Voicemail (Maybe)
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    If they bother leaving one, it's often unclear,
                    incomplete… or too late.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <ArrowBendUpRight size={24} weight="duotone" className="text-slate-400" />
                </div>
                <div className="flex-1">
                  <div className="text-base font-semibold tracking-tight text-slate-100 mb-1">
                    They Call a Competitor
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Customers don't wait. They dial the next business that
                    actually responds.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <WarningCircle size={24} weight="duotone" className="text-red-400" />
                </div>
                <div className="flex-1">
                  <div className="text-base font-semibold tracking-tight text-red-400 mb-1">
                    Lost Job, Lost Revenue
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    You find out hours later—after the job is gone.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* WITH WinStreams */}
          <div className="rounded-3xl bg-slate-900/80 border border-brand-magenta/60 shadow-[0_0_40px_rgba(236,72,153,0.35)] p-6 md:p-8">
            <div className="inline-flex items-center rounded-full bg-brand-magenta/15 text-brand-magenta border border-brand-magenta/40 px-3 py-1 text-xs font-medium mb-6">
              With WinStreams
            </div>

            <div className="space-y-5">
              {/* Step 1 */}
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <PhoneIncoming size={24} weight="duotone" className="text-emerald-400" />
                </div>
                <div className="flex-1">
                  <div className="text-base font-semibold tracking-tight text-slate-100 mb-1">
                    Missed Call Detected
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    WinStreams sees the missed call instantly.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <ChatCircleDots size={24} weight="duotone" className="text-emerald-400" />
                </div>
                <div className="flex-1">
                  <div className="text-base font-semibold tracking-tight text-slate-100 mb-1">
                    Instant Smart Text Response
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Your AI receptionist replies in seconds and starts the
                    conversation.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <ListChecks size={24} weight="duotone" className="text-emerald-400" />
                </div>
                <div className="flex-1">
                  <div className="text-base font-semibold tracking-tight text-slate-100 mb-1">
                    Answers Questions, Shares Pricing &amp; Availability
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    The system qualifies the job, eliminates spam, and guides
                    real customers forward.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <CalendarCheck size={24} weight="duotone" className="text-brand-magenta" />
                </div>
                <div className="flex-1">
                  <div className="text-base font-semibold tracking-tight text-brand-magenta mb-1">
                    Booked Appointment, Secured Revenue
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Customer confirms a time; your calendar updates
                    automatically—no extra work from you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}