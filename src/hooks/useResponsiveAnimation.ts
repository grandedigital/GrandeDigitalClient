import { useEffect, useState } from 'react'

export const useResponsiveAnimation = (breakpoint = 1217) => {
    const [shouldAnimate, setShouldAnimate] = useState(true)

    useEffect(() => {
        const checkWidth = () => {
            setShouldAnimate(window.innerWidth > breakpoint)
        }
        checkWidth()
    }, [])

    return shouldAnimate
}