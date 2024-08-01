document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('video');

    // URL do seu stream MPEG-TS
    var mpegTsUrl = 'http://15.235.15.230:14492/';

    if (Hls.isSupported()) {
        var hls = new Hls();
        hls.loadSource(mpegTsUrl);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, function() {
            video.play();
        });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = mpegTsUrl;
        video.addEventListener('loadedmetadata', function() {
            video.play();
        });
    } else {
        console.error('Seu navegador não suporta reprodução HLS.');
    }
});
