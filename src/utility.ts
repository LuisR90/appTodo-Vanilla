function getTime(unixTimestamp:number) {
    const now = Date.now() - unixTimestamp
    const difference: number = now / 1000

    const intervals: [string, number][] = [
        ['yr', 31536000],
        ['mth', 2592000],
        ['day', 86400],
        ['hrs', 3600],
        ['min', 60]
    ]

    for (const [intervalo, segundos] of intervals) {
        const cantidad: number = Math.floor(difference / segundos)
        if (cantidad >= 1) {
            return `${cantidad} ${intervalo}${cantidad !== 1 ? 's' : ''} ago`
        }
    }

    return 'just now';
}

export default { getTime }