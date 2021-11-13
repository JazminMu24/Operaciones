console.log('Opciones:\n', '1.Suma\n', '2.Resta\n', '3.Multiplicación\n', '4.División\n', '5.Raíz cuadrada\n', '6.Fórmula general\n', '7.Binomio cuadrado perfecto');
	
	var opcion = prompt('Opcion: ');

	switch (opcion) {
		case '1':
		var vUno = parseFloat(prompt('Valor 1: '));
		var vDos = parseFloat(prompt('Valor 2: '));
		function suma (a,b) {
			return a + b;
		}
		var resul = suma(vUno, vDos);
		console.log(`El resultado de la suma es: ${resul} `);
		break
		case '2':
		var vUno = prompt('Valor 1: ');
		var vDos = prompt('Valor 2: ');
		function resta (a,b) {
            return a - b;
		}		
		var resul = resta(vUno, vDos);
		console.log(`El resultado de la resta es: ${resul}`);
		break
		case '3':
		var vUno = prompt('Valor 1: ');
		var vDos = prompt('Valor 2: ');
		function multi (a,b){
		return a*b;
		}
		var resul = multi(vUno, vDos);
		console.log(`El resultado de la multiplicación es: ${resul}`);
		break
		case '4':
		var vUno = prompt('Dividendo: ');
		var vDos = prompt('Divisor: ');
		function div (a,b){
		return a/b;
	    }
	    var resul = div(vUno, vDos);
		console.log(`El resultado de la división es: ${resul.toFixed(2)}`);
		break
		case '5':
		var valor = prompt('Valor: ');
		function raiz (a){
		return Math.sqrt(a);
	    }
	    var resul = raiz(valor);
		console.log(`La raiz cuadrada es: ${resul.toFixed(2)}`);
		break
		case '6':
		var a = parseInt(prompt('Valor de a: '));
		var b = parseInt(prompt('Valor de b: '));
		var c = parseInt(prompt('Valor de c: '));
		
		var d = -1*b;
		var e = Math.pow(b,2);
		var f = 4*a*c;
		var g = e - f;
		var h = Math.sqrt(g);
	    var i = 2*a;
        var j = d + h;
	    var k = d - h;
		
		var resul1 = j/i;
		var resul2 = k/i;
		console.log(`Primer resultado: ${resul1.toFixed(2)}\n Segundo resultado: ${resul2.toFixed(2)}`);
		break
		case '7':
		var vUno = prompt('Primer valor: ');
		var vDos = prompt('Segundo valor: ');
		function paso_1 (a) {
		return Math.pow(a,2);
        }
        function paso_2 (a,b) {
        return 2*a*b;
        }
		function paso_3 (b){
		return Math.pow(b,2);
	    }
	    var pro_1 = paso_1(vUno);
	    var pro_2 = paso_2(vUno, vDos);
	    var pro_3 = paso_3(vDos);
		console.log(`Binomio cuadrado perfecto:${pro_1}a^2 + ${pro_2}ab + ${pro_3}b^2`);
		break
		default:
		console.log('Opción no existente');
		break
	}