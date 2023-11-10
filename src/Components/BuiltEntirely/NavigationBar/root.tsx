import stylesheet from '@/stylesheets/modules/Layout/NavigationBar.module.scss'
import Image from '@/Components/Generics/Image'
import { UserCircle2 } from 'lucide-react'

const Root = () => {
    return (
        <>
            <nav className={stylesheet.root}>
                <div className={stylesheet.logo__container}>
                    <Image
                        id={stylesheet.logo__image}
                        source='/images/avatar.jpg'
                        Skeleton={UserCircle2}
                        alt="Amélia's avatar"
                        size='3.4rem'
                        RoundedBorders
                    />

                    <h2 id={stylesheet.logo__text}>Amélia</h2>
                </div>
            </nav>
        </>
    )
}

export default Root