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
    "revision": "f6da55163fc8ba27bf8fdb555493f50d"
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
    "url": "assets/js/16.60f3132d.js",
    "revision": "466756caa4b6ff17bb687cb9fe4b8412"
  },
  {
    "url": "assets/js/17.104ec9c9.js",
    "revision": "25796385df721e6d1ec54a640b528843"
  },
  {
    "url": "assets/js/18.90d7be71.js",
    "revision": "68810bfb0ad708ffe3c096a9874fde6e"
  },
  {
    "url": "assets/js/19.40e89c49.js",
    "revision": "ea262466fdf9973581f8b5fdf50a74b8"
  },
  {
    "url": "assets/js/2.9088e4f2.js",
    "revision": "44e0a579ca32fc67b0fbc4805010e02d"
  },
  {
    "url": "assets/js/20.f75b8c1b.js",
    "revision": "139f33b84e216683baf3892b4c95cf8a"
  },
  {
    "url": "assets/js/3.0b786b6c.js",
    "revision": "e12cd0c28b83b99cc7e99ce92e034dd5"
  },
  {
    "url": "assets/js/4.f368109f.js",
    "revision": "1a46494f03665f342130d33b02b9dd96"
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
    "url": "assets/js/app.a4bf849f.js",
    "revision": "2695b2d8ec08c717a00179e2edc976ed"
  },
  {
    "url": "code/java/four.html",
    "revision": "a452f2348215749117abe7acb0e170e8"
  },
  {
    "url": "code/java/index.html",
    "revision": "905008aac9b168740e4d4274894b73e6"
  },
  {
    "url": "image/hero.png",
    "revision": "c210616fdbaae893913c2d6425b4953e"
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
    "revision": "2b18feef26581fc10dcdd10ed3a959a0"
  },
  {
    "url": "operation/node.html",
    "revision": "a7dc36dea83e76f775c26d7ff024bca8"
  },
  {
    "url": "system/linux/docker/iperf3.html",
    "revision": "69f6b5efaaec74d3c5fe9df6e9f988c7"
  },
  {
    "url": "system/linux/docker/portainer.html",
    "revision": "8bc94c248a14db441f55f4797194508d"
  },
  {
    "url": "system/linux/index.html",
    "revision": "58cdce5dd164a412a7e06432983edd5a"
  },
  {
    "url": "system/linux/java/index.html",
    "revision": "0aa8cd99f4f6999cf19f4e05ab516ae5"
  },
  {
    "url": "system/macos/index.html",
    "revision": "2fd248c5478951601399622d0c5dfea1"
  },
  {
    "url": "system/macos/screen.html",
    "revision": "df047ad2945038c1409606b6e6fd0881"
  },
  {
    "url": "system/windows/index.html",
    "revision": "dd7c22eb81cb53fc967d8ffde17fe943"
  },
  {
    "url": "system/windows/print.html",
    "revision": "1fbcef6f3aa8be2d1424b4af72073447"
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
