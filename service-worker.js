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
    "revision": "0197324bf8ab10b4aee410a047d1fa63"
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
    "url": "assets/js/12.b619f237.js",
    "revision": "b12133222c4ee3d7aba9d713d7c6e1bf"
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
    "url": "assets/js/15.7da432ba.js",
    "revision": "4af495968cb4e72dfefdb55963743c7f"
  },
  {
    "url": "assets/js/16.afdd4ace.js",
    "revision": "befece637990c090cf157dbdbf7d2f81"
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
    "url": "assets/js/app.a0ab5bd3.js",
    "revision": "d0e15ecdfaa5e5ec4588c292700244a7"
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
    "revision": "d5f27694635f3738ced51a8a6453ba91"
  },
  {
    "url": "categories/java/index.html",
    "revision": "1411b75ba7337ca1776bb9f93c1e9ace"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "d8da5d487fd0aba2ed10ed92ca277bac"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "87f57facda8428f32d7ba6026808c14e"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "64255e4b67afd18a6a43c95f7b70db55"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "b0bbe0042f17a87ee9dac049f944c120"
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
    "revision": "2004050018419664977b6a499d028904"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "f6bd231cc2e15dcb69229a3fc72f30a6"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "105ce19f89afb3bb5c52d650ba1f9ce2"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "01906e6a86c50eb9162a3998b189ae25"
  },
  {
    "url": "tags/js/index.html",
    "revision": "ac73fce1dd43abd22a0f78eb865955a9"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "3702abbc5b0b37a0087a28babf17a607"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "c051fb1785145aa7cbd7b22b7c93dfb5"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "da24f120a29c41f125d451bfc26c2bc7"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "e9d16d09dc54dba8be18127df0f4ba78"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "07437cf5bab04592290e037d2b411359"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "d7cc95e7db8695bc1dfcdb0966e89ecf"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "375aaa643d1b4bb5a76de9ed3fc8fc37"
  },
  {
    "url": "timeline/index.html",
    "revision": "e09bc113fa231f92ea54fe2805198b09"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "f3ecd7135450e2f8c9d5fb0bb0b20236"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "e0ed3dd3f4e021fa4ff9cee18769135f"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "fa98b544519f3f8b8dab91062582757e"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "70a865ab62c2ca6a8d086c91897fc99f"
  },
  {
    "url": "生活分享/life.html",
    "revision": "0ec816ad379721c9bbd0d36e504dd158"
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
