import {EventEmitter} from "events";

class Installer extends EventEmitter {
    name: string;
    target: any;
    debug: boolean = false;
    initial: boolean = false;
    multiple: boolean = false;

    constructor(name: string, target: any, multiple: boolean, debug: boolean) {
        super();
        this.name = name;
        this.target = target != null ? target : this;
        this.multiple = multiple;
        this.debug = debug;
        this.emit('create')
    }

    async load() {
        this.emit('initial')
        await this.install();
        this.initial=true;
        this.emit('ready')
    }

    log(...data: any) {
        if (this.debug) {
            // @ts-ignore
            console.log(`🐰😁[${this.name}]`, `${this.dateTime()}`, ...data)
        }
    }

    dateTime() {
        const date = new Date();
        // let f ='hh:mm:ss';
        return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    }

    randomInt(maxNum: number) {
        if (maxNum <= 0) {
            return 0;
        }
        const minNum = 0;
        try {
            return parseInt(`${Math.random() * (maxNum - minNum + 1) + minNum}`, 10);
        } catch (e) {
        }
        return 0;
    }

    randomStr(length = 10) {
        let e = '';
        for (let n = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890', o = 0;
             o < length; o++) {
            e += n.charAt(Math.floor(Math.random() * n.length));
        }
        return e;
    }

    async install() {
    }

    addClient(key: string, client: any) {
    }

    removeClient(key: string) {
    }
}

export default Installer;