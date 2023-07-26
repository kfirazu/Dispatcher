export const utilService = {
    debounce,
    makeId
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

function makeId() {
    return Math.random().toString(36).substring(2, 13)
}