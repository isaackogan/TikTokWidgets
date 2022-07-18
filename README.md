TikTokWidgets
==================
A Node.js project to deliver Gift, Subscriber, and Follow notifications to OBS clients via browser source.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white&style=flat-square)](https://www.linkedin.com/in/isaac-kogan-5a45b9193/ )
[![HitCount](https://hits.dwyl.com/isaackogan/TikTokWidgets.svg?style=flat)](http://hits.dwyl.com/isaackogan/TikTokLive)
![Issues](https://img.shields.io/github/issues/isaackogan/TikTokWidgets)
![Forks](https://img.shields.io/github/forks/isaackogan/TikTokWidgets)
![Stars](https://img.shields.io/github/stars/isaackogan/TikTokWidgets)
[![Support Server](https://img.shields.io/discord/977648006063091742.svg?color=7289da&logo=discord&style=flat-square)](https://discord.gg/e2XwPNTBBr)

<!-- [![Downloads](https://pepy.tech/badge/tiktoklive)](https://pepy.tech/project/tiktoklive) -->

A Node.js project to receive and decode livestream events such as subscribes and follows and display them as stream widgets in real-time from TikTok's LIVE service by connecting to TikTok's internal WebCast push service. 

This project is a Javascript tool  based off of
[TikTok-Live-Connector](https://github.com/zerodytrash/TikTok-Live-Connector)
by [@zerodytrash](https://github.com/zerodytrash/) meant to serve as a free, open source tool for streamers on the platform.

This is **not** an official product. It is a research project & tinkering tool for streamers.

Join the [community support server](https://discord.gg/e2XwPNTBBr) and visit the `#support` channel for questions, contributions and ideas. Feel free to make pull requests with missing/new features, fixes, etc.

## Getting Started
To run the chat reader locally, feel free to [watch the tutorial](https://www.youtube.com/watch?v=43roE4STKgU) expertly created by [TikTok LIVE with Harry](https://www.youtube.com/channel/UCbaIDsmlBw1XrmxdVxmL_fw)
that will take you through the following steps:


1. Download a code editor like VSCode (not missing this step anymore smh)
2. Install [Node.js](https://nodejs.org/) on your system
3. Clone this repository or download and extract [this ZIP file](https://github.com/isaackogan/TikTokGiftWidget/archive/refs/heads/master.zip)
4. Open a console/terminal in the root directory of the project
5. Enter `npm i` to install all required dependencies
6. Enter `node server.js` to start the application server

Now you should see the following message: `Server running! Please visit http://localhost:8081`<br>
Add `http://localhost:8082` as a bowser source in OBS.

### IMPORTANT: Notice About Sounds

Sounds will not work unless you click/interact with the page first after loading it
due to a browser security feature preventing malicious popups & sounds.

<img src="https://i.imgur.com/JnvK7zF.gif" width=400></img>

## Contributors

* **Isaac Kogan** - *Initial work & primary maintainer* - [isaackogan](https://github.com/isaackogan)
* **Zerody** - *Reverse-Engineering & README.md file* - [Zerody](https://github.com/zerodytrash/)

See also the full list of [contributors](https://github.com/ChromegleApp/Chromegle/contributors) who have participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

