function hasAllDigitsEqual (cpf: string) {
	const [firstDigit] = cpf;
	return cpf.split("").every(digit => digit === firstDigit)
}

function cleanCpf (cpf: string) {
	return cpf.replace(/\D/g, "");
}

function isValidLength (cpf: string) {
	return cpf.length === 11;
}

function extractDigit (cpf: string) {
	return cpf.slice(9);
}

function calculateDigit (cpf: string, factor: number) {
	let total = 0;
	for (const digit of cpf) {
		if (factor > 1) total += parseInt(digit) * factor--;
	}
	const rest = total%11;
	return (rest < 2) ? 0 : 11 - rest;
}

export function validate (cpf: string) {
	if (!cpf) return false;
	cpf = cleanCpf(cpf);
	if (!isValidLength(cpf)) return false;
	if (hasAllDigitsEqual(cpf)) return false;
	const digit1 = calculateDigit(cpf, 10);
	const digit2 = calculateDigit(cpf, 11); 
	const checkDigit = extractDigit(cpf);  
	const calculatedDigit = `${digit1}${digit2}`;
	return checkDigit == calculatedDigit;
}
