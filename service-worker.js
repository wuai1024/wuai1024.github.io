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
    "revision": "fa0e8c9b95e4b9555fde57dee67ec024"
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
    "url": "assets/js/26.7bed5ba9.js",
    "revision": "eb162f0d5a8234b264108b3e3d8e8fa2"
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
    "url": "assets/js/43.1345ac66.js",
    "revision": "98fff56472dff795527e1c31246ec7d3"
  },
  {
    "url": "assets/js/44.ded36108.js",
    "revision": "1d3d0b01e72bc840d8ad56a7071a5753"
  },
  {
    "url": "assets/js/45.98f2d495.js",
    "revision": "c0c4b6959985fa0a06e142a6d276323a"
  },
  {
    "url": "assets/js/46.4f5850b1.js",
    "revision": "1312030668fb820a9dedee5569699c22"
  },
  {
    "url": "assets/js/47.f1be575c.js",
    "revision": "00e46a51b1fcaa305f026fa3979a3eaf"
  },
  {
    "url": "assets/js/48.f857422b.js",
    "revision": "02de0e1373dfad3cd9e50eb90a0134fe"
  },
  {
    "url": "assets/js/49.316981c8.js",
    "revision": "e005778c0a0dcbe69cf5ed24987f5741"
  },
  {
    "url": "assets/js/5.c4113094.js",
    "revision": "9410cb42cf2dc34ed621f83cc0b4750a"
  },
  {
    "url": "assets/js/50.d2fc79b9.js",
    "revision": "ba079a24f2288724005b156584c0c8b0"
  },
  {
    "url": "assets/js/51.295d7f6a.js",
    "revision": "afcf8713059496eb60bb4e35776df109"
  },
  {
    "url": "assets/js/52.5bfb0677.js",
    "revision": "32a6719c5f6277e301f30054e80c6591"
  },
  {
    "url": "assets/js/53.f01ba185.js",
    "revision": "ff421e3f30f14c583451af9bb15f8340"
  },
  {
    "url": "assets/js/54.78522cab.js",
    "revision": "280a4c9df3147fc86460365667dc275c"
  },
  {
    "url": "assets/js/55.5c857474.js",
    "revision": "41f7562119ca92d1d0fc30c14a93e4f3"
  },
  {
    "url": "assets/js/56.0211726d.js",
    "revision": "704f4050105105c411c1482508df5384"
  },
  {
    "url": "assets/js/57.7d4cc6f5.js",
    "revision": "83854548aad9c8e23a6b95a3b706cc93"
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
    "url": "assets/js/app.1abdc40d.js",
    "revision": "e3e95162c0b772330ba9b3c3f87befd8"
  },
  {
    "url": "assets/js/vendors~docsearch.11055bee.js",
    "revision": "8259fdbb94020e921a7272f277903b38"
  },
  {
    "url": "code/git/base/branch.html",
    "revision": "784b3cf147bc821622b8a3c8c1de9e0a"
  },
  {
    "url": "code/git/base/cancel.html",
    "revision": "f4b72edc907afcbdad6af979e9a6e01e"
  },
  {
    "url": "code/git/base/operation.html",
    "revision": "52b78b47be0152b1e6f40497e5973a32"
  },
  {
    "url": "code/git/base/remote.html",
    "revision": "4184d591ccddd239c2db206759bb42a8"
  },
  {
    "url": "code/git/base/use.html",
    "revision": "9818ea136cad317e5bee99324a771008"
  },
  {
    "url": "code/git/cover.html",
    "revision": "6577c9b0890461c635d379ce3c94cd5b"
  },
  {
    "url": "code/git/index.html",
    "revision": "12b5ecaf8344c9369431178480727cec"
  },
  {
    "url": "code/git/install.html",
    "revision": "a0edbcd351c5dd11b5a2c8d4e4080225"
  },
  {
    "url": "code/git/sort.html",
    "revision": "f49e79e0df144bb50623a795774ea153"
  },
  {
    "url": "code/java/four.html",
    "revision": "180562dfb7bd83529c0135b7ce03b93e"
  },
  {
    "url": "code/java/index.html",
    "revision": "2861060183c5fbd35a0594ccebe5fe26"
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
    "revision": "f35610506d2b821f858c738ba4df1b04"
  },
  {
    "url": "operation/node.html",
    "revision": "45cc5bb9d61cf5228846e24a472beea9"
  },
  {
    "url": "system/linux/base/index.html",
    "revision": "0e32870e97c94fb5e60e817a920942da"
  },
  {
    "url": "system/linux/docker/images/iperf3.html",
    "revision": "b69f4d07225a237e7230c52c4e450afe"
  },
  {
    "url": "system/linux/docker/images/portainer.html",
    "revision": "3fe1cb6f4cfa397734363c3c495c36be"
  },
  {
    "url": "system/linux/docker/index.html",
    "revision": "b3a60fe3bce31f86c7947e957d72bdbb"
  },
  {
    "url": "system/linux/docker/operator/batched.html",
    "revision": "21c101bf00771243a2e49d8617e0eadf"
  },
  {
    "url": "system/linux/docker/operator/remote.html",
    "revision": "ba05e13a91206940fc34069fcd12ee29"
  },
  {
    "url": "system/linux/docker/problem/commonProblem.html",
    "revision": "ab33b24e539663730faf190ccbe00363"
  },
  {
    "url": "system/linux/firewall/centos7.html",
    "revision": "264a2c38335a4e24a56b0e35e6fc330e"
  },
  {
    "url": "system/linux/firewall/centos8.html",
    "revision": "103c15121d72885a4b2ac30a08885fe0"
  },
  {
    "url": "system/linux/firewall/ubuntu.html",
    "revision": "b9b6e0d2026f727212969f20eaa35baa"
  },
  {
    "url": "system/linux/java/jdk.html",
    "revision": "1a28634a2932aa470976dfb189a3d57f"
  },
  {
    "url": "system/linux/java/maven.html",
    "revision": "ea522fd01c7ac010b4ce3482a057c6f8"
  },
  {
    "url": "system/linux/java/node.html",
    "revision": "b209d8aa5e33d0c2ae0e11a449f1def1"
  },
  {
    "url": "system/macos/index.html",
    "revision": "027a154c3d0756593d3f8b9dc0af91d6"
  },
  {
    "url": "system/macos/screen.html",
    "revision": "6c06632051a2692148699db052cb3ed6"
  },
  {
    "url": "system/synology/drive.html",
    "revision": "f2e3b417fd0c1a9d4e0aa0991961a0df"
  },
  {
    "url": "system/synology/index.html",
    "revision": "d11553c48fd2f4172a144a9c93b48092"
  },
  {
    "url": "system/synology/root.html",
    "revision": "be64f345230f767574a6a5233c7ca313"
  },
  {
    "url": "system/windows/index.html",
    "revision": "db020e17b4d269cab1e07a78a7a04c92"
  },
  {
    "url": "system/windows/print.html",
    "revision": "4c1c5f5d10c4ec1b6c9883381dc08933"
  },
  {
    "url": "system/windows/service.html",
    "revision": "74a6571a5f6f062f7ed03e45831cc3ff"
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
