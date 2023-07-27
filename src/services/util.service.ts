export const utilService = {
    debounce
}

function debounce(cb: any, delay: number) {
    let timeout: any
    return function executedFunction(...args: any[]) {
        const later = () => {
            clearTimeout(timeout)
            cb(...args)
        }
        clearTimeout(timeout)
        timeout = setTimeout(later, delay)
    }
}