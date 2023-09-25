import { ComponentProps, ReactNode } from 'react'
import StyleSheet from '@/stylesheets/modules/ProjectCard.module.scss'

const Root = ({
    name,
    children,
    className,
    ...rest
}: {
    name: string,
} & ComponentProps<'div'>) => {
    return (
        <div className={`${className} ${StyleSheet.root}`} {...rest}>
            {children}
        </div>
    )
}

const Title = ({
    content,
    children
}: { content: string, children: ReactNode }) => {
    return (
        <h3 className='flex gap-small'>{content} {children}</h3>
    )
}

const Container = ({ children }: { children: ReactNode }) => {
    return (
        <div className={`${StyleSheet.content} text--medium`}>
            {children}
        </div>
    )
}

const Footer = ({ children }: { children: ReactNode }) => {
    return (
        <div className={StyleSheet.footer}>
            {children}
        </div>
    )
}

export { Root, Title, Container, Footer }