const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    loop: 'all',
    volume: 0.7,
    mutex: true,
    lrcType: 3,
    audio: [
        {
            name: 'You',
            artist: '雪野五月',
            url: 'http://music.163.com/song/media/outer/url?id=672188.mp3',
            cover: 'http://p1.music.126.net/KQvKhAx7nOKlgGP5MvOiDw==/561850441805463.jpg?param=130y130',
            lrc: 'https://lav2.top/music/lrc/You.lrc'
        },
    ]
});
