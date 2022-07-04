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
    "revision": "6c3c83889ab77a14a2aef2bea93ea95b"
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
    "url": "assets/js/25.1579fb64.js",
    "revision": "c3ed9dcdca49406e52c28400150563f7"
  },
  {
    "url": "assets/js/26.ddcae23a.js",
    "revision": "cb9efc914a77eeeb9116d74317c97082"
  },
  {
    "url": "assets/js/27.1bbf2a91.js",
    "revision": "1332788bb435425b4d71138208de03ba"
  },
  {
    "url": "assets/js/28.14b52309.js",
    "revision": "4a15e10950db1acb9339344aaee8a984"
  },
  {
    "url": "assets/js/29.ba040c98.js",
    "revision": "4f1f9cfe4ccb0bee053d6a0ec5b5c595"
  },
  {
    "url": "assets/js/3.25f41d6b.js",
    "revision": "288376dda7a6f9ea1ecbdc20d35d3b8e"
  },
  {
    "url": "assets/js/4.21fc1ee5.js",
    "revision": "3c6a83537775c5a5f2f26dc5cbfc2b92"
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
    "url": "assets/js/app.d9174e3a.js",
    "revision": "f17a2ee91e206c3d0b3792633cf0c268"
  },
  {
    "url": "code/java/four.html",
    "revision": "bef4b95b73be5af1c2a97ddc5756f2b1"
  },
  {
    "url": "code/java/index.html",
    "revision": "4097aefe1da5e87f0ae4b4dad4d7edc0"
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
    "revision": "38bec8b7bb43477c7792821d2ab52508"
  },
  {
    "url": "operation/node.html",
    "revision": "78643ca61d3ec452ab26f0db211e2948"
  },
  {
    "url": "system/linux/docker/images/iperf3.html",
    "revision": "75a67ba0aa65d2c3df11ea351bbbacae"
  },
  {
    "url": "system/linux/docker/images/portainer.html",
    "revision": "e86a36c12a91e7d73d80618084ea379b"
  },
  {
    "url": "system/linux/docker/index.html",
    "revision": "b89381f1d42fe4dd81e0825f5d090a5e"
  },
  {
    "url": "system/linux/docker/operator/batched.html",
    "revision": "72c9ce3a44d00757d84b8c700b67736c"
  },
  {
    "url": "system/linux/docker/operator/remote.html",
    "revision": "e21aec0883a60f3d6d4f28f6e3e96e5f"
  },
  {
    "url": "system/linux/docker/problem/commonProblem.html",
    "revision": "4a1cb81889a4ed69673d7c52fe3237c1"
  },
  {
    "url": "system/linux/index.html",
    "revision": "c355612c27377571ecd2b3674437307c"
  },
  {
    "url": "system/linux/java/jdk.html",
    "revision": "a435a86e4fb1848f310ab5ff95331498"
  },
  {
    "url": "system/linux/java/maven.html",
    "revision": "ac5e124a4ad82a3bdcc455aa50137c16"
  },
  {
    "url": "system/linux/java/node.html",
    "revision": "8406569fb53e70c8a419722bed1c604e"
  },
  {
    "url": "system/macos/index.html",
    "revision": "ea2f7fd0a79efe3df6098d7ac9b3ea24"
  },
  {
    "url": "system/macos/screen.html",
    "revision": "a674411482ecdbe48187bf5ec9c134be"
  },
  {
    "url": "system/synology/drive.html",
    "revision": "6fd724dbe8fde73d67509bc45babf722"
  },
  {
    "url": "system/synology/index.html",
    "revision": "b22ada5065c9713c945d9fd726c33b08"
  },
  {
    "url": "system/synology/root.html",
    "revision": "80bd4955afd04a02b6dc71106b8cea52"
  },
  {
    "url": "system/windows/index.html",
    "revision": "334ee834d2bffbe28940ace9396f791b"
  },
  {
    "url": "system/windows/print.html",
    "revision": "769d1b4864c681e8763f5b7965b4c096"
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
