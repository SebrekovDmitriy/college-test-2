#!/usr/bin/env node

import { fileURLToPath } from "node:url";
import path from "node:path";
import fs from 'fs';
import { info } from "node:console";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const fileName = process.argv[2];
const content = fs.readFileSync(path.join(
  __dirname,
  fileName
), 'utf-8');

// BEGIN
console.log(content)
// END

//Обрабатываем входные данные
const dataBase = (contentBase) => {
  const resultBase = [];
  const nameHeading = parser(contentBase);
  console.log(nameHeading);
  //nameHeading.map((nameColumn) => resultBase.push[nameColumn]);
  const newNameColumn = {};
  for (const nameColumn of nameHeading) {
    
    newNameColumn[nameColumn] = null;
  
    //resultBase.push(newNameColumn);
  }
  const newEntity =  _.cloneDeep(newNameColumn);
  const clearDate = 

  resultBase.push(newNameColumn);
  const infoBase = content;
  return resultBase;
};
//Парсер для строки
const parser = (stringBase) => {
  const resultString = stringBase.split('|', 8); //Получаем массив из 1 строки 
  resultString.shift();//Удаляем пробел в начале
 
  return resultString.map((string) => string.trim());//Возвращаем массив, предварительно удалив из него лишние пробелы
   
};

console.log(dataBase(content));
