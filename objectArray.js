const mobil = [{
  brand: 'Mitsubishi',
  namaMobil: 'Lancer Evo X',
  tahun: 2008
},
{
  brand: 'Subaru',
  namaMobil: 'Impreza WRX',
  tahun: 2002
},
{
  brand: 'Citroen',
  namaMobil: 'Citroen C4',
  tahun: 2004
}
];

let a = prompt("Masukkan Nama Brand : ")
const brandMobil = mobil.filter((merk) => merk.brand === a);
console.log(brandMobil);