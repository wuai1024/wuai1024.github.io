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
    "revision": "386084784cfdc5d8d01c9d7e6a73735e"
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
    "url": "assets/js/15.dc0b7c8c.js",
    "revision": "993a77627b311eb49c2b38310a3e035f"
  },
  {
    "url": "assets/js/16.9d6d43d3.js",
    "revision": "a38c8ca9ed3da7a98026b2d0205a7ceb"
  },
  {
    "url": "assets/js/17.a98e818b.js",
    "revision": "3898ebf85dffa35dff6335709d43af19"
  },
  {
    "url": "assets/js/18.d35679c3.js",
    "revision": "119682d8a8e153a377c8d6ab3156bfdc"
  },
  {
    "url": "assets/js/19.32ff4f05.js",
    "revision": "693efc3f795db6908021868fc9c35f03"
  },
  {
    "url": "assets/js/2.9088e4f2.js",
    "revision": "44e0a579ca32fc67b0fbc4805010e02d"
  },
  {
    "url": "assets/js/20.7cd4ed33.js",
    "revision": "4e770be23daf4302bf6739cb8cbe3086"
  },
  {
    "url": "assets/js/21.82ed1cbc.js",
    "revision": "7104d7f57dd4d958991225bc75d1ca2b"
  },
  {
    "url": "assets/js/22.6bed2a06.js",
    "revision": "0513b07a9c272c2e0755c029221134c4"
  },
  {
    "url": "assets/js/3.0b786b6c.js",
    "revision": "e12cd0c28b83b99cc7e99ce92e034dd5"
  },
  {
    "url": "assets/js/4.3278dc04.js",
    "revision": "3deecfe0170813d23341bf18013c6474"
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
    "url": "assets/js/app.787618a3.js",
    "revision": "f4401155acc6146cd75dcd780b4140a2"
  },
  {
    "url": "code/java/four.html",
    "revision": "eb80b568dd762dd6950079274ccf0047"
  },
  {
    "url": "code/java/index.html",
    "revision": "b223b47913292b04d17875911a169bc2"
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
    "revision": "bdd40ecdae5424c19ae507a4a257e251"
  },
  {
    "url": "operation/node.html",
    "revision": "02a5b4ce9651cf0caa1393def473591d"
  },
  {
    "url": "system/linux/docker/iperf3.html",
    "revision": "89b24b666851e3fc5dfc2056b52dab9c"
  },
  {
    "url": "system/linux/docker/portainer.html",
    "revision": "47b191faf8244584289be1108a916309"
  },
  {
    "url": "system/linux/index.html",
    "revision": "4e52bb9e7d52cdab90257fdfe9ef22c9"
  },
  {
    "url": "system/linux/java/jdk.html",
    "revision": "d1afc4accda62321ff15771e75ddcab4"
  },
  {
    "url": "system/linux/java/maven.html",
    "revision": "a1898c4275df96396daf2b3a0a5ee69b"
  },
  {
    "url": "system/linux/java/node.html",
    "revision": "36ede6e381e2f0192afff41d74409ce8"
  },
  {
    "url": "system/macos/index.html",
    "revision": "b084d146bded4d31e894bc6bbcd6cf34"
  },
  {
    "url": "system/macos/screen.html",
    "revision": "678622ed369f2d9d6200ac7144cf76f7"
  },
  {
    "url": "system/windows/index.html",
    "revision": "7b0395ee3e5795f5c96f9865fd7eeeb3"
  },
  {
    "url": "system/windows/print.html",
    "revision": "7f8ab7571541216647367013c9599fba"
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
