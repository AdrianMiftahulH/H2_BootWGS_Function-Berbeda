
// ===== Task 3 =======
const { ask, saveData } = require('./function.js');

const main = async () => {
    // Menambahkan Variabel sesuai yang ingin di tanyakan
    const nama = await ask("Siapa nama kamu ? ");
    const noTlpn = await ask("No telepon ? ");
    const email = await ask("Akun email ? ");
    saveData(nama, noTlpn, email);
    // Mengeluarkan Output
    console.log(`Hai ${nama}, dengan no telepon ${noTlpn}, dengan email ${email}`);

}
main();