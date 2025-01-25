function scrollToTop(duration: number): void {
    const start = window.scrollY;
    const distance = -start;
    let startTime: number;

    function easeOut(t: number) {
        return t * (2 - t);  // Ease-out fonksiyonu
    }

    function easeIn(t: number) {
        return t * t;  // Ease-in fonksiyonu
    }

    function easeInOut(t: number) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;  // Ease-in-out fonksiyonu
    }

    function animation(currentTime: number) {
        if (!startTime) startTime = currentTime;
        const progress = (currentTime - startTime) / duration;
        const easedProgress = easeInOut(progress); // Ease-out fonksiyonu uygulandı

        const scroll = Math.min(easedProgress, 1) * distance + start;

        window.scrollTo(0, scroll);

        if (progress < 1) {
            requestAnimationFrame(animation);
        }
    }

    requestAnimationFrame(animation);
}

export { scrollToTop };
