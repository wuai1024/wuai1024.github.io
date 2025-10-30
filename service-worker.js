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
    "revision": "f2cc07a75a964676cf467f36f1ef0eab"
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
    "url": "assets/js/23.e5bd6001.js",
    "revision": "546c30e8874e348143253aef558bf82d"
  },
  {
    "url": "assets/js/24.ed88756c.js",
    "revision": "deaccad11947ade22267e6a5c1ea49e2"
  },
  {
    "url": "assets/js/25.2af1630c.js",
    "revision": "81dbd1495ae75a5cca89f8859482922e"
  },
  {
    "url": "assets/js/26.b88c6d9a.js",
    "revision": "6eb5fff59bd5f3f9c913817e62426f75"
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
    "url": "assets/js/32.e607c5a2.js",
    "revision": "6fbf40e5f56708b741af28fd660adb91"
  },
  {
    "url": "assets/js/33.cdd5d999.js",
    "revision": "c9ab78a2555b5f2d09714ef7e7cd4783"
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
    "url": "assets/js/47.9e46726e.js",
    "revision": "a57176851d720c6c361d55616c08b249"
  },
  {
    "url": "assets/js/48.d53bc5bf.js",
    "revision": "a0c98c5cf5c35279882b9403d9c837f5"
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
    "url": "assets/js/52.e7284c3a.js",
    "revision": "97c5b78d0587cdd29e62263ef01710fa"
  },
  {
    "url": "assets/js/53.bac864dd.js",
    "revision": "ad8448e068be5e3cb488a22a9c0af494"
  },
  {
    "url": "assets/js/54.90084bcf.js",
    "revision": "53e46fb63aec6a03650b6d03955cb4e9"
  },
  {
    "url": "assets/js/55.bc3a405d.js",
    "revision": "c8881ee5c7e7acffe482264cb9b61c20"
  },
  {
    "url": "assets/js/56.85c02c87.js",
    "revision": "17f73806d78ef9ad6d990d91abfcecad"
  },
  {
    "url": "assets/js/57.38f6b4b3.js",
    "revision": "b4c9d08fefcee8311c8b6e272c22fceb"
  },
  {
    "url": "assets/js/58.ac3c7cbe.js",
    "revision": "844755a8131378146ed2cecfeb859c8b"
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
    "url": "assets/js/app.5ce409d1.js",
    "revision": "e176b78d0d2b875e61a9c713565eee54"
  },
  {
    "url": "assets/js/vendors~docsearch.11055bee.js",
    "revision": "8259fdbb94020e921a7272f277903b38"
  },
  {
    "url": "code/git/base/branch.html",
    "revision": "b36c48fbff73386765a30b4df58d7aea"
  },
  {
    "url": "code/git/base/cancel.html",
    "revision": "9bf05c280422ce275627a7e49de2e2f5"
  },
  {
    "url": "code/git/base/operation.html",
    "revision": "74556b5a5153002c45c6f95efe65f71d"
  },
  {
    "url": "code/git/base/remote.html",
    "revision": "1b818e69aa63c46ee180745a15b1afe4"
  },
  {
    "url": "code/git/base/use.html",
    "revision": "416575daf65948bffbc5b22748c39332"
  },
  {
    "url": "code/git/cover.html",
    "revision": "48d9f9065d7b4fbf7e3df7e3eceb9e16"
  },
  {
    "url": "code/git/index.html",
    "revision": "32e9279a22374088efb185d19cdfacd6"
  },
  {
    "url": "code/git/install.html",
    "revision": "ae7e627b71cc1f0f59ccc46eef9d9bd7"
  },
  {
    "url": "code/git/sort.html",
    "revision": "49fb78ee83c1565d7de8775133b1fd44"
  },
  {
    "url": "code/java/four.html",
    "revision": "b21d8b394c4884f16e4e5a8b26978105"
  },
  {
    "url": "code/java/index.html",
    "revision": "18d5e27cfb317491e7c97216be88286d"
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
    "revision": "5c5f6a949aa632df9d6b44b4004884ad"
  },
  {
    "url": "operation/node.html",
    "revision": "2d7667be0c2202f86ffeeb1c06afaad9"
  },
  {
    "url": "system/linux/base/index.html",
    "revision": "46950972eebf1b8a3f9a7d0c577d79c2"
  },
  {
    "url": "system/linux/docker/images/iperf3.html",
    "revision": "eb427de5d0839d46590bf241b7537706"
  },
  {
    "url": "system/linux/docker/images/portainer.html",
    "revision": "b6473a77a4dcad609bef5fb9461f0f4c"
  },
  {
    "url": "system/linux/docker/index.html",
    "revision": "4683168084b4307c02731fd1755c0039"
  },
  {
    "url": "system/linux/docker/operator/batched.html",
    "revision": "a8291df39b28a50b10a806dde48fffae"
  },
  {
    "url": "system/linux/docker/operator/remote.html",
    "revision": "ea06090006d0e4da4b1830f4809368b4"
  },
  {
    "url": "system/linux/docker/problem/commonProblem.html",
    "revision": "6a13fbb223c808b228ec663c70b75bf0"
  },
  {
    "url": "system/linux/firewall/centos7.html",
    "revision": "38f355150d198b664186457c934d6522"
  },
  {
    "url": "system/linux/firewall/centos8.html",
    "revision": "ac6a9e7a39f437ffb59f9d2123960947"
  },
  {
    "url": "system/linux/firewall/ubuntu.html",
    "revision": "73716509af621ba496f51c77ec035884"
  },
  {
    "url": "system/linux/java/jdk.html",
    "revision": "3d9c0ca6fe04942e5a84a3cb8a64631c"
  },
  {
    "url": "system/linux/java/maven.html",
    "revision": "54691119ff0242c8a5f8ac0ac243fbfb"
  },
  {
    "url": "system/linux/java/node.html",
    "revision": "6121d7221cdcf8b47b689348428a62a3"
  },
  {
    "url": "system/macos/index.html",
    "revision": "9f38191be63769fea15a38e37a968dfc"
  },
  {
    "url": "system/macos/screen.html",
    "revision": "bf8d86653da4ec09bf7a6a49e1e70293"
  },
  {
    "url": "system/synology/drive.html",
    "revision": "c4f470b711f91ca200767ff8f53a6b67"
  },
  {
    "url": "system/synology/index.html",
    "revision": "a7a531b6b10b32573b84a245e0164023"
  },
  {
    "url": "system/synology/root.html",
    "revision": "41edf235274053d9d0ba854a57c2f9ba"
  },
  {
    "url": "system/windows/env.html",
    "revision": "9d98c63c4121563e6f05a5bc6e689518"
  },
  {
    "url": "system/windows/index.html",
    "revision": "3c3ec6e76e674d34af43883e47bf7d17"
  },
  {
    "url": "system/windows/print.html",
    "revision": "015ff24a21808fbaaef9129b19ad2a8e"
  },
  {
    "url": "system/windows/service.html",
    "revision": "f6075a6ca757c68a7918b4e5b89a5446"
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
