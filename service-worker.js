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
    "revision": "975818fc935f3409ba5ab467370c078c"
  },
  {
    "url": "assets/css/0.styles.97ce954e.css",
    "revision": "d1e2d1c61e6f0bd4f09d5c9a18d01375"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b46f1795.js",
    "revision": "34d6cfdb9cea12f1066537e88df6fde4"
  },
  {
    "url": "assets/js/11.0aba0650.js",
    "revision": "cb327d244b62e0314f2f48c9be24d0b5"
  },
  {
    "url": "assets/js/12.2bda8a0a.js",
    "revision": "05611ce3fec7789641b4c4236d62bf1d"
  },
  {
    "url": "assets/js/13.6578df2d.js",
    "revision": "5cfd91d37c1287f6cb89e778da00d165"
  },
  {
    "url": "assets/js/14.40c63cb4.js",
    "revision": "f782cb19ba79e70a74583743605beee8"
  },
  {
    "url": "assets/js/15.f712f6e7.js",
    "revision": "04c1c0f73a9c0b64ccf44f658e7d07ef"
  },
  {
    "url": "assets/js/16.ca54ff30.js",
    "revision": "89ba7eca736d2fed750fc9300cdea42d"
  },
  {
    "url": "assets/js/17.caa54f85.js",
    "revision": "f2bb80a2b13b1e1ba4fe9396d0dd69da"
  },
  {
    "url": "assets/js/18.8e51c564.js",
    "revision": "6b9da8b5c530d13fd1fa77b069880d0a"
  },
  {
    "url": "assets/js/19.39bdf68d.js",
    "revision": "f30fbe6636d785879a8199bed5027507"
  },
  {
    "url": "assets/js/2.9088e4f2.js",
    "revision": "44e0a579ca32fc67b0fbc4805010e02d"
  },
  {
    "url": "assets/js/20.79788946.js",
    "revision": "3b17e975ab26ac8b892adfe8251368da"
  },
  {
    "url": "assets/js/21.4162367c.js",
    "revision": "9c704b5bff1c089c542af7704d6dbaf7"
  },
  {
    "url": "assets/js/22.514dd4bd.js",
    "revision": "b349258fbf8896e9c66bafd098ae2764"
  },
  {
    "url": "assets/js/23.48fcea08.js",
    "revision": "f15447a06cbb8c0ce3b4b054669885d6"
  },
  {
    "url": "assets/js/24.2d78f3f3.js",
    "revision": "88cab18ed0ae9efa79f6c810bea07240"
  },
  {
    "url": "assets/js/25.dbebb743.js",
    "revision": "e8ae0ed737219ebcf8c92912f8d05371"
  },
  {
    "url": "assets/js/26.3b5ccbc1.js",
    "revision": "5f442db201680b020bf5e96fc653d81f"
  },
  {
    "url": "assets/js/3.0b786b6c.js",
    "revision": "e12cd0c28b83b99cc7e99ce92e034dd5"
  },
  {
    "url": "assets/js/4.1d74eb7e.js",
    "revision": "1154fea942e6e525d962ef71e0583300"
  },
  {
    "url": "assets/js/5.0e8ca067.js",
    "revision": "9878067d04af35e9b0ffbdf820e3fcee"
  },
  {
    "url": "assets/js/6.1679e0fb.js",
    "revision": "9605e83eb9d65f078827a25391f61554"
  },
  {
    "url": "assets/js/7.b7769c5c.js",
    "revision": "13c1567e647ba2cb349375d7841780b7"
  },
  {
    "url": "assets/js/8.040883fc.js",
    "revision": "3c8d971d566a190e27194243018283f7"
  },
  {
    "url": "assets/js/9.f0222498.js",
    "revision": "f98c571fa98fe7e78d9c0edf4a6eb561"
  },
  {
    "url": "assets/js/app.dab778b5.js",
    "revision": "af18f5e4f9d9d93ab9ce3de94430089a"
  },
  {
    "url": "code/java/four.html",
    "revision": "0106906fb7a9981a4e6e1fddedfadc3f"
  },
  {
    "url": "code/java/index.html",
    "revision": "7786cb40d6f4d3a936d13c06eed8ca62"
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
    "url": "index.html",
    "revision": "89867dd1a5d10cf9170fee75c9c2b9ae"
  },
  {
    "url": "operation/node.html",
    "revision": "e713005504eaf26a42b04eef347c228d"
  },
  {
    "url": "system/linux/docker/images/iperf3.html",
    "revision": "7ecded4be39538841302b2e923424f1c"
  },
  {
    "url": "system/linux/docker/images/portainer.html",
    "revision": "489307a20c1539bed1f6020be11433cd"
  },
  {
    "url": "system/linux/docker/index.html",
    "revision": "61ec78cf1cb0dd0dfcca5e0d285f114d"
  },
  {
    "url": "system/linux/docker/operator/batched.html",
    "revision": "3d4d9b425f5a82246209a7052db28aea"
  },
  {
    "url": "system/linux/docker/operator/remote.html",
    "revision": "f6166bcdb2f241e68afb507698d3ebfc"
  },
  {
    "url": "system/linux/index.html",
    "revision": "2af13cadd3ac466d81e4ae54a2373f3d"
  },
  {
    "url": "system/linux/java/jdk.html",
    "revision": "b1b2a65d267be7a60661ab8268fe9087"
  },
  {
    "url": "system/linux/java/maven.html",
    "revision": "b23fedd5adb79354f3dfff7d4e6a209b"
  },
  {
    "url": "system/linux/java/node.html",
    "revision": "7301c22b36705ded7bd847d1dd8d659b"
  },
  {
    "url": "system/macos/index.html",
    "revision": "fb0dd65b91dc7c5ab7942ce6071e587a"
  },
  {
    "url": "system/macos/screen.html",
    "revision": "efe2652e0574130a37e25576941b8307"
  },
  {
    "url": "system/synology/index.html",
    "revision": "5e2028b2966564c08a7977eee6bd97a1"
  },
  {
    "url": "system/windows/index.html",
    "revision": "cb6d6b09d902b15f37faa2b13a497ac2"
  },
  {
    "url": "system/windows/print.html",
    "revision": "15da2b87bbfdeb329c8eda4fa5bf8942"
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
