#!/usr/bin/env node

import { fileURLToPath } from "node:url";
import path from "node:path";
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const fileName = process.argv[2];
const content = fs.readFileSync(path.join(__dirname,fileName), 'utf-8');

// BEGIN
console.log(content)

const baseData = (arr) => {
  return arr.map((element) => {
    return {
      creature: element[0].trim(),
      strength: Number(element[1].trim()),
      health: Number(element[2].trim()),
      quantity: Number(element[3].trim()),
      height: Number(element[4].trim()),
      weight: Number(element[5].trim()),
      cost: Number(element[6].trim())
    }
  })
}

const makeDataArray = (data) => {
  const partsData = data.split('\r\n').slice(1).map((element) => {// will split rows by 'enter' and remove first row (captions);
      const a = element.split('|'); // will split row by '|'
      return a.filter((b) => b !== '') // return element if it's not '' 
  })
  for (let index = 0; index < partsData.length; index++) {
    const element = partsData[index];
    if(element.length === 0){
      partsData.splice(index)
    }
  }
  //console.log(partsData);
  return baseData(partsData);
};

const data = makeDataArray(content);
//console.log(data)
//question №1
console.log(`Всего видов существ: ${data.length}`);

const orderByStrengthDesc = data.map((creature) => creature).sort((a, b) => a.strength-b.strength).reverse();
//question №2
console.log(`Cтоимость найма 10 самых сильных существ (${orderByStrengthDesc[0].creature}): ${orderByStrengthDesc[0].cost * 10}`);
console.log(`Cтоимость найма 20 самых сильных существ (${orderByStrengthDesc[1].creature}): ${orderByStrengthDesc[1].cost * 20}`);

//question №3
const orderByWeightDesc = data.map((creature) => creature).sort((a, b) => a.weight-b.weight).reverse();
console.log(`Cамый толстый юнит cтоимость  (${orderByWeightDesc[0].creature}, ${orderByWeightDesc[0].quantity} в отряде): ${orderByWeightDesc[0].cost * orderByWeightDesc[0].quantity}`);

const orderByWeightAsc = data.map((creature) => creature).sort((a, b) => a.weight-b.weight);
console.log(`Cамый худой юнит cтоимость (${orderByWeightAsc[0].creature}, ${orderByWeightAsc[0].quantity} в отряде): ${orderByWeightAsc[0].cost * orderByWeightAsc[0].quantity}`);
//question №4
const orderByProfitDesc = data.map((creature) => creature).sort((a, b) => a.cost / a.power - b.cost / b.power);
console.log(`Юнит будет самым выгодным: ${orderByProfitDesc[0].creature}`);

const orderByProfitAsc = data.map((creature) => creature).sort((a, b) => a.cost / a.power - b.cost / b.power).reverse();
console.log(`Юнит будет самым невыгодным: ${orderByProfitAsc[0].creature}`);
//question №5
const maxBestCreaturesFor10000 = Math.floor(10000/orderByProfitDesc[0].cost);

console.log(`Лучшая армия за 10000: ${orderByProfitDesc[0].creature}, ${maxBestCreaturesFor10000} существ за ${orderByProfitDesc[0].cost * maxBestCreaturesFor10000}`);