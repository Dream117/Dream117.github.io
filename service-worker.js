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
    "revision": "97099549656e51cf484f6085a29978de"
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
    "url": "assets/js/12.21ced782.js",
    "revision": "18dc333ff81e24c1e94e5539cf6cc274"
  },
  {
    "url": "assets/js/13.d77ce936.js",
    "revision": "6d01bb857e9f6f76f8ce877dcba60b5f"
  },
  {
    "url": "assets/js/14.5eaf7fc7.js",
    "revision": "2c370f921572da1c8a5a2f737fce5ea0"
  },
  {
    "url": "assets/js/15.447cf771.js",
    "revision": "fa25c40cda304e2bc0441071cdba79af"
  },
  {
    "url": "assets/js/16.2dfcc019.js",
    "revision": "f1a5ceffe3cb9147f59f01c5658b2d5e"
  },
  {
    "url": "assets/js/17.1a2c1ecd.js",
    "revision": "9e03087b3f532f65b42b9202be0e7af8"
  },
  {
    "url": "assets/js/18.403ab48a.js",
    "revision": "d694268519b57a4802a37a1900aa9515"
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
    "url": "assets/js/app.447f3acb.js",
    "revision": "555ce746f1e9d39c8cbc8be61dd2f9b6"
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
    "revision": "96eaa97c93be69147ffa7c1486c467a3"
  },
  {
    "url": "categories/java/index.html",
    "revision": "b0b2dfcfdfd7fe76593f97e690d3fa0f"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "411cbca800ab432966c9b8c21b8108c0"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "4ce6aa68e9255b1b3512ee90e0dfbaca"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "6a9ad9005e2d17bcfca832ccb6bfc9e3"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "5c3a0807e47d7ff331bedf5c9434f5ae"
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
    "revision": "310e1b6d9d01904e0933af27d863b6f7"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "67d026b474378bc5e70df1da2909882f"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "900ba6a0f891971c542d0ebbcc07692f"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "073baf550d945843ffcbe7ae6b7a8561"
  },
  {
    "url": "tags/js/index.html",
    "revision": "e2650a827df9515b08b6e214bb95510f"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "49c9e8e4f9f89b1335d85ca729bcad07"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "7274656faca1f39c56c6260da9895983"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "e939f254316ffd025e640ff6a076bed2"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "8aca8965384c62bdd29ca5d3078b6211"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "a9f32fdc21befd53bea02412d1fe050b"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "0179e0777920e62943914f2522e80ede"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "0f272d4a286011b3dce5adc05eee9b4e"
  },
  {
    "url": "timeline/index.html",
    "revision": "f179787b17293bedc7e4febebd9e780c"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "269c8eb244aa73ca6bb6f24bba50a359"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "b9c32de144d034753ebdae6ba6057ee2"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "319029112ae30e4b368c6037755198f3"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "a29e6408e0681296f20d33bbe4fb889a"
  },
  {
    "url": "生活分享/life.html",
    "revision": "585f0403473f805340eb49d727675c73"
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
