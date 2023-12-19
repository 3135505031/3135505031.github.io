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
            cover: 'http://p1.music.126.net/KQvKhAx7nOKlgGP5MvOiDw==/561850441805463.jpg',
            lrc: 'https://lav2.top/music/lrc/You.lrc'
        },
        {
            name: 'まよいづき',
            artist: 'onoken / 実咲',
            url: 'http://music.163.com/song/media/outer/url?id=1339750209.mp3',
            cover: 'http://p2.music.126.net/O8WlM4_YWnHfq7XiR-qpvw==/109951167961999495.jpg',
            lrc: 'https://lav2.top/music/lrc/まよいづき.lrc',
        },
        {
            name: 'Ahead of Us',
            artist: '小瀬村晶',
            url: 'http://music.163.com/song/media/outer/url?id=2029892284.mp3',
            cover: 'http://p1.music.126.net/FWGUSBkMRM1ZXWRFm3qcpg==/109951168466553622.jpg',
            lrc: 'https://lav2.top/music/lrc/Ahead of Us.lrc',
        },
        {
            name: 'あージンセーいそがし',
            artist: '美波',
            url: 'https://m10.music.126.net/20231219200230/1de5e412be7a8cd7321f9ac9f88634a4/ymusic/obj/w5zDlMODwrDDiGjCn8Ky/32238338903/27e7/a3b4/6ca2/033a89bc318f312989a3e06ea7842fdd.mp3',
            cover: 'http://p2.music.126.net/yp3u6HdA59MbxgxkKutLlw==/109951168481635953.jpg',
            lrc: '',
        },
        {
            name: 'garden',
            artist: '',
            url: 'https://m10.music.126.net/20231219202402/831b51f519f70ca85adf00ad6ef94acb/ymusic/obj/w5zDlMODwrDDiGjCn8Ky/32238359970/baf8/7cca/6bc6/ae8d69930f9736da05df82f1a13e4d9e.mp3',
            cover: 'http://p1.music.126.net/x6T6bl-B5cdMdt-6B7RycA==/109951168745032017.jpg',
            lrc: '',
        },
        {
            name: 'リセットなの。',
            artist: 'とあ / 可不',
            url: 'http://music.163.com/song/media/outer/url?id=2042620761.mp3',
            cover: 'http://p2.music.126.net/sow08JEIvl_FJ8axqVAZEw==/109951168571744892.jpg',
            lrc: 'https://lav2.top/music/lrc/リセットなの。.lrc',
        },
    ]
});
