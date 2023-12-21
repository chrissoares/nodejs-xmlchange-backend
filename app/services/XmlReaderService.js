const xml2js = require('xml2js');
const fs = require('fs').promises;

async function parseXmlFromFile(filePath) {
    try {
        const xmlData = await fs.readFile(filePath, 'utf-8');
        const result = await xml2js.parseStringPromise(xmlData);
        return result;
    } catch (error) {
        console.error('Erro ao analisar o XML:', error);
        throw error;
    }
}

async function convertToJson(filePath) {
    const xmlData = await fs.readFile(filePath, 'utf-8');
    const parser = new DOMParser();
    const xml = parser.parseFromString(xmlData, "application/xml");
    const obj = {};

  if (xml.nodeType === 1) {
    if (xml.attributes.length > 0) {
      obj["@attributes"] = {};
      for (let j = 0; j < xml.attributes.length; j++) {
        const attribute = xml.attributes.item(j);
        obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
      }
    }
  } else if (xml.nodeType === 3) {
    obj[text] = xml.nodeValue;
  }

  if (xml.hasChildNodes()) {
    for (let i = 0; i < xml.childNodes.length; i++) {
      const item = xml.childNodes.item(i);
      const nodeName = item.nodeName;

      if (typeof obj[nodeName] === "undefined") {
        obj[nodeName] = convertToJson(item);
      } else {
        if (typeof obj[nodeName].push === "undefined") {
          const old = obj[nodeName];
          obj[nodeName] = [];
          obj[nodeName].push(old);
        }
        obj[nodeName].push(convertToJson(item));
      }
    }
  }
  return obj;
}

module.exports = {
    parseXmlFromFile,
    convertToJson,
}