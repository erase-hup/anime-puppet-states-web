
import React from 'react';
import StateCard from '@/components/StateCard';
import FloatingStars from '@/components/FloatingStars';
import { Sparkles, Star, Zap } from 'lucide-react';

const animeStates = [
  {
    name: "Israel",
    character: "Sailor Moon",
    description: "One step you are in Middle-East. POA",
    anime: "Sailor Moon",
    color: "#FF6B9D",
    emoji: "🌙"
  },
  {
    name: "Saudi Arabia",
    character: "Naruto Uzumaki",
    description: "Money Mom. POA",
    anime: "Naruto",
    color: "#FFE66D",
    emoji: "🍜"
  },
  {
    name: "United Arab Emirates",
    character: "Goku",
    description: "Listen mom. POA",
    anime: "Dragon Ball",
    color: "#FF8C42",
    emoji: "⚡"
  },
  {
    name: "North of Iraq",
    character: "Eren Yeager",
    description: "Primitive Kurds Association. POA",
    anime: "Attack on Titan",
    color: "#8B5FBF",
    emoji: "🔥"
  },
  {
    name: "Greece",
    character: "Hinata Shoyo",
    description: "Greeks. POA",
    anime: "Haikyuu!!",
    color: "#4ECDC4",
    emoji: "🏰"
  },
  {
    name: "France",
    character: "Tanjiro Kamado",
    description: "Aujourd'hui. Semi-POA",
    anime: "Demon Slayer",
    color: "#FF6B6B",
    emoji: "🏐"
  },
  {
    name: "England",
    character: "Izuku Midoriya",
    description: "Not UK. POA",
    anime: "My Hero Academia",
    color: "#00F5FF",
    emoji: "⚔️"
  },
  {
    name: "Guetamala",
    character: "Ichigo Kurosaki",
    description: "Is it actually a country?. POA",
    anime: "Bleach",
    color: "#9B59B6",
    emoji: "👻"
  },
  {
    name: "Jordan",
    character: "Natsu Dragneel",
    description: "Pity Jordan. POA",
    anime: "Fairy Tail",
    color: "#E74C3C",
    emoji: "🎌"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <FloatingStars />
      
      {/* Header */}
      <header className="relative z-10 text-center py-12 px-4">
        <div className="flex justify-center items-center gap-4 mb-6">
          <Sparkles className="text-anime-pink animate-spin text-3xl" />
          <Star className="text-anime-neon animate-pulse text-4xl" />
          <Zap className="text-anime-yellow animate-bounce text-3xl" />
        </div>
        
        <h1 className="anime-title text-4xl md:text-6xl lg:text-7xl mb-4 animate-neon-pulse">
          PUPPET COUNTRIES
        </h1>
        
        <h2 className="text-2xl md:text-3xl lg:text-4xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-anime-purple to-anime-blue">
          POA(Puppet of America)
        </h2>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          
        </p>
        
        <div className="mt-8 flex justify-center">
          <div className="w-32 h-1 bg-gradient-to-r from-anime-pink via-anime-neon to-anime-purple rounded-full animate-pulse" />
        </div>
      </header>

      {/* States Grid */}
      <main className="relative z-10 px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-anime-neon to-anime-pink">
              Wanna see puppet show?
            </h3>
            <p className="text-muted-foreground text-lg">
              All puppets we have. It will go more.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {animeStates.map((state, index) => (
              <div 
                key={state.name}
                className="animate-fade-in"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'both'
                }}
              >
                <StateCard {...state} />
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 text-center py-8 px-4 border-t border-anime-purple/30">
        <div className="max-w-4xl mx-auto">
          <p className="text-muted-foreground mb-4">
            🌟 Google will enslave all of you. Antitrust Law 🌟
          </p>
          <div className="flex justify-center gap-6 text-sm text-anime-neon">
            <span>✨ Shows</span>
            <span>🎌 Dreams</span>
            <span>⚡ Razzle</span>
            <span>🌙 Dazzle</span>
          </div>
          
          <div className="mt-6 text-xs text-muted-foreground">
            Puppet Show * 2025
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
