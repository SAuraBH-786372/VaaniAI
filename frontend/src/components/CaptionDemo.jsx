import React, { useState, useEffect } from 'react';
import { Play, Pause, Volume2, Settings, HelpCircle, RotateCcw, BookOpen, Zap, ChevronRight } from 'lucide-react';
import { mockCaptionData } from '../mock';

const CaptionDemo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [captionMode, setCaptionMode] = useState('easy');
  const [showGlossary, setShowGlossary] = useState(false);
  const [selectedTerm, setSelectedTerm] = useState(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [showModeComparison, setShowModeComparison] = useState(false);

  // Simulate video playback
  useEffect(() => {
    let interval;
    if (isPlaying && currentTime < 35) {
      interval = setInterval(() => {
        setCurrentTime(prev => {
          const newTime = prev + 1;
          
          // Check for quiz triggers
          const quiz = mockCaptionData.quizQuestions.find(q => q.timestamp === newTime);
          if (quiz && !showQuiz) {
            setIsPlaying(false);
            setCurrentQuiz(quiz);
            setShowQuiz(true);
          }
          
          return newTime;
        });
      }, 1000);
    } else if (currentTime >= 35) {
      setIsPlaying(false);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentTime, showQuiz]);

  const getCurrentCaption = () => {
    const captions = mockCaptionData.captions[captionMode];
    return captions.find(caption => 
      currentTime >= caption.start && currentTime < caption.end
    );
  };

  const handleGlossaryClick = (term) => {
    setSelectedTerm(mockCaptionData.glossaryTerms[term]);
    setShowGlossary(true);
  };

  const handleQuizAnswer = (selectedOption) => {
    const isCorrect = selectedOption === currentQuiz.correctAnswer;
    // Create a more interactive feedback system
    const feedback = document.createElement('div');
    feedback.className = `fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 p-6 rounded-2xl shadow-2xl backdrop-blur-sm transition-all duration-500 ${
      isCorrect ? 'bg-green-100 border-2 border-green-300 text-green-800' : 'bg-red-100 border-2 border-red-300 text-red-800'
    }`;
    feedback.innerHTML = `
      <div class="text-center">
        <div class="text-3xl mb-2">${isCorrect ? '✅' : '❌'}</div>
        <div class="font-semibold mb-2">${isCorrect ? 'Correct!' : 'Not quite right'}</div>
        <div class="text-sm">${currentQuiz.explanation}</div>
      </div>
    `;
    document.body.appendChild(feedback);
    
    setTimeout(() => {
      document.body.removeChild(feedback);
      setShowQuiz(false);
      setCurrentQuiz(null);
      setIsPlaying(true);
    }, 3000);
  };

  const resetDemo = () => {
    setCurrentTime(0);
    setIsPlaying(false);
    setShowQuiz(false);
    setCurrentQuiz(null);
  };

  const currentCaption = getCurrentCaption();

  return (
    <section id="demo" className="section-padding bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-green-500/30 dark:bg-green-500/30 dark:border-green-500/40">
            <Zap className="w-4 h-4 text-green-400 dark:text-green-300" />
            <span className="text-sm font-semibold text-green-300 dark:text-green-200">Interactive Experience</span>
          </div>
          
          <h2 className="heading-2 mb-6 text-gray-900 dark:text-white">
            Experience Smart Captions
            <br />
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              In Real-Time Action
            </span>
          </h2>
          <p className="body-large max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            Try our interactive demo featuring adaptive caption modes, smart glossary, 
            and learning features with authentic educational content. See the difference AI makes.
          </p>
        </div>

        {/* Demo Player Container */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
            {/* Video Area */}
            <div className="relative aspect-video bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 dark:from-gray-800 dark:via-gray-900 dark:to-black flex items-center justify-center">
              {/* Video Background */}
              <div className="absolute inset-0">
                <div className="w-full h-full bg-gradient-to-br from-blue-200/30 via-purple-200/30 to-green-200/30 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-green-900/20"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0%,transparent_50%)] dark:bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_50%)]" ></div>
              </div>
              
              {/* Placeholder Video Content */}
              <div className="relative text-center text-gray-800 dark:text-white z-10">
                <div className="w-32 h-32 bg-gray-800/10 dark:bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 mx-auto border border-gray-800/20 dark:border-white/20">
                  <span className="text-5xl">🎓</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Machine Learning Lecture</h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg">{mockCaptionData.videoTitle}</p>
                
                {/* Progress Indicator */}
                <div className="mt-6 flex items-center justify-center space-x-2">
                  <div className="text-sm text-gray-500 dark:text-gray-400">Demo Progress:</div>
                  <div className="w-32 h-2 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-green-400 to-emerald-500 transition-all duration-300"
                      style={{ width: `${(currentTime / 35) * 100}%` }}
                    ></div>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{Math.floor(currentTime / 35 * 100)}%</div>
                </div>
              </div>
              
              {/* Enhanced Caption Overlay */}
              {currentCaption && (
                <div className="caption-overlay">
                  <div className="flex items-start space-x-3">
                    <div 
                      className={`w-3 h-3 rounded-full flex-shrink-0 mt-2 speaker-${currentCaption.speakerId}`}
                      style={{ backgroundColor: currentCaption.speakerId === 1 ? 'var(--speaker-1)' : 'var(--speaker-2)' }}
                    ></div>
                    <div className="flex-1">
                      <span className={`font-bold speaker-${currentCaption.speakerId} block mb-1`}>
                        {currentCaption.speaker}
                      </span>
                      <span 
                        className="block leading-relaxed"
                        dangerouslySetInnerHTML={{
                          __html: currentCaption.text.replace(
                            /<span class='glossary-word' data-term='([^']+)'>([^<]+)<\/span>/g,
                            (match, term, word) => 
                              `<span class='glossary-word' data-term='${term}'>${word}</span>`
                          )
                        }}
                        onClick={(e) => {
                          if (e.target.classList.contains('glossary-word')) {
                            const term = e.target.getAttribute('data-term');
                            if (term) handleGlossaryClick(term);
                          }
                        }}
                      />
                    </div>
                  </div>
                  
                  {/* Caption Mode Indicator */}
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${
                        captionMode === 'easy' ? 'bg-green-400' : 
                        captionMode === 'medium' ? 'bg-yellow-400' : 'bg-blue-400'
                      }`}></div>
                      <span className="text-xs text-gray-400 dark:text-gray-300 capitalize">{captionMode} Mode</span>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {currentCaption.keyTerms?.length} key terms
                    </div>
                  </div>
                </div>
              )}
              
              {/* Play Button Overlay */}
              {!isPlaying && (
                <button 
                  onClick={() => setIsPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-all duration-300 group"
                >
                  <div className="w-24 h-24 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 shadow-2xl border border-white/20">
                    <Play className="w-10 h-10 text-gray-800 ml-1" />
                  </div>
                </button>
              )}
            </div>
            
            {/* Enhanced Controls */}
            <div className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 p-6">
              {/* Progress Bar */}
              <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-3 mb-6 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-green-400 to-emerald-500 h-full rounded-full transition-all duration-300 shadow-lg"
                  style={{ width: `${(currentTime / 35) * 100}%` }}
                ></div>
              </div>
              
              {/* Control Buttons */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <button 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="text-gray-800 dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-all duration-300 hover:scale-110"
                  >
                    {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8" />}
                  </button>
                  
                  <button 
                    onClick={resetDemo}
                    className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <RotateCcw className="w-6 h-6" />
                  </button>
                  
                  <button className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-all duration-300 hover:scale-110">
                    <Volume2 className="w-6 h-6" />
                  </button>
                  
                  <span className="text-gray-800 dark:text-white text-lg font-mono">
                    {Math.floor(currentTime / 60)}:{(currentTime % 60).toString().padStart(2, '0')} / 0:35
                  </span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <button 
                    onClick={() => setShowModeComparison(!showModeComparison)}
                    className="text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-all duration-300 hover:scale-110"
                  >
                    <Settings className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Caption Mode Controls */}
          <div className="mt-8 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="heading-3 flex items-center space-x-2">
                <span>Smart Caption Modes</span>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              </h3>
              <button 
                onClick={() => setShowGlossary(true)}
                className="btn-secondary flex items-center space-x-2 px-6 py-3"
              >
                <BookOpen className="w-4 h-4" />
                <span>Smart Glossary</span>
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {['easy', 'medium', 'verbatim'].map((mode) => {
                const isActive = captionMode === mode;
                const colors = {
                  easy: 'from-green-500 to-emerald-600',
                  medium: 'from-yellow-500 to-orange-500',
                  verbatim: 'from-blue-500 to-purple-600'
                };
                
                return (
                  <button
                    key={mode}
                    onClick={() => setCaptionMode(mode)}
                    className={`relative p-6 rounded-2xl transition-all duration-300 border-2 ${
                      isActive 
                        ? 'bg-gradient-to-br ' + colors[mode] + ' text-white border-transparent shadow-2xl scale-105' 
                        : 'bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 hover:shadow-lg hover:scale-102'
                    }`}
                  >
                    <div className="text-center">
                      <div className="text-2xl mb-2">
                        {mode === 'easy' && '😊'}
                        {mode === 'medium' && '📝'}
                        {mode === 'verbatim' && '📜'}
                      </div>
                      <div className={`font-semibold text-lg capitalize mb-1 ${
                        isActive ? 'text-white' : 'text-gray-800 dark:text-gray-200'
                      }`}>
                        {mode}
                      </div>
                      <div className={`text-sm ${
                        isActive ? 'text-white/90' : 'text-gray-600 dark:text-gray-400'
                      }`}>
                        {mode === 'easy' && 'Simplified, clear language'}
                        {mode === 'medium' && 'Balanced complexity'}
                        {mode === 'verbatim' && 'Full technical accuracy'}
                      </div>
                    </div>
                    
                    {isActive && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
            
            {/* Mode Comparison */}
            {showModeComparison && (
              <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-600">
                <h4 className="font-semibold text-lg mb-4 flex items-center text-gray-800 dark:text-gray-200">
                  <HelpCircle className="w-5 h-5 mr-2 text-blue-500 dark:text-blue-400" />
                  Compare Caption Complexity
                </h4>
                
                <div className="space-y-4">
                  {currentCaption && Object.entries(mockCaptionData.captions).map(([mode, captions]) => {
                    const caption = captions.find(c => c.start <= currentTime && c.end > currentTime);
                    if (!caption) return null;
                    
                    return (
                      <div key={mode} className="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-600">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className={`w-3 h-3 rounded-full ${
                            mode === 'easy' ? 'bg-green-500' : 
                            mode === 'medium' ? 'bg-yellow-500' : 'bg-blue-500'
                          }`}></div>
                          <span className="font-medium capitalize text-gray-800 dark:text-gray-200">{mode} Mode</span>
                        </div>
                        <div className="text-sm text-gray-700 dark:text-gray-300" dangerouslySetInnerHTML={{ 
                          __html: caption.text.replace(/<[^>]*>/g, '')
                        }}></div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Enhanced Glossary Modal */}
      {showGlossary && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-3xl max-w-2xl w-full p-8 shadow-2xl border border-gray-200 dark:border-gray-700 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="heading-3 flex items-center space-x-2">
                <BookOpen className="w-6 h-6 text-green-600" />
                <span>Smart Glossary</span>
              </h3>
              <button 
                onClick={() => {
                  setShowGlossary(false);
                  setSelectedTerm(null);
                }}
                className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-2xl font-light hover:scale-110 transition-all duration-200"
              >
                ×
              </button>
            </div>
            
            {selectedTerm ? (
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 rounded-2xl p-6 border border-green-200 dark:border-green-700">
                  <h4 className="font-bold text-xl mb-3 text-green-800 dark:text-green-300 capitalize">
                    {Object.keys(mockCaptionData.glossaryTerms).find(key => mockCaptionData.glossaryTerms[key] === selectedTerm)}
                  </h4>
                  <p className="body-medium mb-4 text-green-700 dark:text-green-300">{selectedTerm.definition}</p>
                  
                  <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl p-4 border border-green-200 dark:border-green-700">
                    <div className="font-semibold text-green-800 dark:text-green-300 mb-2 flex items-center">
                      <span className="mr-2">💡</span>
                      Simple Explanation
                    </div>
                    <div className="text-green-700 dark:text-green-300">{selectedTerm.simpleDef}</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-2xl p-6 border border-blue-200 dark:border-blue-700">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-blue-800 dark:text-blue-300 mb-2">ISL Video Support</div>
                      <div className="text-blue-700 dark:text-blue-300 text-sm">Sign language demonstration coming soon</div>
                    </div>
                    <div className="text-3xl">🎥</div>
                  </div>
                </div>
                
                <button 
                  onClick={() => setSelectedTerm(null)}
                  className="btn-secondary w-full"
                >
                  Back to Glossary
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4">
                {Object.entries(mockCaptionData.glossaryTerms).map(([term, data]) => (
                  <button
                    key={term}
                    onClick={() => setSelectedTerm(data)}
                    className="text-left p-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 hover:from-green-50 hover:to-emerald-50 dark:hover:from-green-900/30 dark:hover:to-emerald-900/30 rounded-2xl transition-all duration-300 border border-gray-200 dark:border-gray-600 hover:border-green-300 dark:hover:border-green-600 hover:shadow-lg group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-lg capitalize text-gray-800 dark:text-gray-200 group-hover:text-green-800 dark:group-hover:text-green-300 transition-colors">
                          {term}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{data.simpleDef}</div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400 dark:text-gray-500 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors" />
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
      
      {/* Enhanced Quiz Modal */}
      {showQuiz && currentQuiz && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-3xl max-w-lg w-full p-8 shadow-2xl border border-gray-200 dark:border-gray-700">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/50 dark:to-indigo-900/50 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="heading-3 mb-3">Quick Learning Check</h3>
              <p className="body-medium text-gray-700 dark:text-gray-300">{currentQuiz.question}</p>
            </div>
            
            <div className="space-y-3">
              {currentQuiz.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleQuizAnswer(index)}
                  className="w-full text-left p-4 bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 hover:from-blue-50 hover:to-indigo-50 dark:hover:from-blue-900/30 dark:hover:to-indigo-900/30 rounded-xl transition-all duration-300 border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-md group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/50 dark:to-indigo-900/50 rounded-full flex items-center justify-center text-sm font-semibold text-blue-800 dark:text-blue-300 group-hover:from-blue-200 group-hover:to-indigo-200 dark:group-hover:from-blue-800/70 dark:group-hover:to-indigo-800/70 transition-all">
                      {String.fromCharCode(65 + index)}
                    </div>
                    <span className="text-gray-800 dark:text-gray-200 group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors">{option}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CaptionDemo;
