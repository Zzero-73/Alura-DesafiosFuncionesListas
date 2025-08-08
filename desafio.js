


//Forma de realizaro #1

let Titulo = document.querySelector('h1');
Titulo.innerHTML = 'Hora del Desafio';


let parrafo = document.querySelector('p');
parrafo.innerHTML = 'A practicar los ejercicios';




//Desafio:Hora de prácticar
//#1
//recordar que el nombre de esta función de estar puesta en el código HTML"
function Saludo(){
    console.log('Hola Mundo 😊​👉');
}


//#2
function Nombre(){
    let nombre=prompt('Ingrese un nombre, por favor 😊​👉​');
    console.log('Hola, gracias por visitarnos ' + nombre);
}


//#3

function NumeroDoble(){
    let valor=parseInt(prompt('Ingrese un número, por favor 😊​👉​'));
    console.log(`Su número ingresado es: ${valor} su valor doble es ${valor*2}`);
}

//#4
function NumeroMayor(){
    let valor1=parseInt(prompt('Ingrese un 1er número, por favor 😊​✏️​​'));
    let valor2=parseInt(prompt('Ingrese un 2do número, por favor 😊​✏️​​'));
    if (valor1 > valor2){
        console.log(`Ingresados ${valor1} y ${valor2} // el mayor es: ${valor1}`);
    }
    else if(valor2 > valor1) {
        console.log(`Ingresados ${valor1} y ${valor2} // el mayor es: ${valor1}`);
    }else{
        console.log('Ambos números son iguales: ' +valor1 +' = ' + valor2);
    }
}

//5
function NumeroMultiplicado(){
    let valor=parseInt(prompt('Ingrese un número, por favor 🔢​'));
    console.log(`Ingresaste ${valor} y su valor multiplicado es: ${valor*valor}`);
}

//6
function MasaCorporal(){
    let Altura=prompt('Ingrese un la altura, por favor 🤯​');
    let Peso=prompt('Ingrese un el peso, de la persona ​🤯');
    Resultado = Peso / (Altura * Altura);
    console.log('Altura ingresada: ' + Altura);
    console.log('Peso ingresado: ' + Peso);
    console.log('La Masa Corporal es: ' + Resultado);
}

//6
function ValorFactorial(){
    let Valor=parseInt(prompt('Ingrese un número, por favor 🥸​'));
    let Resultado=1;
// Empezamos con 1, porque 0 anularía el resultado
     if (isNaN(Valor) || Valor <= 0 ) {
        console.log('Por favor ingresa un número entero positivo mayor a 0.');
        return;
    }
     // Bucle para calcular el factorial multiplicando hacia atrás
    while (Valor > 1){
        console.log(`'Multiplicando con el : ${Resultado} x ${Valor} = ${Resultado*Valor}`)
        Resultado = Resultado * Valor;
       Valor--; 
    }
    console.log('El número factorial es: ' + Resultado);
}

//7
function ValorConversion(){
    let Conversion=prompt('Ingrese un valor monetario, por favor 🤖💱');
    ADolares = 4.80;
    ASoles =  Conversion * ADolares;
    ABrasil = Conversion * ADolares;

    console.log('Costo del Dolar es ' + ADolares);
    console.log('En Soles PERU, ' + Conversion + ' equivale a : ' + ASoles);
    console.log('En Rales BRASIL,' + Conversion + ' equivale a : ' + ABrasil);
}

//8
function AreaPerimetroR(){
    let largoR=prompt('Ingrese el largo, por favor 🧐​');
    let anchoR=prompt('Ingrese el ancho, por favor ​🧐');
    areaR = largoR * anchoR
    perimetroR = 2 * (largoR + anchoR)
    console.log('El área es: ' + areaR);
    console.log('El perímetro es: ' + perimetroR);
}

//9
function AreaPerimetroC(){
    let radio=prompt('Ingrese el radio del circulo, por favor 🧐​');
    areaC =  3.14 * radio * radio
    perimetroC = 2 * 3.14 * radio
    console.log('El área es: ' + areaC);
    console.log('El perímetro es: ' + perimetroC);
}

//10 tabla de multiplicar
function TablaMultiplicar(){
    let Parametro=prompt('Ingrese un número a multiplicar, por favor 🧐​');
    let contador=1;
    while (contador <13){
        Resultado = contador * Parametro;
        console.log(`Tabla de multiplicar ${Parametro} x ${contador} = ${Resultado}`);
        contador++;
    }
}

//11 Lista vacía mostrada en consola
function LGenerica(){
let ListaGenerica=[];
console.log(ListaGenerica);
}



//12 crear lista
//Declarando variable afuera para usarlo en las demás funciones
let ListaLenguajesProgramacion=[];
function LenguajesProgramacion(){
    ListaLenguajesProgramacion=['JavaScript', 'C', 'C++', 'Kotlin','Python'];
    console.log(ListaLenguajesProgramacion);
}

//13 y 14 agregar más lenguajes
function AgregaProgramacion(){
    let AgregaProgramacion=['Java','Ruby','GoLang'];
    //Poner 3 puntos sucesivos esto tomara como adicionar más elementos a la lista
    ListaLenguajesProgramacion.push(...AgregaProgramacion);
    console.log(ListaLenguajesProgramacion);
}

//15
function OrdenInverso(){
    // con un -1 al final porque recuerda que en conteo tradicional es de 1, 2 y asi, pero
    // en arrays es de 0,1,2...... sucesvamente la cuenta
  CantidadLenguajesProgramacion = ListaLenguajesProgramacion.length - 1;

    while (CantidadLenguajesProgramacion>=0){
        console.log(ListaLenguajesProgramacion[CantidadLenguajesProgramacion]);
        CantidadLenguajesProgramacion--;
        
    }
}


// esta parte es para usarlo para los otros ejercicios
function inicialnumeros(){
    ListaNumeros=[12,8,9,15,20];
    ConteoNumeros=0;
}

// suma y promedio de los numeros
function SumaPromedio(){
    inicialnumeros();
    let SumaNumeros=0;
    while (ConteoNumeros<ListaNumeros.length){
        console.log('Nota: ' + ListaNumeros[ConteoNumeros]);
        SumaNumeros+=ListaNumeros[ConteoNumeros];
        ConteoNumeros++;
    }
        let PromedioNumeros= SumaNumeros/ListaNumeros.length;
     console.log('Suma Total: ' + SumaNumeros);
     console.log('Promedio: ' + PromedioNumeros);
}

//Numero mínimo y número máximo
function MinimoMaximo(){
    inicialnumeros();
    let NumeroMinimo=ListaNumeros[0];
    let NumeroMaximo=ListaNumeros[0];
    
    while (ConteoNumeros<ListaNumeros.length){
        if (ListaNumeros[ConteoNumeros] > NumeroMaximo){
             NumeroMaximo = ListaNumeros[ConteoNumeros];
        }
        if(ListaNumeros[ConteoNumeros] < NumeroMinimo){
            NumeroMinimo=ListaNumeros[ConteoNumeros];
        }
       ConteoNumeros++;
    }
    console.log('Número Mínimo es: ' + NumeroMinimo);
    console.log('Número Máximo es: ' + NumeroMaximo);
    }




    // Ingresar números de parte del usuario y luego los calculara las operaciones solicitadas en console.log 
let datos;

function inicialnumerosUsuario(){
    let ListaNumerosUsuario1=[];
    let ListaNumerosUsuario2=[];
    let ConteoNumeroUsuario=0;
    let ConteoSumaNumeroUsuario=0;
    let SumaNumeroUsuario=0;
    let CantidadListasusuario=0;
    let ListaSumaNumeros1y2=[]
    let SumaNumeros1y2=0;
    let CuadradoNumeroUsuario1=[];
    let CuadradoNumeroUsuario2=[];
    return { ListaNumerosUsuario1,ListaNumerosUsuario2,ConteoNumeroUsuario,
        ConteoSumaNumeroUsuario,SumaNumeroUsuario ,CantidadListasusuario,ListaSumaNumeros1y2,SumaNumeros1y2,CuadradoNumeroUsuario1,
    CuadradoNumeroUsuario2};
}

function  HabilitarBoton(){
    //Habilitamos la opción para buscar cualquier número ingresado en consola
            document.getElementById('Buscar').removeAttribute('disabled');
}


function IngresoCalculoNumerosUsuario()
{
   datos = inicialnumerosUsuario();
    

    //Preguntaremos si quiere 1 lista de números o 2 listas de números
    datos.CantidadListasusuario = parseInt(prompt('¿Ingresará 1 o 2 listas de números? ⁉️'));
    // validamos si es 1 o 2
    if (isNaN(datos.CantidadListasusuario) || datos.CantidadListasusuario <= 0) {
        alert('Por favor ingresar un número válido ❌');
          return ;
    }else if (datos.CantidadListasusuario==1){
        //Indicar cuantos números ingresaras
                let LimiteNumerosUsuario=parseInt(prompt('¿Cuantos Números desea ingresar? 🧮'));
                //Verificando que no esté en blanco o que sea menor a 0
                if (LimiteNumerosUsuario =='' || LimiteNumerosUsuario <= 0) {
                    alert('Por favor ingresar un número válido ❌');
                    return;
                }

                // Para agregar números de parte del usuario
                while(LimiteNumerosUsuario>datos.ConteoNumeroUsuario)
                    {
                        let NumerosUsuario1=parseInt(prompt(`✍️ El ${datos.ConteoNumeroUsuario+1} Número ingresar es:`));
                        if (NumerosUsuario1!='' || NumerosUsuario1>0){
                             datos.ListaNumerosUsuario1.push(NumerosUsuario1);
                            datos.CuadradoNumeroUsuario1.push(NumerosUsuario1*NumerosUsuario1);
                        }else{
                            alert('Por favor ingrese un número válido ❌');
                        }
                    datos.ConteoNumeroUsuario++;
                    }
                // Para Sumar los números agregados 
                while(LimiteNumerosUsuario>datos.ConteoSumaNumeroUsuario){
                    datos.SumaNumeroUsuario+=datos.ListaNumerosUsuario1[datos.ConteoSumaNumeroUsuario];
                    datos.ConteoSumaNumeroUsuario++;
                }
                    console.log(datos.ListaNumerosUsuario1);
                    console.log('La Suma de los números es: '+datos.SumaNumeroUsuario);
                    console.log('El Promedio resultante es: '+datos.SumaNumeroUsuario/LimiteNumerosUsuario);
                    console.log('El Cuadrado por número es: '+datos.CuadradoNumeroUsuario1);                    
                     //Hailitamos el botón de búsqueda porque ya tenemos datos
                    HabilitarBoton();
                    return;
    }
    else if (datos.CantidadListasusuario==2){
        //Indicar cuantos números ingresaras
                let LimiteNumerosUsuario=parseInt(prompt('¿Cuantos Números desea ingresar para ambas listas? 🧮'));
                //Verificando que no esté en blanco o que sea menor a 0
                if (LimiteNumerosUsuario =='' || LimiteNumerosUsuario <= 0) {
                    alert('Por favor ingresar un número válido ❌');
                    return;
                }
                //Números ingresados para la 1era lista y 2da lista conjuntamente
                // Para agregar números de parte del usuario
                while(LimiteNumerosUsuario>datos.ConteoNumeroUsuario)
                    {
                        let NumerosUsuario1=parseInt(prompt(`✍️ El ${datos.ConteoNumeroUsuario+1} número de "Lista 1" es:`));
                        let NumerosUsuario2=parseInt(prompt(`✍️ El ${datos.ConteoNumeroUsuario+1} número de "Lista 2" es:`));
                        //Validando que sean numeros mayores a 0
                        if (NumerosUsuario1!='' || NumerosUsuario1>0 || NumerosUsuario2!='' || NumerosUsuario2>0){
                            datos.ListaNumerosUsuario1.push(NumerosUsuario1);
                            datos.ListaNumerosUsuario2.push(NumerosUsuario2);
                            datos.CuadradoNumeroUsuario1.push(NumerosUsuario1*NumerosUsuario1);
                            datos.CuadradoNumeroUsuario2.push(NumerosUsuario2*NumerosUsuario2);
                        }else{
                            alert('Por favor ingrese un número válido ❌');
                        }
                    datos.ConteoNumeroUsuario++;
                    }
                // Para Sumar los números agregados 
                while(LimiteNumerosUsuario>datos.ConteoSumaNumeroUsuario){
                    datos.SumaNumeroUsuario=datos.ListaNumerosUsuario1[datos.ConteoSumaNumeroUsuario] + 
                    datos.ListaNumerosUsuario2[datos.ConteoSumaNumeroUsuario];
                    datos.ListaSumaNumeros1y2.push(datos.SumaNumeroUsuario);
                    datos.ConteoSumaNumeroUsuario++;
                }
                    //Para obtener el promedio los resultantes
                    let i=0;
                while(datos.ListaSumaNumeros1y2.length>i){
                    datos.SumaNumeros1y2+=datos.ListaSumaNumeros1y2[i];
                    i++;
                }
               // Mostrando los datos resultantes de las 2 listas
                    console.log(datos.ListaNumerosUsuario1);
                    console.log(datos.ListaNumerosUsuario2);
                    console.log('La Suma es en iguales indices es: '+datos.ListaSumaNumeros1y2)
                    console.log('El Promedio resultante es       : '+datos.SumaNumeros1y2/datos.ListaSumaNumeros1y2.length); 
                    console.log('Cuadrado por número "lista 1" es: '+datos.CuadradoNumeroUsuario1);
                    console.log('Cuadrado por número "lista 2" es: '+datos.CuadradoNumeroUsuario2);
                    
                     //Hailitamos el botón de búsqueda porque ya tenemos datos
                    HabilitarBoton();
                    return datos;
            } 
            return datos;
        }


//Buscar algún número ingresado sera una función intermedia para cuando la llamen con el boton BuscaNumero
function BuscarNumeroUsuario(datos){
    let NumeroBuscarUsuario = parseInt(prompt('¿Qué número desea buscar? ⁉️'));
    let ii = 0;
    let encontrado = false;

    while (datos.ListaNumerosUsuario1.length > ii) {
        if (datos.ListaNumerosUsuario1[ii] === NumeroBuscarUsuario) {
            console.log(`Tú N° ${NumeroBuscarUsuario} ✅ esta en la posición ${ii} de la "Lista 1"`);
            encontrado = true;
        } else if (datos.ListaNumerosUsuario2 && datos.ListaNumerosUsuario2[ii] === NumeroBuscarUsuario) {
            console.log(`Tú N° ${NumeroBuscarUsuario} ✅ esta en la posición ${ii} de la "Lista 2"`);
            encontrado = true;
        }
        ii++;
    }

    if (encontrado==false) {
        console.log('❌ Número no encontrado en ninguna lista');
    }

    // Deshabilita el botón después de buscar
    document.getElementById('Buscar').setAttribute('disabled', 'true');
}


//Aquí al presionarse el botón de búsqueda recibira toda la data de las 2 funciones anteriores
//la de ingreso de datos y la de BuscarNumeroUsuario(datos)
function BuscarNumero() {
    if (datos && datos.ListaNumerosUsuario1 || datos && datos.ListaNumerosUsuario2) {
        BuscarNumeroUsuario(datos);
    } else {
        alert('⚠️ Primero debe ingresar los datos con "Ingresa Calcula"');
    }
}