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
    "revision": "403ead7714033658f1b7a6520fa92dce"
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
    "url": "assets/js/29.88892455.js",
    "revision": "6a114521f507d5aaf9f6622b35c07c00"
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
    "url": "assets/js/app.02f49842.js",
    "revision": "d10cae7ab60826f72d00abb96be2de36"
  },
  {
    "url": "code/java/four.html",
    "revision": "4304de16ed985addcd74178ef1a22760"
  },
  {
    "url": "code/java/index.html",
    "revision": "73d1f2a609a5e1be415e290b2f9e46d5"
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
    "revision": "a941d0fa88f466a145bb46483ee4f3e8"
  },
  {
    "url": "operation/node.html",
    "revision": "79b78089544e3aba5e1e08bd614c8820"
  },
  {
    "url": "system/linux/docker/images/iperf3.html",
    "revision": "abbb2defbcebed38d9cc2e75867ed809"
  },
  {
    "url": "system/linux/docker/images/portainer.html",
    "revision": "0ce31f5914dc6473e077fb4db4d63654"
  },
  {
    "url": "system/linux/docker/index.html",
    "revision": "7ef7344b1c7cd5e363855c9ca491d1a5"
  },
  {
    "url": "system/linux/docker/operator/batched.html",
    "revision": "9b11b5be546052c22e6909745374d3bb"
  },
  {
    "url": "system/linux/docker/operator/remote.html",
    "revision": "0918733f17f776813b299f7481ebafa5"
  },
  {
    "url": "system/linux/docker/problem/commonProblem.html",
    "revision": "2979d04d02c4377cff44fd8cc4e766c9"
  },
  {
    "url": "system/linux/index.html",
    "revision": "94bab5fdb566250f7e264fe63be66b0c"
  },
  {
    "url": "system/linux/java/jdk.html",
    "revision": "6078579637ed2c501f04b5e5e90c9c4d"
  },
  {
    "url": "system/linux/java/maven.html",
    "revision": "cb43c8a3a13b6d11356ee83044a88a25"
  },
  {
    "url": "system/linux/java/node.html",
    "revision": "ad7909293a4dedbf38f66fcba00b42c8"
  },
  {
    "url": "system/macos/index.html",
    "revision": "a30e134bbeba094769742fadf4b50562"
  },
  {
    "url": "system/macos/screen.html",
    "revision": "ad63399e0f0eb73522b24f6de04a5bff"
  },
  {
    "url": "system/synology/drive.html",
    "revision": "487f8e48da270acf5bf3fadb56ebbc11"
  },
  {
    "url": "system/synology/index.html",
    "revision": "95636130ab87ef148226939a307f1c23"
  },
  {
    "url": "system/synology/root.html",
    "revision": "6eb51c01aa1338f38c4c616bd9e109c7"
  },
  {
    "url": "system/windows/index.html",
    "revision": "62d67b8240bbe12df36ac33d34ac5a40"
  },
  {
    "url": "system/windows/print.html",
    "revision": "db090e38d7edfddad699b4bf39f9a0c7"
  },
  {
    "url": "system/windows/service.html",
    "revision": "d5bf501d5a868c66868de4eb27ff9e34"
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
