import { GoogleSpreadsheet } from 'google-spreadsheet';
import credentials from '../../credentials.json';

const doc = new GoogleSpreadsheet('1AWQOhZjwzKgbK8QZP3PtgR8HnQBe-juf0Hg--t22uII');

export default async(req, res) => {

    try{
        await doc.useServiceAccountAuth(credentials);
        await doc.loadInfo();

        const sheet = doc.sheetsByIndex[1];        
        const data = JSON.parse(req.body);
        console.log(data);              
        console.log(sheet.title);

        const sheetConfig = doc.sheetsByIndex[2];                       
        await sheetConfig.loadCells('A2:B2');    

        // console.log(sheetConfig.title);
        
                
        const mostrarPromocao = sheetConfig.getCell(1, 0);
        console.log(mostrarPromocao.value);
        

        const texto = sheetConfig.getCell(1, 1);

        console.log(texto.value);
        
    

        let Cupom = '';
        let Promo = '';

        if (mostrarPromocao.value === "VERDADEIRO") {
            Cupom = 'temp'
            Promo = texto.value
        }
      
        await sheet.addRow({
            Nome: data.Nome,
            Email: data.Email,
            Whatsapp: data.Whatsapp,
            Cupom,
            Promo,
            Sugestao: data.Sugestao,
            Nota: data.Nota,
            Recomendar: data.Recomendar,
        });
        res.end(req.body);

    } catch (err){
        console.log(err);
        
        res.end('error')
    }
}