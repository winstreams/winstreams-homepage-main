import { XCircle, CheckCircle2 } from 'lucide-react';

const ComparisonHero = () => {
  return (
    <section className="bg-slate-900 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-4 max-w-4xl mx-auto">
          From Missed Call to Booked Job in Under 60 Seconds
        </h2>

        {/* Subheadline */}
        <p className="text-base md:text-lg lg:text-xl text-slate-300 text-center mb-12 md:mb-16 max-w-3xl mx-auto leading-relaxed">
          WinStreams captures every call, qualifies real customers, and books jobs automatically—without interrupting your day.
        </p>

        {/* Cards Container */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* LEFT CARD */}
          <div className="rounded-3xl bg-slate-900/50 border border-slate-700/30 p-8">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-6 block">
              Without WinStreams
            </span>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400/60 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-lg text-slate-300 mb-1">Missed Call</p>
                  <p className="text-sm text-slate-500">Calls go unanswered</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400/60 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-lg text-slate-300 mb-1">Voicemail (Maybe)</p>
                  <p className="text-sm text-slate-500">Messages are unclear or delayed</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400/60 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-lg text-slate-300 mb-1">They Call a Competitor</p>
                  <p className="text-sm text-slate-500">The job goes elsewhere</p>
                </div>
              </div>
            </div>
          </div>

          {/* VS SEPARATOR (mobile only) */}
          <div className="flex md:hidden items-center justify-center py-2">
            <div className="h-px bg-slate-600 flex-1 max-w-12"></div>
            <span className="px-4 text-xs font-semibold text-slate-400 uppercase tracking-wide">VS</span>
            <div className="h-px bg-slate-600 flex-1 max-w-12"></div>
          </div>

          {/* RIGHT CARD */}
          <div 
            className="rounded-3xl p-8 border-2 bg-gradient-to-br from-pink-900/10 to-purple-900/10"
            style={{
              borderColor: 'rgba(219, 39, 119, 0.5)',
              boxShadow: '0 0 24px rgba(219, 39, 119, 0.18)'
            }}
          >
            <div 
              className="inline-flex items-center rounded-full px-3 py-1 mb-6"
              style={{
                backgroundColor: 'rgba(219, 39, 119, 0.2)',
                borderWidth: '1px',
                borderColor: 'rgba(219, 39, 119, 0.5)',
                color: '#DB2777'
              }}
            >
              <span className="text-xs font-semibold uppercase tracking-wide">
                With WinStreams
              </span>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-lg text-white mb-1">Call Answered Instantly</p>
                  <p className="text-sm text-slate-200">AI responds in seconds</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-lg text-white mb-1">Job Qualified in 30 Seconds</p>
                  <p className="text-sm text-slate-200">Real customers identified, spam blocked</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-lg text-white mb-1">Job Booked & Synced to Your CRM</p>
                  <p className="text-sm text-slate-200">Calendar updated, customer notified</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-slate-300 text-sm md:text-base font-medium mt-8">
          Built for Busy Local Operators
        </p>
      </div>
    </section>
  );
};

export default ComparisonHero;
