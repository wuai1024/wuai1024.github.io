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
    "revision": "abac4ff050f98bc05613a5a482cf5f73"
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
    "url": "assets/js/29.d34df799.js",
    "revision": "2be25110b563761a281c6e07081c01ce"
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
    "url": "assets/js/35.b83e628b.js",
    "revision": "fbd5a53b9a17f9bdaedb6853e19319b1"
  },
  {
    "url": "assets/js/36.fddb1414.js",
    "revision": "3a1b352b83d2d24d25ad43ec10d5d50c"
  },
  {
    "url": "assets/js/37.c1c49d13.js",
    "revision": "1ba04524ddd9805ae2cc87262b17a2eb"
  },
  {
    "url": "assets/js/38.c0957ee9.js",
    "revision": "f2240068482c998466d6483866ca8d92"
  },
  {
    "url": "assets/js/39.bb26310a.js",
    "revision": "1f31319b42ff8f6644798bb823ed829c"
  },
  {
    "url": "assets/js/4.66a56329.js",
    "revision": "e426d84613cf940552fa0ed4580bea24"
  },
  {
    "url": "assets/js/40.e4be64f4.js",
    "revision": "eaffccdda714872675c9919a75869d2e"
  },
  {
    "url": "assets/js/41.8c32b651.js",
    "revision": "1f721cd62fd36bf398f6152d11a5a6c4"
  },
  {
    "url": "assets/js/42.71ed0b39.js",
    "revision": "fd3479028ec417104ad1c382c808f299"
  },
  {
    "url": "assets/js/43.d94436ef.js",
    "revision": "4e4af29edb7932dbe16965b131ccdc6e"
  },
  {
    "url": "assets/js/44.afab1f25.js",
    "revision": "d0f708b0d8170fc4146bb5ea231e3800"
  },
  {
    "url": "assets/js/45.33024921.js",
    "revision": "3776c3e1a76b089c075aa4110862357c"
  },
  {
    "url": "assets/js/46.5569d640.js",
    "revision": "da4d66602779888609e6ff67dcffdaad"
  },
  {
    "url": "assets/js/47.2e03467a.js",
    "revision": "9ae277ab56e8921f2cffa81a41f5d7fa"
  },
  {
    "url": "assets/js/48.bae318f1.js",
    "revision": "0c80d03794d642eca89eb7427660b596"
  },
  {
    "url": "assets/js/49.36b3ef37.js",
    "revision": "fab29732a90e3a907e99520d7733a870"
  },
  {
    "url": "assets/js/5.c4113094.js",
    "revision": "9410cb42cf2dc34ed621f83cc0b4750a"
  },
  {
    "url": "assets/js/50.ba68bc69.js",
    "revision": "529bc2ac7ef1f3cf48f017b0089aec3a"
  },
  {
    "url": "assets/js/51.714034a5.js",
    "revision": "6e53aaa1e9a949342b9fbc13101dff80"
  },
  {
    "url": "assets/js/52.3b1350f0.js",
    "revision": "96ae976ee412c9203a42c8a01e3d2aef"
  },
  {
    "url": "assets/js/53.fe000551.js",
    "revision": "c2a47c3aad335192d40bad3af8dc9bf3"
  },
  {
    "url": "assets/js/54.c85ce2b1.js",
    "revision": "b4d965c11cb1042fdd8c3a4c8cb50d2b"
  },
  {
    "url": "assets/js/55.89d01221.js",
    "revision": "f1fe5e4652ba87d721f8a94f200f6a6b"
  },
  {
    "url": "assets/js/56.380b7543.js",
    "revision": "8a2f0090de0750ffff5f1f48ed89826a"
  },
  {
    "url": "assets/js/57.5940281d.js",
    "revision": "7fae13895ae96d3b598e60389953b3d7"
  },
  {
    "url": "assets/js/58.22161a9f.js",
    "revision": "c664c782134141c952634618cbaf73d6"
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
    "url": "assets/js/app.655fd67d.js",
    "revision": "7e8aa80b939f8e5d3fa00cc9d2ce7b24"
  },
  {
    "url": "assets/js/vendors~docsearch.11055bee.js",
    "revision": "8259fdbb94020e921a7272f277903b38"
  },
  {
    "url": "code/git/base/branch.html",
    "revision": "02cae8b65ce7deb069b328bffa0008d5"
  },
  {
    "url": "code/git/base/cancel.html",
    "revision": "e73eb9ec88d4fc1c83b029335bc398b0"
  },
  {
    "url": "code/git/base/operation.html",
    "revision": "698ace2ae4d3886de5c1bb7aa414b0e0"
  },
  {
    "url": "code/git/base/remote.html",
    "revision": "ffcc7744519f7fc68a31a94050f90e18"
  },
  {
    "url": "code/git/base/use.html",
    "revision": "2f3c477a976246ff9f534dc3ea6e8b1a"
  },
  {
    "url": "code/git/cover.html",
    "revision": "8bdd174c8bf2ac947a5e7993cc2db01c"
  },
  {
    "url": "code/git/index.html",
    "revision": "57d2732a541eee20959c7511bbafe764"
  },
  {
    "url": "code/git/install.html",
    "revision": "e98348bafe12afc15e3f077a161681f8"
  },
  {
    "url": "code/git/sort.html",
    "revision": "4eec509c91ea27cdc27da202c589ede5"
  },
  {
    "url": "code/java/four.html",
    "revision": "1c7c2006c7aa8566e4443fe75f2fbca5"
  },
  {
    "url": "code/java/index.html",
    "revision": "c93e881e78aecabc7c33b99f72d104c0"
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
    "revision": "4254836ca3b6085704369d0e70183ec0"
  },
  {
    "url": "operation/node.html",
    "revision": "a20356394589b2488039ec70f8451525"
  },
  {
    "url": "system/linux/base/index.html",
    "revision": "87500cc060da89d7cd2c669d06703625"
  },
  {
    "url": "system/linux/docker/images/iperf3.html",
    "revision": "91641f5f473de062d89f5bd274781ce7"
  },
  {
    "url": "system/linux/docker/images/portainer.html",
    "revision": "e53487f7aff1b1f123d75aa95f5b55b8"
  },
  {
    "url": "system/linux/docker/index.html",
    "revision": "ae1ea5fb596ec23c95ad1ace429a4458"
  },
  {
    "url": "system/linux/docker/operator/batched.html",
    "revision": "a5115ec87904b23599843595f04febd8"
  },
  {
    "url": "system/linux/docker/operator/remote.html",
    "revision": "2277fd6bca012b3dc8fe6e100c07b17c"
  },
  {
    "url": "system/linux/docker/problem/commonProblem.html",
    "revision": "6c28f4f6c9904c071f1ac86c81e6d4aa"
  },
  {
    "url": "system/linux/firewall/centos7.html",
    "revision": "859ba5fb3c4724cc6cf7e50af2681a74"
  },
  {
    "url": "system/linux/firewall/centos8.html",
    "revision": "86278f04466ea55c03c08fd60ae231e4"
  },
  {
    "url": "system/linux/firewall/ubuntu.html",
    "revision": "be621e7b02aacfca8e49445936ed0c2c"
  },
  {
    "url": "system/linux/java/jdk.html",
    "revision": "0bce833bd863a7104a4de5ca737a9362"
  },
  {
    "url": "system/linux/java/maven.html",
    "revision": "e9c47238711d4eafbc8aa6f9be286799"
  },
  {
    "url": "system/linux/java/node.html",
    "revision": "0de189f0d8050eddc6558dda0e5c09d3"
  },
  {
    "url": "system/macos/index.html",
    "revision": "b90cdf36c41cf0222e427a76086630f5"
  },
  {
    "url": "system/macos/itunes-bak.html",
    "revision": "f4a5abb245788d44b7c57c462114fd1a"
  },
  {
    "url": "system/macos/screen.html",
    "revision": "267cb0ba4f7e0567d1c756f5c0bbc77c"
  },
  {
    "url": "system/synology/drive.html",
    "revision": "ba43e5552c74e61882b53436b112fe74"
  },
  {
    "url": "system/synology/index.html",
    "revision": "eefd4d27c788108b82e2f5c61bc69edd"
  },
  {
    "url": "system/synology/root.html",
    "revision": "0f5534340fa4920f463952cd448e4421"
  },
  {
    "url": "system/windows/env.html",
    "revision": "e65e2dc08f093e349027297c51839b73"
  },
  {
    "url": "system/windows/index.html",
    "revision": "175c158e8615146f834bc1c4d791b1d9"
  },
  {
    "url": "system/windows/print.html",
    "revision": "e9837873dd48069560dbec965dc45962"
  },
  {
    "url": "system/windows/service.html",
    "revision": "943f9b8d6c5716a2d4c719c6b214d7e3"
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
