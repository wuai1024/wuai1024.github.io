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
    "revision": "945245ae83e6c37dace1818858f6c921"
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
    "url": "assets/js/26.50b4d70f.js",
    "revision": "8fac310e98ba56088e6237e264687bdb"
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
    "url": "assets/js/33.ed664419.js",
    "revision": "10d39ededdae55d9397f3869cf083c9f"
  },
  {
    "url": "assets/js/34.9478cfa0.js",
    "revision": "966b8e2a5f40e4675018fd4b5958d5c6"
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
    "url": "assets/js/42.d66f93c0.js",
    "revision": "317eb14178a04eac2df288a5ede29cbc"
  },
  {
    "url": "assets/js/43.fcfb920c.js",
    "revision": "391a1d0241e4571975777885e262863e"
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
    "url": "assets/js/50.44b49b9c.js",
    "revision": "3b02341e5d4b1630e2a49bf2803144bb"
  },
  {
    "url": "assets/js/51.525ed919.js",
    "revision": "5c430b3a6c360f0837636a8a2c9b10c8"
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
    "url": "assets/js/57.a7164c3c.js",
    "revision": "84b5d52a05a87bdc1a285d6c23fe02f6"
  },
  {
    "url": "assets/js/58.1959a7f6.js",
    "revision": "12536ca53c7e52e1d2cf1a2bd24a1e3a"
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
    "url": "assets/js/app.b2f24e9b.js",
    "revision": "c3ab680ec65289f137eee58340fb7ca9"
  },
  {
    "url": "assets/js/vendors~docsearch.11055bee.js",
    "revision": "8259fdbb94020e921a7272f277903b38"
  },
  {
    "url": "code/git/base/branch.html",
    "revision": "a57de2f9811b8fa7ab50f75607861863"
  },
  {
    "url": "code/git/base/cancel.html",
    "revision": "4609dff99e60b9d41264d822dd365599"
  },
  {
    "url": "code/git/base/operation.html",
    "revision": "295080b9dbe9637a7617e76a78a6bbdf"
  },
  {
    "url": "code/git/base/remote.html",
    "revision": "6439c6c183c903d4f1733285e2d6dd8d"
  },
  {
    "url": "code/git/base/use.html",
    "revision": "ec8ae7dbcfb149adbccf9ddf71acc9b4"
  },
  {
    "url": "code/git/cover.html",
    "revision": "9e8aebd3de9d7480cdd865fd10d45493"
  },
  {
    "url": "code/git/index.html",
    "revision": "a3097ba2883b70f2801fb313392db26b"
  },
  {
    "url": "code/git/install.html",
    "revision": "2396b424b7eeffb9949db62fc4dea303"
  },
  {
    "url": "code/git/sort.html",
    "revision": "ea0084404ac892399eab1fbb1b279d70"
  },
  {
    "url": "code/java/four.html",
    "revision": "e8833e94a73c0013cb0656704f643469"
  },
  {
    "url": "code/java/index.html",
    "revision": "b6bd3026d04cc7c2f1a3954dc1af985c"
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
    "revision": "ecc013e1a9ce90cb0399d8a8aca113d5"
  },
  {
    "url": "operation/node.html",
    "revision": "7994fefed58102799b4fdcae3f77f754"
  },
  {
    "url": "system/linux/base/index.html",
    "revision": "1b6126bdc8f681b9511e318151ca7715"
  },
  {
    "url": "system/linux/docker/images/iperf3.html",
    "revision": "57fcdca8fbb074c0bdc6700a1069353d"
  },
  {
    "url": "system/linux/docker/images/portainer.html",
    "revision": "07ca1c653187e0a3892edcc1a222badf"
  },
  {
    "url": "system/linux/docker/index.html",
    "revision": "4b3254ec00963accbc92edf1b53ecb52"
  },
  {
    "url": "system/linux/docker/operator/batched.html",
    "revision": "14f8c28bd7d24bf6feaa4a235be873a0"
  },
  {
    "url": "system/linux/docker/operator/remote.html",
    "revision": "ad31cd3212bc35fe59a22f8e7e7f0c08"
  },
  {
    "url": "system/linux/docker/problem/commonProblem.html",
    "revision": "1ebf2ecab9acaed66e8a0dd8b751b751"
  },
  {
    "url": "system/linux/firewall/centos7.html",
    "revision": "4302fd58b0f92039fc65fd07aea3fe98"
  },
  {
    "url": "system/linux/firewall/centos8.html",
    "revision": "ed3424a7f25b2ff1ba3dd378255edff6"
  },
  {
    "url": "system/linux/firewall/ubuntu.html",
    "revision": "9550c8a81ac09bd97ca84b74b5b7d3c3"
  },
  {
    "url": "system/linux/java/jdk.html",
    "revision": "e84b58107c6f2a83b710975df341e63b"
  },
  {
    "url": "system/linux/java/maven.html",
    "revision": "aa46a65d738499c0981f6f4385582381"
  },
  {
    "url": "system/linux/java/node.html",
    "revision": "f6ff8d8a75ad92762f749bac990fa2a1"
  },
  {
    "url": "system/macos/index.html",
    "revision": "4ace4effedf4c4ef50d33bcc5960ff54"
  },
  {
    "url": "system/macos/itunes-bak.html",
    "revision": "9c6310fb6b78f6549755ca4302501cb1"
  },
  {
    "url": "system/macos/screen.html",
    "revision": "200282fa1eea555fa97b373fdc87cb9a"
  },
  {
    "url": "system/synology/drive.html",
    "revision": "a344968c36378b275110c2a5e3b21b4e"
  },
  {
    "url": "system/synology/index.html",
    "revision": "b2a63ac900f18f6b8854e1aa2584da23"
  },
  {
    "url": "system/synology/root.html",
    "revision": "e1e0ed4b026ae03fd7d99a2a8b6ace3a"
  },
  {
    "url": "system/windows/env.html",
    "revision": "f921b2161a81abd387741842ae4022ee"
  },
  {
    "url": "system/windows/index.html",
    "revision": "22ba71bde025b144ac08ae958558d8ca"
  },
  {
    "url": "system/windows/print.html",
    "revision": "e5afd6eefd394e3f8bc00bac5fdab912"
  },
  {
    "url": "system/windows/service.html",
    "revision": "3e5116b7d2ed757d49305622f67e5ab1"
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
