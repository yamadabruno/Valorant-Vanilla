export function renderFooter() {

    const footer = document.querySelector('#footer');

    footer.innerHTML = `      
           <section id="section-logos">
                    <a href="https://www.riotgames.com/pt-br?_ga=2.202650514.243762150.1696266792-99981719.1696266790" target="_blank"><img src="assets/logo-riot.png"></a>
                    <a href="https://playvalorant.com/pt-br/" target="_blank"><img src="assets/icons8-valorant-250.png"></a>              
           </section>

           <section id="project">
                    <p>Projeto realizado durante o programa Santander Coders 2023 em parceria com ADA Tech.</p>
                    <p>A ideia do projeto consiste em uma SPA consumindo API, utilizando rotas para navegação entre pÁginas.</p>                    
           </section>

           <section id="container-collaborators">
           Colaboradores  
            <section id="contact-collaborators">
                <section id="section-collaborators">      
                   <p>Bruno Yamada</p> 
                   <a href="https://www.linkedin.com/in/jamyle-teles-151259235/" target="_blank"><img src="assets/linkedin-logo-50.png"</a>
                   <a href="https://github.com/yamadabruno" target="_blank"><img src="assets/github-logo.png"</a>
                </section>
             </section>           
           </section>         
    `;
}