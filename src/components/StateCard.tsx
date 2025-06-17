
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface StateCardProps {
  name: string;
  character: string;
  description: string;
  anime: string;
  color: string;
  emoji: string;
}

const StateCard: React.FC<StateCardProps> = ({ 
  name, 
  character, 
  description, 
  anime, 
  color, 
  emoji 
}) => {
  return (
    <Card className="anime-card group cursor-pointer overflow-hidden">
      <CardContent className="p-6">
        <div className="text-center mb-4">
          <div className="text-6xl mb-3 animate-anime-float group-hover:scale-110 transition-transform duration-300">
            {emoji}
          </div>
          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-anime-pink to-anime-neon mb-2">
            {name}
          </h3>
          <div className="text-anime-purple font-semibold mb-2">
            {character}
          </div>
          <div className="text-sm text-anime-blue opacity-75 mb-3">
            {anime}
          </div>
        </div>
        
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground leading-relaxed text-center">
            {description}
          </p>
          
          <div className="flex justify-center">
            <div 
              className="w-20 h-1 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: `linear-gradient(90deg, ${color}, #00F5FF)` }}
            />
          </div>
        </div>
        
        <div className="mt-4 text-center">
          <span className="inline-block px-3 py-1 bg-gradient-to-r from-anime-purple/20 to-anime-pink/20 rounded-full text-xs text-anime-neon border border-anime-neon/30">
            Paralel Evren
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default StateCard;
