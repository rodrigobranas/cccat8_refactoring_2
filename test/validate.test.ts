import { validate } from "../src/v2/validate";

test("Deve validar o cpf válido que tem dígito maior de zero", function () {
	const isValid = validate("317.153.361-86");
	expect(isValid).toBeTruthy();
});

test("Deve validar o cpf com dígito zero no primeiro dígito", function () {
	const isValid = validate("198.454.187-08");
	expect(isValid).toBeTruthy();
});


test("Deve validar o cpf com dígito zero no segundo dígito", function () {
	const isValid = validate("147.085.437-60");
	expect(isValid).toBeTruthy();
});

test("Deve tentar validar o cpf com mais de 14 caracteres", function () {
	const isValid = validate("147.085.437-600");
	expect(isValid).toBeFalsy();
});

test("Deve validar o cpf com dígito zero no segundo dígito", function () {
	const isValid = validate("111.111.111-11");
	expect(isValid).toBeFalsy();
});

test("Deve validar o cpf com letras", function () {
	const isValid = validate("abc");
	expect(isValid).toBeFalsy();
});
