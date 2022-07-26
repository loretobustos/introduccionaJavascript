var dias= prompt("ingrese numero de dias: ,");
a= Math.floor(dias/365)
b= Math.floor((dias%365)/7)
c= dias-(a*365)-(b*7)
document.write("los dias ingresados corresponden a:", a,"año(s)",b,"semana(s) y", c,"dia(s)");
