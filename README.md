# college-test-2

Вам дана таблица существ в файле table.csv. Стоимость приводится за одно существо, а не за отряд.

1. выведите число сколько всего видов существ в этой таблице
2. выведите стоимость найма 10 самых сильных существ и 20 вторых по силе
3. Найдите самый толстый юнит и самый худой. Посчитайте стоимость найма отряда самых толстых и отряда самых худых.
4. Посчитайте, какой юнит будет самым невыгодным по соотношению цены и силы и самым выгодным
5. посчитайте, какую самую сильную армию мы можем нанять за 10000 (нужен показатель сила). То есть мы должны найти самую сильную армию из одного типа юнитов за определенные деньги. Посчитать какой у нас выходит стек на полученную стоимость и быть уверенными, что это стек самый лучший по соотношению силы и количества за наши деньги.



Пример запуска: node index.js table.csv


const showInfo = (dataContent) => {
  function baseData(arr) {
    return arr.map((element) => ({
      company: element[0].trim(),
      staff: element[1].trim(),
      Town: element[2].trim(),
      job: element[3].trim(),
      vacantion: element[4].trim(),
      pay: element[5].trim(),
      learn: element[6].trim(),
      treb: element[7].trim(),
    }));
  }

  const makeDataArray = (data) => {
    const partsData = data.split('\r\n').slice(1).map((element) => {
      const a = element.split(';');
      return a.filter((b) => b !== '');
    });
    for (let index = 0; index < partsData.length; index += 1) {
      const element = partsData[index];
      if (element.length === 0) {
        partsData.splice(index);
      }
    }
    // console.log(partsData);
    return baseData(partsData);
  };

  const data = makeDataArray(dataContent);

  // #1
  console.log(`Count: ${data.length}`);

  const listTowns = data.map((T) => T.Town + '');
  const TownSt = listTowns.toString();
  console.log(`Cities: ${TownSt} `);

  // return console.log(data);
};
export default showInfo;
