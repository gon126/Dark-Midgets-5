// File: assets.js
const assets = {
    audio: {},
    images: {},
    loaded: false,
};

const AUDIO_FILES = {
    backgroundMusic: 'Bloody Tears (Castlevania II).mp3',
    playerHurtSound: 'hitnoise.mp3',
    enemyHurtSound: 'hitnoise.mp3',
    shootSound: 'shoot.mp3',
    skeletonSound: 'Skeleton_hurt3.ogg',
    zombieSound: 'img_6228.mp3',
    ultimateYell: 'call-of-duty-zombie-yell-meme-sound-effect.mp3',
    levelUpSound: 'freesound_community-army-rank-up-2-84543.mp3',
    bossHitSound: 'hitnoise.mp3',
    bossDeathSound: 'street.mp3',
    enemyHitSound: 'hitnoise.mp3',
    level20ExitSound: 'vine-boom-bass-boost-sound-effect.mp3',
    nutSound: 'nut_ZKo5FA9.mp3',
};

// MAPPED TO YOUR UPLOADED IMAGES
const IMAGE_FILES = {
    berserker: 'basrker.png',   // The Yellow/Red box (note: filename has typo)
    warlock: 'warlock.png',     // Warlock class image
    ghost: 'ghost.png',         // Enemy image
};

function preloadAssets(onReady) {
    const audioKeys = Object.keys(AUDIO_FILES);
    const imageKeys = Object.keys(IMAGE_FILES);
    let loadedCount = 0;
    const totalAssets = audioKeys.length + imageKeys.length;

    const checkDone = () => {
        if (loadedCount === totalAssets) {
            assets.loaded = true;
            onReady();
        }
    };

    audioKeys.forEach(key => {
        const audio = new Audio(AUDIO_FILES[key]);
        audio.preload = 'auto';
        assets.audio[key] = audio;

        const finishLoad = () => {
            loadedCount += 1;
            checkDone();
        };

        audio.addEventListener('canplaythrough', finishLoad, { once: true });
        audio.addEventListener('error', finishLoad, { once: true });
        audio.load();
    });

    imageKeys.forEach(key => {
        const img = new Image();
        img.src = IMAGE_FILES[key];
        assets.images[key] = img;

        const finishLoad = () => {
            loadedCount += 1;
            checkDone();
        };

        img.addEventListener('load', finishLoad);
        img.addEventListener('error', finishLoad);
    });
}
