import { useNavigate } from 'react-router-dom';
import { ArrowRight } from '@phosphor-icons/react';

export function FinalCTA() {
  const navigate = useNavigate();

  const handleBookingClick = () => {
    navigate('/book');
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-900">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
          Turn Every Missed Call Into Revenue
        </h2>
        <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
          Join 500+ service businesses capturing leads 24/7—even when they're slammed, closed, or on a job.
        </p>

        <button
          onClick={handleBookingClick}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-brand-magenta text-white px-8 py-4 text-lg font-semibold shadow-lg shadow-brand-magenta/20 hover:scale-105 hover:shadow-xl hover:shadow-brand-magenta/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-magenta focus:ring-offset-2 active:scale-95 mb-4"
        >
          Book Strategy Call
          <ArrowRight size={20} weight="bold" aria-hidden="true" />
        </button>

        <p className="text-lg font-semibold text-white/90 mb-6">
          Busy Does Not Mean Missed. Just Winstreams.
        </p>

        <p className="text-sm text-slate-400 opacity-80">
          Cancel anytime. No long-term contracts.
        </p>
      </div>
    </section>
  );
}