const xmlSaveService = require('../services/XmlSaveService');

async function saveXml(req, res) {
  try {
    const { editedData, newKey } = req.body;

    // Chame o serviço para salvar os dados editados e obter o XML atualizado
    const updatedXml = await xmlSaveService.saveXml(editedData, newKey);

    // Envie o XML atualizado para o frontend
    res.setHeader('Content-Disposition', 'attachment; filename=updated.xml');
    res.type('text/xml');
    res.send(updatedXml);
  } catch (error) {
    console.error('Error saving XML:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  saveXml,
};
