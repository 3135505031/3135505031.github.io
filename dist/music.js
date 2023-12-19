const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    loop: 'all',
    order: 'random',
    preload: 'auto',
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
        {
            name: 'まよいづき',
            artist: 'onoken / 実咲',
            url: 'http://music.163.com/song/media/outer/url?id=1339750209.mp3',
            cover: 'http://p2.music.126.net/O8WlM4_YWnHfq7XiR-qpvw==/109951167961999495.jpg?param=130y130',
            lrc: 'https://lav2.top/music/lrc/まよいづき.lrc',
        },
        {
            name: 'Ahead of Us',
            artist: '小瀬村晶',
            url: 'http://music.163.com/song/media/outer/url?id=2029892284.mp3',
            cover: 'http://p1.music.126.net/FWGUSBkMRM1ZXWRFm3qcpg==/109951168466553622.jpg?param=130y130',
            lrc: 'https://lav2.top/music/lrc/Ahead of Us.lrc',
        },
        {
            name: 'あージンセーいそがし',
            artist: '美波',
            url: 'https://lav2.top/music/lrc/あージンセーいそがし.mp3',
            cover: '',
            lrc: '',
        },
    ]
});
