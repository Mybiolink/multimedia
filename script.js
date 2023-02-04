const countdown = setInterval(function() {

    const tanggal = new Date('januar 01, 2023 00:00:00');
    const sekarang = new Date().getTime();
    const selisih = tanggal - sekarang;

    const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
    const jam = Math.floor(selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    const menit = Math.floor(selisih % (1000 * 60 * 60) / (1000 * 60));
    const detik = Math.floor(selisih % (1000 * 60) / 1000);



    console.log(hari);
    console.log(jam);
    console.log(menit);
    console.log(detik);

    const main = document.getElementById('main');
    main.innerHTML = 'Countdown <br> ' + hari + ' hari ' + jam + ' jam ' + menit + ' menit ' + detik + 'detik';


}, 1000)