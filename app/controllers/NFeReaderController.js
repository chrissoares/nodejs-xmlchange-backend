const nfeReaderFacade = require('../facades/NFeReaderFacade');
const path = require('path');

async function readXml(req, res) {
    try {
        if (!req.files || Object.keys(req.files).length === 0){
            return res
                .status(400)
                .json(
                    {
                        error: 'File XML not sended.'
                    }
                )
        }

        const xmlFile = req.files.xmlFile;
        const filePath = path.join(__dirname, '..', '..', 'path', 'uploads', xmlFile.name);
        
        // Move o arquivo para o filePath
        await xmlFile.mv(filePath);

        // Use o serviço para analisar o XML
        const result = await nfeReaderFacade.processXmlFile(filePath);
        console.log(result);
        res.json(result);
    } catch (error) {
        console.error('Error ao ler o XML:', error);
        res.status(500).json({error: 'Internal Server Error'}); 
    }
}

async function notImplemented(req, res){
    res.status(200).json({message: 'Method not implemented.'})
}

module.exports = {
    readXml,
    notImplemented,
};