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
    "revision": "805c102b8094fef7bea15de17b60265b"
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
    "url": "assets/js/13.96a942b4.js",
    "revision": "89a59d812d5feb559dc3667a1604850f"
  },
  {
    "url": "assets/js/14.e60abdc6.js",
    "revision": "5504a4fa3348702d83472fac6fe25f66"
  },
  {
    "url": "assets/js/15.90f8f2a4.js",
    "revision": "3d097ac94b958335283a9fd0d4514a4d"
  },
  {
    "url": "assets/js/16.bb453b97.js",
    "revision": "20a7b31b25467b64a1f078a3ea0667c1"
  },
  {
    "url": "assets/js/17.dec2b998.js",
    "revision": "ef8b7c8abaf185ebfcae13a321933298"
  },
  {
    "url": "assets/js/18.9956bf9f.js",
    "revision": "f0315758179c7e58145ed3f4ba7ef717"
  },
  {
    "url": "assets/js/2.0c13bc5c.js",
    "revision": "0ed91d102eca1d4bdec77de0e47dde68"
  },
  {
    "url": "assets/js/3.daccc062.js",
    "revision": "a9352ad615615fc2a6c5c2ab8133cd72"
  },
  {
    "url": "assets/js/4.71590b65.js",
    "revision": "00b4258e5a43eea3291684e40ec37eca"
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
    "url": "assets/js/9.112fc144.js",
    "revision": "3f9481d9bb976f48c52d2253b078fe15"
  },
  {
    "url": "assets/js/app.3333eef1.js",
    "revision": "0f752420bdab2593c8a98fb066f99a05"
  },
  {
    "url": "code/java/four.html",
    "revision": "888126b0aec5a654c51713d37f2111ef"
  },
  {
    "url": "code/java/index.html",
    "revision": "4f17591940ce61896249145f47fbc80b"
  },
  {
    "url": "image/hero.png",
    "revision": "c210616fdbaae893913c2d6425b4953e"
  },
  {
    "url": "image/p.png",
    "revision": "1b61a0938c8d8b754a8f753c871586b4"
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
    "revision": "cdc727ae702af60e054a3df02d7eeb18"
  },
  {
    "url": "operation/node.html",
    "revision": "2eadcfb63ce9325a08eaad810916d297"
  },
  {
    "url": "system/linux/docker/iperf3.html",
    "revision": "7e0d1f8dc1ba7ea5eb9169b5b561ba05"
  },
  {
    "url": "system/linux/docker/portainer.html",
    "revision": "cf6091627554a80ec434bc3021548dbc"
  },
  {
    "url": "system/linux/index.html",
    "revision": "373c9d3d8ad81926505f8267a2204f6c"
  },
  {
    "url": "system/linux/java/index.html",
    "revision": "d288f6c53646e7d2e300045e1cc02d99"
  },
  {
    "url": "system/windows/index.html",
    "revision": "a0835180fcd1de9f0dd7c7b9738c5ba3"
  },
  {
    "url": "system/windows/print.html",
    "revision": "f214d21379c375520338c69edc43485f"
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
