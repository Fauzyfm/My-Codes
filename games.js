var tanya = true;
 while (tanya) {   
    // menentukan pilihan player
    var p = prompt('Pilih yang anda inginkan : Batu, Gunting, Kertas');

    // menentukan pilihan komputer
    var comp = Math.random();

    if ( comp < 0.34) {
        comp = 'Batu';
    } else if ( comp >= 0.34 && comp < 0.64) {
        comp = 'Gunting';
    } else {
        comp = 'Kertas';
    }

    //rules permainan
    var hasil = '';
    if ( p == comp) {
        hasil = 'SERI!';
    } else if (p == 'Batu'){
        if (comp == 'Gunting') {
            hasil = 'MENANG!';
        } else {
            hasil = 'KALAH!';
        }
    } else if (p == 'Gunting'){
        if (comp == 'Kertas') {
            hasil = 'MENANG!';
        } else {
            hasil = 'KALAH!';
        }
    } else if (p == 'Kertas'){
        if (comp == 'Batu') {
            hasil = 'MENANG!';
        } else {
            hasil = 'KALAH!';
        }
    } else {
        hasil = alert('pilihan kamu tidak tersedia!');
    }

    //hasil dari permainan
    alert('Computer memililh : ' + comp + '\nKamu memilih : ' + p + '\nHasilnya Kamu : ' + hasil);


    tanya = confirm('Main lagi?');

 }

 alert('Terimakasih sudah bermain');