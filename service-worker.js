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
    "revision": "d7dd076a01bd41d8f71fd4d200c6495c"
  },
  {
    "url": "assets/css/0.styles.630e111c.css",
    "revision": "5a553bec8db3e10ba96faee593a809e0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.95ddb5d7.js",
    "revision": "894a90a086354f1b84c5ba5f46ca2099"
  },
  {
    "url": "assets/js/10.1048b550.js",
    "revision": "22b8d837c0908ae6e1556d6dd184f394"
  },
  {
    "url": "assets/js/11.13a9ee17.js",
    "revision": "c60efeb76cae9df3468a78b9a0e878f4"
  },
  {
    "url": "assets/js/12.bb90c056.js",
    "revision": "c8a26e2887722c1cd0067eb6c72fbdd0"
  },
  {
    "url": "assets/js/13.7abed412.js",
    "revision": "89e689f0f3a18e287724d60225845c92"
  },
  {
    "url": "assets/js/14.b2a445ef.js",
    "revision": "2185195c388b63d3d5606cbe1b0a61e5"
  },
  {
    "url": "assets/js/15.76a178a1.js",
    "revision": "8c019f63f691c08b54ae22833aa29538"
  },
  {
    "url": "assets/js/16.74c2f1bc.js",
    "revision": "fddb843b461f3f5e78e041c14b1ad79e"
  },
  {
    "url": "assets/js/17.8cad0bfa.js",
    "revision": "2bb5a202d40806a1ea2c6940aa699547"
  },
  {
    "url": "assets/js/18.2682425e.js",
    "revision": "9f1557da297d12d76eaca890967e7b84"
  },
  {
    "url": "assets/js/19.a7b236ec.js",
    "revision": "7bf06ff63b8b9920f858095f485a5bcd"
  },
  {
    "url": "assets/js/2.6987404a.js",
    "revision": "08cf1460b91040329da2f2f6471e4d58"
  },
  {
    "url": "assets/js/20.3bf74892.js",
    "revision": "71f1bf48712ed4a4f010e46323d2341d"
  },
  {
    "url": "assets/js/21.e2bb4821.js",
    "revision": "f1fd867587a5e14333f7fd8b94fbec24"
  },
  {
    "url": "assets/js/22.cca348ae.js",
    "revision": "9694a9384e448cac60743840572f9801"
  },
  {
    "url": "assets/js/23.a844ae01.js",
    "revision": "344c2af674e0d3243d0fe8f39c9ad61e"
  },
  {
    "url": "assets/js/24.addee1d3.js",
    "revision": "34be42133124d5d3eec54802a05226a0"
  },
  {
    "url": "assets/js/25.c7ae40e7.js",
    "revision": "08add3dfba8ae19d85fb9e331ceb96af"
  },
  {
    "url": "assets/js/26.4ef003c1.js",
    "revision": "df60725751a61379bd88cd6ef8a2ce68"
  },
  {
    "url": "assets/js/27.477a1253.js",
    "revision": "ccc9d562cff8618b2faf366d6b10091e"
  },
  {
    "url": "assets/js/28.9d4bef81.js",
    "revision": "3244e37a1d8bddc88b989266538da5b1"
  },
  {
    "url": "assets/js/29.3e3e0213.js",
    "revision": "6505ad89609ff89cd48fe99200047533"
  },
  {
    "url": "assets/js/3.1b425697.js",
    "revision": "4698c6cdfc273acbbaf92bdac1193650"
  },
  {
    "url": "assets/js/30.478cc4cb.js",
    "revision": "bd6a855e4294bbd6be9e7b2e419e0b0f"
  },
  {
    "url": "assets/js/31.35a12d81.js",
    "revision": "2afe1ac7ddafe01a0c3d7f3459577c32"
  },
  {
    "url": "assets/js/32.e5c1c3c2.js",
    "revision": "51e0323e66b7949e50ff7dbd85334dbe"
  },
  {
    "url": "assets/js/33.31f5001a.js",
    "revision": "7e74908ab59a37874f46cdf2efdfb3f6"
  },
  {
    "url": "assets/js/34.66b9d9b5.js",
    "revision": "b58b659e1e59bab719eb29092c5933ef"
  },
  {
    "url": "assets/js/35.20e7c76a.js",
    "revision": "6440107f2db0a2c31ec5d969aede6dcc"
  },
  {
    "url": "assets/js/36.dea57392.js",
    "revision": "128e80f70ba78525b5987e575abfa7fe"
  },
  {
    "url": "assets/js/37.db23d521.js",
    "revision": "5817af487572ebb593b8dcf76f498de0"
  },
  {
    "url": "assets/js/38.664b32c4.js",
    "revision": "2517bedf5817da49b99f7d64b2995124"
  },
  {
    "url": "assets/js/39.7bb7cb15.js",
    "revision": "ed8ca6e7e03d9fe3771e23f5dab5040d"
  },
  {
    "url": "assets/js/4.66a56329.js",
    "revision": "e426d84613cf940552fa0ed4580bea24"
  },
  {
    "url": "assets/js/40.ae442fba.js",
    "revision": "6cfebd7f9ff861350a12efd328bfd408"
  },
  {
    "url": "assets/js/41.2a1371a5.js",
    "revision": "226952b702d5499c7120d057b2285de6"
  },
  {
    "url": "assets/js/42.7853bb09.js",
    "revision": "03dd24e2cea4545039dfb99f04ab8800"
  },
  {
    "url": "assets/js/43.206f86a8.js",
    "revision": "4218174673ab5d716c098e389417319c"
  },
  {
    "url": "assets/js/44.b7713501.js",
    "revision": "ae81bca70c0c0b79a6db4612eb7d8758"
  },
  {
    "url": "assets/js/45.7280c79c.js",
    "revision": "9fcc07e553dd662cc763d5476d01bca4"
  },
  {
    "url": "assets/js/46.43f2d868.js",
    "revision": "e85b1162e139bab7dcb8b1d226fcee03"
  },
  {
    "url": "assets/js/47.bc8913aa.js",
    "revision": "804cd7ad22cf3c34026fffad72807806"
  },
  {
    "url": "assets/js/48.1ffa2fdf.js",
    "revision": "ebd0e6861261f986e4c23d28d02d4495"
  },
  {
    "url": "assets/js/49.dc126799.js",
    "revision": "56d5d285c9a5300fd685a5feadd8e50a"
  },
  {
    "url": "assets/js/5.c4113094.js",
    "revision": "9410cb42cf2dc34ed621f83cc0b4750a"
  },
  {
    "url": "assets/js/50.399694aa.js",
    "revision": "ccb8c8cbad302cc55a21702c2357a8f3"
  },
  {
    "url": "assets/js/51.14f12c28.js",
    "revision": "1ac911d21eb61a17c6acfa6902b045f1"
  },
  {
    "url": "assets/js/52.3fad7640.js",
    "revision": "f2796a6638b2c91e4a922a0bc4b330b5"
  },
  {
    "url": "assets/js/53.ed953439.js",
    "revision": "1ebe980133926ec675d59eeb3c2c4bda"
  },
  {
    "url": "assets/js/54.70c521db.js",
    "revision": "c72bcade11827bf2cf7455adbaec1a73"
  },
  {
    "url": "assets/js/6.c357e553.js",
    "revision": "9020a909196f86415bf07a2ddb387ea7"
  },
  {
    "url": "assets/js/7.9c0826da.js",
    "revision": "15c45d41026599d1b1cbec28a70eb92f"
  },
  {
    "url": "assets/js/app.b0c6e954.js",
    "revision": "a900cf3eee6c278440e72289120f8604"
  },
  {
    "url": "assets/js/vendors~docsearch.11055bee.js",
    "revision": "8259fdbb94020e921a7272f277903b38"
  },
  {
    "url": "code/git/base/branch.html",
    "revision": "fa9c950e2333bed2c4c8b65e0ad4652a"
  },
  {
    "url": "code/git/base/cancel.html",
    "revision": "8f76f3dfdd612c7d649cbbe2b5d67a7a"
  },
  {
    "url": "code/git/base/operation.html",
    "revision": "d4ec5443e17ce9c9a012f43a5c2b8e63"
  },
  {
    "url": "code/git/base/remote.html",
    "revision": "d05380a3bc158e37a350a83eed92ce2b"
  },
  {
    "url": "code/git/base/use.html",
    "revision": "babf53035cb650bde6f5e4355b52853f"
  },
  {
    "url": "code/git/cover.html",
    "revision": "68343de5b4866c6dc0e2149bded4ccb6"
  },
  {
    "url": "code/git/index.html",
    "revision": "fc3cac74411330dd51f250bad6e1463e"
  },
  {
    "url": "code/git/install.html",
    "revision": "0426f52b3858fd361050ea39d0ebebd9"
  },
  {
    "url": "code/git/sort.html",
    "revision": "f9200a438843b1216bb6026d0b95e8a8"
  },
  {
    "url": "code/java/four.html",
    "revision": "56c02cc3f428900e1b43855272dc626f"
  },
  {
    "url": "code/java/index.html",
    "revision": "111e5481ac35dc2729da13afda16a420"
  },
  {
    "url": "image/git/git官网.png",
    "revision": "77e9ea6eb01a8b26fab972daefb400e9"
  },
  {
    "url": "image/git/git版本号.png",
    "revision": "e011ee4fd3cee864f998dbd9f2d5d3ae"
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
    "revision": "3e1a077a127d50015ed950d94b43ac4e"
  },
  {
    "url": "operation/node.html",
    "revision": "96a447a5ac7dfd8a42ebd0909da5d91e"
  },
  {
    "url": "system/linux/base/index.html",
    "revision": "f38a1368cd77b20319c50f1495dac447"
  },
  {
    "url": "system/linux/docker/images/iperf3.html",
    "revision": "aa93526b0d6f777ca0963dfe7f32fa12"
  },
  {
    "url": "system/linux/docker/images/portainer.html",
    "revision": "6a0ed7a6acd45c82cbce5ea69db84ca5"
  },
  {
    "url": "system/linux/docker/index.html",
    "revision": "79cea1fad512860e9847c85dea4d1214"
  },
  {
    "url": "system/linux/docker/operator/batched.html",
    "revision": "ffc7772dec6bf4ede4a6bf259e828256"
  },
  {
    "url": "system/linux/docker/operator/remote.html",
    "revision": "e573d0be9711b63f5cc1465bd27d2aff"
  },
  {
    "url": "system/linux/docker/problem/commonProblem.html",
    "revision": "b1af4719b8ef9c7787617cfc4bb6c740"
  },
  {
    "url": "system/linux/java/jdk.html",
    "revision": "33e3bd548e6998bc8cece15ad8eb4f9f"
  },
  {
    "url": "system/linux/java/maven.html",
    "revision": "3a525eccfc724bc1223e5553d53011a9"
  },
  {
    "url": "system/linux/java/node.html",
    "revision": "ec8584d8ceec3510ee4fa33fcd288fe0"
  },
  {
    "url": "system/macos/index.html",
    "revision": "d2663d28fd56babd6f4b676672b5943f"
  },
  {
    "url": "system/macos/screen.html",
    "revision": "f03f94155f104dc16c8322a40f484f82"
  },
  {
    "url": "system/synology/drive.html",
    "revision": "f1b1f8b9f025c2796cb6e03267fb1a44"
  },
  {
    "url": "system/synology/index.html",
    "revision": "7f86262e2407362f61770cf0592212e1"
  },
  {
    "url": "system/synology/root.html",
    "revision": "9d4026c099cb0c6e4c037af36cc4a434"
  },
  {
    "url": "system/windows/index.html",
    "revision": "1a71cf9fc0ef271823415cb4b27c6352"
  },
  {
    "url": "system/windows/print.html",
    "revision": "83f182e7c367e5893684feb258e8ea7f"
  },
  {
    "url": "system/windows/service.html",
    "revision": "a1c8b7bad3ceb96bcc406114ae622534"
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
