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
    "revision": "3b0e58e579977d509f519704fc758935"
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
    "url": "assets/js/11.479d2968.js",
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
    "url": "assets/js/15.af296d0d.js",
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
    "url": "assets/js/19.fd0bad0b.js",
    "revision": "7bf06ff63b8b9920f858095f485a5bcd"
  },
  {
    "url": "assets/js/2.a20eed51.js",
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
    "url": "assets/js/24.deb1038d.js",
    "revision": "34be42133124d5d3eec54802a05226a0"
  },
  {
    "url": "assets/js/25.c4aed595.js",
    "revision": "08add3dfba8ae19d85fb9e331ceb96af"
  },
  {
    "url": "assets/js/26.497a4575.js",
    "revision": "df60725751a61379bd88cd6ef8a2ce68"
  },
  {
    "url": "assets/js/27.333ae5f7.js",
    "revision": "ccc9d562cff8618b2faf366d6b10091e"
  },
  {
    "url": "assets/js/28.6a449443.js",
    "revision": "3244e37a1d8bddc88b989266538da5b1"
  },
  {
    "url": "assets/js/29.28f5b0e7.js",
    "revision": "6505ad89609ff89cd48fe99200047533"
  },
  {
    "url": "assets/js/3.1b425697.js",
    "revision": "4698c6cdfc273acbbaf92bdac1193650"
  },
  {
    "url": "assets/js/30.208d5486.js",
    "revision": "bd6a855e4294bbd6be9e7b2e419e0b0f"
  },
  {
    "url": "assets/js/31.4e7750b6.js",
    "revision": "2afe1ac7ddafe01a0c3d7f3459577c32"
  },
  {
    "url": "assets/js/32.3a24bb18.js",
    "revision": "bba7a4c5af0b65a716330af8ad33aa87"
  },
  {
    "url": "assets/js/33.ae94ac7b.js",
    "revision": "7e74908ab59a37874f46cdf2efdfb3f6"
  },
  {
    "url": "assets/js/34.bb343ccd.js",
    "revision": "b58b659e1e59bab719eb29092c5933ef"
  },
  {
    "url": "assets/js/35.43cb1433.js",
    "revision": "6440107f2db0a2c31ec5d969aede6dcc"
  },
  {
    "url": "assets/js/36.b286986c.js",
    "revision": "1529c00ffb3aa4c66e5fb28b2b19452d"
  },
  {
    "url": "assets/js/37.32ed127c.js",
    "revision": "e8bcada0e4cc968ae2cc630c726182ac"
  },
  {
    "url": "assets/js/38.469dec67.js",
    "revision": "2517bedf5817da49b99f7d64b2995124"
  },
  {
    "url": "assets/js/39.2fe678b4.js",
    "revision": "ed8ca6e7e03d9fe3771e23f5dab5040d"
  },
  {
    "url": "assets/js/4.66a56329.js",
    "revision": "e426d84613cf940552fa0ed4580bea24"
  },
  {
    "url": "assets/js/40.48ddb1a3.js",
    "revision": "a0d1d08417666861d9c3ffc0a3eab794"
  },
  {
    "url": "assets/js/41.fe088024.js",
    "revision": "4fa7d1eb6949edf0363006bfd61b5e7a"
  },
  {
    "url": "assets/js/42.616b29cb.js",
    "revision": "b611f22296bb8ed2a89f69deac601116"
  },
  {
    "url": "assets/js/43.cd92f3db.js",
    "revision": "4218174673ab5d716c098e389417319c"
  },
  {
    "url": "assets/js/44.4fbe6623.js",
    "revision": "ae81bca70c0c0b79a6db4612eb7d8758"
  },
  {
    "url": "assets/js/45.f7b06541.js",
    "revision": "9fcc07e553dd662cc763d5476d01bca4"
  },
  {
    "url": "assets/js/46.38738825.js",
    "revision": "e85b1162e139bab7dcb8b1d226fcee03"
  },
  {
    "url": "assets/js/47.a046f68a.js",
    "revision": "804cd7ad22cf3c34026fffad72807806"
  },
  {
    "url": "assets/js/48.787ca651.js",
    "revision": "ebd0e6861261f986e4c23d28d02d4495"
  },
  {
    "url": "assets/js/49.5fc0d45e.js",
    "revision": "56d5d285c9a5300fd685a5feadd8e50a"
  },
  {
    "url": "assets/js/5.c4113094.js",
    "revision": "9410cb42cf2dc34ed621f83cc0b4750a"
  },
  {
    "url": "assets/js/50.97df61b0.js",
    "revision": "ccb8c8cbad302cc55a21702c2357a8f3"
  },
  {
    "url": "assets/js/51.75171326.js",
    "revision": "1ac911d21eb61a17c6acfa6902b045f1"
  },
  {
    "url": "assets/js/52.4e8ef534.js",
    "revision": "f2796a6638b2c91e4a922a0bc4b330b5"
  },
  {
    "url": "assets/js/53.6196fe05.js",
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
    "url": "assets/js/app.d0bb0a4e.js",
    "revision": "09b8072491a1075ab922e282613ffeb7"
  },
  {
    "url": "assets/js/vendors~docsearch.5e758b7f.js",
    "revision": "8259fdbb94020e921a7272f277903b38"
  },
  {
    "url": "code/git/base/branch.html",
    "revision": "d43a550b74c4c7be8ac258600e5632a3"
  },
  {
    "url": "code/git/base/cancel.html",
    "revision": "505ea2e8011f287270daa57d5c030f6e"
  },
  {
    "url": "code/git/base/operation.html",
    "revision": "32117e079d1de322bafa09540a645828"
  },
  {
    "url": "code/git/base/remote.html",
    "revision": "220bbcc230f2623899ad12e63c24f583"
  },
  {
    "url": "code/git/base/use.html",
    "revision": "952df5d101988ac4597adc086754b215"
  },
  {
    "url": "code/git/cover.html",
    "revision": "5f2af8e4b057908b0d2b810e6c6180f9"
  },
  {
    "url": "code/git/index.html",
    "revision": "65b053787f6330ca67afe779fdbbe94b"
  },
  {
    "url": "code/git/install.html",
    "revision": "5b4b0c31dc3eb0e910e1ddaa9aa0f21d"
  },
  {
    "url": "code/git/sort.html",
    "revision": "9afb33b46498af670683a57b910122a2"
  },
  {
    "url": "code/java/four.html",
    "revision": "b3eec043fe1ec9238956857dc4795c39"
  },
  {
    "url": "code/java/index.html",
    "revision": "c8cd57c313cc129934bfb43eedccf422"
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
    "revision": "7861a78dbefbe7f602b26f057ad3a1d5"
  },
  {
    "url": "operation/node.html",
    "revision": "52e088075f67d89e95be06d6c81847fa"
  },
  {
    "url": "system/linux/base/index.html",
    "revision": "f432a02f6c932c8ecab65ccdfd94cab3"
  },
  {
    "url": "system/linux/docker/images/iperf3.html",
    "revision": "59dfe111d43422d3c7757a0ce03bea11"
  },
  {
    "url": "system/linux/docker/images/portainer.html",
    "revision": "c5e44a2efa20221c00c24029fe1275d5"
  },
  {
    "url": "system/linux/docker/index.html",
    "revision": "999780f4b6570cf9a8b58627a897314d"
  },
  {
    "url": "system/linux/docker/operator/batched.html",
    "revision": "2ac02cdd407da1554614746b4557ea86"
  },
  {
    "url": "system/linux/docker/operator/remote.html",
    "revision": "ca91392fbf279bfbdfc7e2de93eb9c61"
  },
  {
    "url": "system/linux/docker/problem/commonProblem.html",
    "revision": "4052fa2e8cf8c841169f2c2c9b7d6941"
  },
  {
    "url": "system/linux/java/jdk.html",
    "revision": "87859e700fe8485f9589496342d5795d"
  },
  {
    "url": "system/linux/java/maven.html",
    "revision": "c579afbc294bda0c1721853fd5a23cc7"
  },
  {
    "url": "system/linux/java/node.html",
    "revision": "08c0d941201bc8de15f11f925272cabc"
  },
  {
    "url": "system/macos/index.html",
    "revision": "e34b42dbe0ad75e487b0c38eca254587"
  },
  {
    "url": "system/macos/screen.html",
    "revision": "d8ceb89e4fec43b936e24f6273c26b2f"
  },
  {
    "url": "system/synology/drive.html",
    "revision": "a6d27c56e5f16c30885a12fc8064b8b4"
  },
  {
    "url": "system/synology/index.html",
    "revision": "fa5d3036ace182d4dd8d5cea30f614d9"
  },
  {
    "url": "system/synology/root.html",
    "revision": "67362b931e702458dba78d945c8faef3"
  },
  {
    "url": "system/windows/index.html",
    "revision": "ecf663062e871f107423f6f688cd2213"
  },
  {
    "url": "system/windows/print.html",
    "revision": "86ab884e833049253792bb6460800820"
  },
  {
    "url": "system/windows/service.html",
    "revision": "d33f87d78a938c648383df6e8011034c"
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
