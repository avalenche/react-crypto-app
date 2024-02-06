export  function percentDifference(n1, n2) {
  return +(100 * Math.abs((n1 - n2) / ((n1 + n2) / 2))).toFixed(2);
}
 
export  function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase()
}