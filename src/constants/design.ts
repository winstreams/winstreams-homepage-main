export const DESIGN_CONSTANTS = {
  spacing: {
    sectionPadding: 'py-16 md:py-24',
    sectionPaddingHero: 'py-12 md:py-20',
    cardPadding: 'p-8 md:p-10',
    cardPaddingCompact: 'p-6',
  },
  radius: {
    card: 'rounded-3xl',
    innerCard: 'rounded-2xl',
    pill: 'rounded-full',
  },
  typography: {
    h1: 'text-5xl md:text-6xl font-bold',
    h2: 'text-4xl md:text-5xl font-bold',
    h3: 'text-2xl md:text-3xl font-bold',
    body: 'text-base text-slate-600 leading-relaxed',
    bodyLarge: 'text-lg md:text-xl text-slate-600 leading-relaxed',
    bodyDark: 'text-base text-slate-300 leading-relaxed',
    bodyLargeDark: 'text-lg md:text-xl text-slate-300 leading-relaxed',
  },
  borders: {
    default: 'border border-slate-200',
    emphasized: 'border-2 border-brand-magenta',
    subtle: 'border border-slate-300',
  },
  icons: {
    actionWeight: 'bold',        // Buttons, CTAs
    statusWeight: 'duotone',     // Metrics, states
    listWeight: 'bold',          // Checkmarks, bullets
    decorativeWeight: 'duotone', // Feature icons
  },
} as const;
