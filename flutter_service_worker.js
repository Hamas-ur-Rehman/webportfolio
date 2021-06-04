'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "c347b5e981f9f8add1cd36344fe5a9fd",
"assets/assets/Agustina.ttf": "dc2e22aeb9024b30a058c690a7f9f7ba",
"assets/assets/arrow.png": "c1625b6c7d345e393162b35118e940c2",
"assets/assets/avatar.jpg": "982b69a74025dd9965ed6671287a53a4",
"assets/assets/avatar.png": "beeea6a84cc109b09f492eee4e28b466",
"assets/assets/avatar2.jpg": "4154d810942309291acfb76bf3f24603",
"assets/assets/bubble.png": "a20c013423b6df1ef61870eb3b062f8a",
"assets/assets/chato.png": "5868b5e5d2cbd75b29e96f0394427a87",
"assets/assets/Geoshare.png": "e3ff6f41d9fa9ee7c83a24cebe411501",
"assets/assets/github.png": "c32eeecb603b5442bdf45bd65a0b8fd1",
"assets/assets/linkedin.png": "335f50cee53cf4e40e93fc9ba6b47fa5",
"assets/assets/MontserratAlternates-Black.ttf": "afa40ea840bfbd499ad6586e94c4e489",
"assets/assets/MontserratAlternates-BlackItalic.ttf": "554197ea1f2aae385367a6d636cf152c",
"assets/assets/MontserratAlternates-Bold.ttf": "858597948628fafd5ba6d71a820cf7f6",
"assets/assets/MontserratAlternates-BoldItalic.ttf": "7ad02dea12bbc6e4d8ffadac7bc61c86",
"assets/assets/MontserratAlternates-ExtraBold.ttf": "66e38dda7bea2a9ebb8f85e4b2a99ede",
"assets/assets/MontserratAlternates-ExtraBoldItalic.ttf": "c07bb85cb211c8e4e69d31cfe42e1bcf",
"assets/assets/MontserratAlternates-ExtraLight.ttf": "ce3e6591e29aa7808adb6aba6bd24d30",
"assets/assets/MontserratAlternates-ExtraLightItalic.ttf": "9118d19c662e3cd69f6848c24a2dcb20",
"assets/assets/MontserratAlternates-Italic.ttf": "9ad5b4624c9b7b582c8d0705779c9f53",
"assets/assets/MontserratAlternates-Light.ttf": "9d57f922362adf8bf6e3ad79f01207ff",
"assets/assets/MontserratAlternates-LightItalic.ttf": "1117f6b3d0340c3b0c5723f794f7d397",
"assets/assets/MontserratAlternates-Medium.ttf": "55b7b1d414ea6d2094b85e3a834e32b8",
"assets/assets/MontserratAlternates-MediumItalic.ttf": "eb22d47a0b4b7891695374c70effc968",
"assets/assets/MontserratAlternates-Regular.ttf": "778e16de3b7bbf4100f31ff4d6307216",
"assets/assets/MontserratAlternates-SemiBold.ttf": "2e719d5e579b791d74a1c5d84e0b766b",
"assets/assets/MontserratAlternates-SemiBoldItalic.ttf": "584d58bbefcfdd1023cae6ae5ebc70f6",
"assets/assets/MontserratAlternates-Thin.ttf": "6e886333f6bd82efa51d4c734d9a15b3",
"assets/assets/MontserratAlternates-ThinItalic.ttf": "786e2b0cc485e13ae0403b42c3aca346",
"assets/assets/safar.png": "8e7c80061490e236d6f121c360a33001",
"assets/assets/sahulat.png": "454cead7ecbcb75563071e9a0ec1f6ca",
"assets/assets/swish.png": "3ece8571c1adc4aaac15c3d6a2e94568",
"assets/assets/t1.jpg": "886ee45d8084061854dbed6e6afa1672",
"assets/assets/t2.jpg": "b0a9ace749f6748214fbcc2dbb969049",
"assets/assets/twitter.png": "19717d1381e1a7f72151674a7bd89f95",
"assets/assets/uet.jpg": "341a74c308515f7027e71b2c8ebbbdd3",
"assets/assets/uet.png": "5d6d22ba5e4bb4750c04f055bf1770db",
"assets/FontManifest.json": "8996a2e061ab770fd351fb1a8a1a195a",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "38025ff9a402a5ec8f7620ecffbb64d9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.ico": "8bcd6701886b60b8c411c7a099bfe85f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "e5eac48b6a62b730feea4e59283c37f7",
"/": "e5eac48b6a62b730feea4e59283c37f7",
"main.dart.js": "4dfc92959f5f0f1dee2d0eb3767b97b6",
"manifest.json": "3d9b369265eb00a2b9f833c932327313",
"version.json": "9a4dddba415c9ee5265cd5f5d9963a6a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
