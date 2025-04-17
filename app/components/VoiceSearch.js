'use client';

import { useState, useEffect } from 'react';
import { Mic, MicOff } from 'lucide-react';

export default function VoiceSearch({ onTranscript }) {
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SpeechRecognition) {
        const recognitionInstance = new SpeechRecognition();
        recognitionInstance.continuous = false;
        recognitionInstance.interimResults = false;
        
        recognitionInstance.onresult = (event) => {
          const transcript = event.results[0][0].transcript;
          onTranscript(transcript);
        };
        
        recognitionInstance.onerror = (event) => {
          console.error('Speech recognition error', event.error);
        };
        
        setRecognition(recognitionInstance);
      }
    }

    return () => {
      if (recognition) {
        recognition.stop();
      }
    };
  }, [onTranscript]);

  const toggleListening = () => {
    if (isListening) {
      recognition.stop();
      setIsListening(false);
    } else {
      recognition.start();
      setIsListening(true);
    }
  };

  return (
    <button 
      onClick={toggleListening}
      className={`p-2 rounded-full ${isListening ? 'bg-red-500 text-white' : 'bg-gray-200'}`}
      aria-label={isListening ? 'Stop listening' : 'Start voice search'}
    >
      {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
    </button>
  );
}