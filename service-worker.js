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
    "revision": "b17a166010613336eaa601c96b2d5804"
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
    "url": "assets/js/19.3b0f3097.js",
    "revision": "0dc4592496aa1a6609a52fa7e762090b"
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
    "url": "assets/js/25.0e0165d0.js",
    "revision": "24a0e655e9209021dbb939766e16efd3"
  },
  {
    "url": "assets/js/26.90432823.js",
    "revision": "1bf7116f46ff7d2f949ea97d315c77f5"
  },
  {
    "url": "assets/js/27.640dc6d4.js",
    "revision": "df3aae405e0e13021a647e547e702aa0"
  },
  {
    "url": "assets/js/28.c84c0c81.js",
    "revision": "b971bbbe0c956ba180c1518b028b26d7"
  },
  {
    "url": "assets/js/29.9c3a5c30.js",
    "revision": "5e5806dee36ae8cf8538801ebf3332ac"
  },
  {
    "url": "assets/js/3.1b425697.js",
    "revision": "4698c6cdfc273acbbaf92bdac1193650"
  },
  {
    "url": "assets/js/30.b317448c.js",
    "revision": "be2205c12563eb99be347ec8e7e37a60"
  },
  {
    "url": "assets/js/31.09091b79.js",
    "revision": "6065bf445dc7fcaf85773723400e7db9"
  },
  {
    "url": "assets/js/32.2fcf1b1b.js",
    "revision": "379d3d415687598f77507efb56b4da7a"
  },
  {
    "url": "assets/js/33.777bc777.js",
    "revision": "c44839338d8dbf1d1f70e326edde096b"
  },
  {
    "url": "assets/js/34.b4a4bd07.js",
    "revision": "eca977f66adc7091a3030fad3e27318c"
  },
  {
    "url": "assets/js/35.82d2f456.js",
    "revision": "c33bfadf02278fd60e113b5ea6975376"
  },
  {
    "url": "assets/js/36.1084acbc.js",
    "revision": "9cb1e492d9f1f71a3d539c3ef4504639"
  },
  {
    "url": "assets/js/37.853a4061.js",
    "revision": "314bbcc8807fc89e52b6f0f6a332c41b"
  },
  {
    "url": "assets/js/38.d4bd4cdf.js",
    "revision": "94d75fa1f974137a105a52a70067a4d0"
  },
  {
    "url": "assets/js/39.249af95c.js",
    "revision": "252d5ff4c05cc8bf74e26286c9166645"
  },
  {
    "url": "assets/js/4.66a56329.js",
    "revision": "e426d84613cf940552fa0ed4580bea24"
  },
  {
    "url": "assets/js/40.efa50245.js",
    "revision": "776da4d0e5697ce5b776659eb614034e"
  },
  {
    "url": "assets/js/41.b51f79f8.js",
    "revision": "fe315a811c301fc43a5a52bb7106371c"
  },
  {
    "url": "assets/js/42.601eb2ea.js",
    "revision": "fb01b4dd2d9db651001f0e9609cf9384"
  },
  {
    "url": "assets/js/43.1b70eccc.js",
    "revision": "1f58d6beab435a628687034f36b2f14e"
  },
  {
    "url": "assets/js/44.65d15e2c.js",
    "revision": "7b5370bd1a82c0bd405dbc790721d3f5"
  },
  {
    "url": "assets/js/45.d6beaaa2.js",
    "revision": "71f7fd7eb5dcea07bd6e6c3b9e538bdc"
  },
  {
    "url": "assets/js/46.62854961.js",
    "revision": "59fc2e0f09125b93c859607917b4c20a"
  },
  {
    "url": "assets/js/47.5a6476d6.js",
    "revision": "ee6ec4515ad84061c9fe4d9af9de7206"
  },
  {
    "url": "assets/js/5.c4113094.js",
    "revision": "9410cb42cf2dc34ed621f83cc0b4750a"
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
    "url": "assets/js/app.2b2e50fc.js",
    "revision": "10898bc49f2a1501c08d3e7beec98547"
  },
  {
    "url": "assets/js/vendors~docsearch.5e758b7f.js",
    "revision": "8259fdbb94020e921a7272f277903b38"
  },
  {
    "url": "code/git/index.html",
    "revision": "fcdfdd1117af4c57262cd61a9ebfa50f"
  },
  {
    "url": "code/git/install.html",
    "revision": "d0b2e92042d55ae8742201906a631c57"
  },
  {
    "url": "code/java/four.html",
    "revision": "778069b65ab83a9c8030ddb77bf01ff6"
  },
  {
    "url": "code/java/index.html",
    "revision": "6e5589855db41178d501857ef9138c1f"
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
    "revision": "a182fd1e2959d70ac00216160821edf5"
  },
  {
    "url": "operation/node.html",
    "revision": "8275e6b92d4c05eb9da0f59b3533717f"
  },
  {
    "url": "system/linux/base/index.html",
    "revision": "2d02cec682e7291ecfef71cd3640844b"
  },
  {
    "url": "system/linux/docker/images/iperf3.html",
    "revision": "9ceac323e119305bbccb78686413c932"
  },
  {
    "url": "system/linux/docker/images/portainer.html",
    "revision": "30364aa99d48f2aa9b3068eadea70cf6"
  },
  {
    "url": "system/linux/docker/index.html",
    "revision": "545a5e93d88c4e89a3a9035c02e62b46"
  },
  {
    "url": "system/linux/docker/operator/batched.html",
    "revision": "80462e2ba1e2b70ae4b1a1beef49b718"
  },
  {
    "url": "system/linux/docker/operator/remote.html",
    "revision": "b0b2d1cdbea2d279bb34d9ea4f135ca1"
  },
  {
    "url": "system/linux/docker/problem/commonProblem.html",
    "revision": "f8cc5885079ca07c631c9b6b528700ce"
  },
  {
    "url": "system/linux/java/jdk.html",
    "revision": "3ae940562558d55f2446dfd839325cb9"
  },
  {
    "url": "system/linux/java/maven.html",
    "revision": "518a0988904317634b0bcbfb0b486f7e"
  },
  {
    "url": "system/linux/java/node.html",
    "revision": "5df9e3e8f48c9c2e893177abd5096a8a"
  },
  {
    "url": "system/macos/index.html",
    "revision": "f1c02c0d402919a49ef23a84ffb51e88"
  },
  {
    "url": "system/macos/screen.html",
    "revision": "14d013146ba24bf35489faee212de9aa"
  },
  {
    "url": "system/synology/drive.html",
    "revision": "b5eeb614a05f3504c939d5c982b88a60"
  },
  {
    "url": "system/synology/index.html",
    "revision": "1646428960ecc374900f6bd4395b01f9"
  },
  {
    "url": "system/synology/root.html",
    "revision": "1a1837b80bc46c867fdf554d0539d8ea"
  },
  {
    "url": "system/windows/index.html",
    "revision": "71077661a9f7f9e77d3d6390283b431d"
  },
  {
    "url": "system/windows/print.html",
    "revision": "97585245e98a241d4d88e701c151a0ce"
  },
  {
    "url": "system/windows/service.html",
    "revision": "407a268ea6ba31a49bc68dc895c93aa1"
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
