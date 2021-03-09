module.exports = function check(str, bracketsConfig) {
  let s;
  str = str.replace(/[^{}[\]()(12)(34)(56)(77)(88)(||)]/g, '');
  while (s != str) {
    s = str;
    str = str.replace(/{}|\[]|\(\)|12|34|56|77|88|\|\|/g, '')
    }
  return !str;
  }



