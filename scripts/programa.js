
/* Generador de celdas */

document.getElementById('addButton').addEventListener('click', function() {
    var table = document.querySelector('.my-table');
    var newRow = document.createElement('tr');
    newRow.innerHTML = '<td><input type="text" placeholder="tipo de deuda" name="tipo de deuda" id="deuda1"><td><input type="text" placeholder="monto de deuda" name="monto de deuda " id="monto1"></td>';
    table.appendChild(newRow);
  });

/* funcion paa sumar todas las celdas de monto de deuda */
function sumarMontosDeuda() {
    var tabla1 = document.querySelector('.my-table');
    var filasTabla1 = tabla1.getElementsByTagName('tr');
    var total = 0;
  
    for (var i = 1; i < filasTabla1.length; i++) { 
      var celdas = filasTabla1[i].getElementsByTagName('td');
      var montoDeuda = parseFloat(celdas[1].querySelector('input').value);
  
      if (!isNaN(montoDeuda)) {
        total += montoDeuda;
      }
    }
  
    var tabla2 = document.querySelector('.my-table2');
    var celdaTotal = tabla2.querySelector('tr:nth-child(2) td:nth-child(2) input');
    celdaTotal.value = total;
  
    return total;
  }
  
/* recomendacion de plan */

function generarPrograma() {
  const ingresos = parseFloat(document.getElementById('ingresos').value);
  const totalDeuda = parseFloat(document.getElementById('totalDeuda').value);

  const porcentajeIngresoDeuda = (totalDeuda / ingresos) * 100;

  let programaRecomendado = '';

  if (porcentajeIngresoDeuda <= 50) {
    programaRecomendado = 'Programa 1: 50/30/20 (50% para gastos, 30% para otros consumos, 20% para ahorrar)';
  } else if (porcentajeIngresoDeuda <= 60) {
    programaRecomendado = 'Programa 2: 60/20/20 (60% para gastos, 20% para otros consumos, 20% para ahorrar)';
  } else {
    programaRecomendado = 'Programa 3: 90/10 (90% para gastos, 10% para ahorrar)';
  } 


  document.getElementById('plan-consejo').value = programaRecomendado;
}
