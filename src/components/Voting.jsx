import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { getTranslation } from '../i18n/translations';
import './Voting.css';

function Voting({ players, clues, votes, onVote, onComplete, impostorIndex }) {
  const { language } = useLanguage();
  const t = (key, replacements) => getTranslation(language, key, replacements);
  
  const [currentVoter, setCurrentVoter] = useState(0);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleVote = () => {
    if (selectedPlayer !== null) {
      onVote(currentVoter, selectedPlayer);
      
      if (currentVoter < players.length - 1) {
        setCurrentVoter(currentVoter + 1);
        setSelectedPlayer(null);
        setShowConfirm(false);
      } else {
        // Calcola i risultati
        calculateResults();
      }
    }
  };

  const calculateResults = () => {
    const allVotes = { ...votes, [currentVoter]: selectedPlayer };
    const voteCounts = {};
    
    Object.values(allVotes).forEach(votedIndex => {
      voteCounts[votedIndex] = (voteCounts[votedIndex] || 0) + 1;
    });
    
    // Trova chi ha ricevuto più voti
    let maxVotes = 0;
    let mostVoted = null;
    
    Object.entries(voteCounts).forEach(([playerIndex, count]) => {
      if (count > maxVotes) {
        maxVotes = count;
        mostVoted = parseInt(playerIndex);
      }
    });
    
    const isImpostorVoted = mostVoted === impostorIndex;
    onComplete(mostVoted, isImpostorVoted);
  };

  const hasVoted = votes[currentVoter] !== undefined;

  return (
    <div className="voting fade-in">
      <div className="voting-header">
        <h2>🗳️ {t('voting')}</h2>
        <p className="voting-progress">
          {t('voteProgress', { current: currentVoter + 1, total: players.length })}
        </p>
      </div>

      <div className="voting-content">
        {!hasVoted ? (
          <>
            <div className="card voter-card">
              <h3>{t('turnOf')} {players[currentVoter]}</h3>
              <p>{t('whoIsImpostor')}</p>
            </div>

            {/* Recap indizi */}
            <div className="card clues-recap">
              <h4>📝 {t('allClues')}</h4>
              <div className="all-clues">
                {players.map((player, index) => {
                  const playerClues = clues.filter(c => c.playerIndex === index);
                  return (
                    <div key={index} className="player-clues-section">
                      <div className="player-header">
                        <strong>{player}</strong>
                        <span className="clues-count">{t('cluesCount', { count: playerClues.length })}</span>
                      </div>
                      <div className="player-clues">
                        {playerClues.map((clue, cIndex) => (
                          <div key={cIndex} className="mini-clue">
                            <span className="round-badge">R{clue.round + 1}</span>
                            {clue.clue}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Selezione giocatore */}
            <div className="card players-vote">
              <h4>{t('voteToEliminate')}</h4>
              <div className="players-grid">
                {players.map((player, index) => (
                  <button
                    key={index}
                    className={`player-vote-btn ${selectedPlayer === index ? 'selected' : ''} ${index === currentVoter ? 'disabled' : ''}`}
                    onClick={() => index !== currentVoter && setSelectedPlayer(index)}
                    disabled={index === currentVoter}
                  >
                    {player}
                    {index === currentVoter && <span className="you-badge">{t('you')}</span>}
                  </button>
                ))}
              </div>
            </div>

            {selectedPlayer !== null && !showConfirm && (
              <button 
                className="btn btn-primary btn-large"
                onClick={() => setShowConfirm(true)}
              >
                {t('confirmVote')} {players[selectedPlayer]}
              </button>
            )}

            {showConfirm && (
              <div className="card confirm-card">
                <h4>⚠️ {t('confirmVoteTitle')}</h4>
                <p>{t('votingFor')} <strong>{players[selectedPlayer]}</strong></p>
                <div className="confirm-buttons">
                  <button className="btn btn-secondary" onClick={() => setShowConfirm(false)}>
                    {t('changeVote')}
                  </button>
                  <button className="btn btn-danger" onClick={handleVote}>
                    {t('confirm')}
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="card waiting-card">
            <h3>✅ {t('youVoted')}</h3>
            <p>{t('passDevice')}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Voting;
