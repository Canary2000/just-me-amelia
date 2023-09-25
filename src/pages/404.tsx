import NavBar from '@/Components/BuiltEntirely/NavigationBar/root'
import { CircleSlash } from 'lucide-react'

const Page = () => {

    return (
        <>
            <NavBar />

            <main className='flex--column' style={{ width: '100vw', height: '30vh' }}>
                <section className='content__container__section' style={{ paddingTop: '8%' }}>
                    <div className='icon'>
                        <CircleSlash />
                    </div>

                    <h2 className='text--underline'>Página não encontrada</h2>
                    <p>Deseja voltar à tela inicial?</p>
                </section>
            </main>
        </>
    )
}


export default Page