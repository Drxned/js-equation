<!--
function square_equation() {
  const a = document.square.square_a.value;
  const b = document.square.square_b.value;
  const c = document.square.square_c.value;
  const sol = document.getElementById("square_sol");

  const d = b * b - 4 * a * c;
  if ( d < 0 ) {
    alert = "<br>x<sub>1</sub> = ";
    alert += - b / ( 2 * a );
    alert += ", ";
    alert += Math.sqrt( -d ) / ( 2 * a );
    alert += ", x<sub>2</sub> = ";
    alert += - b / ( 2 * a);
    alert += ", ";
    alert += - Math.sqrt( -d ) / ( 2 * a );
    alert += ").";
  } else {
      if ( d == 0 ) {
        alert = "<br>x<sub>1</sub> = x<sub>2</sub> = ";
        alert += -b / ( 2 * a );
        alert += ".";
      } else {
        alert = "<br>x<sub>1</sub> = ";
        alert += -b / ( 2 * a ) - Math.sqrt( d ) / ( 2 * a );
        alert += ", x<sub>2</sub> = ";
        alert += -b / ( 2 * a ) + Math.sqrt( d ) / ( 2 * a );
        alert += ".";
      }
  }
   sol.innerHTML = alert;
}
-->