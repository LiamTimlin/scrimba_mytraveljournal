module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                "travel-red": "#F55A5A",
            },
            fontFamily: {
                inter: "'Inter', sans-serif",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
