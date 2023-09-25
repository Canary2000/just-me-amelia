import type { LucideIcon } from 'lucide-react'
import Img from 'next/image'
import { ImgHTMLAttributes, useState } from 'react'

const Image = ({
    source,
    size,
    alt,
    title,
    filter,
    RoundedBorders,
    Skeleton,
    style,
    id,
    className,
    width,
    height,
    resolution
}: {
    source: any,
    size?: string,
    title?: string,
    filter?: string,
    RoundedBorders?: boolean,
    Skeleton: LucideIcon,
    alt: string,
    resolution?: string | number
} & ImgHTMLAttributes<'auto'>) => {
    const [fallback, setFallback] = useState(false)

    if (fallback || !source) {
        return (
            <Skeleton />
        )
    }

    return (
        <Img
            src={source}
            width={Number(resolution ? resolution : width || 128)}
            height={Number(resolution ? resolution : height || 128)}
            style={{
                width: size || '4rem',
                height: size || '4rem',
                borderRadius: RoundedBorders ? '50%' : '',
                filter: filter || 'none',
                ...style
            }}
            className={className}
            id={id}
            alt={alt}
            title={title}
            onLoadingComplete={(result) => {
                if (result.naturalWidth === 0) {
                    setFallback(true)
                }
            }}
            onError={() => {
                setFallback(true)
            }}


        />
    )
}

export default Image