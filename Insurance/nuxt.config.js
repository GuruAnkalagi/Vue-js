module.exports = {
    /*
     ** Headers of the page
     */
    head: {
        title: 'Insurance',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Nuxt.js project' }
        ],
        script: [
            { src: 'https://code.jquery.com/jquery-git.js' },
            { src: 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.5/jspdf.debug.js' },
            { src: 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/0.9.0rc1/jspdf.min.js' },
            { src: 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.js' },
            { src: '/vendor/jquery/jquery.min.js' },
            { src: '/vendor/bootstrap/js/bootstrap.bundle.min.js' },
            { src: '/vendor/jquery-easing/jquery.easing.min.js' },
            { src: '/js/jqBootstrapValidation.js' },
            { src: '/js/contact_me.js' },
            { src: '/js/index.js' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/inc.ico' },
            // { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.5.1/css/bulma.min.css' },
            { rel: 'stylesheet', href: '/vendor/font-awesome/css/font-awesome.min.css' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,700' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Kaushan+Script' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700' },
            // { rel: 'stylesheet', href: '/vendor/bootstrap/css/bootstrap.min.css'},
            { rel: 'stylesheet', href: '/css/main.css' },
            { rel: 'stylesheet', href: '/css/toggle.css' }
        ]
    },
    /*
     ** Customize the progress bar color
     */
    loading: { color: '#3B8070' },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** Run ESLint on save
         */
        extend(config, { isDev, isClient }) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
    }
}