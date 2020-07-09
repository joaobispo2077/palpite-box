
import { GoogleSpreadsheet } from 'google-spreadsheet';
// import credentials from '../../credentials.json'; Dev
import { fromBase64 } from '../../utils/base64.js'

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID);



export default async (req, res) => {
    try{
        //await doc.useServiceAccountAuth(credentials);
        await doc.useServiceAccountAuth({
            client_email: process.env.SHEET_CLIENT_EMAIL,
            private_key: fromBase64(process.env.SHEET_PRIVATE_KEY)
        });
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