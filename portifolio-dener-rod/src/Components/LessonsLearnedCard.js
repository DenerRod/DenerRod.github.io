import React from 'react';
import minhaImg from '../Images/minha_imagem.jpeg'

const LessonsLearnedCard = () => {
    return (
        <body>
            <header id="cabecalho"> <br />
            <div class="container">
                <h1 id="titulo">Lições Aprendidas - Trybe</h1> <br />

                <ul>
                    <li><a id="link_home" href="https://www.betrybe.com/?utm_source=trybe.com.br"
                        target="_blank" rel="noreferrer">Home</a></li>

                    <li><a id="link_login" href="https://app.betrybe.com/course" target="blank">Login</a>
                    </li>
                </ul>
                </div>
            </header><br /><main>
                <img id="minha_foto" src={minhaImg} alt="DenerRod-img" width="300px" />
                <br />
                <a id="" href="#minha_foto">Dener Rodrigues Barrientos</a>
                <br />

                <h3 class="colors">Lista de lições aprendidas:</h3>
                <ol id="licoes_aprendidas">
                    <li>Unix</li>
                    <li>Bash</li>
                    <li>Git</li>
                    <li>GitHub</li>
                    <li>Concentração</li>
                    <li>Aprender a aprender</li>
                    <li>Comunicação</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Slack</li>
                </ol>

                <h3 class="colors">Lista de lições que desejo aprender:</h3>
                <ul id="licoes_a_aprender">
                    <li>Java Script</li>
                    <li>DOM</li>
                    <li>Ciência da computação</li>
                    <li>Python</li>
                    <li>SQL</li>
                    <li>Node.js</li>
                    <li>Forms</li>
                    <li>Flexbox</li>
                    <li>Testes Assíncronos</li>
                    <li>Web Storage</li>

                </ul>
                <br />

                <article>

                    <h3 class="colors">Meu aprendizado na Trybe</h3>

                    <p class="colors">Antes de me increver para o processo seletivo da Trybe, já tinha em mente que me queria me tornar um Desenvolvedor Web, mas para isso tive que tomar iniciativa em busca de minha carreira profissional. Foi onde encontrei a Trybe, escola de programação. Minha experiencia não podia ser melhor, estou tendo contatos com conhecimentos de primeira mão que a Trybe forncene para os estudantes, sem dúvidas estou à caminho de me tornar um Dev com todos os aprendizados completos que irei utilizar.</p>

                </article>
            </main><br /><section>
                <aside>

                    <h3>Passagem sobre meu aprendizado</h3>

                    <p>Durante o curso consgui administrar meus estudos dos contéudos fornecidos pela Trybe, e percebi que ralmente eles vão nos ajudar e muito quando entrarmos no mercadode trabalho como desenvolvedores. Até o momento o Git foi o conteúdo que mais me encantou, por ser uma ferramenta que irá nos ajudar.</p>

                </aside>
            </section><footer id="rodape">
                <h4>Todos os direitos reservados, Dener</h4>
                <nav>
                    <ul>
                        <li>
                            <a id="footer_link" href="https://github.com/DenerRod" target="blank"
                            >
                                Contato
                            </a>
                        </li>
                    </ul>
                </nav>

            </footer>
            </body>
    )
}

export default LessonsLearnedCard;