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
    "revision": "602b5c2b24b96417cc13d30f2b166035"
  },
  {
    "url": "assets/css/0.styles.97ce954e.css",
    "revision": "d1e2d1c61e6f0bd4f09d5c9a18d01375"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b46f1795.js",
    "revision": "34d6cfdb9cea12f1066537e88df6fde4"
  },
  {
    "url": "assets/js/11.0aba0650.js",
    "revision": "cb327d244b62e0314f2f48c9be24d0b5"
  },
  {
    "url": "assets/js/12.2bda8a0a.js",
    "revision": "05611ce3fec7789641b4c4236d62bf1d"
  },
  {
    "url": "assets/js/13.6578df2d.js",
    "revision": "5cfd91d37c1287f6cb89e778da00d165"
  },
  {
    "url": "assets/js/14.40c63cb4.js",
    "revision": "f782cb19ba79e70a74583743605beee8"
  },
  {
    "url": "assets/js/15.f712f6e7.js",
    "revision": "04c1c0f73a9c0b64ccf44f658e7d07ef"
  },
  {
    "url": "assets/js/16.ca54ff30.js",
    "revision": "89ba7eca736d2fed750fc9300cdea42d"
  },
  {
    "url": "assets/js/17.caa54f85.js",
    "revision": "f2bb80a2b13b1e1ba4fe9396d0dd69da"
  },
  {
    "url": "assets/js/18.a173b51a.js",
    "revision": "3c3647e8a87a77c817b655e86ee50fa0"
  },
  {
    "url": "assets/js/19.d39be13e.js",
    "revision": "bd907955a6eeaca3b967f4b618975ab6"
  },
  {
    "url": "assets/js/2.3b47f81a.js",
    "revision": "99c9567f34fe0b0784bbf7c675742814"
  },
  {
    "url": "assets/js/20.ad4975a2.js",
    "revision": "a1945e3fc72c0c4a6128ff96c2dc5976"
  },
  {
    "url": "assets/js/21.4a7ac254.js",
    "revision": "79be76d3e3b5da52f560fa7388f2221e"
  },
  {
    "url": "assets/js/22.de4156ad.js",
    "revision": "55c0c444be4fde80bb2d33858b866666"
  },
  {
    "url": "assets/js/23.66972333.js",
    "revision": "b02ac4c0e8ec8375446e1e328fbda2d3"
  },
  {
    "url": "assets/js/24.51e4c6d7.js",
    "revision": "ad834a05641644443fd243352968f918"
  },
  {
    "url": "assets/js/25.36c2f33a.js",
    "revision": "12ee612e30d3f85ca905765170ec7189"
  },
  {
    "url": "assets/js/26.d5caddb3.js",
    "revision": "36ed68c0d810ae52ff77677968c2e353"
  },
  {
    "url": "assets/js/27.e82b09cf.js",
    "revision": "7c78a14ed9054b388559e35e607d8332"
  },
  {
    "url": "assets/js/3.25f41d6b.js",
    "revision": "288376dda7a6f9ea1ecbdc20d35d3b8e"
  },
  {
    "url": "assets/js/4.d794c909.js",
    "revision": "3014a1a75a27e92df03f72a8aec161e3"
  },
  {
    "url": "assets/js/5.0e8ca067.js",
    "revision": "9878067d04af35e9b0ffbdf820e3fcee"
  },
  {
    "url": "assets/js/6.1679e0fb.js",
    "revision": "9605e83eb9d65f078827a25391f61554"
  },
  {
    "url": "assets/js/7.b7769c5c.js",
    "revision": "13c1567e647ba2cb349375d7841780b7"
  },
  {
    "url": "assets/js/8.040883fc.js",
    "revision": "3c8d971d566a190e27194243018283f7"
  },
  {
    "url": "assets/js/9.f0222498.js",
    "revision": "f98c571fa98fe7e78d9c0edf4a6eb561"
  },
  {
    "url": "assets/js/app.a7e103da.js",
    "revision": "5aea700d299693c56378717c578bb593"
  },
  {
    "url": "code/java/four.html",
    "revision": "50a0cf30e5c14e14219f287e3e55d4e4"
  },
  {
    "url": "code/java/index.html",
    "revision": "6e1e079e3db9b8910167354ed7b67195"
  },
  {
    "url": "image/hero.png",
    "revision": "c210616fdbaae893913c2d6425b4953e"
  },
  {
    "url": "image/linux/docker/iperf3/client.png",
    "revision": "ba8c97fa1847a998107033acf4005fa8"
  },
  {
    "url": "image/linux/docker/iperf3/execute.png",
    "revision": "0a07f0b04957d7abe4f6dff1c943f71b"
  },
  {
    "url": "image/linux/docker/iperf3/server.png",
    "revision": "4552e08135a8c77d45ae642e06165459"
  },
  {
    "url": "image/linux/node/download.png",
    "revision": "a69c4beb4e65a35ecaa0169accf83359"
  },
  {
    "url": "image/linux/node/node.png",
    "revision": "fcba63ac5ba38545843af77de6533245"
  },
  {
    "url": "image/macos/cpu.png",
    "revision": "cfd9c50b91f9779c9bd8e4cdcd89f087"
  },
  {
    "url": "image/p.png",
    "revision": "1b61a0938c8d8b754a8f753c871586b4"
  },
  {
    "url": "image/synology/ds1821+.png",
    "revision": "aac2d193758ce213c277b9b205a0bdd2"
  },
  {
    "url": "image/windows/regedit/img.png",
    "revision": "ce921e0be769afcf1af78839a4e62d10"
  },
  {
    "url": "image/windows/regedit/regedit.png",
    "revision": "54fea318504d10f103d737f87b19da87"
  },
  {
    "url": "image/windows/regedit/select.png",
    "revision": "7017248752fc6e28bf118e1229047abd"
  },
  {
    "url": "image/windows/regedit/update.png",
    "revision": "ec4c943964de020a417ecbff6d0ce05e"
  },
  {
    "url": "index.html",
    "revision": "fd070a8f0b201065e0fdef3896e4f9a2"
  },
  {
    "url": "operation/node.html",
    "revision": "9f4eb0910849a27dac7d9f1ffb4198d4"
  },
  {
    "url": "system/linux/docker/images/iperf3.html",
    "revision": "1bb898c2083e14e9bee219987f5d3f81"
  },
  {
    "url": "system/linux/docker/images/portainer.html",
    "revision": "0f691b58667645c74d7e365360ad4f82"
  },
  {
    "url": "system/linux/docker/index.html",
    "revision": "8ba61b8845d483f0bcf5cf38c6bc378a"
  },
  {
    "url": "system/linux/docker/operator/batched.html",
    "revision": "0a68a87133c2e88c0a522206f1225f89"
  },
  {
    "url": "system/linux/docker/operator/remote.html",
    "revision": "a177578f2c8d9406639102ec53e36c42"
  },
  {
    "url": "system/linux/docker/problem/commonProblem.html",
    "revision": "610fe1f1953ad5732851d95353e26135"
  },
  {
    "url": "system/linux/index.html",
    "revision": "9524009a7ce53ec91be7c14725eff102"
  },
  {
    "url": "system/linux/java/jdk.html",
    "revision": "4f40fd6325dda88660e973a70a2829c4"
  },
  {
    "url": "system/linux/java/maven.html",
    "revision": "bf2ac1949a8b8c72239826e764faa107"
  },
  {
    "url": "system/linux/java/node.html",
    "revision": "06e7c33e45dfd585cdfc951b62fec737"
  },
  {
    "url": "system/macos/index.html",
    "revision": "d90cfd51ff424813fdb7e66d9451aaf2"
  },
  {
    "url": "system/macos/screen.html",
    "revision": "ac89cda902a35e9d14aaf68e706fd6e0"
  },
  {
    "url": "system/synology/index.html",
    "revision": "f6da58fe8f4e6a167f9fb994653eb330"
  },
  {
    "url": "system/windows/index.html",
    "revision": "2dc788d04c631644e0eb8e293939b4eb"
  },
  {
    "url": "system/windows/print.html",
    "revision": "946e58befd1069d92ce49f1d8c62b3e5"
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
