
import { GoogleSpreadsheet } from 'google-spreadsheet';
import credentials from '../../credentials.json';

const doc = new GoogleSpreadsheet('1AWQOhZjwzKgbK8QZP3PtgR8HnQBe-juf0Hg--t22uII');

export default async (req, res) => {
    try{
        await doc.useServiceAccountAuth(credentials);
        await doc.loadInfo()
        console.log(doc.title);
        
        const sheet = doc.sheetsByIndex[2];

        await sheet.loadCells('A2:B2');

        console.log(sheet.title);

        const mostrarPromocao = sheet.getCell(1, 0);
        console.log(mostrarPromocao.value);

        const texto = sheet.getCell(1, 1);
        
        res.end(JSON.stringify({
            showCupom: mostrarPromocao.value === 'VERDADEIRO',
            message: texto.value
        }))

    } catch (err) {
        res.end(JSON.stringify({
            showCupom: false,
            message: 'banana'
        }))
    }

}