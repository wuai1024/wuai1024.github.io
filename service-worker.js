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
    "revision": "bddbec6a9e1ed8bfe525f77d9c498a37"
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
    "url": "assets/js/16.a10f7b5b.js",
    "revision": "668af393f07d5565d5e2681b37dbf18d"
  },
  {
    "url": "assets/js/2.52d22e86.js",
    "revision": "de4b1b24b271625bebe732e3a62f1dec"
  },
  {
    "url": "assets/js/3.982f6fba.js",
    "revision": "88686d7c073a9c2c47843c37eb623b27"
  },
  {
    "url": "assets/js/4.180cdf2f.js",
    "revision": "9f122c782a9e6403c630a0054c5ad15c"
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
    "url": "assets/js/app.527e011e.js",
    "revision": "f200ef555edafc15824a8aa1433e9c33"
  },
  {
    "url": "code/java/four.html",
    "revision": "703e84b7beeb3530d7537da28b0bbc66"
  },
  {
    "url": "code/java/index.html",
    "revision": "b3b46aba807b687736d9d05c66116c42"
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
    "url": "index.html",
    "revision": "6bca92293e549440ee0399f7275ecd0b"
  },
  {
    "url": "operation/node.html",
    "revision": "d3f7cf71e3bc4f628e28c18e2b823633"
  },
  {
    "url": "system/linux/docker/iperf3.html",
    "revision": "ccca3edadeec87e5853c5b83661eba8f"
  },
  {
    "url": "system/linux/docker/portainer.html",
    "revision": "cd7aaa348fbc8290e7c13afc4266e86d"
  },
  {
    "url": "system/linux/index.html",
    "revision": "45fc2a427b8e9149e9743a9b075bb82d"
  },
  {
    "url": "system/linux/java/index.html",
    "revision": "8a5607218d5c4747a8254ef5a6f39f29"
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