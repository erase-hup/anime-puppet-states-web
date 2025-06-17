
import React from 'react';
import StateCard from '@/components/StateCard';
import FloatingStars from '@/components/FloatingStars';
import { Sparkles, Star, Zap } from 'lucide-react';

const animeStates = [
  {
    name: "Nakamura Eyaleti",
    character: "Sailor Moon",
    description: "Ay ışığının gücüyle korunan büyülü eyalet. Kristal saraylar ve mistik ormanlarla dolu.",
    anime: "Sailor Moon",
    color: "#FF6B9D",
    emoji: "🌙"
  },
  {
    name: "Uzumaki Cumhuriyeti",
    character: "Naruto Uzumaki",
    description: "Ninja köyleri ve ramen dükkanlarıyla ünlü. Gizli sanatların öğretildiği akademiler bulunur.",
    anime: "Naruto",
    color: "#FFE66D",
    emoji: "🍜"
  },
  {
    name: "Saiyan Federasyonu",
    character: "Goku",
    description: "Süper güçlü savaşçıların yaşadığı eyalet. Dövüş turnuvaları ve antrenman kampları.",
    anime: "Dragon Ball",
    color: "#FF8C42",
    emoji: "⚡"
  },
  {
    name: "Eldian İmparatorluğu",
    character: "Eren Yeager",
    description: "Dev duvarlarla çevrili şehirler. Kahraman askerlerin yetiştiği askeri akademiler.",
    anime: "Attack on Titan",
    color: "#8B5FBF",
    emoji: "🏰"
  },
  {
    name: "Karasuno Bölgesi",
    character: "Hinata Shoyo",
    description: "Voleybol turnuvalarının merkezi. Spor salonları ve antrenman sahalarıyla dolu.",
    anime: "Haikyuu!!",
    color: "#4ECDC4",
    emoji: "🏐"
  },
  {
    name: "Demon Slayer Vadisi",
    character: "Tanjiro Kamado",
    description: "Demon avcılarının eğitim aldığı dağlık bölge. Nefes teknikleri öğretilen dojo'lar.",
    anime: "Demon Slayer",
    color: "#FF6B6B",
    emoji: "⚔️"
  },
  {
    name: "UA Akademi Şehri",
    character: "Izuku Midoriya",
    description: "Süper kahraman akademisinin bulunduğu modern şehir. Quirk geliştirme merkezleri.",
    anime: "My Hero Academia",
    color: "#00F5FF",
    emoji: "🦸"
  },
  {
    name: "Soul Society",
    character: "Ichigo Kurosaki",
    description: "Ruh dünyasının kapılarının açıldığı mistik eyalet. Zanpakuto atölyelerıyla ünlü.",
    anime: "Bleach",
    color: "#9B59B6",
    emoji: "👻"
  },
  {
    name: "Fairy Tail Gildleri",
    character: "Natsu Dragneel",
    description: "Sihir gildlerinin merkezi. Ateş ejderhalarının uçtuğu büyülü diyarlar.",
    anime: "Fairy Tail",
    color: "#E74C3C",
    emoji: "🔥"
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
          PARALEL EVREN
        </h1>
        
        <h2 className="text-2xl md:text-3xl lg:text-4xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-anime-purple to-anime-blue">
          Kukla Eyaletleri
        </h2>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Anime karakterlerinin hükmettiği büyülü eyaletleri keşfedin. 
          Her eyalet farklı bir anime evreninden ilham alır ve kendine özgü kültürü vardır.
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
              Anime Eyaletlerini Keşfet
            </h3>
            <p className="text-muted-foreground text-lg">
              9 benzersiz eyalet, 9 farklı anime evreni
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
            🌟 Paralel Evren'de her eyalet farklı bir anime macerası sunuyor 🌟
          </p>
          <div className="flex justify-center gap-6 text-sm text-anime-neon">
            <span>✨ Büyülü Dünyalar</span>
            <span>🎌 Japon Kültürü</span>
            <span>⚡ Anime Gücü</span>
            <span>🌙 Fantezi Diyarları</span>
          </div>
          
          <div className="mt-6 text-xs text-muted-foreground">
            Paralel Evren © 2024 - Anime ile güçlendirilmiştir
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
