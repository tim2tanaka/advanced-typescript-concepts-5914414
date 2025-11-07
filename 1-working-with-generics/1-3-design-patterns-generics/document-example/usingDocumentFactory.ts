import { DocumentFactory } from './DocumentFactory';

const factory = new DocumentFactory();

const excelDoc = factory.createDocument('excel');
const wordDoc = factory.createDocument('word');

excelDoc.content = 'Excel Content';
wordDoc.content = 'Word Content';

excelDoc.printContent();
wordDoc.printContent();

try {
  const pdfDoc = factory.createDocument('pdf');
} catch (error) {
  console.log(error);
}