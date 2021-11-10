const env = process.env;

const development = {
    api: {
        port: Number(env.PORT || 1098),
        host: "localhost",
    },
    db: {},
};

const config = {
    development,
};

export = config[env.NODE_ENV];
