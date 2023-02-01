import BaseInstaller from './installer';
import mongoose, {ConnectOptions} from "mongoose";

class Installer extends BaseInstaller {
    private configs: any;
    private schemas: any;

    constructor(configs: any, target: any, multiple = false, debug = false) {
        super('MONGO', target, multiple, debug)
        this.configs = configs;
        this.schemas = {};
        if (!this.target.__MONGO_CACHE) {
            this.target.__MONGO_CACHE = {};
        }
        if (!this.target.MONGO) {
            this.target.MONGO = {}
        }
        this.emit('create')
    }

    async install() {
        if (this.multiple) {
            const keys = Object.keys(this.configs);
            for (const key of keys) {
                const option = this.configs[key];
                if (option.username) {
                    await this.createClientWithUsername(option, key);
                } else {
                    await this.createClientWithUri(option.uri, option.options, key);
                }
            }
        } else {
            if (this.configs.username) {
                await this.createClientWithUsername(this.configs, this.configs.name);
            } else {
                await this.createClientWithUri(this.configs.uri, this.configs.options, this.configs.name);
            }
        }
    }

    async createClientWithUsername(config: any, name: string) {
        let username = config.username;
        let password = config.password;
        let uri = `mongodb://${username}:${encodeURIComponent(password)}@${config.url}`;
        await this.createClientWithUri(uri, config, name);
    }

    async createClientWithUri(uri: string, config: ConnectOptions, name: string) {
        name = name ? name.toUpperCase() : '';
        const conn = mongoose.createConnection(uri, config)
        this.log(`client[ ${name} ]: option`,{uri,config});
        const keys = Object.keys(this.schemas);
        for (let key of keys) {
            conn.model(key, new mongoose.Schema(JSON.parse(JSON.stringify(this.schemas[key]))));
        }
        if (name) {
            this.target.MONGO[name] = conn;
        } else {
            this.target.MONGO = conn;
        }
        this.addClient(this.randomStr(), conn);
        return conn;
    }

    addClient(key: string, client: any) {
        this.target.__MONGO_CACHE[key] = client;
    }

    removeClient(key: string) {
        delete this.target.__MONGO_CACHE[key];
    }

    addSchema(key: string, value: any) {
        this.schemas[key] = value;
        const keys = Object.keys(this.target.__MONGO_CACHE);
        if (keys && keys.length > 0) {
            for (const key1 of keys) {
                const client = this.target.__MONGO_CACHE[key1];
                client.model(key, new client.Schema(JSON.parse(JSON.stringify(value))));
            }
        }
        return this;
    }

}

export default Installer;
