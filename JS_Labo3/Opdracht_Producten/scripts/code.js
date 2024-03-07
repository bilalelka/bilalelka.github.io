const setup = () => {

    let btnHer = document.getElementById("btnHerbereken").addEventListener("click", bereken)



}

const bereken = () => {
    let totaal = 0;
    let rows = document.getElementsByTagName('tr');
    for (let i = 0; i < rows.length; i++) {
        let row = rows[i];
        let cells = row.getElementsByTagName('td');
        if (cells.length > 0) {
            let prijsCell = cells[1]; // Prijs cel is de tweede cel
            let aantalCell = cells[2]; // Aantal cel is de derde cel
            let btwCell = cells[3]; // BTW cel is de vierde cel
            let subtotaalCell = cells[4]; // Subtotaal cel is de vijfde cel

            let prijs = parseFloat(prijsCell.textContent.replace(' Eur', ''));
            let aantal = parseInt(aantalCell.children[0].value); // Aantal input is eerste child van de cel
            let btw = parseFloat(btwCell.textContent.replace('%', '')) / 100;


            let subtotaal = prijs * aantal * (1 + btw);

            subtotaalCell.textContent = subtotaal.toFixed(2) + ' Eur';

            totaal += subtotaal;
        }

    }
    document.getElementById('totaal').textContent = totaal.toFixed(2) + ' Eur';
}
window.addEventListener("load", setup);