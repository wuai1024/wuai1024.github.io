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
    "revision": "9e90906576680b5dbde1deed59437605"
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
    "url": "assets/js/29.b8d4476b.js",
    "revision": "780595a2ec7deb5d3d852288a7880631"
  },
  {
    "url": "assets/js/3.25f41d6b.js",
    "revision": "288376dda7a6f9ea1ecbdc20d35d3b8e"
  },
  {
    "url": "assets/js/30.8a00f04a.js",
    "revision": "0f4a5a1acbbb5b06351696f8bf393a8d"
  },
  {
    "url": "assets/js/4.ce6f38eb.js",
    "revision": "1cc026c96262bbba3b6c5c21516aa953"
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
    "url": "assets/js/app.c0e61ec3.js",
    "revision": "40850f9bd78f4b8ac59079e7a39820e2"
  },
  {
    "url": "code/java/four.html",
    "revision": "e2aa478adcf0e3d2314d6763faa7f6a2"
  },
  {
    "url": "code/java/index.html",
    "revision": "78150b440803cf7754677ddf61e081a0"
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
    "url": "image/windows/service/winsw.png",
    "revision": "ca9bc48cace20da14f3e3d586b5c31f4"
  },
  {
    "url": "image/windows/service/winsw.xml.png",
    "revision": "86ca67040ae07f1506ecbe0a150ee0f9"
  },
  {
    "url": "index.html",
    "revision": "08163e82947f3ea18278d0b926d5af98"
  },
  {
    "url": "operation/node.html",
    "revision": "ddedbddf35b823a4dcd3ba9234854733"
  },
  {
    "url": "system/linux/docker/images/iperf3.html",
    "revision": "ed1676f731a7d497a1c1dfcc8b22b8d4"
  },
  {
    "url": "system/linux/docker/images/portainer.html",
    "revision": "302133fdd4d2352d8ca88097814e26ea"
  },
  {
    "url": "system/linux/docker/index.html",
    "revision": "e24cf19087c1bef744b48b5f3971fcf5"
  },
  {
    "url": "system/linux/docker/operator/batched.html",
    "revision": "7c8304ff2f37f2bee4a17b3cd5f00440"
  },
  {
    "url": "system/linux/docker/operator/remote.html",
    "revision": "54ea37293b214bd81c415a6f5113440e"
  },
  {
    "url": "system/linux/docker/problem/commonProblem.html",
    "revision": "c2431e6db2f3ca3982cc2f944e8441a4"
  },
  {
    "url": "system/linux/index.html",
    "revision": "d4cee729adad1d67a8bbafc629ef056c"
  },
  {
    "url": "system/linux/java/jdk.html",
    "revision": "7ab96417809aba337ad384a7b1f2a249"
  },
  {
    "url": "system/linux/java/maven.html",
    "revision": "1a2eb276f001dfe76581244a6d06bd07"
  },
  {
    "url": "system/linux/java/node.html",
    "revision": "d64c86290a8e4fbade69e021a86268ac"
  },
  {
    "url": "system/macos/index.html",
    "revision": "f646b3c75181e8be727f251c95793bdb"
  },
  {
    "url": "system/macos/screen.html",
    "revision": "c1124a98409eb6f354d346bd9e2ceddc"
  },
  {
    "url": "system/synology/drive.html",
    "revision": "e2c00daa153672be0e1cb4aad636926e"
  },
  {
    "url": "system/synology/index.html",
    "revision": "54269d4fd2a57d132c97679b937ebd17"
  },
  {
    "url": "system/synology/root.html",
    "revision": "957670a121dd5568f094f3d8fc528951"
  },
  {
    "url": "system/windows/index.html",
    "revision": "74be5343366df4b7d0c9f4f57eb33da8"
  },
  {
    "url": "system/windows/print.html",
    "revision": "ea87d4156664286b404ead4f07c10b3b"
  },
  {
    "url": "system/windows/service.html",
    "revision": "8730f19fe47f381f6721084600fb3c38"
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
