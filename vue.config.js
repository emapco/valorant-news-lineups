module.exports = {
    configureWebpack: {
        resolve: {
            fallback: {
                http:   require.resolve("stream-http"),
                https:  require.resolve("https-browserify"),
                timers: require.resolve("timers-browserify"),
                stream: require.resolve("stream-browserify")
            }
        },
    }
}
