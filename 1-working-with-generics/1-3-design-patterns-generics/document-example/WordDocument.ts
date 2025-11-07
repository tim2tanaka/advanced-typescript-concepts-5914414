import { Document } from "./Document";

export class WordDocument implements Document {
  content =  "";
  name = "Text document";
  postfix = "docx";
  printContent(): string {
    console.log(`Reading the Word doc: ${this.content}`);
    return `Reading document: ${this.name}`;
  }
}
