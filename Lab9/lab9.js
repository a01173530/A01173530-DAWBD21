const num = [80, 77, 88, 95, 68];

function promedio(num) {
  const result = num.reduce((acc, c) => acc + c, 0);
  return result / num.length;
}
const promresult = promedio(num);
console.log(promresult);

const file_system=require('fs');
const fruit = ["Manzana", "Banana", "Uva" ];
function escritura_archivo(fruit) {
//  for (let i of fruit){

  	file_system.writeFileSync('Frutas.txt', fruit[0]+' '+fruit[1]+' '+fruit[2]);

 // }
}


escritura_archivo(fruit);


const http=require('http');

const server=http.createServer((request,response) =>{
	console.log(request.url);

	response.setHeader('Content-Type','text/html');
	response.write('<html lang= "es">');
	
	response.write('<head> <meta charset="utf-8"><title>Lab 9 DAW y BD</title></head>');
	response.write('<body><div id= "contenedor"><header><h1>Bienvenido a mi Página Wed</h1></header><nav><h2>Adrián Torres Hernández </h2><h2>A01173530@itesm.mx</h2></nav>');
	response.write(' <section id="contenido"><article><h2> Lab 9</h2><p>Hola mi nombre es Adrián Torres Hernández y soy un apasionado de la música me gusta cualquier estilo que no sea banda. Entre mis géneros favoritos están el Rock y el rap. Soy un gran apasionado que hasta he tomado clases de canto. También me gusta la actuación como pasatiempo.</p><br><h2>Definiciones</h2><br><p>URL: Significa Uniform Resource Locator, es la secuencia de caracteres que sigue un estándar y que permite denominar recursos dentro del entorno de Internet para que puedan ser localizados.</p><a href="https://definicion.de/url/#:~:text=URL%20es%20una%20sigla%20del,para%20que%20puedan%20ser%20localizados.">Definición sacada de: https://definicion.de/url/#:~:text=URL%20es%20una%20sigla%20del,para%20que%20puedan%20ser%20localizados.</a><br><br><p>MIME: Es la forma standard de mandar contenido a través de la red. Especifican tipos de datos, como por ejemplo texto, imagen, audio, etc. Se utiliza el sufijo correcto para este tipo de archivo.</p>');
	response.write('<br><a href="https://www.viainternet.com.mx/clientes/index.php/knowledgebase/21/iQue-es-MIME-Types.html">Definición sacada de: https://www.viainternet.com.mx/clientes/index.php/knowledgebase/21/iQue-es-MIME-Types.html</a><br><br><p>HTTP: Significa "Hypertext Transfer Protocol", es el nombre de un protocolo que nos permite realizar una petición de datos y recursos, como pueden ser documentos HTML.</p><br>');
	response.write('<ol start="1"><li>Respuestas informativas (100–199).</li><li>Respuestas satisfactorias (200–299).</li><li>Redirecciones (300–399).</li><li>Errores de los clientes (400–499).</li><li>Errores de los servidores (500–599).</li></ol>');
	response.write('<br><a href="https://developer.mozilla.org/es/docs/Web/HTTP/Status">Definición sacada de:https://developer.mozilla.org/es/docs/Web/HTTP/Status</a><br><a href="https://developer.mozilla.org/es/docs/Web/HTTP/Overview">https://developer.mozilla.org/es/docs/Web/HTTP/Overview</a><br><br>');			
	response.write('</article></section><aside><h2> YO</h2><img src="120.jpg" alt="This is me"></aside>');		
	response.write('<footer><h2> Bibliografias</h2><br><p>Universal. (2019). 30 años de la World Wide Web: cuál es la diferencia entre internet y la web (y por qué muchos las confunden). 16/08/20, de Universal Sitio web: https://www.eluniversal.com.mx/mundo/30-anos-de-la-world-wide-web-cual-es-la-diferencia-entre-internet-y-la-web-y-por-que-muchos#:~:text=Internet%20es%20una%20inmensa%20red,para%20acceder%20a%20la%20web.</p><br><p>MDN Web docs. (2019). Métodos de petición HTTP. 16/08/20, de MDN Web docs Sitio web: https://developer.mozilla.org/es/docs/Web/HTTP/Methods#:~:text=HTTP%20define%20un%20conjunto%20de,veces%20son%20llamados%20HTTP%20verbs.&text=El%20m%C3%A9todo%20GET%20solicita%20una%20representaci%C3%B3n%20de%20un%20recurso%20espec%C3%ADfico.</p><br><p>Lázaro Diego. (2018). Códigos de estado HTTP. 16/08/20, de Symfony & Semantic-UI Sitio web: https://diego.com.es/codigos-de-estado-http#:~:text=Este%20c%C3%B3digo%20de%20estado%20indica,respuesta%20est%C3%A1ndar%20para%20respuestas%20correctas.</p><br><p>Editor utilizado Sublime Text :<a href=" http://www.sublimetext.com/">http://www.sublimetext.com/</a></p></footer></div></body>');
    response.write('</html>');
    response.end();

});

server.listen(2022);