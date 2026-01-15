import { useState } from 'react';
import { WORD_CATEGORIES, getRandomWord, getCategoryName } from '../data/words';
import { useLanguage } from '../i18n/LanguageContext';
import { getTranslation } from '../i18n/translations';
import './Setup.css';

function Setup({ onBack, onStart }) {
  const { language } = useLanguage();
  const t = (key, replacements) => getTranslation(language, key, replacements);
  
  const [players, setPlayers] = useState(['', '', '']);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const addPlayer = () => {
    if (players.length < 12) {
      setPlayers([...players, '']);
    }
  };

  const removePlayer = (index) => {
    if (players.length > 3) {
      const newPlayers = players.filter((_, i) => i !== index);
      setPlayers(newPlayers);
    }
  };

  const updatePlayer = (index, value) => {
    const newPlayers = [...players];
    newPlayers[index] = value;
    setPlayers(newPlayers);
  };

  const toggleCategory = (categoryKey) => {
    if (selectedCategories.includes(categoryKey)) {
      setSelectedCategories(selectedCategories.filter(key => key !== categoryKey));
    } else {
      setSelectedCategories([...selectedCategories, categoryKey]);
    }
  };

  const handleStart = () => {
    const filledPlayers = players.filter(p => p.trim() !== '');
    
    if (filledPlayers.length < 3) {
      alert(t('needPlayers'));
      return;
    }
    
    if (selectedCategories.length === 0) {
      alert(t('selectCategory'));
      return;
    }
    
    const wordPair = getRandomWord(selectedCategories, language);
    onStart(filledPlayers, selectedCategories, wordPair);
  };

  return (
    <div className="setup fade-in">
      <div className="setup-header">
        <button className="btn-back" onClick={onBack}>← {t('back')}</button>
        <h2>{t('gameSetup')}</h2>
      </div>

      <div className="setup-content">
        <div className="card">
          <h3>👥 {t('players')} ({players.filter(p => p.trim()).length})</h3>
          <div className="players-list">
            {players.map((player, index) => (
              <div key={index} className="player-input-group">
                <input
                  type="text"
                  value={player}
                  onChange={(e) => updatePlayer(index, e.target.value)}
                  placeholder={`${t('playerPlaceholder')} ${index + 1}`}
                  maxLength={20}
                />
                {players.length > 3 && (
                  <button
                    className="btn-remove"
                    onClick={() => removePlayer(index)}
                  >
                    ×
                  </button>
                )}
              </div>
            ))}
          </div>
          
          {players.length < 12 && (
            <button className="btn btn-secondary btn-add" onClick={addPlayer}>
              + {t('addPlayer')}
            </button>
          )}
        </div>

        <div className="card">
          <h3>🎯 {t('category')}</h3>
          <p className="category-hint">✨ {t('categoryHint')}</p>
          <div className="categories-grid">
            {Object.keys(WORD_CATEGORIES).map((key) => (
              <button
                key={key}
                className={`category-btn ${selectedCategories.includes(key) ? 'active' : ''}`}
                onClick={() => toggleCategory(key)}
              >
                <span className="category-name">{getCategoryName(key, language)}</span>
                {selectedCategories.includes(key) && <span className="checkmark">✓</span>}
              </button>
            ))}
          </div>
          {selectedCategories.length > 0 && (
            <div className="selected-count">
              {selectedCategories.length} {selectedCategories.length === 1 ? t('categorySelected') : t('categoriesSelected')}
            </div>
          )}
        </div>

        <button
          className="btn btn-primary btn-large"
          onClick={handleStart}
          disabled={players.filter(p => p.trim()).length < 3 || selectedCategories.length === 0}
        >
          {t('distributeWords')}
        </button>
      </div>
    </div>
  );
}

export default Setup;
