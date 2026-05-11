# Dark Midgets 5

A thrilling roguelike game where you choose your character class, face waves of enemies, and sacrifice your soul to gain power. Fast-paced action with strategic progression mechanics.

---

## 📋 Table of Contents

- [Quick Start](#quick-start)
- [How to Play](#how-to-play)
- [Character Classes](#character-classes)
- [Game Modes](#game-modes)
- [Metaprogression System](#metaprogression-system)
- [Controls & Mechanics](#controls--mechanics)
- [Tips & Strategies](#tips--strategies)
- [File Structure](#file-structure)
- [Requirements](#requirements)

---

## 🚀 Quick Start

### Online (Recommended)
The game is designed to run directly in your browser with no installation needed.

1. **Visit the Game**: Open `home.html` in a modern web browser (Chrome, Firefox, Safari, Edge)
2. **Enter Your Name**: Type your character's name
3. **Select Your Class**: Choose from 14 unique character classes with different playstyles
4. **Pick Difficulty**: Choose between Easy, Medium, or Hard
5. **Enable Hardcore (Optional)**: Activates permadeath for hardcore players
6. **Start Playing**: Click "Start Game"

### Local Installation
1. Download or clone this repository
2. Extract all files to a folder
3. Open `home.html` in your web browser
4. Play offline with no internet connection required

---

## 🎮 How to Play

### Basic Gameplay
- **Movement**: Use arrow keys or WASD to move around the screen
- **Shooting**: Click the mouse or press spacebar to fire at enemies
- **Survive**: Defeat waves of enemies to advance rounds
- **Collect Upgrades**: Pick up drops to enhance your stats
- **Manage Health**: Avoid enemy fire and use regeneration abilities strategically

### Game Flow
1. **Home Screen** (`home.html`): Configure your character and difficulty
2. **Game Session** (`game.html`): Battle through endless enemy waves
3. **Progression**: Survive longer rounds to earn higher scores
4. **Rewards**: Gain Soul currency and experience for future runs

---

## 🧙 Character Classes

Each class has unique stats and playstyles. Choose based on your preferred combat approach:

### Balanced Classes
- **Ranger** (Default)
  - The most balanced choice for new players
  - Well-rounded stats across all categories
  - Good for learning the game mechanics

- **Acolyte**
  - Balanced stats with passive health regeneration
  - Slight HP bonus for survivability
  - Great for learning resource management

### Aggressive Classes
- **Gunner**
  - Fast firing rate (excellent for crowd control)
  - Lower individual damage
  - Quick reload time keeps bullets flying
  - Perfect for players who prefer sustained damage

- **Sniper**
  - Extremely high damage per shot
  - Slow firing rate (long cooldown)
  - High bullet speed ensures accuracy
  - Requires precise timing and positioning

- **Revenant**
  - Very high damage and movement speed
  - Extremely low HP pool with no regeneration
  - High risk, high reward playstyle
  - For experienced players seeking a challenge

### Tank/Defensive Classes
- **Brawler**
  - High damage and health pool
  - Very slow movement and firing speed
  - Excellent for holding positions
  - Best for stationary combat style

- **Templar**
  - Highest health pool among standard classes
  - Moderate damage with slow fire rate
  - Defensive tank archetype
  - Prioritizes survival over offense

- **Paladin**
  - Highest base health regeneration
  - Very high max HP pool
  - Slowest movement speed
  - Ultimate defensive/support hybrid

### Speed/Agility Classes
- **Scout**
  - Highest movement speed for dodging
  - Decent fire rate with low damage
  - Perfect for hit-and-run tactics
  - Dodge-focused playstyle

- **Engineer**
  - Lowest damage output
  - Fastest fire rate in the game
  - Ideal for early-game upgrades
  - Best for rapid progression through better gear

### Special/Unique Classes
- **Berserker** ⚠️ (Under Construction)
  - Massive damage output
  - Agonizingly slow cooldown
  - Low max HP despite high damage
  - Experimental class (may have bugs)

- **Warlock**
  - Good damage with focus on life recovery
  - Substantial health regeneration
  - Balanced offense and defense
  - Excellent for sustainable damage

- **Summoner**
  - High HP and fast fire rate
  - Low individual damage
  - Relies on supporting abilities later
  - Future pets/debuff mechanics planned

- **Alchemist**
  - Drops corrosive flasks creating damaging zones
  - Excellent crowd control potential
  - Lingering area damage mechanics
  - Strategic placement-based combat

---

## 🎯 Game Modes

### Difficulty Levels

**Easy**
- Reduced enemy damage and health
- More lenient enemy spawning
- Perfect for learning the game
- Unlimited time to complete rounds

**Medium** (Default)
- Balanced challenge for most players
- Standard enemy difficulty
- Recommended starting difficulty
- Good progression pacing

**Hard**
- Increased enemy damage and health
- More aggressive spawning patterns
- For experienced players
- Significantly higher risk/reward

### Hardcore Mode
- **Permadeath**: One death ends your run permanently
- **Higher Rewards**: Soul currency multiplier for successful runs
- **Prestige Challenge**: Unlock special badges/cosmetics
- Enable in the checkbox before starting

---

## 💎 Metaprogression System

The game features persistent progression between runs:

### Soul Currency
- Earned after each game session
- Primary resource for permanent upgrades
- Awarded based on performance (round reached, enemies defeated)
- Spend 20 Soul per upgrade

### Permanent Buffs
**HP Buff** (+5% Max HP per purchase)
- Increases your maximum health pool across all future runs
- Scales with character selection
- Stacks indefinitely for sustained character growth

**Speed Buff** (+5% Movement Speed per purchase)
- Increases base movement speed permanently
- Helps with dodging and positioning
- Synergizes with high-mobility classes

### Prestige Tracking
- **Best Round**: Highest round number reached in any run
- **Soul Currency**: Available currency for spending on buffs
- **Total XP Earned**: Lifetime experience earned across all sessions
- **Perk Status**: Current buff levels displayed on home screen

### Strategic Progression
1. Earn Soul by surviving longer in gameplay
2. Return to home screen after death
3. Spend accumulated Soul on permanent buffs
4. Return to game with enhanced starting stats
5. Repeat to gradually build power

---

## 🎮 Controls & Mechanics

### Keyboard Controls
| Action | Keys |
|--------|------|
| Move Up | Arrow Up or W |
| Move Down | Arrow Down or S |
| Move Left | Arrow Left or A |
| Move Right | Arrow Right or D |
| Shoot/Fire | Spacebar or Left Click |
| Pause (if available) | P or ESC |

### Movement Mechanics
- Speed varies by class selection
- Affected by equipment upgrades
- Movement speed impacts dodging ability
- Affected by permanent buffs from metaprogression

### Combat System
- Click or press spacebar to fire projectiles
- Each class has unique fire rate (cooldown between shots)
- Bullet damage increases with upgrades and class selection
- Projectile speed varies by class
- Collision detection with enemies applies damage

### Enemy Mechanics
- Waves increase in difficulty each round
- Enemy count scales with progression
- Various enemy types with different behaviors
- Defeating enemies grants experience and drops

---

## 💡 Tips & Strategies

### For Beginners
1. **Start with Ranger**: Most balanced class for learning
2. **Choose Easy Mode**: Learn patterns without harsh penalties
3. **Stay Mobile**: Constant movement helps dodging
4. **Prioritize Upgrades**: Early damage increases are crucial
5. **Learn Enemy Patterns**: Watch enemy behavior to anticipate attacks

### Intermediate Tactics
1. **Class Synergies**: Choose classes matching your playstyle
2. **Position Control**: Use map boundaries to limit enemy angles
3. **Upgrade Priority**: Identify which stats matter most
4. **Resource Management**: Balance health/shield pickups
5. **Round Timing**: Know when waves spawn to prepare

### Advanced Strategies
1. **Corner Tactics**: Use corners for tactical advantages
2. **Cooldown Juggling**: Manage multiple ability cooldowns
3. **Damage Optimization**: Stack buffs for exponential growth
4. **Class Rotation**: Try all classes to master mechanics
5. **Hardcore Challenges**: Test your skills with permadeath

### General Tips
- **Audio Cues**: Listen for enemy spawn and hit sounds
- **Visual Tracking**: Keep eyes on projectile patterns
- **Upgrade Path**: Plan your progression strategically
- **Daily Runs**: Play multiple sessions to accumulate Soul
- **Experiment**: Try different class-difficulty combinations

---

## 📁 File Structure

```
Dark-Midgets-5/
├── home.html                          # Main menu & character selection
├── game.html                          # Core gameplay engine
├── assets.js                          # Game assets and resources
├── README.md                          # This file
│
├── Audio Files (Background Music & SFX)
│   ├── Bloody Tears (Castlevania II).mp3
│   ├── street.mp3
│   ├── Skeleton_hurt3.ogg
│   ├── ack.mp3
│   ├── call-of-duty-zombie-yell-meme-sound-effect.mp3
│   ├── freesound_community-army-rank-up-2-84543.mp3
│   ├── hitnoise.mp3
│   ├── hotline-miami-punch.mp3
│   ├── img_6228.mp3
│   ├── nut_ZKo5FA9.mp3
│   ├── smash-desk.mp3
│   └── vine-boom-bass-boost-sound-effect.mp3
│
└── Graphics (Character Sprites & Images)
    ├── basrker.png                    # Brawler character sprite
    ├── ghost.png                      # Ghost/Summoner sprite
    └── warlock.png                    # Warlock character sprite
```

### Key Files Explained

**home.html**
- Entry point for the game
- Character class selection UI
- Difficulty and mode selection
- Metaprogression display
- Handles game initialization and parameter passing

**game.html**
- Complete game engine implementation
- Rendering and game loop
- Enemy spawning and collision detection
- Health and upgrade tracking
- End-of-run calculations and saving progress

**assets.js**
- Audio asset definitions
- Sprite asset definitions
- Preloaded media references
- Used by game.html to access resources

---

## ⚙️ Requirements

### System Requirements
- **Browser**: Modern web browser (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- **RAM**: 100MB+ available
- **Processor**: Any modern CPU (game is lightweight)
- **Internet**: Not required (works offline)

### Browser Features Required
- HTML5 Canvas support
- JavaScript ES6+ support
- LocalStorage API (for saving progress)
- Audio support (for sound effects and music)

### Recommended Specifications
- 1920x1080 display or higher
- 60 FPS capable display
- Sound/headphone output for best experience
- Mouse for precise aiming (keyboard works but less precise)

### Supported Browsers
✅ Google Chrome / Chromium (Best Performance)
✅ Mozilla Firefox (Good Performance)
✅ Microsoft Edge (Good Performance)
✅ Safari (Good Performance)
⚠️ Opera (Should work but untested)

---

## 🎨 Features

### Gameplay Features
- 14 unique character classes with distinct playstyles
- 3 difficulty modes scaling from beginner to hardcore
- Roguelike progression with endless enemy waves
- Real-time action combat system
- Dynamic enemy spawning and variety

### Progression Systems
- Persistent soul currency metaprogression
- Permanent HP and movement speed buffs
- Round tracking for leaderboard potential
- Total XP tracking across all runs
- Per-run statistics and rewards

### Technical Features
- Smooth 60 FPS gameplay
- Responsive keyboard and mouse controls
- LocalStorage-based save system
- Cross-browser compatibility
- Optimized for low system requirements

### Audio & Visuals
- Immersive background music
- Sound effects for combat feedback
- Dark atmospheric aesthetic
- Character-specific sprite artwork
- Glowing UI elements with cyberpunk styling

---

## 🐛 Known Issues

- **Berserker Class**: Currently under construction, may have balance issues
- **Save Data**: Progress only saves if LocalStorage is enabled
- **Performance**: Very old browsers (IE11 and below) not supported

---

## 🎮 Enjoy the Game!

Choose your character, embrace the darkness, and prove your worth in **Dark Midgets 5**. Will you conquer the endless waves or sacrifice your soul to the game?

**Happy gaming!** 🎯
