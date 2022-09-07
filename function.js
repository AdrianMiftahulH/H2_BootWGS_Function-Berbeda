const readline = require('readline');
const fs = require('fs');
const { resolve } = require('path');
const { rejects } = require('assert');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Jika tidak ada folder data
if (!fs.existsSync("./data")) {
    // maka buat folder tersebut
    fs.mkdirSync("./data");
}
// jika tidak ada file di dalam folder data
if (!fs.existsSync("./data/contacts.json")) {
    // maka buat file 
    fs.writeFileSync('./data/contacts.json', "[]");
}


//Buat variabel ask dan function dengan parameter nanya
const ask = (nanya) => {
    //Membuat Promise 
    return new Promise((resolve, reject) => {
        // Menambahkan pertanyaan dengan parameter nanya dan membuat f dengan parameter jawaban
        rl.question(nanya, (jawaban) => {
            // Bila Promisenya resolve akan mengambil parameter jawaban
            resolve(jawaban);
        });
    });
};

// Buat variabel main dengan f async


// Menyimpan Data
const saveData = (nama, noTlpn, email) => {
    const contact = { nama, noTlpn, email };
    const file = fs.readFileSync('data/contacts.json', 'utf-8');
    // mengambil string JSON dan mengubah menjadi objek js
    const contacts = JSON.parse(file);
    contacts.push(contact);
    // Membuat data di file contacts.json
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
    // Output ke terminal sesuai jawaban di pertanyaan
    console.log(`Terima Kasih`);
    // Keluar dari rl
    rl.close();
}


module.exports = { ask, saveData };