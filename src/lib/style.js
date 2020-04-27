export default function style(obj, suffix = '') {
	const keys = Object.keys(obj);
	const l = keys.length;
	let s = '';
	for (let i = 0; i < l; i += 1) {
		s += `${keys[i]}:${obj[keys[i]]}${suffix};`;
	}
	return s;
}
