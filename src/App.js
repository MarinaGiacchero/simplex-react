import Button from '@mui/material/Button';
import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import logo from "./logo.png";
import "./medicoes.css";
import * as principal from "./action/grafico";
import axios from "axios";

    function Aplica() {

      const [data, setData] = useState([
        ['Autor', 'Quantidade'],
        ['Nenhum', 0],
        
      ])

      const [data2, setData2] = useState([
        ['nome', 'qtde'],
        ['Nenhum', 0],
        
      ])

      const [data3, setData3] = useState([
        ['nome', 'qtde'],
        ['Nenhum', 0],
        
      ])

      const [nome , setNome] = useState('');

      const [nome2 , setNome2] = useState('');

      const [nome3 , setNome3] = useState('');

       useEffect(() => {

        // Tempo para atualizar automaticamente
        var dezSegundos = 10000; // dez segundos em milissegundos
        var quinzeSegundos = 15000;
          function verificaHora() {
              var agora = new Date();
              var hoje = new Date(agora.getFullYear(), agora.getMonth(), agora.getDay());
              var msDesdeMeiaNoite = agora.getTime() - hoje.getTime();
              
              if (msDesdeMeiaNoite < quinzeSegundos) {
                axios.post(`/rest/atualizar/tramitar`).then(function(res) {
                });
              } 
          }
        setInterval(verificaHora, dezSegundos);

        // Leitura do backend para pegar os dados do gráfico
        axios.all([axios.get(`/rest/autor/materia`), axios.get(`/rest/situacoes/materias`), axios.get(`/rest/materias/ano`)]).then(axios.spread((...res) => {
         //res1
        var arr1 = [['Autor', 'Quantidade'],    
         ];
         var arr = res[0].data.map(function(obj) {
          return Object.keys(obj).map(function(key) {
              return obj[key];
          });
          });
          setData(arr1.concat(arr))
          //Nomear gráfico 1
            setNome(principal.getDado(res[0].data[0].nome, 1, res[0].data[0].qtde, 1,0))
    
          //res2
          var arr2 = [['Situação da matéria', 'Quantidade']];
          console.log(res[0])
          var arr3 = res[1].data.map(function(obj) {
              return Object.keys(obj).map(function(key) {
                      return obj[key];
                  });
              });
              setData2(arr2.concat(arr3))
               //Nomear gráfico 2
              setNome2(principal.getDado(res[1].data[1].descricao, 1, res[0].data[0].qtde, 1,0))

            //res3
            var arr4 = [['Matéria', 'Ano']];
            var arr5 = res[2].data.map(function(obj) {
                  return Object.keys(obj).map(function(key) {
                        return obj[key];
                    });
                });
                   arr5.reverse()
                   setData3(arr4.concat(arr5))
                //Nomear gráfico 3
                setNome3(principal.getDado(res[2].data[1].anoCriacao, 0, res[2].data[1].qtde, 1,1))

      }));
       }, []);

      const [options] = useState({
        title: 'Gráfico'
      })
     

      const handleClick = () => {

         teste = 1;

      };
      var teste = 0;
      const handleSubmit=(e)=>{
  
          // time que apertou o botão
          function tempo() { 
                   
            // time que apertou o botão + tempo rodando = clear att  
             axios.post(`/rest/materia`).then(function(res) {

                });     
                if(teste){
                  clearInterval(att);
                } 
  
          }
        const att = setInterval(tempo, 5000);
 
        alert('Foi acrescentado as matérias.');
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

            <div className="logo-imagem" >
            <img src={logo} className="App-logo" alt="logo"/>
              </div>
        </div>
      </header>
        <div className="body">
          <div id="top" className="container_secao">
            <div>
              <div className='traco-vertical'></div>
              <p className='projeto-titulo'>SOBRE O PROJETO</p>
            </div>
            <p className="texto_ampliada1"> 
              Os objetivos do estudo são propor e desenvolver a visualização de dados sobre Medidas Provisórias, aplicando conceitos computacionais para propor uma solução criativa e inovadora, tendo como foco o desenvolvimento de uma aplicação que incentive a participação cidadã na administração pública.
            </p>
            <div className ="processamento_ampliado">
              <p className ="texto_ampliada2">Onde nos baseamos?</p>
              <p className ="texto_ampliada3">Entre no site oficial do governo para mais detalhes das medidas provisórias.</p>
              <div  className='centralizar'>
                <Button variant="contained" href="https://legis.senado.leg.br/dadosabertos/docs/resource_MateriaService.html">Clique aqui</Button>
              </div>
            </div>   
          </div>

          <div id='apis' className="container-imagem_ampliada">
            <div>
              <div className='traco-vertical'></div>
              <p className='projeto-titulo'>API'S</p>
            </div>
            <div className='espacamento_grafico'>
              <p className="texto_ampliada1"> 
                Gráfico comparativo da quantidade de Medidas provisórias em relação aos autores com mais de 250 matérias.
              </p>
              <div className='texto_Clique_alinhado'>
                <a className='texto_Clique_resultados' href="http://localhost:8000/simplex/api-docs/">Clique aqui para utilizar a API.</a>
              </div>
            </div>
            <div className="processamento_ampliado">
              <div className='espaco-top'>
                <Chart className='grafico1'
                  chartType={nome} 
                  // chartType={graficoFinal} 
                  data={data}
                  options={options}
                />
              </div>
            </div> 

            <div className="container-graficos">
              <div className='espacamento_grafico'>
                <p className="texto_ampliada1"> 
                  Gráfico comparativo da quantidade de Medidas Provisórias criadas nos últimos anos.
                </p>
                <div className='texto_Clique_alinhado'>
                  <a className='texto_Clique_resultados' href="http://localhost:8000/simplex/api-docs/">Clique aqui para utilizar a API.</a>
                </div>
              </div> 
              <div className="processamento_ampliado">
                <div className='espaco-top'>
                  <Chart className='grafico1'
                   chartType={nome3} 
                    data={data3}
                    options={options}
                  />
                </div>
              </div>   
       
              <div className='espacamento_grafico'>
                <div className='espacamento_grafico2'>
                  <p className="texto_ampliada1"> 
                  Gráfico que apresenta a situação da maioria das Medidas provisórias.
                  </p>
                  <div className='texto_Clique_alinhado'>
                    <a className='texto_Clique_resultados' href="http://localhost:8000/simplex/api-docs/">Clique aqui para utilizar a API.</a>
                  </div>
                </div> 
              </div>
              <div className="processamento_ampliado">
                <div className='espaco-top'>
                  <Chart className='grafico1'
                    chartType={nome2} 
                    data={data2}
                    options={options}
                  />
              
                </div>
              </div>   
              <div className='espacamento_grafico'>
                <p className='projeto-titulo'>Atualizar matérias</p>
                <form onSubmit={(e) => {handleSubmit(e)}}>
                  <div className='atualizar'>
                    <label htmlFor="intervalo" className='texto_ampliada2'>
                      Inserir as matérias:
                    </label><br/>
                    <input type="submit" value="ATUALIZAR" className='atualizar-botao'/>
                    <button onClick={handleClick} className='atualizar-caixa'>Parar</button>
                  </div>
                </form>
              </div>

          
            </div>          
          </div>

          <div id="suporte" className="container_secao">
            <div>
              <div className='traco-vertical'></div>
              <p className='projeto-titulo'>SUPORTE</p>
            </div>
            <div className='espacamento_grafico'>
              <p className ="texto_ampliada1"> 
                Você pode utilizar o formulário ao lado ou também entrar em contato conosco por meio de e-mail, entrando no site do projeto <a href="https://mgiacchero.wixsite.com/simplex"> SIMPLEX </a> e preenchendo as suas informações na aba "Contato".
              </p>
            </div>
            <div className ="processamento_ampliado">
              <p className ="texto_ampliada2">Feedback</p>
              <p className ="texto_ampliada3">Nos dêe seu feedback do Simplex preenchendo o formulário.</p>
              <div  className='centralizar'>
                <Button variant="contained" href="https://docs.google.com/forms/d/e/1FAIpQLSdE6Ch4lpO321VOrM9D3-rN5XjoNAaAzZ0N1CxoF6ntj4f_IA/viewform">Clique aqui</Button>
              </div>
            </div>   
          </div>
          <div id="fim" className='fim'>

          </div>
          <footer className="cabeçalho_inferior">
            <div className="container-creditos">
                  <p className="Texto_dos_creditos">
                      Made by <a href="https://projetomagnoliaifs.wixsite.com/home" className="Texto_dos_creditos_destaque"> Projeto Magnólia </a>
                  </p>
            </div>
          </footer>
        </div>       
    </div>
      );
    }
 
 export default Aplica;