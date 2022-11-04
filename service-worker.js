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
    "revision": "a9b0aeb86d74302ac1fbe0a9ae28c013"
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
    "url": "assets/js/14.0bf76212.js",
    "revision": "ccc00562676ceecca555568750ca99a8"
  },
  {
    "url": "assets/js/15.ee31de56.js",
    "revision": "556a08b194bac7e4590106cf77c70c50"
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
    "url": "assets/js/app.359315fe.js",
    "revision": "94cd243e48ed4f9406e10c0b84029020"
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
    "revision": "cd02ee22d2aeb1d65f7f34d14355cd74"
  },
  {
    "url": "categories/java/index.html",
    "revision": "adbe786d4e25874478b164dbe4a8d0f9"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "5643316e51ee97818c1630508c188edb"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "d948da8a6c2d5a330e7c8087dc2e473e"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "2b83e6ce5dbf8da08809331a7ca21a43"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "4c764d2d95d16b127bc68804ddaa5c52"
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
    "revision": "af4da478c6404ffc518a45310bd95911"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "523205540be0048c42af2c82c151788a"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "9b7659024e78e87c758e82021fb76e69"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "7a9cf1aa9c6182baa1e3fc090ff42acc"
  },
  {
    "url": "tags/js/index.html",
    "revision": "2f12ef743262070249ea2b735c359817"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "9db9b2cd670f636b835f843e6cb4b42b"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "4eeaccd721e560f6187e8f4e054b9739"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "504bb79c0358851f3df44a4e58ce5db2"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "05c33ff9227288679877d4c14c2105ca"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "e04358f96c72f3b7de4ea878af095b8e"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "17ed472caa49defa16d4d90e283a90fc"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "daed1ab0effa5742ed9020df0e7f3f71"
  },
  {
    "url": "timeline/index.html",
    "revision": "403e7592ea2d710f695c929153fdcdf8"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "a0225cb625499a703a94460e0424481c"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "0b3c722495dcda8b18b2c6f9389c0fe8"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "474f751f3588183be4a5ea9086fe646e"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "26c0676a1657e4e87c80be18c5db668b"
  },
  {
    "url": "生活分享/life.html",
    "revision": "e6b352ab7b72a277211c1ea0cbc11d77"
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
