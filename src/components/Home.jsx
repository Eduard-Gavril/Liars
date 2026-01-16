import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { getTranslation } from '../i18n/translations';
import LanguageSelector from './LanguageSelector';
import './Home.css';

function Home({ onStart }) {
  const { language } = useLanguage();
  const t = (key, replacements) => getTranslation(language, key, replacements);
  const [showRules, setShowRules] = useState(false);
  
  return (
    <div className="home fade-in">
      <div className="home-header">
        <div className="header-top">
          <LanguageSelector />
        </div>
        <h1 className="home-title">🎭 {t('gameTitle')}</h1>
        <p className="home-subtitle">{t('gameSubtitle')}</p>
      </div>
      
      <div className="home-content">
        <button 
          className="btn btn-secondary btn-large" 
          onClick={() => setShowRules(!showRules)}
        >
          📖 {t('howToPlay')}
        </button>

        {showRules && (
          <div className="card rules-card fade-in">
            <ul className="rules-list">
              <li>
                <span className="rule-icon">👥</span>
                <div>
                  <strong>{t('civilians')}</strong> {t('civiliansDesc')}
                </div>
              </li>
              <li>
                <span className="rule-icon">🎭</span>
                <div>
                  <strong>{t('impostor')}</strong> {t('impostorDesc')}
                </div>
              </li>
              <li>
                <span className="rule-icon">💬</span>
                <div>
                  {t('giveClues')} <strong>{t('clues')}</strong> {t('cluesDesc')}
                </div>
              </li>
              <li>
                <span className="rule-icon">🔍</span>
                <div>
                  {t('analyzeClues')} <strong>{t('findImpostor')}</strong>
                </div>
              </li>
              <li>
                <span className="rule-icon">🗳️</span>
                <div>
                  {t('vote')}
                </div>
              </li>
            </ul>

            <div className="victory-section">
              <h3>🏆 {t('victoryConditions')}</h3>
              <div className="victory-conditions">
                <div className="victory-item">
                  <span className="victory-emoji">✅</span>
                  <p><strong>{t('civiliansWin')}</strong> {t('civiliansWinDesc')}</p>
                </div>
                <div className="victory-item">
                  <span className="victory-emoji">🎯</span>
                  <p><strong>{t('impostorWins')}</strong> {t('impostorWinsDesc')}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        <button className="btn btn-primary btn-large" onClick={onStart}>
          {t('startGame')}
        </button>

        <div className="home-footer">
          <p className="tip">💡 {t('recommendedPlayers')}</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
