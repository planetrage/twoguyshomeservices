module.exports = {
    mode: 'jit',
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                'olympus-navy': '#0B1120',
                'olympus-navy-light': '#141E33',
                'olympus-navy-mid': '#1C2A45',
                'marble-white': '#F2EDE8',
                'marble-warm': '#E8E0D6',
                'marble-cool': '#D4CCC2',
                'marble-deep': '#B8AFA5',
                'gold-primary': '#C9A84C',
                'gold-light': '#E2C97E',
                'gold-dark': '#9A7B2E',
                'gold-muted': '#7A6530',
                'risk-high': '#D94F4F',
                'risk-medium': '#D9A34F',
                'risk-low': '#4FAD6B',
                'info-blue': '#4F8FD9',
                primary: '#C9A84C',
                secondary: '#333333',
            },
            padding: {
                155: '155px',
                160: '160px',
            },
            backgroundImage: {
                'pattern-1': "url('/images/background/pattern-1.png')",
                'page-banner-1': "url('/images/page-banner/1.jpg')",
                'page-banner-2': "url('/images/page-banner/2.jpg')",
                'new-post': "url('/images/background/new-post.jpg')",
            },
            animation: {
                'fade-in-down': 'fadeInDown 3s linear normal',
                fadeInUp: 'fadeInUp 0.5s linear normal',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: 0, transform: 'translateY(20px)' },
                    '100%': { opacity: 1, transform: 'translateY(0)' },
                },
            },
        },

        fontFamily: {
            display: ['Cinzel', 'Times New Roman', 'serif'],
            body: ['Raleway', 'Helvetica Neue', 'sans-serif'],
            data: ['DM Mono', 'Courier New', 'monospace'],
            proxima: ['proxima-nova', 'sans-serif'],
            poppins: ['poppins', 'sans-serif'],
        },

        container: {
            center: true,
            padding: '15px',
            screens: {
                sm: '480px',
                lm: '575px',
                md: '768px',
                lg: '992px',
                xl: '1200px',
            },
        },
        screens: {
            'max-lg': { max: '1199px' },
            'max-md': { max: '991px' },
            'max-lm': { max: '767px' },
            'max-sm': { max: '575px' },

            'fixed-xs': { max: '479px' },
            'fixed-sm': { min: '480px', max: '575px' },
            'fixed-lm': { min: '576px', max: '767px' },
            'fixed-md': { min: '768px', max: '991px' },
            'fixed-lg': { min: '992px', max: '1199px' },

            sm: '480px',
            lm: '576px',
            md: '768px',
            lg: '992px',
            xl: '1200px',
        },
    },
    variants: {
        extand: {},
    },
    plugins: [],
};
