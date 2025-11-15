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
    "revision": "04fc61cc9dacf135d928e0b80852aeba"
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
    "url": "assets/js/23.57cca61d.js",
    "revision": "897377206eff27120671ed9826592e80"
  },
  {
    "url": "assets/js/24.2b9b4425.js",
    "revision": "2b02f7c3fcd14f514fc8ef9358cd02b7"
  },
  {
    "url": "assets/js/25.cb2ddff1.js",
    "revision": "013a28c3911be7503d386f35a7e3ef25"
  },
  {
    "url": "assets/js/26.b88c6d9a.js",
    "revision": "6eb5fff59bd5f3f9c913817e62426f75"
  },
  {
    "url": "assets/js/27.e0aeb3ae.js",
    "revision": "1b7f541c2982fa95c4cc5ebf5d84a3e8"
  },
  {
    "url": "assets/js/28.91ca34aa.js",
    "revision": "526c247813230ab2800b3ec66e4fab6a"
  },
  {
    "url": "assets/js/29.75c1768c.js",
    "revision": "7c339466f12cfbf2b8f0d0b50aa6272a"
  },
  {
    "url": "assets/js/3.1b425697.js",
    "revision": "4698c6cdfc273acbbaf92bdac1193650"
  },
  {
    "url": "assets/js/30.f27018f6.js",
    "revision": "38971c41e57b22d0ad5ac9f54f872687"
  },
  {
    "url": "assets/js/31.02b19366.js",
    "revision": "a4b72f9b1b4ed23a477f51ca8047d04d"
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
    "url": "assets/js/38.28b722ed.js",
    "revision": "4801d408abbf059cead86a4d8fbc55b8"
  },
  {
    "url": "assets/js/39.a405d97c.js",
    "revision": "8c87c085bc4135e4d7b61d6fd0c8a2c8"
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
    "url": "assets/js/50.5c63a47f.js",
    "revision": "2e75deddf2e591fc6cacd7e0504244c7"
  },
  {
    "url": "assets/js/51.0f724adb.js",
    "revision": "c8061bfb7abac697cc70fd2aff987919"
  },
  {
    "url": "assets/js/52.31fbbc90.js",
    "revision": "f66fa6539d009de1da9044dfe8046242"
  },
  {
    "url": "assets/js/53.c9aee8d5.js",
    "revision": "35ec4385f417e7eba512ec437ebc3cb0"
  },
  {
    "url": "assets/js/54.278ad7b0.js",
    "revision": "9a9010b34565db8e245220454e1002d4"
  },
  {
    "url": "assets/js/55.523e279c.js",
    "revision": "da81c7fbcd248502f9dc429ef0bd4a81"
  },
  {
    "url": "assets/js/56.4567d44c.js",
    "revision": "47ba17dde14529d6a6b09ba70597c9f1"
  },
  {
    "url": "assets/js/57.f13eeee3.js",
    "revision": "91b7f6b75a8d6036718fc6a9ca714f0a"
  },
  {
    "url": "assets/js/58.3c8c3a5b.js",
    "revision": "c231de18b703385990a25b36e819438a"
  },
  {
    "url": "assets/js/59.75e128dc.js",
    "revision": "e267602d3ba6010ad4886893c96e1f71"
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
    "url": "assets/js/app.aa914600.js",
    "revision": "6cffb1a7db517d0afa3e96eccb0eeb8f"
  },
  {
    "url": "assets/js/vendors~docsearch.11055bee.js",
    "revision": "8259fdbb94020e921a7272f277903b38"
  },
  {
    "url": "code/git/base/branch.html",
    "revision": "0bf4e31ead29ef463040878f38312779"
  },
  {
    "url": "code/git/base/cancel.html",
    "revision": "a928a88750fcca4ae8a226c6eabc7606"
  },
  {
    "url": "code/git/base/operation.html",
    "revision": "59c9fed2bb3b7e639e0125154a1b3935"
  },
  {
    "url": "code/git/base/remote.html",
    "revision": "721e3152a4886e108a5cf690ca4cdd09"
  },
  {
    "url": "code/git/base/use.html",
    "revision": "7df306ada448a77e7b2162b118179a8a"
  },
  {
    "url": "code/git/cover.html",
    "revision": "b390e13ca4cd0ab6e0afb4961c9121a4"
  },
  {
    "url": "code/git/index.html",
    "revision": "77106b74b4264706a031971bbbf43d09"
  },
  {
    "url": "code/git/install.html",
    "revision": "aeeaaace6a05ba67f38d6e17d3179737"
  },
  {
    "url": "code/git/sort.html",
    "revision": "e245e53868b75f0dc837918a772964b6"
  },
  {
    "url": "code/java/four.html",
    "revision": "c8f5d885aae25ce6c7bdb8446f34d805"
  },
  {
    "url": "code/java/index.html",
    "revision": "fbc5c1800bc6dec2503675640b180b6f"
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
    "revision": "fd7ca683a67f16acffb0665108fb7bb4"
  },
  {
    "url": "operation/node.html",
    "revision": "b0f5b0ec92e0af0956c1189a4301f286"
  },
  {
    "url": "system/linux/base/index.html",
    "revision": "4eb327d3739bbf234b7d9aa9a84b0a56"
  },
  {
    "url": "system/linux/docker/images/iperf3.html",
    "revision": "21834eff6897adcb5abb2bc72eb2dde4"
  },
  {
    "url": "system/linux/docker/images/portainer.html",
    "revision": "072a4da7e52c66ba9e03a99c6636929d"
  },
  {
    "url": "system/linux/docker/index.html",
    "revision": "68a672c8cf44cf33de8b1e1d4b1f99f6"
  },
  {
    "url": "system/linux/docker/operator/batched.html",
    "revision": "078a3a5c385d1287d825087c9ae598d3"
  },
  {
    "url": "system/linux/docker/operator/remote.html",
    "revision": "e1271eeeaf6ff83b98bde37ffa011816"
  },
  {
    "url": "system/linux/docker/problem/commonProblem.html",
    "revision": "f314e02a53af7fb2954e04625d88c3e1"
  },
  {
    "url": "system/linux/firewall/centos7.html",
    "revision": "8e79284dc730afbc1deff157b304f319"
  },
  {
    "url": "system/linux/firewall/centos8.html",
    "revision": "23b9e40c7ef35766c2a2aba906dc4063"
  },
  {
    "url": "system/linux/firewall/ubuntu.html",
    "revision": "fd6871601f6c0c8988e59af03dc3fb9b"
  },
  {
    "url": "system/linux/java/jdk.html",
    "revision": "3a8dd1914b6030dda279feb1f6fe7623"
  },
  {
    "url": "system/linux/java/maven.html",
    "revision": "a1a2ec27a5c2bdb085a127736547cd78"
  },
  {
    "url": "system/linux/java/node.html",
    "revision": "6742ee3ab161c4419e6171304f141c64"
  },
  {
    "url": "system/macos/index.html",
    "revision": "6f1ea5614490d1ceb131c38ab8cdd0f5"
  },
  {
    "url": "system/macos/itunes-bak.html",
    "revision": "876d27632f428fcb00eeba42aef29593"
  },
  {
    "url": "system/macos/screen.html",
    "revision": "a0c392c48849157a7df2d8d0782a2cd6"
  },
  {
    "url": "system/synology/drive.html",
    "revision": "96d110715b98a6bff3f6ff2fc501fe17"
  },
  {
    "url": "system/synology/index.html",
    "revision": "f6b8a879d8e8c1445425f2ed6edf0fe1"
  },
  {
    "url": "system/synology/root.html",
    "revision": "07d1c7411fa3c67a336d4ea4178baa0d"
  },
  {
    "url": "system/windows/env.html",
    "revision": "63591bf80dcbc977a54d63d7dd8f6192"
  },
  {
    "url": "system/windows/index.html",
    "revision": "d52a9bcb7574cdae27be9474a17382a4"
  },
  {
    "url": "system/windows/print.html",
    "revision": "44364217e84a3e6bc9514f8c4102482e"
  },
  {
    "url": "system/windows/service.html",
    "revision": "a5cb25b56a8d9b267ac72cc6c9d0e416"
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
