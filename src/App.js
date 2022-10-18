import Button from '@mui/material/Button';
import React, { useState } from "react";
import { Component } from "react";
import { Chart } from "react-google-charts";
import logo from "./logo.png";
import "./medicoes.css";
import { graficoFinal } from "./action/grafico";
import ReactDOM from 'react-dom';
  
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

      const [intervalo , setIntervalo] = useState('');

      const handleChange =(e)=>{
        setIntervalo(e.target.value);
      }
      const handleSubmit=(e)=>{
          alert('Foi atualizado as matérias.');
        e.preventDefault();
    
      }
      return (
    <div className="App">
      <header className="header">
        <div className="container-logo">
              
              <div className='traco-header'>
                <a href="#suporte" className='texto-header' >Suporte</a> 
                <div className='texto-traco1'></div>
              </div>
              <div className='traco-header'>
                <a href= "#apis" className='texto-header' >Api</a> 
                <div className='texto-traco1'></div>
              </div>
              <div className='traco-pg'>
                <a href="#top" className="texto-header-pg" >Página Inicial</a> 
                <div className='texto-traco1'></div>
              </div>

            <div class="logo-imagem" >
            <img src={logo} className="App-logo" alt="logo"/>
              </div>
        </div>
      </header>
        <div className="body">
          <div id="top" class="container_secao">
            <div>
              <div className='traco-vertical'></div>
              <p className='projeto-titulo'>SOBRE O PROJETO</p>
            </div>
            <p class="texto_ampliada1"> 
              Os objetivos do estudo são propor e desenvolver a visualização de dados sobre Medidas Provisórias, aplicando conceitos computacionais para propor uma solução criativa e inovadora, tendo como foco o desenvolvimento de uma aplicação que incentive a participação cidadã na administração pública.
            </p>
            <div class="processamento_ampliado">
              <p class="texto_ampliada2">Onde nos baseamos?</p>
              <p class="texto_ampliada3">Entre no site oficial do governo para mais detalhes das medidas provisórias.</p>
              <div  className='centralizar'>
                <Button variant="contained" href="https://legis.senado.leg.br/dadosabertos/docs/resource_MateriaService.html">Clique aqui</Button>
              </div>
            </div>   
          </div>

          <div id='apis' class="container-imagem_ampliada">
            <div>
              <div className='traco-vertical'></div>
              <p className='projeto-titulo'>API'S</p>
            </div>
            <div className='espacamento_grafico'>
              <p class="texto_ampliada1"> 
                Gráfico comparativo da quantidade de Medidas provisórias em tramitação e encerradas.
              </p>
              <div className='texto_Clique_alinhado'>
                <a className='texto_Clique_resultados' href="https://legis.senado.leg.br/dadosabertos/docs/resource_MateriaService.html">Clique aqui para utilizar a API.</a>
              </div>
            </div>
            <div class="processamento_ampliado">
              <div className='espaco-top'>
                <Chart className='grafico1'
                  chartType={graficoFinal} 
                  data={data}
                  options={options}
                />
              </div>
            </div> 

            <div class="container-graficos">
              <div className='espacamento_grafico'>
                <p class="texto_ampliada1"> 
                  Gráfico que apresenta a comparação da quantidade de Medidas provisórias criadas nos últimos anos de autoria do Presidente da República.
                </p>
                <div className='texto_Clique_alinhado'>
                  <a className='texto_Clique_resultados' href="https://legis.senado.leg.br/dadosabertos/docs/resource_MateriaService.html">Clique aqui para utilizar a API.</a>
                </div>
              </div> 
              <div class="processamento_ampliado">
                <div className='espaco-top'>
                  <Chart className='grafico1'
                    chartType={graficoFinal} 
                    data={data}
                    options={options}
                  />
                </div>
              </div>   
       
              <div className='espacamento_grafico'>
                <div className='espacamento_grafico2'>
                  <p class="texto_ampliada1"> 
                    Gráfico comparativo da quantidade de Medidas Provisórias criadas nos últimos anos.
                  </p>
                  <div className='texto_Clique_alinhado'>
                    <a className='texto_Clique_resultados' href="https://legis.senado.leg.br/dadosabertos/docs/resource_MateriaService.html">Clique aqui para utilizar a API.</a>
                  </div>
                </div> 
              </div>
              <div class="processamento_ampliado">
                <div className='espaco-top'>
                  <Chart className='grafico1'
                    chartType={graficoFinal} 
                    data={data}
                    options={options}
                  />
              
                </div>
              </div>   
              <div className='espacamento_grafico'>
                <p className='projeto-titulo'>Atualizar matérias</p>
                <form onSubmit={(e) => {handleSubmit(e)}}>
                  <div className='atualizar'>
                    <label for="intervalo" className='texto_ampliada2'>
                      Intervalo de matérias:
                    </label><br/>
                    <select id="intervalo" name="intervalo" className='atualizar-caixa'>
                      <option value={intervalo} required onChange={(e) => {handleChange(e)}}>0 a 1000</option>
                      <option value={intervalo} required onChange={(e) => {handleChange(e)}}>1001 a 2001</option>
                      <option value={intervalo} required onChange={(e) => {handleChange(e)}}>2002 a 3002</option>
                    </select>
                    <input type="submit" value="ATUALIZAR" className='atualizar-botao'/>
                  </div>
                </form>
              </div>

          
            </div>          
          </div>

          <div id="suporte" class="container_secao">
            <div>
              <div className='traco-vertical'></div>
              <p className='projeto-titulo'>SUPORTE</p>
            </div>
            <div className='espacamento_grafico'>
              <p class="texto_ampliada1"> 
                Você pode utilizar o formulário ao lado ou também entrar em contato conosco por meio de e-mail, entrando no site do projeto <a href="https://mgiacchero.wixsite.com/simplex"> SIMPLEX </a> e preenchendo as suas informações na aba "Contato".
              </p>
            </div>
            <div class="processamento_ampliado">
              <p class="texto_ampliada2">Feedback</p>
              <p class="texto_ampliada3">Nos dêe seu feedback do Simplex preenchendo o formulário.</p>
              <div  className='centralizar'>
                <Button variant="contained" href="https://docs.google.com/forms/d/e/1FAIpQLSdE6Ch4lpO321VOrM9D3-rN5XjoNAaAzZ0N1CxoF6ntj4f_IA/viewform">Clique aqui</Button>
              </div>
            </div>   
          </div>
          <div id="fim" className='fim'>

          </div>
          <footer class="cabeçalho_inferior">
            <div class="container-creditos">
                  <p class="Texto_dos_creditos">
                      Made by <a href="https://projetomagnoliaifs.wixsite.com/home" class="Texto_dos_creditos_destaque"> Projeto Magnólia </a>
                  </p>
            </div>
          </footer>
        </div>       
    </div>
      );
    }
 
 export default Aplica;