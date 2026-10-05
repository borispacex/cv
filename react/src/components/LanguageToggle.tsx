import { Languages } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const LanguageToggle = () => {
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.resolvedLanguage === 'en' ? 'en' : 'es';
  const nextLanguage = currentLanguage === 'es' ? 'en' : 'es';

  const changeLanguage = () => {
    void i18n.changeLanguage(nextLanguage);
    localStorage.setItem('language', nextLanguage);
  };

  return (
    <button
      type="button"
      onClick={changeLanguage}
      className="inline-flex items-center gap-1.5 rounded-md border border-primary-200 bg-primary-50 px-2.5 py-2 text-xs font-bold uppercase tracking-wide text-primary-700 transition-colors hover:border-primary-300 hover:bg-primary-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 dark:border-primary-900 dark:bg-primary-950/60 dark:text-primary-300 dark:hover:border-primary-800 dark:hover:bg-primary-900/60"
      aria-label={t('language.changeTo')}
      title={t('language.changeTo')}
    >
      <Languages size={16} aria-hidden="true" />
      <span>{nextLanguage}</span>
    </button>
  );
};

export default LanguageToggle;
