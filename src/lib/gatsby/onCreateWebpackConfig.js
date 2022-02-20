exports.onCreateWebpackConfig = ({
    stage,
    getConfig,
    rules,
    loaders,
    plugins,
    actions,
}) => {
    const config = getConfig();

    config.module.rules.find(
        (rule) =>
            rule.test &&
            rule.test.toString() ===
            "/\\.(ico|svg|jpg|jpeg|png|gif|webp|avif)(\\?.*)?$/"
    ).test = /\.(ico|jpg|jpeg|png|gif|webp|avif)(\?.*)?$/;

    config.module.rules.push({
        test: /\.svg/,
        use: {
            loader: "svg-url-loader",
            options: {
                limit: 4096,
                iesafe: true,
            },
        },
    });

    actions.replaceWebpackConfig(config);
};
