import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const tracks = [
    {
      id: 1,
      title: "Мой кайф",
      album: "NGG Singles",
      duration: "3:12",
      spotify: "https://open.spotify.com/artist/friendlythug52",
      apple: "https://music.apple.com",
      youtube: "https://www.youtube.com/watch?v=example"
    },
    {
      id: 2,
      title: "Районы",
      album: "NGG Singles",
      duration: "2:58",
      spotify: "https://open.spotify.com/artist/friendlythug52",
      apple: "https://music.apple.com",
      youtube: "https://www.youtube.com/watch?v=example"
    },
    {
      id: 3,
      title: "Не пара",
      album: "NGG Singles",
      duration: "3:24",
      spotify: "https://open.spotify.com/artist/friendlythug52",
      apple: "https://music.apple.com",
      youtube: "https://www.youtube.com/watch?v=example"
    },
    {
      id: 4,
      title: "52 улица",
      album: "NGG Singles",
      duration: "3:45",
      spotify: "https://open.spotify.com/artist/friendlythug52",
      apple: "https://music.apple.com",
      youtube: "https://www.youtube.com/watch?v=example"
    }
  ];

  const albums = [
    {
      id: 1,
      title: "NGG Микстейп",
      year: "2024",
      tracks: 8,
      cover: "https://placehold.co/300x300/1A1F2C/D4FF00?text=NGG"
    },
    {
      id: 2,
      title: "52 Район",
      year: "2023",
      tracks: 10,
      cover: "https://placehold.co/300x300/1A1F2C/FF6B00?text=52"
    },
    {
      id: 3,
      title: "Friendly Thug",
      year: "2022",
      tracks: 12,
      cover: "https://placehold.co/300x300/1A1F2C/9b87f5?text=FT"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div 
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, rgba(212, 255, 0, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 107, 0, 0.1) 0%, transparent 50%)"
        }}
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyMTIsIDI1NSwgMCwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
        
        <div className="relative z-10 text-center px-4">
          <div className="mb-8">
            <div className="inline-block px-6 py-2 bg-primary/20 border-2 border-primary rounded-lg mb-4">
              <span className="text-primary font-bold text-sm tracking-widest">РУССКИЙ РЭП • NGG</span>
            </div>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-bold mb-6 tracking-tight">
            <span className="text-primary drop-shadow-[0_0_30px_rgba(212,255,0,0.5)]">
              FRIENDLY
            </span>
            <br />
            <span className="text-secondary drop-shadow-[0_0_30px_rgba(255,107,0,0.5)]">
              THUG 52
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto font-medium">
            РУССКИЙ АРТИСТ • УЛИЧНАЯ КУЛЬТУРА • РЕАЛЬНЫЕ ИСТОРИИ
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 rounded-full shadow-lg shadow-primary/50 transition-all hover:scale-105"
            >
              <Icon name="Play" className="mr-2" size={24} />
              СЛУШАТЬ СЕЙЧАС
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-bold text-lg px-8 py-6 rounded-full transition-all hover:scale-105"
            >
              <Icon name="Music" className="mr-2" size={24} />
              ВСЕ АЛЬБОМЫ
            </Button>
          </div>
        </div>
      </div>

      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-1 w-20 bg-primary"></div>
            <h2 className="text-5xl md:text-6xl font-bold">ТРЕКИ</h2>
          </div>
          
          <div className="grid gap-4">
            {tracks.map((track, index) => (
              <Card 
                key={track.id} 
                className="bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-6">
                    <div className="text-4xl font-bold text-muted-foreground group-hover:text-primary transition-colors">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">
                        {track.title}
                      </h3>
                      <p className="text-muted-foreground">{track.album}</p>
                    </div>
                    
                    <div className="text-muted-foreground font-mono">
                      {track.duration}
                    </div>
                    
                    <div className="flex gap-3">
                      <Button
                        size="icon"
                        variant="outline"
                        className="rounded-full border-2 hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all"
                        asChild
                      >
                        <a href={track.spotify} target="_blank" rel="noopener noreferrer">
                          <Icon name="Music" size={20} />
                        </a>
                      </Button>
                      <Button
                        size="icon"
                        variant="outline"
                        className="rounded-full border-2 hover:bg-secondary hover:border-secondary hover:text-secondary-foreground transition-all"
                        asChild
                      >
                        <a href={track.apple} target="_blank" rel="noopener noreferrer">
                          <Icon name="Apple" size={20} />
                        </a>
                      </Button>
                      <Button
                        size="icon"
                        className="rounded-full bg-accent hover:bg-accent/80 transition-all hover:scale-110"
                      >
                        <Icon name="Play" size={20} />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-1 w-20 bg-secondary"></div>
            <h2 className="text-5xl md:text-6xl font-bold">АЛЬБОМЫ</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {albums.map((album) => (
              <Card 
                key={album.id}
                className="bg-card border-border hover:border-secondary transition-all duration-300 group overflow-hidden hover:shadow-2xl hover:shadow-secondary/20 cursor-pointer"
              >
                <div className="relative overflow-hidden aspect-square">
                  <img 
                    src={album.cover}
                    alt={album.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button 
                      size="lg"
                      className="rounded-full bg-primary hover:bg-primary/90 shadow-xl"
                    >
                      <Icon name="Play" size={32} />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-secondary transition-colors">
                    {album.title}
                  </h3>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <span className="font-mono">{album.year}</span>
                    <span>•</span>
                    <span>{album.tracks} треков</span>
                  </div>
                  <div className="flex gap-3 mt-4">
                    <Button
                      variant="outline"
                      className="flex-1 border-2 hover:bg-primary hover:border-primary hover:text-primary-foreground"
                    >
                      <Icon name="Music" size={16} className="mr-2" />
                      Spotify
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 border-2 hover:bg-secondary hover:border-secondary hover:text-secondary-foreground"
                    >
                      <Icon name="Apple" size={16} className="mr-2" />
                      Apple
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-1 w-20 bg-accent"></div>
            <h2 className="text-5xl md:text-6xl font-bold">О АРТИСТЕ</h2>
            <div className="h-1 w-20 bg-accent"></div>
          </div>
          
          <div className="mb-12">
            <div className="w-64 h-64 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-1 overflow-hidden">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/485d23c4-32ff-40bc-84e6-b3f0b3aa803f/files/073cf6f3-728e-48ab-a7ca-f785bdef4eee.jpg"
                  alt="Friendly Thug 52 NGG"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
            Friendly Thug 52 NGG — русский рэп-артист, представляющий уличную культуру и реальные истории. 
            Его музыка отражает жизнь районов, честные эмоции и настоящий вайб российских улиц. 
            Треки построены на живых битах и искренних текстах о том, что видит каждый день.
          </p>
          
          <div className="flex flex-wrap gap-6 justify-center items-center mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">30+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">ТРЕКОВ</div>
            </div>
            <div className="h-16 w-px bg-border"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">5M+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">ПРОСЛУШИВАНИЙ</div>
            </div>
            <div className="h-16 w-px bg-border"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">РОССИЯ</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">РАЙОН 52</div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-bold mb-2">
                <span className="text-primary">FRIENDLY</span> <span className="text-secondary">THUG 52</span>
              </h3>
              <p className="text-muted-foreground">© 2024 NGG Movement. Все права защищены.</p>
            </div>
            
            <div className="flex gap-4">
              <Button size="icon" variant="outline" className="rounded-full border-2 hover:bg-primary hover:border-primary">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full border-2 hover:bg-primary hover:border-primary">
                <Icon name="Twitter" size={20} />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full border-2 hover:bg-primary hover:border-primary">
                <Icon name="Youtube" size={20} />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full border-2 hover:bg-primary hover:border-primary">
                <Icon name="Music" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;