export const environment = Object.freeze(
    {
        production: process.env.NODE_ENV === 'production',
        development: process.env.NODE_ENV === 'development'
    }
)
