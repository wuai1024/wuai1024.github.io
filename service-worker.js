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
    "revision": "37c51c2184aae99cc1042786b3ef5074"
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
    "url": "assets/js/30.6145a829.js",
    "revision": "aa4847f6debd1b49d5e56a6c7dde6400"
  },
  {
    "url": "assets/js/31.93ad2dfd.js",
    "revision": "afd67f53749ec74aae5acd995baaf51f"
  },
  {
    "url": "assets/js/32.74645f47.js",
    "revision": "22f6734687bccfde68fd29f7f45a751f"
  },
  {
    "url": "assets/js/33.9299216e.js",
    "revision": "190d3481e8e5bbac4b32b25f4a674d1c"
  },
  {
    "url": "assets/js/34.53c4243a.js",
    "revision": "fe26ec16b1aa83f02373b71846506f49"
  },
  {
    "url": "assets/js/35.7ebe2bfe.js",
    "revision": "a11a502be6089fb04c88e325495244a9"
  },
  {
    "url": "assets/js/36.2f1e7877.js",
    "revision": "4e48ebe4b451920bbe45d928e7ef3edc"
  },
  {
    "url": "assets/js/37.1b0f319a.js",
    "revision": "d8482a7cb3a648a1f6f579ae2b514646"
  },
  {
    "url": "assets/js/38.f2b20427.js",
    "revision": "cbc00a1681d0eaa67ce3baf7f4b253de"
  },
  {
    "url": "assets/js/39.d0670144.js",
    "revision": "0029f9d2723adfb6c78797c5005c5166"
  },
  {
    "url": "assets/js/4.66a56329.js",
    "revision": "e426d84613cf940552fa0ed4580bea24"
  },
  {
    "url": "assets/js/40.8de86cef.js",
    "revision": "5d5ac64cf36c3a6dcde1acaecc13d4ab"
  },
  {
    "url": "assets/js/41.a89d647b.js",
    "revision": "d49b8c2527f0be8bc3042189cb712234"
  },
  {
    "url": "assets/js/42.673ecb4f.js",
    "revision": "3ffa389110881c1e609ff4d1a7a830bf"
  },
  {
    "url": "assets/js/43.ee200de0.js",
    "revision": "a2e890b4f28b602a963b9fac2f5dda81"
  },
  {
    "url": "assets/js/44.e9a2ce2b.js",
    "revision": "0a7ac43470f1d76568a385759bbeb577"
  },
  {
    "url": "assets/js/45.cbef7172.js",
    "revision": "19eefb4b0951650a3ba9c27594a6a7e1"
  },
  {
    "url": "assets/js/46.caad3489.js",
    "revision": "72d55e45ef4d2adb2178cf3e059f6a16"
  },
  {
    "url": "assets/js/47.19aacf27.js",
    "revision": "9fb9e3ec6dd6e573f8c57394da0bb368"
  },
  {
    "url": "assets/js/48.c4e671fd.js",
    "revision": "dcf3535b93ff731811f3ca5a0b899792"
  },
  {
    "url": "assets/js/49.40915a34.js",
    "revision": "000a70b3fbd810e744a0523446d8fdaa"
  },
  {
    "url": "assets/js/5.c4113094.js",
    "revision": "9410cb42cf2dc34ed621f83cc0b4750a"
  },
  {
    "url": "assets/js/50.97326fac.js",
    "revision": "7aa872ca04e1a08f4a562effb17e321e"
  },
  {
    "url": "assets/js/51.a7df2416.js",
    "revision": "263c218a06985dd13004c07ea8aeae13"
  },
  {
    "url": "assets/js/52.8104cb9a.js",
    "revision": "ced5bde84b791a39184e9f456ed6dd2d"
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
    "url": "assets/js/app.20816fe1.js",
    "revision": "16fedc44a6e8b8fc1e6db9731d0623f8"
  },
  {
    "url": "assets/js/vendors~docsearch.5e758b7f.js",
    "revision": "8259fdbb94020e921a7272f277903b38"
  },
  {
    "url": "code/git/base/branch.html",
    "revision": "6e8b6c68ee74c99766aa6d4c08ae856a"
  },
  {
    "url": "code/git/base/cancel.html",
    "revision": "c8159a456dcedb6aa1bd0ec3c35178d8"
  },
  {
    "url": "code/git/base/operation.html",
    "revision": "dae59ba18d150de4e568799edb01f627"
  },
  {
    "url": "code/git/base/remote.html",
    "revision": "eddf611492afb05a81a956ef9c5c01f9"
  },
  {
    "url": "code/git/base/use.html",
    "revision": "dd9f1c0b5c60630e23b3eec2280ec8f1"
  },
  {
    "url": "code/git/index.html",
    "revision": "580cf9d086f5d21a1409b759576649d3"
  },
  {
    "url": "code/git/install.html",
    "revision": "17daac89e43625a85101cb2fe3daf9ef"
  },
  {
    "url": "code/java/four.html",
    "revision": "e330c13a38e8fd9517daa3b5fd9f34bf"
  },
  {
    "url": "code/java/index.html",
    "revision": "e8b2499500574d68454d68e0bb609108"
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
    "revision": "a08e08cc9d1a7af402f5af02aa4a8e40"
  },
  {
    "url": "operation/node.html",
    "revision": "d766c836418335d68bbdf661c350662a"
  },
  {
    "url": "system/linux/base/index.html",
    "revision": "4f77c1bf145a8b27bd3b18f635c327d8"
  },
  {
    "url": "system/linux/docker/images/iperf3.html",
    "revision": "63b2ae5635898c2004d1d64d1296d70e"
  },
  {
    "url": "system/linux/docker/images/portainer.html",
    "revision": "3d28c91dc85b28ecc341065a50edad40"
  },
  {
    "url": "system/linux/docker/index.html",
    "revision": "927024f547be31acce9ed1160b3a3a01"
  },
  {
    "url": "system/linux/docker/operator/batched.html",
    "revision": "8c27c02549560f524449628a02589895"
  },
  {
    "url": "system/linux/docker/operator/remote.html",
    "revision": "ba93aac95d14038464fe6d9bdb569907"
  },
  {
    "url": "system/linux/docker/problem/commonProblem.html",
    "revision": "bbcd04b61ae3b9371aecb91444f556f4"
  },
  {
    "url": "system/linux/java/jdk.html",
    "revision": "6ac1d047f1442d999baff53fbff767f3"
  },
  {
    "url": "system/linux/java/maven.html",
    "revision": "841b2496f417125a86d646daf1f06eda"
  },
  {
    "url": "system/linux/java/node.html",
    "revision": "0665fe3bed0a91c93b2ed7da5715c416"
  },
  {
    "url": "system/macos/index.html",
    "revision": "d5797cf1489f05ff6baa976e771722ae"
  },
  {
    "url": "system/macos/screen.html",
    "revision": "d797c9fb4704a2d808672d0f27c7fb02"
  },
  {
    "url": "system/synology/drive.html",
    "revision": "6f9802ece32a1fb5d2eeb554a571193c"
  },
  {
    "url": "system/synology/index.html",
    "revision": "7ca5a63206042760092aea0b45835259"
  },
  {
    "url": "system/synology/root.html",
    "revision": "3dabc2249ce38113868ebb3024d9f39d"
  },
  {
    "url": "system/windows/index.html",
    "revision": "41c579faf2561adb19aaafa164565fa7"
  },
  {
    "url": "system/windows/print.html",
    "revision": "ebd14b89c2a4276e8a353b7b0bf7fc34"
  },
  {
    "url": "system/windows/service.html",
    "revision": "9bc6f83f382aab2afcc937d4ded43d20"
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
