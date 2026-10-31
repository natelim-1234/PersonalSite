import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import './ZoomableImage.css'

function ZoomableImage({ src, alt = '', className = '', style }) {
    const [isOpen, setIsOpen] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        if (!isOpen) return

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') setIsOpen(false)
        }

        document.addEventListener('keydown', handleKeyDown)

        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
        const originalOverflow = document.body.style.overflow
        const originalPaddingRight = document.body.style.paddingRight

        document.body.style.overflow = 'hidden'
        if (scrollbarWidth > 0) {
            document.body.style.paddingRight = `${scrollbarWidth}px`
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
            document.body.style.overflow = originalOverflow
            document.body.style.paddingRight = originalPaddingRight
        }
    }, [isOpen])

    useEffect(() => {
        if (!isOpen) return

        let cancelled = false
        const image = new Image()
        image.src = src

        const markLoaded = () => {
            if (!cancelled) setIsLoaded(true)
        }

        if (image.decode) {
            image.decode().then(markLoaded).catch(markLoaded)
        } else {
            image.onload = markLoaded
            image.onerror = markLoaded
        }

        return () => {
            cancelled = true
        }
    }, [isOpen, src])

    const openZoom = () => {
        setIsLoaded(false)
        setIsOpen(true)
    }

    return (
        <>
            <img
                className={`zoomable-image ${className}`}
                style={style}
                src={src}
                alt={alt}
                onClick={openZoom}
            />

            {isOpen && createPortal(
                <div className='zoomable-image-overlay' onClick={() => setIsOpen(false)}>
                    {!isLoaded && <div className='zoomable-image-spinner' role='status' aria-label='Loading image' />}
                    {isLoaded && (
                        <img
                            className='zoomable-image-overlay-img'
                            src={src}
                            alt={alt}
                        />
                    )}
                </div>,
                document.body
            )}
        </>
    )
}

export default ZoomableImage
