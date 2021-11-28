//Se necesita vender los pasajes de un colectivo. El colectivo tiene 20 filas de 3
//butacas cada uno
//Por convención se pone un 0 en el asiento libre y un 1 en el ya vendido.
//Cuando los pasajes se ponen a la venta están todos los asientos libres
//Cuando una persona quiere comprar se muestra los lugares desocupados y se le
// asigna un asiento elegido por el pasajero
let fila:any[]=new Array(2);
let cantidad:number;
cantidad=0;
let asientovendidos:number[]=new Array(cantidad);
let asientosdisponibles:number;
asientosdisponibles=0;
let avendidos:number;
avendidos=1;
fila[0]=[1,2,3]
fila[1]=[4,5,6]
fila[2]=[7,8,9]
fila[3]=[10,11,12]
fila[4]=[13,14,15]
fila[5]=[16,17,18]
fila[6]=[19,20,21]
fila[7]=[22,23,24]
fila[8]=[25,26,27]
fila[9]=[28,29,30]
fila[10]=[31,32,33]
fila[11]=[34,35,36]
fila[12]=[37,38,39]
fila[13]=[40,41,42]
fila[14]=[43,44,45]
fila[15]=[46,47,48]
fila[16]=[49,50,51]
fila[17]=[52,53,54]
fila[18]=[55,56,57]
fila[19]=[58,59,60]
cantidad=Number(prompt("Ingresa la cantidad de asientos que quieres comprar"));
for (let ind = 0; ind < cantidad; ind++) {
asientovendidos[ind]=Number(prompt("Ingresa el nùmero del asiento que quieras reservar"));
    for (let index = 0; index < fila.length; index++) {
      for (let i = 0; i < fila[index].length; i++) {
        
        if (asientovendidos[ind]===fila[index][i]) {
          console.log(` asiento reservado  ${fila[index][i]}`);
          avendidos=1
          console.log(avendidos)
          
     
        }else if(asientovendidos[ind]!==fila[index][i]){
          console.log(` asiento disponible  ${fila[index][i]}`);
          asientosdisponibles=0
          console.log(asientosdisponibles);
         
        }

    }
  }
  }
