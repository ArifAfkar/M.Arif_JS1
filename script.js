// if ... else & nested if

let dia = "tidak";

if (dia === "iya") {
    alert('kamu diterima');
} else {
    alert('kamu ditolak');
}


let pesan = "centang 2 biru";

if (pesan === "pending") {
    alert('sinyalmu bermasalah');
} else if (pesan === "centang 1") {
    alert('jaringan dia sedang tidak aktif');
} else if (pesan === "centang 2") {
    alert('mungkin dia sedang sibuk atau tidak sedang memegang handphone');
} else if (pesan === "centang 2 biru") {
    alert('mundur yo mundur');
} else {
    alert('coba chat dia dulu');
}

// switch case

let kondisi = prompt('masukkan salah kondisi kamu saat ini : senang, bahagia, murung, sedih, stress, & diputusin doi')

switch (kondisi) {
    case 'senang' :
        alert('tetaplah tersenyum');
        break;
    case 'bahagia' :
        alert('pertahankanlah kebahagianmu');
        break;
    case 'murung' :
        alert('cobalah tersenyum');
        break;
    case 'sedih' :
        alert('jangan berlarut-larut dalam kesedihan, cobalah hibur dirimu');
        break;
    case 'stress' :
        alert('kamu mungkin sedang mengalami masalah yang berat, cobalah tutup matamu sebentar dari dunia yang keras ini');
        break;
    case 'diputusin doi' :
        alert('udah tau pacaran itu haram, masih ada menolak fakta');
        break;
    default :
        alert('coba masukkan salah kondisi yang ada disini : senang, bahagia, murung, sedih, stress, & diputusin doi');
        break;
}

// for statement

for( let mencoba = 1; mencoba <= 10; mencoba++ ) {
    alert('usahamu yang ke ' + mencoba + ' sia-sia, sebaiknya berhenti saja')
}

// while & do while

let perjuangan = true;

while(perjuangan) {
    alert('Perjuanganmu sia-sia');
    perjuangan = confirm('Apakah kamu yakin masih mau memperjuangkan dia?')
}

let usahamu = 1;

do {
    alert('usahamu yang ke ' + usahamu + ' sia-sia, sudah saatnya kamu menyerah')
    usahamu++
} while (usahamu <= 10);

// function

function usaha(gaya, perpindahan) {
    return (gaya * perpindahan);
}

alert(usaha(1000, 0));