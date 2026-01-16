import { useLanguage } from '../i18n/LanguageContext';
import { getTranslation } from '../i18n/translations';
import './RemakeButton.css';

function RemakeButton({ onRestart }) {
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, key);

  return (
    <button className="remake-button" onClick={onRestart} title={t('remake')}>
      🔄
    </button>
  );
}

export default RemakeButton;
