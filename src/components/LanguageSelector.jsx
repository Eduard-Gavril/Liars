import { useLanguage } from '../i18n/LanguageContext';
import './LanguageSelector.css';

const languages = [
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'ro', name: 'Română', flag: '🇷🇴' }
];

function LanguageSelector() {
  const { language, changeLanguage } = useLanguage();

  return (
    <div className="language-selector">
      {languages.map(lang => (
        <button
          key={lang.code}
          className={`lang-btn ${language === lang.code ? 'active' : ''}`}
          onClick={() => changeLanguage(lang.code)}
          title={lang.name}
        >
          <span className="flag">{lang.flag}</span>
          <span className="lang-code">{lang.code.toUpperCase()}</span>
        </button>
      ))}
    </div>
  );
}

export default LanguageSelector;
