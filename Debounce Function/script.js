function debounce(func, wait) {
    let timeout;
    return function (...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
}

// Usage
window.addEventListener('resize', debounce(() => {
    console.log('Resized');
}, 250));
