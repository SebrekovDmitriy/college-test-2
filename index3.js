import _ from "lodash"

export default (content) => {
const data = content.split('\n').slice(2);
const rows = data.map((row) => row.split('|')
	.map((element) => element.trim())
	.filter((element) => element));
	console.log(`Count: ${rows.length}`);
	
	const galaxies = rows.map((row) => row[1]);
	const iniqGalaxies = _.uniq(galaxies).sort();
	console.log(`Galaxies: ${uniqGalaxies.join(', ')}`);
	const distances = rows.map((row) => Number(row[4]));
	const closestToEarth = Math.min(...distances);
	const farestFromEarth = Math.max(...distances);
	
	const stars = rows.map((row) => row[0]);
	const closestIndex = distances.indexOf(closestToEarth);
	console.log(`Closest to Earth: ${stars[closestIndex]} in ${galaxies[closestIndex]} galaxy`);
	
	
	}
