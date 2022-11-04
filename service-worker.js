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
    "revision": "a85cfc4228f50c34a6e049aa57f7a34f"
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
    "url": "assets/js/12.3f241eeb.js",
    "revision": "2558768c5b23f2850eb3b56601acdc30"
  },
  {
    "url": "assets/js/13.a912365b.js",
    "revision": "be3611cdff46e36d7057249212152dc3"
  },
  {
    "url": "assets/js/14.d38ad00d.js",
    "revision": "960ab8745b60c9eee2f3b9b4b7271e83"
  },
  {
    "url": "assets/js/15.7da432ba.js",
    "revision": "4af495968cb4e72dfefdb55963743c7f"
  },
  {
    "url": "assets/js/16.131a043d.js",
    "revision": "77980ee985e85bc7ef25e57e082625c7"
  },
  {
    "url": "assets/js/17.7bc3218e.js",
    "revision": "4f5927e7ad60a5ee25788ca5ed00f220"
  },
  {
    "url": "assets/js/18.526efccc.js",
    "revision": "e5de0936c508067e90878438b7492fa1"
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
    "url": "assets/js/app.1f20ee63.js",
    "revision": "ea7ec628325af33a93e02b8951e41021"
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
    "revision": "5374f5699c7e00743d6c8223a271ddca"
  },
  {
    "url": "categories/java/index.html",
    "revision": "514223b1837634f7e5ab9bb72d314152"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "c5c7ec2d02d5d75c7b44bc4acc54ffc8"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "ae7f7232b95d000b7c35bef943e8ab2b"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "44834181470841fb987581c3ac4c5f3e"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "ae5db702875f2246121b49a89d45c0f4"
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
    "revision": "43a1951449bba6d58c4f03fb2000053d"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "5294b4cb356922b8a48ac63b1ba6d44c"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "544bb92190315707beb3f9dc6f01c1e5"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "33ec0ddb68200a937bcfe8aef131a548"
  },
  {
    "url": "tags/js/index.html",
    "revision": "be089aee0df042dc55f3efd804a979d1"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "9359ee8b401e6897e0d7a1c3b05e1b33"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "a0e7797d608d08ec49cc8bde93bb6964"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "8645c5cfebad72b198aa6a315ffd8f2e"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "918e204882b8d7aeac2ec85e191bb832"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "6cf75a5a1285dd16769e3c37ba44e417"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "2a87ad82973c933741d1749484fe9737"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "709f4bd8bbb01a9c2141c9d2bf8aaa4e"
  },
  {
    "url": "timeline/index.html",
    "revision": "4a556c62c5fcf1cb1d90e93c06c7b1f0"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "8e79d8fced4e844aede4afa25597a0f4"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "16fb4dd63deb5c5c131d40de843c20ec"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "ddb5123dfd927d5f26395d498e858889"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "6d005cabf06e48c8f14faa194be19de0"
  },
  {
    "url": "生活分享/life.html",
    "revision": "9f6b3d09f84c32c5ccb122688b11fbe7"
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
