// const data= 1 ou 0;
// const C1dependente= 1 ou 0;
// const C2dependente= 1 ou 0;
// const campo1 = (50.4 ou inteiro) 1 ou 0;
// const campo2 = (20.5 ou inteiro) 1 ou 0;

function getGrafico(campo1, C1dependente, campo2, C2dependente, data){
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
    return (graficoFinal);
}

function getDado(campo1, C1dependente, campo2, C2dependente, data){
    let graficoFinal='';
    if(((typeof campo1 == "string") || (typeof campo2 == "string")) && !data){
            if(typeof campo1 == "string" && typeof campo2 == "string"){
                graficoFinal= 'PieChart';
            }else if(C1dependente || C2dependente){
                graficoFinal= 'BarChart';
            }else{
                graficoFinal= 'AreaChart';
            }
            return graficoFinal;
    }else{
        return getGrafico(campo1, C1dependente, campo2, C2dependente, data);
    }
}

export {getGrafico, getDado}