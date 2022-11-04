/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "1dc331cbeff32a388f46ecb559eeda54"
  },
  {
    "url": "assets/css/0.styles.57064493.css",
    "revision": "bdfc107ffa09860922a6644b10cc5fcd"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.0b1ccf48.js",
    "revision": "b117d2bce8637e818a5a3e220a4c44a5"
  },
  {
    "url": "assets/js/10.7d3b4a8b.js",
    "revision": "e1675544558bf471cac5980848156ea9"
  },
  {
    "url": "assets/js/11.e31419be.js",
    "revision": "014f49a5e4cf80f1ef921b2a3622eac6"
  },
  {
    "url": "assets/js/12.7229ede6.js",
    "revision": "a27364c50c6c0aca0908e0bf9c223e2d"
  },
  {
    "url": "assets/js/13.d77ce936.js",
    "revision": "6d01bb857e9f6f76f8ce877dcba60b5f"
  },
  {
    "url": "assets/js/14.54678147.js",
    "revision": "cc6353588aaf3730546012d0bec820b8"
  },
  {
    "url": "assets/js/15.5b359dcc.js",
    "revision": "a9267e8b45fc33171454fc7a2266bae5"
  },
  {
    "url": "assets/js/16.2dfcc019.js",
    "revision": "f1a5ceffe3cb9147f59f01c5658b2d5e"
  },
  {
    "url": "assets/js/17.7bc3218e.js",
    "revision": "4f5927e7ad60a5ee25788ca5ed00f220"
  },
  {
    "url": "assets/js/18.e40715a5.js",
    "revision": "32a5f8ea1bf0cef421b33b6bffbb0016"
  },
  {
    "url": "assets/js/4.259631bb.js",
    "revision": "929d15f1eb637dd020d2e6d8a779329a"
  },
  {
    "url": "assets/js/5.3c7bc9ee.js",
    "revision": "08d857a37d6c21c269db029e29ed57f6"
  },
  {
    "url": "assets/js/6.783e34e1.js",
    "revision": "a74e582518f58eb1034fc855bc6b506c"
  },
  {
    "url": "assets/js/7.ad36110d.js",
    "revision": "1a29d50f75cd09087555e0c57dfcaf88"
  },
  {
    "url": "assets/js/8.e21f52f7.js",
    "revision": "711b16945cdd0d83ca3761f38fbfda74"
  },
  {
    "url": "assets/js/9.7fd376bc.js",
    "revision": "b43e8bd1a243d17dc15821e6e43dc6b5"
  },
  {
    "url": "assets/js/app.edad21cc.js",
    "revision": "7eda364b77161ba41a01d4ad3e33bead"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.1e73e504.js",
    "revision": "42c68ae816be8ddaeefbf779158d148b"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "64565de7b65793cdfefa4e8c1edcaf9d"
  },
  {
    "url": "categories/java/index.html",
    "revision": "2dea7a82f55e12fffe8596d7600949c9"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "7279335167f2994d0c5b4199f64599b3"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "0451996808ebbf5e5b033afa48d56b48"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "5ff8f2d36e4b97f505915f4ab0d3aa73"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "931092c3cd1cf61786dac1ec11b1da13"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "8573ff9d815ca68c08d74271562a5c40"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "dc57f19364bedf8129392939558663c4"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "552ed3164bcb899ce44103713c69501d"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "0d5aea5b745fd04a628ec293c00d7672"
  },
  {
    "url": "tags/js/index.html",
    "revision": "4906a58f9e8dbd8561e7cc37f4f90628"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "ede5c7be66fae662bbb1fca187cd2789"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "ee3f23818188ed8c55dd5c45055de3e5"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "9c02f683de13cb9c33ffdda18c18c416"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "a494018af3b4150af5d35c11a4d63f40"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "18ebe6a9b18e030e78a623640845009c"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "e77592b647788f1a6c645b687c6008d1"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "2fb816d6ce69cf7605e07191f97f781f"
  },
  {
    "url": "timeline/index.html",
    "revision": "0c1aa9a94f151f95a2ea267b42c8df9e"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "c3496f06bf813bd80b9834343827c2d7"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "13934dd5bbd76eebfb08d74732927f03"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "4f45a51c944e8fb1321eff87c759af35"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "f0229d09a15d5dee1193c3d2b2859778"
  },
  {
    "url": "生活分享/life.html",
    "revision": "6b0ae7b75039734e910a53421b666ef5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
