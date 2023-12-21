const xmlReaderService = require('../services/XmlReaderService');

async function processXmlFile(filePath) {
  try {
    const result = await xmlReaderService.parseXmlFromFile(filePath);

    return result;
  } catch (error) {
    console.error('Erro no NFeReaderFacade:', error);
    throw error;
  }
}

module.exports = {
  processXmlFile,
};
