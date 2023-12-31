import Head from 'next/head'
import NavBar from '@/Components/BuiltEntirely/NavigationBar/root'
import Image from '@/Components/Generics/Image'
import { Bird, Cookie, Github, Library, Loader, Mailbox, Package } from 'lucide-react'
import * as Project from '@/Components/Generics/ProjectCard'
interface Project {
    name: string,
    description: string,
    imageUrl?: string,
    badge?: string,
    links?: { name: string, url: string }[]
}



const Page = () => {
    return (
        <>
            <Head>
                <title>🐾 Amélia&apos;s Website</title>
                <meta name='description' content="Hii! I'm Lia!" />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <NavBar />

            <main>
                <div className='hero__banner__container'>
                    <div className='inner__container flex--column flex--justify-center gap-medium ' style={{ flex: 1.5 }}>
                        <span>
                            <h1 className='text--borel-familly text--underline'>Amélia Ribeiro</h1>
                            <h3 className='text--helper'>Desenvolvedora Front-End Web, Desktop e Mobile!</h3>
                        </span>

                        <p>
                            Atualmente sou completamente apaixonada pela programação <span className='text--emphasis'>Front-End</span> e por <span className='text--emphasis'>Gastronomia</span>.
                            <br />
                            Desenvolvo aplicações Front-End com <span className='text--emphasis'>React</span>, <span className='text--emphasis'>React-Native</span>, <span className='text--emphasis'>Next</span> e <span className='text--emphasis'>Electron</span>. Estilizo com <span className='text--emphasis'>Sass</span>, <span className='text--emphasis'>Stitches</span> e <span className='text--emphasis'>Tailwind</span>. Além do clássico Styled-Components e CSS puro.
                        </p>

                        <div className='flex gap-medium'>
                            <a href='#about-me' className='button'>Mais sobre mim</a>
                            <a href='https://github.com/Canary2000' target='_blank' className='badge'><Github color='white' /></a>
                        </div>
                    </div>

                    <div className='inner__container flex--column flex--align-center gap-medium' style={{ flex: 1.5 }}>
                        <Image
                            Skeleton={Bird}
                            source='/images/avatar.jpg'
                            size='12rem'
                            resolution='1024'
                            alt="Amélia's"
                            className='avatar--glowing'
                        />

                        <span className='badge'>Dev. Front-End</span>
                    </div>
                </div>

                <section className='content__container'>
                    <div id='about-me' className='content__container__section'>
                        <div className='flex--align-center gap-small'>
                            <span className='text--emphasis flex--align-center'>
                                <Cookie size={'1.8rem'} />
                            </span>

                            <h1>Sobre mim</h1>
                        </div>

                        <div>
                            <p>Sou desenvolvedora há <span className='text--emphasis'>4 anos</span>, passei por diversas áreas dessa bolha, como: GameDevelopment, Back-End, automação e Front-End.</p>
                            <p>Como será que eu comecei? Sempre tive interesse por como as coisas realmente funcionam e por jogos, até que tive o primeiro contato com programação por meio de uma <span className='text--emphasis'>GameEngine</span>, a Unity. A partir desse ponto, eu aprendi um pouco de C# (CSharp), conheci o <span className='text--emphasis'>JavaScript</span> por pessoas que faziam Bots para o Discord e comecei a aprender mais sobre. Após isso tudo, finalmente conheci a área Front-End e acabei me apaixonando, diga-se de passagem.</p>
                            <p>Apesar de tudo, planejo cursar gastronomia e gerir meu próprio restaurante!</p>
                        </div>
                    </div>

                    <div id='projects' className='content__container__section gap-medium'>
                        <span>
                            <div className='flex--align-center gap-small'>
                                <span className='text--emphasis flex--align-center'>
                                    <Package size={'1.8rem'} />
                                </span>

                                <h1>Projetos</h1>
                            </div>

                            <p>Projetos e/ou realizações nas quais eu participei, fiz ou manejo.</p>
                        </span>

                        <div className='projects__cards__grid'>
                            <Project.Root name='just-me-amelia'>
                                <Project.Title content='just-me-amelia'>
                                    <span className='badge text--capitalize'>Portfólio</span>
                                </Project.Title>

                                <Project.Container>
                                    &ldquo;just-me-amelia&rdquo; É o meu site pessoal!
                                </Project.Container>

                                <Project.Footer>
                                    <a href='https://github.com/Canary2000/just-me-amelia' target='_blank' className='button text--capitalize'>Repositório</a>
                                </Project.Footer>
                            </Project.Root>

                            <Project.Root name='imdjs'>
                                <Project.Title content='imd.js'>
                                    <span className='badge text--capitalize'>Biblioteca</span>
                                </Project.Title>

                                <Project.Container>
                                    Uma elegante alternativa JavaScript para salvar dados em memória.
                                </Project.Container>

                                <Project.Footer>
                                    <a href='https://github.com/Canary2000/imd.js' target='_blank' className='button text--capitalize'>Repositório</a>
                                    <a href='https://www.npmjs.com/package/imd.js' target='_blank' className='button text--capitalize'>Biblioteca</a>
                                </Project.Footer>
                            </Project.Root>
                        </div>
                    </div>

                    <div id='stacks' className='content__container__section'>
                        <span>
                            <div className='flex--align-center gap-small'>
                                <span className='text--emphasis flex--align-center'>
                                    <Library size={'1.8rem'} />
                                </span>

                                <h1>Conhecimento</h1>
                            </div>

                            <p>Linguagens, frameworks, línguas, bibliotecas e mais coisas que sei até então.</p>
                        </span>

                        <div style={{ marginTop: '16px' }}>
                            <ul>
                                <li><strong>Línguas:</strong></li>
                                <p className='badge'>Português, Inglês, Italiano, Francês...</p>

                                <li><strong>Linguagens:</strong></li>
                                <p className='badge'>HTML, CSS</p>

                                <li><strong>Linguagens de programação:</strong></li>
                                <p className='badge'>JavaScript e TypeScript, Go, Rust...</p>

                                <li><strong>Frameworks:</strong></li>
                                <p className='badge'>Next, Fastify, Express, SocketIo e mais.</p>

                                <li><strong>Bibliotecas:</strong></li>
                                <p className='badge'>React, Radix UI, and more.</p>

                                <li><strong>Bibliotecas (CSS):</strong></li>
                                <p className='badge'>Tailwind CSS, Sass, Stitches, StyledComponents e mais.</p>
                            </ul>
                        </div>


                    </div>

                    <div id='stacks' className='content__container__section'>
                        <span>
                            <div className='flex--align-center gap-small'>
                                <span className='text--emphasis flex--align-center'>
                                    <Mailbox size={'1.8rem'} />
                                </span>

                                <h1>Contato</h1>
                            </div>

                            <p>Meios para me contatar.</p>
                        </span>

                        <div className='flex--column gap-small'>
                            <div className='flex gap-small'>
                                <strong>Email:</strong>
                                <span className='badge'>its.amelina@proton.me</span>
                            </div>

                            <div className='flex gap-small'>
                                <strong>Discord:</strong>
                                <span className='badge'>@its.amelina</span>
                            </div>
                        </div>
                    </div>
                </section>

                <footer>
                    <h4>
                        <span className='text--emphasis'>©</span> Amélia Ribeiro – Desenvolvedora.
                    </h4>

                    <h4>Feito por <a href='https://github.com/Canary2000'>Amélia R.</a> com 💜.</h4>
                </footer>
            </main>
        </>
    )
}

export default Page