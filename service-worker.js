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
    "revision": "72f5800260dea1f644e5521003d49b94"
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
    "url": "assets/js/10.6c420266.js",
    "revision": "dd3115a229e45d2b7fdceacb409bc277"
  },
  {
    "url": "assets/js/11.d6294517.js",
    "revision": "43766476d02be825e70205e2509a8d9b"
  },
  {
    "url": "assets/js/12.2bda8a0a.js",
    "revision": "05611ce3fec7789641b4c4236d62bf1d"
  },
  {
    "url": "assets/js/13.0dd67cb7.js",
    "revision": "78fea73dbad6d600b9e64025ab2e40d7"
  },
  {
    "url": "assets/js/14.676de34c.js",
    "revision": "5504a4fa3348702d83472fac6fe25f66"
  },
  {
    "url": "assets/js/15.f9cb8e35.js",
    "revision": "707a4910567e5403a2d39ba80f5102ba"
  },
  {
    "url": "assets/js/16.962340f3.js",
    "revision": "b96ea5aebbf2cc7482620121406d4ac9"
  },
  {
    "url": "assets/js/17.a9eb598f.js",
    "revision": "1443aec4a0293c0aea116715c4e023a3"
  },
  {
    "url": "assets/js/18.16c958b5.js",
    "revision": "dc1e127fb9c0faf3f7e25082a243d439"
  },
  {
    "url": "assets/js/19.152365c0.js",
    "revision": "9950f5ad0b8ced217d0006b76be18df7"
  },
  {
    "url": "assets/js/2.9088e4f2.js",
    "revision": "44e0a579ca32fc67b0fbc4805010e02d"
  },
  {
    "url": "assets/js/20.7c93a143.js",
    "revision": "5334b9905bb2a3623aa12ed072b82f98"
  },
  {
    "url": "assets/js/21.96b00044.js",
    "revision": "99da542066e922397abf7d3c3c20521e"
  },
  {
    "url": "assets/js/22.929ef4c5.js",
    "revision": "6fddfdae2baf8caf390ad6bafc08dc10"
  },
  {
    "url": "assets/js/23.ef75c433.js",
    "revision": "433e9b2c842be9406372b4b3a55ba7a8"
  },
  {
    "url": "assets/js/24.46fc3d15.js",
    "revision": "1443e73dd1ddefe8a372e169c15064bb"
  },
  {
    "url": "assets/js/3.0b786b6c.js",
    "revision": "e12cd0c28b83b99cc7e99ce92e034dd5"
  },
  {
    "url": "assets/js/4.b20a3d4e.js",
    "revision": "6708b45dad12e155e81ebf175760c354"
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
    "url": "assets/js/9.112fc144.js",
    "revision": "3f9481d9bb976f48c52d2253b078fe15"
  },
  {
    "url": "assets/js/app.f62cb0ef.js",
    "revision": "d28e1ba8d6afe4795202cebceec2796c"
  },
  {
    "url": "code/java/four.html",
    "revision": "7af5df3fec8d950cb74ced5b2b77de39"
  },
  {
    "url": "code/java/index.html",
    "revision": "9849f04463604b6864f609077a38d371"
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
    "revision": "3f54e952cd0379769e5d90513835d699"
  },
  {
    "url": "operation/node.html",
    "revision": "3efc186234d5ff6068725b1b37aedc15"
  },
  {
    "url": "system/linux/docker/images/iperf3.html",
    "revision": "fbc979fab797a4dc0196bdc30a031b40"
  },
  {
    "url": "system/linux/docker/images/portainer.html",
    "revision": "8b1da00ec0932a4e9a93f78e5d63f421"
  },
  {
    "url": "system/linux/docker/operator/batched.html",
    "revision": "a4b6e3b5a60c2230191b341285b8463d"
  },
  {
    "url": "system/linux/docker/operator/remote.html",
    "revision": "2472f8ff9bc24e05f5584dcf64714bc6"
  },
  {
    "url": "system/linux/index.html",
    "revision": "e8e32c890a5363e82c5850ea34957429"
  },
  {
    "url": "system/linux/java/jdk.html",
    "revision": "7fffa493101860808731a9652503753a"
  },
  {
    "url": "system/linux/java/maven.html",
    "revision": "0f8565cead02520f8456f93bdb0b46fc"
  },
  {
    "url": "system/linux/java/node.html",
    "revision": "c5cb37086e69c9aec20543339d34afd1"
  },
  {
    "url": "system/macos/index.html",
    "revision": "bd338bd43bb5ba2a7a0e00adfe57a691"
  },
  {
    "url": "system/macos/screen.html",
    "revision": "691ba74e706cc1b24bebea9a415f9d8c"
  },
  {
    "url": "system/windows/index.html",
    "revision": "cc4451ef7c045e6d61aaa7045442662a"
  },
  {
    "url": "system/windows/print.html",
    "revision": "084fab068ce9e8e4ebb70a2ab251f115"
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
