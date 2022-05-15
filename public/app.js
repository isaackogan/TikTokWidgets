let connection = new TikTokIOConnection();


let Config = {

    firstConnect: true,

    updateConfig() {

        fetch("/config.json").then((response) => response.json()).then((json) => {
            Config = Object.assign({}, Config, json);

            if (this.firstConnect) {
                Logger.INFO("Connecting to %s...", Config["uniqueId"]);
                connection.connect(Config["uniqueId"], {enableExtendedGiftInfo: true})
                    .then(state => Logger.INFO("Connected to roomId %s", state["roomId"]))
                    .catch(errorMessage => Logger.ERROR("Failed to connect: \n\n %s", errorMessage));
                this.firstConnect = false;
            }

            setTimeout(Config.updateConfig, 1000);

        });
    }

}

Config.updateConfig();

class Announcement {

    #uniqueId;
    #imageUrl;
    #message;
    #soundUrl;
    #circleCrop;

    constructor(uniqueId, imageUrl, message, soundUrl, circleCrop = false) {
        this.#uniqueId = uniqueId;
        this.#imageUrl = imageUrl;
        this.#message = message;
        this.#soundUrl = soundUrl;
        this.#circleCrop = circleCrop;
    }

    static #getAnimatedLetters(name, _html = "") {

        for (let letter of name.split("")) {
            _html += `<span class="animated-letter wiggle" style="color: ${Config["nameColour"]}; white-space: nowrap;">${letter}</span>`
        }

        return _html;

    }

    build() {

        return `
            
            <div class="alertContainer current" style="
                animation: fadein ${Config["fadeIn"] || 0}ms, fadeout ${Config["fadeOut"] || 0}ms; 
                animation-delay: 0ms, ${Config["fadeAfter"]}ms;
                animation-fill-mode: forwards;
                font-size: ${Config["fontSize"] + "px"};
                white-space: nowrap;
                padding: 20px;
            ">
                <img class="alertImage" src="${this.#imageUrl}" alt="Image" style="border-radius: ${(this.#circleCrop ? 10000 : 0) + "px"}"/>
                <span class="alertText" style="
                    font-weight: ${Config["fontWeight"]};
                    white-space: nowrap;
                    color: ${Config["textColour"] + 'px'};
                ">
                    ${Announcement.#getAnimatedLetters(this.#uniqueId)} ${this.#message}
                </span>
            </div>
        
        `
    }

    sound() {

        if (!this.#soundUrl) {
            return;
        }

        let audio = new Audio(this.#soundUrl);
        audio.volume = Config["volume"];
        audio.play().catch();

    }


}


connection.on('gift', (data) => {

    if (data["giftType"] === 1 && !data["repeatEnd"]) {
        return;
    }

    let announcement = new Announcement(
        data["uniqueId"],
        data["giftPictureUrl"],
        `sent ${data["repeatCount"]}x ${data["giftName"]}`,
        Config["sounds"][data["giftName"].toLowerCase()] || Config["sounds"]["default"]
    );

    $(".current").replaceWith(announcement.build());
    announcement.sound();

});


connection.on("social", (data) => {

    if (!data["displayType"].includes("follow")) {
        return;
    }


    let announcement = new Announcement(
        data["uniqueId"],
        data["profilePictureUrl"],
        `is now following!`,
        Config["sounds"]["follow"] || Config["sounds"]["default"],
        true
    );

    $(".current").replaceWith(announcement.build());
    announcement.sound();

})
