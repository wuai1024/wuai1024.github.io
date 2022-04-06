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
    "revision": "09c9355248cc4822900a5136cf1e5682"
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
    "url": "assets/js/13.96a942b4.js",
    "revision": "89a59d812d5feb559dc3667a1604850f"
  },
  {
    "url": "assets/js/14.9285f58f.js",
    "revision": "9293fe94d39bf82068290880ccc728ff"
  },
  {
    "url": "assets/js/15.310773a9.js",
    "revision": "d7c9336a64300c31417e853a3f0c34c1"
  },
  {
    "url": "assets/js/16.57f50f8d.js",
    "revision": "363925b0356c1f3aef91e610d71ae833"
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
    "url": "assets/js/app.1d2fedbc.js",
    "revision": "cfda3e33484fdff4279c5ee8b87add70"
  },
  {
    "url": "code/java/four.html",
    "revision": "14ede0275c6e3f2d727b46ed24826a7d"
  },
  {
    "url": "code/java/index.html",
    "revision": "f8fd120dc5024b2f36390415dd92f843"
  },
  {
    "url": "image/hero.png",
    "revision": "c210616fdbaae893913c2d6425b4953e"
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
    "revision": "be3644225fe41e8748aa11aa8b1f1fd0"
  },
  {
    "url": "operation/node.html",
    "revision": "35d0f8e1f0acc9b5ec6cf2699d1c7b76"
  },
  {
    "url": "system/linux/docker/iperf3.html",
    "revision": "ed4a7ccd5be54df755ab68c5db5e4eb9"
  },
  {
    "url": "system/linux/docker/operator/batched.html",
    "revision": "bebeb295352ea383c5773c36c792e4fe"
  },
  {
    "url": "system/linux/docker/operator/remote.html",
    "revision": "9e83d7dc3f965eea8274f8c857797657"
  },
  {
    "url": "system/linux/docker/portainer.html",
    "revision": "dc28cf7247034740076728319006fcec"
  },
  {
    "url": "system/linux/index.html",
    "revision": "dc4d4261fbcd4c8c81b27d9be785056a"
  },
  {
    "url": "system/linux/java/jdk.html",
    "revision": "d62eaa5813591978361421fc3e25f0cf"
  },
  {
    "url": "system/linux/java/maven.html",
    "revision": "4a59220cbb59a63c9ddc9288031c2575"
  },
  {
    "url": "system/linux/java/node.html",
    "revision": "fdec8befa784e39d2f2e456fb8c6314b"
  },
  {
    "url": "system/macos/index.html",
    "revision": "c0989dd001b090b37225105458a02769"
  },
  {
    "url": "system/macos/screen.html",
    "revision": "5fc0e939bcc9befddf97e4dffc834135"
  },
  {
    "url": "system/windows/index.html",
    "revision": "f4abff20c1fc03eef72c103eaf6471ed"
  },
  {
    "url": "system/windows/print.html",
    "revision": "40a8b9237b501a3437ec4a544136bfd2"
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
