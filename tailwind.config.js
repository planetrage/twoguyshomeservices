module.exports = {
    mode: 'jit',
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                'heading':       '#1B2D4F',
                'cta':           '#D4511E',
                'cta-hover':     '#B8431A',
                'accent-bg':     '#F5F3F0',
                'border-subtle': '#E5E2DD',
                'text-main':     '#1A1A1A',
                'text-muted':    '#6B6B6B',
                'text-light':    '#999999',
                'footer-bg':     '#141F35',
                'success':       '#2D8A4E',
                'warning':       '#D9A34F',
                'error':         '#D94F4F',
                'info':          '#4F8FD9',
                primary:         '#D4511E',
                secondary:       '#1B2D4F',
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
            display: ['Plus Jakarta Sans', 'Helvetica Neue', 'sans-serif'],
            body: ['DM Sans', 'Helvetica Neue', 'sans-serif'],
            data: ['DM Mono', 'Courier New', 'monospace'],
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
