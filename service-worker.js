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
    "revision": "5148c4e8b1dbf80eb1aba8844b823237"
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
    "url": "assets/js/26.7bed5ba9.js",
    "revision": "eb162f0d5a8234b264108b3e3d8e8fa2"
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
    "url": "assets/js/38.664b32c4.js",
    "revision": "2517bedf5817da49b99f7d64b2995124"
  },
  {
    "url": "assets/js/39.7bb7cb15.js",
    "revision": "ed8ca6e7e03d9fe3771e23f5dab5040d"
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
    "url": "assets/js/48.9875fe30.js",
    "revision": "463778b36364860441583cf33cd37f16"
  },
  {
    "url": "assets/js/49.67f62afb.js",
    "revision": "d0c1ebe174757a7dfb174635b18899af"
  },
  {
    "url": "assets/js/5.c4113094.js",
    "revision": "9410cb42cf2dc34ed621f83cc0b4750a"
  },
  {
    "url": "assets/js/50.29d50682.js",
    "revision": "ad8735097d0dbfc2d848bb47e12a3c2f"
  },
  {
    "url": "assets/js/51.0b15387a.js",
    "revision": "a27493b95b4f1c36bd98579406aadc93"
  },
  {
    "url": "assets/js/52.a106b1c0.js",
    "revision": "30cfb904e462560d082e6b622fee2b9c"
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
    "url": "assets/js/app.52c47561.js",
    "revision": "b1b48f7c3818ae7cbabb18d9eb1b4778"
  },
  {
    "url": "assets/js/vendors~docsearch.11055bee.js",
    "revision": "8259fdbb94020e921a7272f277903b38"
  },
  {
    "url": "code/git/base/branch.html",
    "revision": "ac76b3265a6d3c97db334ec505cf98c3"
  },
  {
    "url": "code/git/base/cancel.html",
    "revision": "cd934b4566371c4f641384759ef0020b"
  },
  {
    "url": "code/git/base/operation.html",
    "revision": "1a016cef4132e5200ac4f7ac2fe4e939"
  },
  {
    "url": "code/git/base/remote.html",
    "revision": "00460c18bbfd79435251b550da187d27"
  },
  {
    "url": "code/git/base/use.html",
    "revision": "b4bb03d14afa84888150bd814a848aee"
  },
  {
    "url": "code/git/cover.html",
    "revision": "c25c6ba66efb9b81f8f2e767d0a3e8de"
  },
  {
    "url": "code/git/index.html",
    "revision": "aaef06246b50f6ee36157a9084fec276"
  },
  {
    "url": "code/git/install.html",
    "revision": "13260aa9a82c127f5354735d893c3041"
  },
  {
    "url": "code/git/sort.html",
    "revision": "29c8b6793f37120042d583386e6f2bab"
  },
  {
    "url": "code/java/four.html",
    "revision": "c793cbcab54fdcad2791ad5ff0fe9dfc"
  },
  {
    "url": "code/java/index.html",
    "revision": "19ae69fb5eba1782dbaa36067c83084e"
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
    "revision": "c4d3a7900ea0590b171a79b13066ddf5"
  },
  {
    "url": "operation/node.html",
    "revision": "85bebbec06c1e07077903fc03f45555f"
  },
  {
    "url": "system/linux/base/index.html",
    "revision": "4b162223a1dfdb26a17731ee2d5c207a"
  },
  {
    "url": "system/linux/docker/images/iperf3.html",
    "revision": "90cc65bd110dcf1fead55b4677fc7282"
  },
  {
    "url": "system/linux/docker/images/portainer.html",
    "revision": "cb97d3fc5ecc7c2ef8df65bef13d506f"
  },
  {
    "url": "system/linux/docker/index.html",
    "revision": "2d42ed187f559809b8cdb7ed089b5c34"
  },
  {
    "url": "system/linux/docker/operator/batched.html",
    "revision": "fcb9f1342e17ee0902317dc4bf54457b"
  },
  {
    "url": "system/linux/docker/operator/remote.html",
    "revision": "d216dad67524ad8b14a86603eea02604"
  },
  {
    "url": "system/linux/docker/problem/commonProblem.html",
    "revision": "af2d6f75158a0fce321d860be3b27f76"
  },
  {
    "url": "system/linux/firewall/centos7.html",
    "revision": "0a7ec72c1a97df18fc47b8d5ac97628a"
  },
  {
    "url": "system/linux/firewall/centos8.html",
    "revision": "59e35ce7cdf47096316ecadb3b1a1c7f"
  },
  {
    "url": "system/linux/firewall/ubuntu.html",
    "revision": "db4b87b75bbacb080c1eadbc50976975"
  },
  {
    "url": "system/linux/java/jdk.html",
    "revision": "2f067f10108995d22c69fbf29fe2d011"
  },
  {
    "url": "system/linux/java/maven.html",
    "revision": "5f38c878789ec17be9307c547f466fb6"
  },
  {
    "url": "system/linux/java/node.html",
    "revision": "55e674102f50483226b0da8f00a79b3a"
  },
  {
    "url": "system/macos/index.html",
    "revision": "8a051fda7eea07dbf50242f90f50fa47"
  },
  {
    "url": "system/macos/itunes-bak.html",
    "revision": "22ca50e883d15f5868c983eb43a0c74e"
  },
  {
    "url": "system/macos/screen.html",
    "revision": "d7d486875cb361c28633ac72636d1a3e"
  },
  {
    "url": "system/synology/drive.html",
    "revision": "3c93459018c68bd06e40bc388fbb1827"
  },
  {
    "url": "system/synology/index.html",
    "revision": "c5fa5ca7d9837f038c93c1c884421ee5"
  },
  {
    "url": "system/synology/root.html",
    "revision": "3fb323a56729a071e92266cbb216a79d"
  },
  {
    "url": "system/windows/env.html",
    "revision": "1858eaba5c7008e8f51bd1d2c243208e"
  },
  {
    "url": "system/windows/index.html",
    "revision": "2bd5b185c4f6e13eefa5c522ea66ea71"
  },
  {
    "url": "system/windows/print.html",
    "revision": "4cc6cf0e67c347dffc371eb912b54138"
  },
  {
    "url": "system/windows/service.html",
    "revision": "6c346dcd9bdef9c9e1c7a01738186e1d"
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
