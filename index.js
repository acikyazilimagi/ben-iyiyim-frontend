console.log("index.js loaded")

const sheetId = '1yqTvnhsOXRJ723Dn0vg3p9wkgBP3RrWAVvCAujxXTFI';
const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
const sheetName = 'yanit';
const qu = 'Select *'
const query = encodeURIComponent(qu)
const url = `${base}&sheet=${sheetName}&tq=${query}`

document.addEventListener('DOMContentLoaded', init)

function init() {
  fetch(url)
    .then(res => res.text())
    .then(rep => {
      const jsonData = JSON.parse(rep.substring(47).slice(0, -2));
      console.log(jsonData.table)
    })
}
