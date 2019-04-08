const rp = require("request-promise-native");
const urlencode = require("urlencode");

const taarAddons = [
  "jid1-MnnxcxisBPnSXQ@jetpack",
  "extension@tabliss.io",
  "jid1-93WyvpgvxzGATw@jetpack",
  "{4a313247-8330-4a81-948e-b79936516f78}",
  "firefox@ghostery.com",
  "treestyletab@piro.sakura.ne.jp",
  "@contain-facebook",
  "jid1-KdTtiCj6wxVAFA@jetpack",
  "@testpilot-containers",
  "forecastfox@s3_fix_version",
  "newtaboverride@agenedia.com",
  "{2e5ff8c8-32fe-46d0-9fc8-6b8986621f3c}",
  "{b9db16a4-6edc-47ec-a1f4-b86292ed211d}",
  "jid1-Xo5SuA6qc1DFpw@jetpack",
  "support@lastpass.com",
  "uBlock0@raymondhill.net",
  "enhancerforyoutube@maximerf.addons.mozilla.org",
  "searchimage@searchimage.fr",
  "admin@fastaddons.com_GroupSpeedDial",
  "{4a2c8133-4ad1-421b-9e77-b517a8a4e34b}",
  "jid1-q4sG8pYhq8KGHs@jetpack",
  "jid0-GokC6R49cBZciOKniufAR4QKFWc@jetpack",
  "{3e75b332-ab7e-4c05-a991-06763c89d47a}",
  "{74b0af75-8791-44e2-95a6-7f0ab94143ec}",
  "87677a2c52b84ad3a151a4a72f5bd3c4@jetpack",
  "{d37dc5d0-431d-44e5-8c91-49419370caa1}",
  "jid0-fbHwsGfb6kJyq2hj65KnbGte3yT@jetpack",
  "{f209234a-76f0-4735-9920-eb62507a54cd}",
  "{506e023c-7f2b-40a3-8066-bc5deb40aebe}",
  "stefanvandamme@stefanvd.net",
  "{d04b0b40-3dab-4f0b-97a6-04ec3eddbfb0}",
  "{0c8fbd76-bdeb-4c52-9b24-d587ce7b9dc3}",
  "{d07ccf11-c0cd-4938-a265-2a4d6ad01189}",
  "{00000f2a-7cde-4f20-83ed-434fcb420d71}",
  "CookieAutoDelete@kennydo.com",
  "zoompage-we@DW-dev",
  "2.0@disconnect.me",
  "forget-me-not@lusito.info",
  "{91aa5abe-9de4-4347-b7b5-322c38dd9271}",
  "gmailnoads@mywebber.com",
  "{0ad88674-2b41-4cfb-99e3-e206c74a0076}",
  "{a6c4a591-f1b2-4f03-b3ff-767e5bedf4e7}",
  "jid0-bnmfwWw2w2w4e4edvcdDbnMhdVg@jetpack",
  "jid1-BoFifL9Vbdl2zQ@jetpack",
  "{5384767E-00D9-40E9-B72F-9CC39D655D6F}",
  "{7b1bf0b6-a1b9-42b0-b75d-252036438bdc}",
  "{6da93407-cb42-4572-a83a-0cd72d2f0760}",
  "foxyproxy@eric.h.jung",
  "{7be2ba16-0f1e-4d93-9ebc-5164397477a9}",
  "https-everywhere@eff.org",
  "jid1-93CWPmRbVPjRQA@jetpack",
  "s3google@translator",
  "jid1-xUfzOsOFlzSOXg@jetpack",
  "jid0-GXjLLfbCoAx0LcltEdFrEkQdQPI@jetpack",
  "anttoolbar@ant.com",
  "jid1-F9UJ2thwoAm5gQ@jetpack",
  "client@anonymox.net",
  "pavel.sherbakov@gmail.com",
  "{66E978CD-981F-47DF-AC42-E3CF417C1467}",
  "extension@one-tab.com",
  "s3download@statusbar",
  "Clipper@OneNote.com",
  "jid0-XWJxt5VvCXkKzQK99PhZqAn7Xbg@jetpack",
  "{e839c3f9-298e-4cd0-99e0-464431cb7c34}",
  "{EF522540-89F5-46b9-B6FE-1829E2B572C6}",
  "{174b2d58-b983-4501-ab4b-07e71203cb43}",
  "{de22fd49-c9ab-4359-b722-b3febdc3a0b0}",
  "{7a7a4a92-a2a0-41d1-9fd7-1e92480d612d}",
  "newtabtools@darktrojan.net",
  "jid1-TMndP6cdKgxLcQ@jetpack",
  "{446900e4-71c2-419f-a6a7-df9c091e268b}",
  "jid1-s7swGsO2vJBPMv@jetpack",
  "{20068ab2-1901-4140-9f3c-81207d4dacc4}",
  "snaplinks@snaplinks.mozdev.org",
  "{4853d046-c5a3-436b-bc36-220fd935ee1d}",
  "momentum@momentumdash.com",
  "{23cc126f-bd98-4a53-807a-cbc9af2cfe89}",
  "leechblockng@proginosko.com",
  "0.id@reloadmatic.webex",
  "bookmarksorganizer@agenedia.com",
  "support@todoist.com",
  "jid1-kOqZHmOwLzTaFg@jetpack",
  "iridium@particlecore.github.io",
  "FirefoxAddon@similarWeb.com",
  "jid1-D7momAzRw417Ag@jetpack",
  "@mousegesture",
  "{1ced4832-f06e-413f-aa14-9eb63ad40ace}",
  "image-picka@eight04.blogspot.com",
  "jid1-HdwPLukcGQeOSh@jetpack",
  "foxfilter@inspiredeffect.net",
  "opentabsnexttocurrent@sblask",
  "bloodyvikings@ffs.bplaced.net",
  "jid1-CKHySAadH4nL6Q@jetpack",
  "{7e02d57a-276c-4e4c-9967-bf3fbe9527e4}",
  "{8cda9ce6-7893-4f47-ac70-a65215cec288}",
  "michal.simonfy@gmail.com",
  "skipredirect@sblask",
  "rt42fsdty645jIidD@jetpack",
  "contextMenuExtension@leo.org",
  "{07046613-1993-4b66-9dd1-9dd1ce581cb7}",
  "jid1-Kt2kYYgi32zPuw@jetpack",
  "brief@mozdev.org",
  "addon@darkreader.org",
  "images@wink.su",
  "{d0210f13-a970-4f1e-8322-0f76ec80adde}",
  "default-bookmark-folder@gustiaux.com",
  "copyplaintext@eros.man",
  "{087ef4e1-4286-4be6-9aa3-8d6c420ee1db}",
  "linkgopher@oooninja.com",
  "{0d3afca0-aedf-491f-b0f9-9ffc22113ea8}",
  "{6d85dea2-0fb4-4de3-9f8c-264bce9a2296}",
  "googlenotrack@dirtylittlehelpers.com",
  "{b9acf540-acba-11e1-8ccb-001fd0e08bd4}",
  "{a9c2ad37-e940-4892-8dce-cd73c6cbbc0c}",
  "note-taker@r01",
  "juraj.masiar@gmail.com_ScrollAnywhere",
  "clearcache@michel.de.almeida",
  "addon@minimalist.com",
  "textMarker@underFlyingBirches.org",
  "worldwide@radio",
  "{580efa7d-66f9-474d-857a-8e2afc6b1181}",
  "firefox@getstencil.com",
  "{b3e677f4-1150-4387-8629-da738260a48e}",
  "{a138007c-5ff6-4d10-83d9-0afaf0efbe5e}",
  "@searchengineadremover",
  "rf-firefox@siber.com",
  "adguardadblocker@adguard.com",
  "{5556F97E-11A5-46b0-9082-32AD74AAA920}",
  "firefox-addon@myki.co",
  "{7223a9b6-2c1b-4a06-bb96-6f28de45ab32}",
  "{6b938c0c-fc53-4f27-805f-619778631082}",
  "@wikipediacontextmenusearch",
  "searchsite-we@DW-dev",
  "{be8f6f90-2079-4e84-ac5c-13e6af2b48d1}",
  "mail@quick-buttons.de",
  "jid1-SmvuJ9Cq3Cx13w@jetpack",
  "foxytab@eros.man",
  "{75638015-9a0b-4db7-a297-6f962cdc3910}",
  "new-tab-tweaker@rharel",
  "{f7f203e0-9d1d-4557-891f-9865877c5b48}",
  "{e981cbfb-2e31-4be3-85ce-c4a058a38f94}",
  "{ec9d70ea-0229-49c0-bbf7-0df9bbccde35}",
  "{11a68c03-baa3-41fb-869c-5172c4c4dd2e}",
  "wappalyzer@crunchlabz.com",
  "{1b1e6108-2d88-4f0f-a338-01f9dbcccd6f}",
  "shpassword@shpassword.fr",
  "{01b66b2d-ff23-4226-a0b0-8d0fe57438b7}",
  "{beb1b1c0-32b9-47d8-bbd1-f65bed4e7c22}",
  "keefox@chris.tomlinson",
  "adblockultimate@adblockultimate.net",
  "izer@camelcamelcamel.com",
  "jid1-PBNne26X1Kn6hQ@jetpack",
  "@tmetric",
  "production@gemshelf.com",
  "{73a6fe31-595d-460b-a920-fcc0f8843232}",
  "{60f82f00-9ad5-4de5-b31c-b16a47c51558}",
  "{7e79d10d-9667-4d38-838d-471281c568c3}",
  "private-bookmarks@rharel",
  "jid1-5Fs7iTLscUaZBgwr@jetpack",
  "{c0e1baea-b4cb-4b62-97f0-278392ff8c37}",
  "tineye@ideeinc.com",
  "glitterdrag@harytfw",
  "{f73df109-8fb4-453e-8373-f59e61ca4da3}",
  "{1018e4d6-728f-4b20-ad56-37578a4de76b}",
  "soundfixer@unrelenting.technology",
  "printedit-we@DW-dev",
  "amptra@keepa.com",
  "{e2f1ddf8-5790-40d3-b9d5-c264a21e9314}",
  "{63d150c4-394c-4275-bc32-c464e76a891c}",
  "woop-NoopscooPsnSXQ@jetpack",
  "jid1-ZAdIEUB7XOzOJw@jetpack"
];

const searchTerms = [
  "adblock",
  "ublock",
  "vpn",
  "flash",
  "youtube",
  "idm",
  "java",
  "download",
  "youtube downloader",
  "ad block",
  "lastpass",
  "video downloader",
  "video",
  "firebug",
  "addblock",
  "video download",
  "translate",
  "anonymox",
  "adblock plus",
  "adblocker",
  "youtube download",
  "ublock origin",
  "adobe",
  "翻译",
  "pdf",
  "ad blocker",
  "noscript",
  "ghostery",
  "flash player",
  "browsec",
  "downloader",
  "proxy",
  "adguard",
  "ad",
  "block",
  "adobe flash",
  "add block",
  "download helper",
  "adb",
  "dark",
  "translator",
  "VPN",
  "internet download manager",
  "downloadhelper",
  "mp3",
  "youtube mp3",
  "переводчик",
  "shockwave flash",
  "google",
  "vk",
  "shockwave",
  "hoxx",
  "IDM",
  "https",
  "add blocker",
  "abp",
  "traductor",
  "silverlight",
  "video download helper",
  "screenshot",
  "adobe flash player",
  "hola",
  "add",
  "Shockwave Flash",
  "themes",
  "user agent",
  "cookie",
  "facebook",
  "honey",
  "downthemall",
  "instagram",
  "vlc",
  "download youtube",
  "youtube video downloader",
  "whatsapp",
  "privacy badger",
  "1password",
  "dashlane",
  "download video",
  "gmail",
  "zenmate",
  "flashgot",
  "google translate",
  "webrtc",
  "adblok",
  "video downloadhelper",
  "no script",
  "pocket",
  "addblocker",
  "speed dial",
  "flash video downloader",
  "user",
  "tampermonkey",
  "savefrom",
  "https everywhere",
  "selenium",
  "imacros",
  "ADBLOCK",
  "Adblock",
  "last pass"
];

console.log(
  "Search term rank | Search term | Number of search results | Number of TAAR results | Number of top 10 non-TAAR results"
);

const termData = {};
let termCount = 1;
for (let term of searchTerms) {
  termData[term] = { term, rank: termCount };
  termCount++;
  rp({
    uri: `https://addons.mozilla.org/api/v4/addons/search/?app=firefox&appversion=67.0&platform=mac&q=${urlencode(
      term
    )}&lang=en-US&page_size=50`,
    json: true
  }).then(data => {
    const results = data.results;
    let count = 1;
    let taarCount = 0;
    let nonRecommendedTop10 = 0;

    for (let addon of results) {
      const isWhitelisted = taarAddons.includes(addon.guid);
      if (isWhitelisted) {
        taarCount++;
      } else {
        // not recommended add-on
        if (count <= 10) {
          nonRecommendedTop10++;
        }
      }
      // if (isWhitelisted) {
      //   console.log(
      //     `${count} | ${addon.name} | ${taarAddons.includes(addon.guid)}`
      //   );
      // }
      count++;
    }
    termData[term] = {
      ...termData[term],
      results: results.length,
      taarCount,
      nonRecommendedTop10
    };
    // console.log(
    //   `${termCount} | ${term} | ${
    //     results.length
    //   } | ${taarCount} | ${nonRecommendedTop10}`
    // );
    console.log(termData[term], ",");
  });
}
