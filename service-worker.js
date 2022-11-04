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
    "revision": "ef3b4b8fec4a3a3c33f0928da4b99722"
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
    "url": "assets/js/13.a912365b.js",
    "revision": "be3611cdff46e36d7057249212152dc3"
  },
  {
    "url": "assets/js/14.ec089513.js",
    "revision": "1d83c7a7ebdbeefdd0819189a8f4110c"
  },
  {
    "url": "assets/js/15.0675c2c4.js",
    "revision": "7b8054856375ad20b24dac641d4f4749"
  },
  {
    "url": "assets/js/16.4a45218f.js",
    "revision": "d033044aaec6b34224e8ed3d4b86549a"
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
    "url": "assets/js/app.fc2434da.js",
    "revision": "71bd291c4b7282ace9f564f74234160e"
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
    "revision": "fa6dd2e9dfa18f335c91540ca943a354"
  },
  {
    "url": "categories/java/index.html",
    "revision": "e20698686f93c0053353849b462ef693"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "07e08cb0a6fc42acb5d233491f6d2163"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "03499cb6c25529292e027779701c2867"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "097d008e115c3ed7d261f0975327bdd9"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "371cc6fe5936cf97731d0d2b17b045d1"
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
    "revision": "3cb98fbdfa5ab8ee62324b8b5f1ef0f4"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "ac9866e6fe2fd60f85d470b1af373649"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "31c92b2f3f217c68f819af4fd0ab77a5"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "4d6be8fcfafac4eec845af46835ffd01"
  },
  {
    "url": "tags/js/index.html",
    "revision": "d18bafb1f31d3c64acfa87a1ff698ca7"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "0adb61805de9664594e0ed47280c4603"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "fd1f85a802a1f51b61b5ef22a16bd8c7"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "79e8c5cb399b77164e2e77a7a8c4269f"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "930bcb1bb4e79f094d6a9eb3d7f1a121"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "e0f3169f47a4cfb306f81f585ed0b23a"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "b995cf0f6067b6832829b90da15c344a"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "3d1b171f104f92a63c94972a1f795ffb"
  },
  {
    "url": "timeline/index.html",
    "revision": "c91a2253b6b642f467f5c258cb483e5f"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "a389992120243a82d009de4039bd9fb9"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "485ac5d18441fcc5e46534194940dba8"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "b48f27df724f8e4c8a947b1553b339a4"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "941c2b71750046e49190938151f621d0"
  },
  {
    "url": "生活分享/life.html",
    "revision": "83190696f9814c055a486e366cfdc39d"
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
