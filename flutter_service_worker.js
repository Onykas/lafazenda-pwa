'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8b56cb2f2faa1b0d635f588de20ad0f",
".git/config": "fa08ffb69194e28eec5487f188a76c54",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "c683a9ca2797a4ca56cf42be574650ad",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "dd3217ac4522f7575489c9e50bad1d1c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "faa7951c7481ee56be398182765dd11a",
".git/logs/refs/heads/main": "8a1f59f31d45b5828b2def2fc5d8c87d",
".git/logs/refs/remotes/origin/main": "a39806b7be354f63a9602cfd4cd4ed3f",
".git/objects/06/808908fc9edb1805446007759f43028a336b37": "f8fc2976455b50213a19c923a63f8bcd",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/10/dc73dde4b8d916d9701718c13004b25a065fec": "02cd21124b423edf4402f25683a8f2ce",
".git/objects/14/28e912bc66f069f157ac390a53ad4b6d84d0ae": "921e5be659cb31b588406fb17fd84e73",
".git/objects/19/d23dc9834a1ee8e6784ac7ae55a4509d7d2258": "35d9a0d4cf3649db0852aa4aa82590ff",
".git/objects/1b/35b25e5dcfecd9007ba50fb79e93155fbbfa7a": "15e85e98c05b207e20c29edaa6ce4475",
".git/objects/1b/c3d3c46497aabcab85f24613c6dc77f21f59b0": "0c660d9a9eff5a5b5b3219aa18f17d0e",
".git/objects/30/b245ba68ca304a7d039b4c82bf9d1ead026a9a": "fa9df9f8ac33ae55c58ddd99e0de4cca",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3d/57c16928d53fcecbbf51c0b637405c4b596958": "5102f543f56e25df5bfeba2c565d989f",
".git/objects/42/71debf1823a0d3dea3202c17fecc58328be724": "0cda53f84ef24c0347e44af0ae039cca",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/4206a65a23510a003325f152da1c9e8021f6bf": "4eb35d9811d0012e1b2f032d468e6c88",
".git/objects/50/f87f98fa90ed208b2fb26340266967bb8f22e1": "15c944e7122bc19916be884c6eb062dc",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/5b/2900392ff3ee524343f5d95600990b1aa750e6": "f866143f76a176aae61131fc627d1e3b",
".git/objects/63/9076a7ce8a8075ce0c372ee80744a2c8c45093": "e0eac00b7b8a19fc25d0e2f45468463b",
".git/objects/65/ed19920cd180f4cd44ee93d880a70d6336d2a4": "05f3fa9ccb4a35ae224aef82f86e901c",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/69/5f1aacd7f451595d20ef238aac4f05f99a1426": "ac78bea0204f7c46d1637df3582b1c9d",
".git/objects/69/973d3ee87891fd53d3a87791070cf8d4e704af": "30728b30b2aa26efa631b55a3e46b240",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/7b/236a12f7ebabce3dbbc61cb0e4c395d7a6373e": "6e522bbfbf135c7476be463e7c15c810",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/87/a3741a7c4d8de89db1a47eaa9bfded65b1b4e8": "a8537184e148b039d0ba231ed3cd320b",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/8f/bb08403a8836d9ff291b05c621c28c03969446": "c5d9aa84fabfd5695edf57b7a3253256",
".git/objects/92/b6b1790324a6e43bbb0efbb0f3f21d8afc995d": "f247f4e895fc9d51316ecdf1123cee65",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/94/929dc4cfb9842e86d202872f539e735f65684f": "1ac550d28cda3f93d39bbd358b47304e",
".git/objects/95/bef7e74daad5c700f755e5ad20aa779d068957": "f9b574820fecec830aa9bf450380222b",
".git/objects/a2/3873f221a3b7465c4f09c2aeb494d252718346": "b43f9c8f9c9e39fd14ee65cd39fc5522",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/b4/eca14fbbcb76ff81e4b535a0679e51a0511c70": "7bce643e578d3663e2f5f8efc303d81b",
".git/objects/b8/744c5fdc0e6f101312225b3815427474a79b7d": "1a4a80fddc2c75b3a754d3fbdb035c2b",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/bc/dab8de3320e6b099b60d5e65c8fdfc79ddee8e": "7eeb35c177d8a10dfef162b277ebe6fe",
".git/objects/c3/c7739967ff444ebed27de431856e4112786b64": "037cc39f8caf42a8e7e2e2aa41872c5e",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/db/012806ac92aa3a4d9c3af4a7ffc99487242330": "be0b5e81f71845766395b5210a4eff46",
".git/objects/dd/fd9c2c7e07947d4ab83c48a8cd607b08fa6cba": "e6acca0db8fdeb63fd3009d4a53a8362",
".git/objects/de/71e20a943f73604d3252a4223e6593d2a38dff": "41bb6017c2223c3ada48fc4c6b94d36c",
".git/objects/e3/a33d9488fa91a42f9f7b2f9bd7144822d4bd49": "d60d105fc9a123acd24a23776454a932",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e7/04a3cbc8afb91c81f6d2af24a10a0a315d7830": "ada38787d59f2e5e64a25ed584529a33",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/f0/6abbb2ecd9549831dbb5bf3d2fc88006a29a51": "2b22809a0e0c37c6fad8947aaa1d6cfa",
".git/objects/f0/b132b98590e3eba7a32524eb58b30664eff2dc": "387cd67b2e0688a6cadf530a23a5b4f1",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/ORIG_HEAD": "ac590b647946226676584d06520ef2e8",
".git/refs/heads/main": "a1207f71421723d2f8e655b84149ae3e",
".git/refs/remotes/origin/main": "a1207f71421723d2f8e655b84149ae3e",
"assets/AssetManifest.bin": "a7ce50fb944e24f6065058b6b94428be",
"assets/AssetManifest.bin.json": "fd6208ccce0b9135b4b17993d4027943",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "689dc98e3b2433d0a879dc84d680b362",
"assets/lib/assets/logo.png": "2e5073c86749ba4c21cbc9514724b573",
"assets/lib/assets/splash_bg.jpg": "bcacaa4af51f3375a9fa3550057c0e77",
"assets/NOTICES": "33f0776e327609ee0a3f7cc8280b7c1a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "dc04391cf086f0ce65d6f26d5bd91bf7",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "c6ffa64f9e86ae72b572df2bc827716d",
"icons/apple-touch-icon.png": "904b9525938f388bcb2e40243c8a1017",
"icons/Icon-192.png": "81f8e103a5efc53113e73e3dfe79092d",
"icons/Icon-512.png": "ca957aef9a3601c1540a73d9117ee6ea",
"icons/Icon-maskable-192.png": "dd525045939e65f3fe533cd12cdd3acb",
"icons/Icon-maskable-512.png": "03e99f181b7753fbd9a8c46a8cc26649",
"index.html": "c4426dd0f6f84c2adec6efc45ed431ec",
"/": "c4426dd0f6f84c2adec6efc45ed431ec",
"main.dart.js": "ed0f88ead6a532006554cd8035b7f40e",
"manifest.json": "9461d1a800b45569dad5ee349265aa92",
"version.json": "e37de9ee37213338aadbcb8051ce39a3"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
