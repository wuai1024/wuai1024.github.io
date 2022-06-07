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
    "revision": "49f71a179881782768219efd5e54c616"
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
    "url": "assets/js/10.3807fb37.js",
    "revision": "436630520fb47f0de0831297a383102b"
  },
  {
    "url": "assets/js/11.d6294517.js",
    "revision": "43766476d02be825e70205e2509a8d9b"
  },
  {
    "url": "assets/js/12.8e65f66b.js",
    "revision": "5baf970890017baf2d51d2d8287f4da8"
  },
  {
    "url": "assets/js/13.a8713bcf.js",
    "revision": "2d979f5dd97296082bba5654fd82934a"
  },
  {
    "url": "assets/js/14.2ff842c7.js",
    "revision": "090f8df24585ac6962eacb0c7f221329"
  },
  {
    "url": "assets/js/15.3c708e28.js",
    "revision": "909f7571b537b75717d261269052a5d4"
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
    "url": "assets/js/23.9a05ab75.js",
    "revision": "1a64c48d2a0378d680980463fdaee28c"
  },
  {
    "url": "assets/js/24.2a83540a.js",
    "revision": "63a748bdb85d01d393d3747fabc6aa42"
  },
  {
    "url": "assets/js/25.96fad590.js",
    "revision": "55ff29a686e01e8746156c4764d1adf8"
  },
  {
    "url": "assets/js/3.0b786b6c.js",
    "revision": "e12cd0c28b83b99cc7e99ce92e034dd5"
  },
  {
    "url": "assets/js/4.c6be640b.js",
    "revision": "e46af4fbf754ffdad81aefc637d20dde"
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
    "url": "assets/js/app.8bb6e3fd.js",
    "revision": "8867b5c7cb7e229bc7df381ddd1b0699"
  },
  {
    "url": "code/java/four.html",
    "revision": "b462cbf14e948eaa80f294575f9d6679"
  },
  {
    "url": "code/java/index.html",
    "revision": "5b2531e5e5f351b210a4e5f3569e3eb8"
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
    "revision": "f41b94e6992a0a1fdab1cdb310152183"
  },
  {
    "url": "operation/node.html",
    "revision": "16c9facbba3afb683f11eb18d1a98881"
  },
  {
    "url": "system/linux/docker/images/iperf3.html",
    "revision": "4f254867a2b1762a7d5e3e870c4caf7d"
  },
  {
    "url": "system/linux/docker/images/portainer.html",
    "revision": "ad56435506f0d371a808bb7dd16884eb"
  },
  {
    "url": "system/linux/docker/index.html",
    "revision": "11a69b564d94138d1aa1a51006b94c56"
  },
  {
    "url": "system/linux/docker/operator/batched.html",
    "revision": "cf9f3d648e8dff4f20dbb9b3a27e619d"
  },
  {
    "url": "system/linux/docker/operator/remote.html",
    "revision": "93981c0d0dc6d391942e637e646200dd"
  },
  {
    "url": "system/linux/index.html",
    "revision": "473f0bb28cac8a7ad9bc591eb433abe4"
  },
  {
    "url": "system/linux/java/jdk.html",
    "revision": "8dd007fd471c907d6b660a5c3d76382d"
  },
  {
    "url": "system/linux/java/maven.html",
    "revision": "6667687086f55510d1b8e47dca8c2d1f"
  },
  {
    "url": "system/linux/java/node.html",
    "revision": "2ea81c81c7f4e5461620a6eaef44c82e"
  },
  {
    "url": "system/macos/index.html",
    "revision": "41e23467751da3e91a833b73ad57a2cf"
  },
  {
    "url": "system/macos/screen.html",
    "revision": "3a821a81fc50b65c55235a8b0864c26b"
  },
  {
    "url": "system/windows/index.html",
    "revision": "c60f386aa3f232d0633bc1f0fbca5b76"
  },
  {
    "url": "system/windows/print.html",
    "revision": "02fd08254e09dcc48c103588c6c78cb4"
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
