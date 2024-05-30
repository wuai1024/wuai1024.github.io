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
    "revision": "495b62423ba8adba5b1076305fe9e501"
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
    "url": "assets/js/40.1ce8516b.js",
    "revision": "15af8c94658adffc3545b371c9373dea"
  },
  {
    "url": "assets/js/41.2a1371a5.js",
    "revision": "226952b702d5499c7120d057b2285de6"
  },
  {
    "url": "assets/js/42.acca1f1a.js",
    "revision": "b611f22296bb8ed2a89f69deac601116"
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
    "url": "assets/js/app.ea02a975.js",
    "revision": "9c71b197c89e866801680e70997162cc"
  },
  {
    "url": "assets/js/vendors~docsearch.11055bee.js",
    "revision": "8259fdbb94020e921a7272f277903b38"
  },
  {
    "url": "code/git/base/branch.html",
    "revision": "d5121b0270b0d48406cf871061a6cdc4"
  },
  {
    "url": "code/git/base/cancel.html",
    "revision": "3d5f898d631c88e505a1930dec7f478d"
  },
  {
    "url": "code/git/base/operation.html",
    "revision": "c49dcb790eda776e2ae19079cdac8421"
  },
  {
    "url": "code/git/base/remote.html",
    "revision": "a2c0db7d3cb0386ed198e467c83d902e"
  },
  {
    "url": "code/git/base/use.html",
    "revision": "60d33ac631d8e73b8fb8b185d230d547"
  },
  {
    "url": "code/git/cover.html",
    "revision": "982255ef3ebbb4eb94d36db9d496eabd"
  },
  {
    "url": "code/git/index.html",
    "revision": "2d943315d6cdf6441001d99f925db7e6"
  },
  {
    "url": "code/git/install.html",
    "revision": "5529f4294aad8d70c6c9fce44729edfb"
  },
  {
    "url": "code/git/sort.html",
    "revision": "6dd72eb9ba84d497fa1c38917de06ee1"
  },
  {
    "url": "code/java/four.html",
    "revision": "251b1263985a91cd41da5fe4fee67853"
  },
  {
    "url": "code/java/index.html",
    "revision": "40276bc24eb59046d4a52988a7203197"
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
    "revision": "66e71451374511354f4c1335e216bc75"
  },
  {
    "url": "operation/node.html",
    "revision": "bebc9c2a462701e2ea44494d385a0f9e"
  },
  {
    "url": "system/linux/base/index.html",
    "revision": "5904ec565b1dd08c081ad2f829063b81"
  },
  {
    "url": "system/linux/docker/images/iperf3.html",
    "revision": "b60de3ffbe5c1e4da68e695b6de5cb19"
  },
  {
    "url": "system/linux/docker/images/portainer.html",
    "revision": "839ee3cd45468bc8b856017f4275e094"
  },
  {
    "url": "system/linux/docker/index.html",
    "revision": "1654ea8fca7e554d42e505a5d3b68cfb"
  },
  {
    "url": "system/linux/docker/operator/batched.html",
    "revision": "469220062c962ebb41872f13462a11df"
  },
  {
    "url": "system/linux/docker/operator/remote.html",
    "revision": "0d7574e6de269210d2a898c71dc002bb"
  },
  {
    "url": "system/linux/docker/problem/commonProblem.html",
    "revision": "92d4cba21ed3a04f23c29fd9d8c617c7"
  },
  {
    "url": "system/linux/java/jdk.html",
    "revision": "4e3e2550bb623bbc31f1292eaa772369"
  },
  {
    "url": "system/linux/java/maven.html",
    "revision": "1d75a32a6a0e3c35580783c0d50f7bf7"
  },
  {
    "url": "system/linux/java/node.html",
    "revision": "ffb0b39fc39457b046ba05e605018fbb"
  },
  {
    "url": "system/macos/index.html",
    "revision": "8a876f0a22c6327556e2be25223ffa1d"
  },
  {
    "url": "system/macos/screen.html",
    "revision": "f5f85f1ff1908a100308f5a82c209b13"
  },
  {
    "url": "system/synology/drive.html",
    "revision": "c62385277ca8aa0deaa2446f492772c7"
  },
  {
    "url": "system/synology/index.html",
    "revision": "c21a9efb416be08b70d3fd596903b329"
  },
  {
    "url": "system/synology/root.html",
    "revision": "30548f00d975e49279dfabed0a6e6668"
  },
  {
    "url": "system/windows/index.html",
    "revision": "e1c8e6bda579ea0db78a02108f9c1940"
  },
  {
    "url": "system/windows/print.html",
    "revision": "ffdeecf27c3d50661bc1baacd876942e"
  },
  {
    "url": "system/windows/service.html",
    "revision": "6830b3dbf8096ae78268aad3e5c4195a"
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
