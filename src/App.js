import Button from '@mui/material/Button';
import React, { useState } from "react";
import { Component } from "react";
import { Chart } from "react-google-charts";
import logo from "./logo.svg";
import "./medicoes.css";
import { graficoFinal } from "./action/grafico";

    function Aplica() {
      const [options, setOptions] = useState({
        title: 'Gráfico de Pizza'
      })
      const [data, setData] = useState([
        ['Linguagens', 'Quantidade'],
        ['React', 100],
        ['Angula', 80],
        ['Vue', 50],
      ])
      return (
        <div className="App">
          <header className="App-header">
            <div className="container-logo">
            <p className='texto-header'>Suporte</p>
            <p className='texto-header'>Api</p>
            <div className='traco-pg'>

            </div>
            <p href="" className="texto-header-pg" >Página Inicial</p>
           <div className='texto-traco1'></div>
           
          <div class="logo-imagem">
          <img src={logo} className="App-logo" alt="logo" />
            </div>
            
            </div>
         
         
         
          </header>
            <div className="body">
            <div class="container-imagem_ampliada">
        <p class="texto_ampliada1"> 
        Os objetivos do estudo são propor e desenvolver a visualização de dados sobre Medidas Provisórias, aplicando conceitos computacionais para propor uma solução criativa e inovadora, tendo como foco o desenvolvimento de uma aplicação que incentive a participação cidadã na administração pública.
        </p>
        <div class="processamento_ampliado">
          <p class="texto_ampliada2">Onde nos baseamos?</p>
          <p class="texto_ampliada3">Entre no site oficial do governo para mais detalhes das medidas provisórias.</p>
          </div> 
            
        </div>

            <div>
              <Chart
                width={'500px'}
                height={'300px'}
                chartType={graficoFinal} 
                data={data}
                options={options}
              />
              
                   </div>
                  
                   </div>
          
        </div>
      );
    }
    



 export default Aplica;