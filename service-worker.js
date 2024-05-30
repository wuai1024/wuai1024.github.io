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
    "revision": "dd652f49644fd68e48348f6fd69d790c"
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
    "url": "assets/js/36.387a05f2.js",
    "revision": "1529c00ffb3aa4c66e5fb28b2b19452d"
  },
  {
    "url": "assets/js/37.5a56ab31.js",
    "revision": "e8bcada0e4cc968ae2cc630c726182ac"
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
    "url": "assets/js/40.5d9f8f8a.js",
    "revision": "a0d1d08417666861d9c3ffc0a3eab794"
  },
  {
    "url": "assets/js/41.531b0322.js",
    "revision": "4fa7d1eb6949edf0363006bfd61b5e7a"
  },
  {
    "url": "assets/js/42.acca1f1a.js",
    "revision": "b611f22296bb8ed2a89f69deac601116"
  },
  {
    "url": "assets/js/43.9ad2412e.js",
    "revision": "494d5109cbf4a46c359ee105d17da609"
  },
  {
    "url": "assets/js/44.4cf784fb.js",
    "revision": "06a93f9fbdd893d500b844d4cc992937"
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
    "url": "assets/js/47.13f20689.js",
    "revision": "c85f55a96d063627d70e53a743e47ad3"
  },
  {
    "url": "assets/js/48.dbac53a7.js",
    "revision": "d43640e304f693dc98481ad871eeb5dc"
  },
  {
    "url": "assets/js/49.22e3e999.js",
    "revision": "4d19b435aa2bd87de82d25045d2450c2"
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
    "url": "assets/js/51.900a1ba1.js",
    "revision": "024cfcd45f8be6b73df448ffaac3ade7"
  },
  {
    "url": "assets/js/52.57a34ed4.js",
    "revision": "5ac167d945bd26d40ae8233523fe861d"
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
    "url": "assets/js/app.973fb33e.js",
    "revision": "e36d02241247c1139e2ba1a6d835a614"
  },
  {
    "url": "assets/js/vendors~docsearch.11055bee.js",
    "revision": "8259fdbb94020e921a7272f277903b38"
  },
  {
    "url": "code/git/base/branch.html",
    "revision": "b8393d2762a033a34b524d1bcda8a2c5"
  },
  {
    "url": "code/git/base/cancel.html",
    "revision": "18709fceee0f791126084a0bdf206112"
  },
  {
    "url": "code/git/base/operation.html",
    "revision": "ffc765b9d972d19a39ee51744b311dae"
  },
  {
    "url": "code/git/base/remote.html",
    "revision": "eabc1a279b34df1843544c5abd22a9a3"
  },
  {
    "url": "code/git/base/use.html",
    "revision": "ee381fda6d4ca4fe24118c7cbae89381"
  },
  {
    "url": "code/git/cover.html",
    "revision": "93bb947194e230109accc0aa3131c0c7"
  },
  {
    "url": "code/git/index.html",
    "revision": "f00326bd90d31aeb3cc169ad6e6bd5be"
  },
  {
    "url": "code/git/install.html",
    "revision": "eb1309d331f5aace118e73c6cca4f813"
  },
  {
    "url": "code/git/sort.html",
    "revision": "48b74dfaef88de1293f1e1272f236770"
  },
  {
    "url": "code/java/four.html",
    "revision": "fa3cd09259a4f2e874fb501793f880c7"
  },
  {
    "url": "code/java/index.html",
    "revision": "27479fa8f4b889549756d8894f8e01fc"
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
    "revision": "662c9213a28cd76db603db514500a74e"
  },
  {
    "url": "operation/node.html",
    "revision": "84cb52c46425e3c15ee940d676bc0a99"
  },
  {
    "url": "system/linux/base/index.html",
    "revision": "430156401bf9cb9a8f5ec550b66c5cc2"
  },
  {
    "url": "system/linux/docker/images/iperf3.html",
    "revision": "81d4f6e498ba1bbc0ae4f651f78d8fc8"
  },
  {
    "url": "system/linux/docker/images/portainer.html",
    "revision": "d2aacb752686b869de2ed0de42f26500"
  },
  {
    "url": "system/linux/docker/index.html",
    "revision": "2daf42f078a20d13a9c22fa3ca53d35d"
  },
  {
    "url": "system/linux/docker/operator/batched.html",
    "revision": "261d56074fa867af674e21f251b82e4a"
  },
  {
    "url": "system/linux/docker/operator/remote.html",
    "revision": "5cbc8328c93284f19aec8675f31f106a"
  },
  {
    "url": "system/linux/docker/problem/commonProblem.html",
    "revision": "47e9eacc4ddd019dc49ea8bb982856fa"
  },
  {
    "url": "system/linux/java/jdk.html",
    "revision": "963aa8231576683f639f6f98439b1bb3"
  },
  {
    "url": "system/linux/java/maven.html",
    "revision": "bad79dbe6f6cd86fe51426c1a0290a7e"
  },
  {
    "url": "system/linux/java/node.html",
    "revision": "3542eb406c32b058e9a6c8f924a5b81c"
  },
  {
    "url": "system/macos/index.html",
    "revision": "6f4f814221b7aa74e4bf507c1c2d3f39"
  },
  {
    "url": "system/macos/screen.html",
    "revision": "735361dab5aca2308d398dc9aa344b1b"
  },
  {
    "url": "system/synology/drive.html",
    "revision": "edf40ba9321f25f14e725428ecd08919"
  },
  {
    "url": "system/synology/index.html",
    "revision": "8a8d8239fb3f24e3acd37f3f283d46d1"
  },
  {
    "url": "system/synology/root.html",
    "revision": "3e1dbd3645dc85bb9a31e3e1f390d3b0"
  },
  {
    "url": "system/windows/index.html",
    "revision": "bea6cdd6edae51b665feead0ddb0fda2"
  },
  {
    "url": "system/windows/print.html",
    "revision": "a93f445ab953e5bf95db6666e8ccb9a3"
  },
  {
    "url": "system/windows/service.html",
    "revision": "d1daebb0ae2081db3c30aa13cdd62624"
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
