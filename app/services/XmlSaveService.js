const fs = require('fs').promises;
const xml2js = require('xml2js');

async function saveXml(editedData, newKey) {
  try {
    // Lógica para transformar os dados editados de volta para XML
    const xmlBuilder = new xml2js.Builder({
        render: {
            indent: true,
            newline: '\n',
            spacebeforeslash: '',
            xmldec: {
                version: '1.0',
                encoding: 'UTF-8',
            },
        },
        headless: false,
    });

    // Lógica para transformar os dados editados de volta para XML
    const updatedXml = xmlBuilder.buildObject(editedData);

    // Salve o XML atualizado em um arquivo (pode ser em memória ou no sistema de arquivos)
    // Neste exemplo, estamos salvando no sistema de arquivos com o nome 'updated.xml'
    const filePath = 'path/to/updated.xml';
    await fs.writeFile(filePath, updatedXml);

    return updatedXml;
  } catch (error) {
    console.error('Error saving XML:', error);
    throw error;
  }
}

module.exports = {
  saveXml,
};
