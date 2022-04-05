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
    "revision": "afc99963ba8ed4833a6798a99e9c1c9a"
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
    "url": "assets/js/16.1b42c849.js",
    "revision": "245e235d3106f8d7d36b3e94501534a6"
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
    "url": "assets/js/app.e30812a8.js",
    "revision": "154757dbc51b9a07b751b96329651a71"
  },
  {
    "url": "code/java/four.html",
    "revision": "7815e96263fa9e4a7d6305061d36ce4c"
  },
  {
    "url": "code/java/index.html",
    "revision": "5b3d9c8c96c39bae841af98e5e9791ef"
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
    "revision": "a437a8033f55099b1b2bdd3584bb9ec3"
  },
  {
    "url": "operation/node.html",
    "revision": "4f6ba0f1db3209788151908e76df0c8f"
  },
  {
    "url": "system/linux/docker/iperf3.html",
    "revision": "d9f74b7cf890c29e2520936f4c005626"
  },
  {
    "url": "system/linux/docker/portainer.html",
    "revision": "302151db2962096df34159ba1a01b4eb"
  },
  {
    "url": "system/linux/index.html",
    "revision": "847b274867e18ceec419409769d7f486"
  },
  {
    "url": "system/linux/java/index.html",
    "revision": "ea67aebd695ecc2e2184b3f69410aa3f"
  },
  {
    "url": "system/windows/index.html",
    "revision": "58c92616d11bc85fdcfaad01e7befeb4"
  },
  {
    "url": "system/windows/print.html",
    "revision": "f27304e60b2dbc875aae3e7ee606f328"
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
