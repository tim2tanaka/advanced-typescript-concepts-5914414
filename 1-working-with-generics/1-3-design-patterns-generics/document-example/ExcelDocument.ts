import { Document } from "./Document";

export class ExcelDocument implements Document {
  content =  "";
  name = "Table document";
  postfix = "xlsx";
  printContent(): string {
    console.log(`Reading the Excel doc: ${this.content}`);
    return `Reading document: ${this.name}`;
  }
}
