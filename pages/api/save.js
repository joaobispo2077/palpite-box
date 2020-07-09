import { GoogleSpreadsheet } from 'google-spreadsheet';
import credentials from '../../credentials.json';
import moment from 'moment';

const doc = new GoogleSpreadsheet('1AWQOhZjwzKgbK8QZP3PtgR8HnQBe-juf0Hg--t22uII');

const genCupom = () => {
   const code = parseInt(moment().format('YYMMDDHHmmssSSS')).toString(16).toUpperCase()
    return code.substr(0,4) + '-' + code.substr(4,4) + '-' + code.substr(8,4)
}  


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
            Cupom = genCupom()
            Promo = texto.value
        }
      
        await sheet.addRow({
            Nome: data.Nome,
            Email: data.Email,
            Whatsapp: data.Whatsapp,
            Cupom,
            Promo,
            Sugestao: data.Sugestao,
            Nota: parseInt(data.Nota),
            Recomendar: data.Recomendar,
            'Data Preenchimento': moment().format('MM/DD/YYYY HH:mm:ss')
        });
        res.end(JSON.stringify({
            showCupom: Cupom !== '',
            Cupom,
            Promo
        }));

    } catch (err){
        console.log(err);
        
        res.end('error')
    }
}