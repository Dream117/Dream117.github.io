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
    "revision": "7a75205757cfeb250f3d98b66ec722b2"
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
    "url": "assets/js/12.a79ee855.js",
    "revision": "9784f35b189eff91f9a625fd54ef5545"
  },
  {
    "url": "assets/js/13.a912365b.js",
    "revision": "be3611cdff46e36d7057249212152dc3"
  },
  {
    "url": "assets/js/14.badadac8.js",
    "revision": "9feaf2eb6fe5df0aed97eba69669a278"
  },
  {
    "url": "assets/js/15.447cf771.js",
    "revision": "fa25c40cda304e2bc0441071cdba79af"
  },
  {
    "url": "assets/js/16.afdd4ace.js",
    "revision": "befece637990c090cf157dbdbf7d2f81"
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
    "url": "assets/js/app.08f54283.js",
    "revision": "d0163b7ff63bae91d31cb52d2acbf256"
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
    "revision": "241c594bca9feee8752cb29621b49929"
  },
  {
    "url": "categories/java/index.html",
    "revision": "9bfd13dd5049b2b3ebea4a7ad853e0a5"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "651aeefc6b836cb049557b98dbcde9cb"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "8e931a15c840a1cb7526363fb04fb246"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "1d5e16e2c5bd804d178d2bd47df609e6"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "92ce9317e111c765fc6cbc6c9664f7ae"
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
    "revision": "83c6ac221bbd60f187517074cc6cca5b"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "82edfaddebcc47c97a03a10ac0e1db20"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "89192bf47a00a7aceb7e2603cde43de4"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "2ff73963ebb758dd058e53bb4661c0b5"
  },
  {
    "url": "tags/js/index.html",
    "revision": "85bdc982ec0e9f26ce0a193c91aea372"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "93202c4ca18925383866ae758e7816c1"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "3563207128851e511c0fd614e4450a93"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "adb9cc3e83ad3cb587264d4b0d15dc4d"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "9434189794650e04deab1e0c8a5f1e14"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "f0625dd947a76547c289a65898fb2e81"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "2ff357df0e5a07477ab119c06c6fa52c"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "57d23f28b555afd9ea3bed1c116a838c"
  },
  {
    "url": "timeline/index.html",
    "revision": "a35fc05bf3d04f362dad9e6636ec6f1d"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "09e851bcd2c0fba849f790f32797e8a8"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "52a300ab63e642c6b8ee9029b3657bbb"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "ef0b9e6869581a56674af1002ca8bbf4"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "494c6b81b24afbe4ba0118fc4e095ae5"
  },
  {
    "url": "生活分享/life.html",
    "revision": "9ec6bd0004801c5f7a7bd01975955589"
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
