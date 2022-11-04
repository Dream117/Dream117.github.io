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
    "revision": "120bb994c656637c459ee4577f2d9fce"
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
    "url": "assets/js/14.68a1a284.js",
    "revision": "f754bd440574752dde5184c5efa90116"
  },
  {
    "url": "assets/js/15.447cf771.js",
    "revision": "fa25c40cda304e2bc0441071cdba79af"
  },
  {
    "url": "assets/js/16.131a043d.js",
    "revision": "77980ee985e85bc7ef25e57e082625c7"
  },
  {
    "url": "assets/js/17.f6dd119f.js",
    "revision": "f8bf5c88f9cd04152dd34f36961f89d7"
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
    "url": "assets/js/app.2ebc839b.js",
    "revision": "d17c9a1b9653996b17cc0211c73fe4a5"
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
    "revision": "8049516d64b6aac11f1f94259ec71beb"
  },
  {
    "url": "categories/java/index.html",
    "revision": "644fef2cb0400931baebb55e9668bdd8"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "05c2db49c8c5c9d0bbdf64c25c912182"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "758c5f93f69331e8a102a8689c1f7138"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "b51c9e8ac4a3c6fab819ff9ab08824c8"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "bd76617d5223fada1b089583fdebf002"
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
    "revision": "01e9a6a40cf5158b1d1ad06201429841"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "58b9ecf593aba1b7a9c8d043a181ab85"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "f19005a11f30e747a926fef147a4697a"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "4e6b2310e144bdd31d64fae79dd673bd"
  },
  {
    "url": "tags/js/index.html",
    "revision": "64a397f18d5e7876496d1b4376218ebc"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "d7fa27f36655860a1f8cb0503cbb805c"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "3d0f70c1cb41bc2efd6925b43664ca61"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "d9c1d4fb33a04387b1cf2e7e200acc63"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "4d94bd56f9a18b4357ac7b57d7b1a61a"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "7926a9c612511dd6733599abe6daa3f4"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "238a9f266932250912c0bf2a567206ca"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "d3f414a9f0a9378d9262c126152b59d4"
  },
  {
    "url": "timeline/index.html",
    "revision": "2d4b44107f864cc608c7e6b21f12b709"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "5ef5e84bc00ab6dd45a8b004a2400a5a"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "7d8df0cba00b8326038e5faa50469148"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "cce82b68cb428c126e3e48e96fb8a404"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "d11fb774124939555dd02c5683619a25"
  },
  {
    "url": "生活分享/life.html",
    "revision": "68deae6f6f98c6152b554782bb2cccbe"
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
