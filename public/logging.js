const Logger = {

    ERROR: (message, ...formatting) => {
        Logging.LOG(Logging.LogLevel.ERROR, message, ...formatting)
    },

    INFO: (message, ...formatting) => {
        Logging.LOG(Logging.LogLevel.INFO, message, ...formatting)
    },

    DEBUG: (message, ...formatting) => {
        Logging.LOG(Logging.LogLevel.DEBUG, message, ...formatting)
    },

    WARNING: (message, ...formatting) => {
        Logging.LOG(Logging.LogLevel.WARNING, message, ...formatting)
    },


}


class Logging {

    static #stringInterpolation(input, formatting) {
        const _r=function(p,c){return p.replace(/%s/,c);}
        return formatting.reduce(_r, input);
    }

    static LOG(logLevel, message, ...formatting) {
        console.log(`%c[${logLevel["label"]}] (TikTok Widget) ${this.#stringInterpolation(message, formatting)}`, `color: ${logLevel["color"]};`)
    }

    static LogLevel = {
        INFO: {
            "label": "INFO",
            "color": "#ceaa07"
        },
        ERROR: {
            "label": "ERROR",
            "color": "#ff0000"
        },
        DEBUG: {
            "label": "DEBUG",
            "color": "#158a39"
        },
        WARNING: {
            "label": "WARN",
            "color": "#bd7000"
        }
    }

}

