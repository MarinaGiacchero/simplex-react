const data= 0;
const C1dependente= 1;
const C2dependente= 1;
const campo1=50.4;
const campo2= 20.5;
let graficoFinal='';

var campo=campo1;

if(campo%2===0 && campo>=0){
if(data){
    graficoFinal= 'LineChart';
}else{
    campo=campo2;
    if(campo%2===0 && campo>=0){
        graficoFinal='PieChart';
    }else if(C2dependente){
        graficoFinal='BarChart';
    }else{
        graficoFinal='AreaChart'; //Gantt
    }
}
}else{
    if(C1dependente){
        if(C2dependente){
            graficoFinal= 'ScatterChart';
        }else{
            graficoFinal= 'LineChart';
        }
    }else{
        if(C2dependente){
            graficoFinal= 'LineChart';
        }else{
            graficoFinal= 'ScatterChart';
        }
    }
}

export {graficoFinal};