"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const kontainerData = document.getElementById("kontainerData");
const search = document.getElementById('search');
const nilaiRata2 = document.getElementById('nilaiRata2');
const siswa = [
    { name: "Alwahibi wafi",
        class: "A",
        score: 100 },
    { name: "Joko",
        class: "C",
        score: 89 },
    { name: "syifa",
        class: "B",
        score: 80 },
    { name: "marcel",
        class: "C",
        score: 88 },
    { name: "orinta",
        class: "B",
        score: 78 },
    { name: "aureliyu",
        class: "A",
        score: 85 },
    { name: "Rizky",
        class: "B",
        score: 80 },
    { name: "Prabu",
        class: "C",
        score: 73 },
    { name: "Hafiz",
        class: "B",
        score: 96 },
    { name: "Bahri",
        class: "E",
        score: 0 }
];
function renderData(dataSiswa) {
    const tampilanData = dataSiswa.map((item, index) => `
        <tr>
            <td class="judultable">${index + 1}</td>
            <td class="namasiswa">${item.name}</td>
            <td class="judultable">${item.class}</td>
            <td class="judultable">${item.score}</td>
        </tr>
    `).join('');
    kontainerData.innerHTML = tampilanData;
    if (dataSiswa.length > 0) {
        const totalScore = dataSiswa.reduce((total, item) => total + item.score, 0);
        const averageScore = totalScore / dataSiswa.length;
        nilaiRata2.innerHTML = `<h4>Rata-rata Nilai: ${averageScore.toFixed(2)}</h4>`;
    }
    else {
        nilaiRata2.innerHTML = `<h4>Rata-rata Nilai: 0</h4>`;
    }
}
search.addEventListener('input', function (event) {
    const target = event.target;
    const kataKunci = target.value.toLowerCase();
    const filteredSiswa = siswa.filter(item => {
        return item.name.toLowerCase().includes(kataKunci);
    });
    renderData(filteredSiswa);
});
renderData(siswa);
//# sourceMappingURL=index.js.map