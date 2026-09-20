// Skip Husky install in production and CI
if (process.env.NODE_ENV === 'production' || process.env.CI === 'true') {
    console.warn('Skip Husky install in production and CI.')
    process.exit(0)
}
const husky = (await import('husky')).default
console.log(husky())