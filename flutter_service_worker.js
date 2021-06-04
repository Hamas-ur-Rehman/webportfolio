'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "7c897c2167f77748644493434066ae04",
".git/config": "fc726ef47b53c49a796d7041014ca7cd",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "5833dee6cfce93e27905ada7f3e830a7",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "c4011103060e4c4ad843bf05c98e107d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "80052a1854d3ebbaffa9ceb4e028181c",
".git/logs/refs/heads/main": "7703712f1d9287bb0f8464d81533e97b",
".git/logs/refs/remotes/origin/main": "a448086de8debe7efc24d8405f490171",
".git/objects/00/8ba49b8331f6cb1ead3c5de23dbfd616accb7d": "59f72ca0d7c132fd1d8f55132289b05c",
".git/objects/07/7eed357ea869e879a38da83666bbc5c29219f8": "d7c57f423a3ee89d6e5193581e3f452b",
".git/objects/10/e3f9fb9c91108d745eac296a8f2cf73ac76530": "0bf7b25b9c89ab0a6b71c35bda0bb666",
".git/objects/12/2f58c4042562b2cd3ceef96f36735499511f78": "cb6e811c0d33fa5c3ac1b72e81ca1bb1",
".git/objects/12/6cf7f1de18bb6e0ffd1c7fb6bab8788e23ba76": "fbdcb558f9200daca41a9bdc9d48f07c",
".git/objects/13/a1682d43a68b3322b2d62db376506a6e749494": "d3dfd94280d5cdb5961a40ba4a80399c",
".git/objects/15/2234b2ecc3f2d51fbd07d34c55620445f906b4": "c1bd04a371540dd7bf95982486492683",
".git/objects/16/d5045e177d8ffe3fce06637285f24c53ac6e15": "b62dc09228b0452fdc373dd3101e60de",
".git/objects/19/b92b28740f573f1ee303843366fb032588b8c2": "cc1ea99d2fde6d6916fd17d093ae8cb7",
".git/objects/1c/dad40684470c28b5a91757c125bbfd76d639c0": "bbf4398b7ac063dfc9930698d13ab846",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/23/7bf7f0a2a7aa40669c5258549b697341b05d45": "5325ea6ea50244e4bbcda886420e8ace",
".git/objects/26/30e77defc7baa19acda2b779f850e17cf024f9": "393b205cc27cfc5be6371401db5c05cb",
".git/objects/30/970bc15be4c2759cbb447a1d9ca3d657e5fb5a": "7b9e43efc849cb058e032f9577e37fa1",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/7a0379bba3df5fa21323edf3c8bb210a9ad80a": "2f8f725ec6b5199fa57c54e62c8e48dd",
".git/objects/37/5a3d9f2444cbd3c039e7cf88461e8d3ff12c0a": "76d1885cda16c5594787a4bd055eaaad",
".git/objects/37/a9f0d5c740572e73444fabc750208cf7327135": "3847f15539ebd215bc77ba3c547e350c",
".git/objects/3b/4e993856ef18acda73d41ed773a8026f665e99": "1a0ac0ae0086fa8018374ecd8cc7f899",
".git/objects/42/5462b71fc625959ae65bffd6238b8842473fc8": "f8f26d096f3882d85598af97dc507fb5",
".git/objects/53/a294a5c0ec19088fc994327e25c60ec93a1a11": "4a03d1450b93011c977279b025a5dc38",
".git/objects/54/cd277ce1e084a6ab783b08372bbcf11c2fcf3d": "ef8654163fa43af5a9172a7b4eefcf12",
".git/objects/5c/1b480425ca071ac312313f8e88b613f9f11433": "bb25b4d4d4c242e374f12947e268d78d",
".git/objects/5c/f21e669f7fdac28f583053638a948701d36887": "8cc670c4404279dab879a04842a8f84b",
".git/objects/64/193c11bce6ebd946cee9aab2c2366c0b42122e": "c69bd5523fa19e4bf213f578f54c14da",
".git/objects/65/861b91fe7af65372dcdeed4c8d71a8301a3760": "934d64c543d9c19ecb51fa44d35a1d4b",
".git/objects/6a/c245eec6313b4b51057cbbfd7d83a1cd1ab07f": "4a7c0c8737b12ff912bb2dde812c1a67",
".git/objects/73/81d03262af2fbc3bd41c1dbe7c0f266c3bae60": "0c5bb237d89216ba41d0a3055b670f6a",
".git/objects/75/c08f0f97c09390bebe224d12563f4b7e0bdb7e": "080d0c6eb9351d29661c98f561d695c3",
".git/objects/78/5e82b063f281982201129932d21c97a7ffe663": "e369a0e280b1d99903d6b557544fdd61",
".git/objects/78/afa6a9cd508995e5c1cc77d30bf4e00c8aa234": "933df796c00295db90cb0bdf2fecfd79",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/015218ec9e504b340389242c5330d6c4f4ab88": "a2e2b830cba6bf0fe5371d2609debe1f",
".git/objects/7e/033e45e2c2a8ca27c751437dd0bc4b69a5198d": "45fce57e1ef1b1b1727b06429217c3d1",
".git/objects/82/ad7cf2868b141b4a5ffb0db692b1de4003a826": "d3474c97ff25c47c034c38032c205d3b",
".git/objects/87/8314c46e4f844847026c4602098d8f4fed43c3": "5594b412fb995c10d584d1e70e693187",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/4391b7e0ecfb71a316b8c45e516e2c70d9fab2": "4cb33e8bb99b087b2079e7ec8ffbfb25",
".git/objects/8d/b5f62ff166ffd25fd9f1e447631a1ac2a9515e": "aae46259e888dbf511f41215f0076fc8",
".git/objects/99/b1dfb4bec50f18edadcd6dfb5c4e995672003b": "306f001e5f5252546e7ff064d37d09d6",
".git/objects/9e/722cdc22f948f76f522473a619389cbca2bfd0": "d1e76ed710f2ab3e706f0ce421bcc02b",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/7deddf09178b49c7e78e737fbe88264027e881": "50e97837e2636c0f4429953be2165366",
".git/objects/a2/acfcab30318e8141d9911d239dc586a596147a": "3f1021584c1086b381c85e278e5d3953",
".git/objects/a5/080ce88fa48fafaccc4f59cfbd7b622b5b165e": "c738d392604eb5c0fad3f3ac44832862",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b5/e2a963cb1f99bbff8891403c3bd25639623860": "8b8c3badeb7a81eaf33f96c3cca2b882",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/e6c98b683bac950304f0bb5c52eb63c348bcec": "dc59d7bd8886ddb8673fd4e6284468e9",
".git/objects/ba/7e7d135bbd39ad8eb8276e4bd6a061f5a11e80": "b3d1808a0e7dadf477bf6d38fc71fbd8",
".git/objects/bf/9c45dca5bc5cd654fd592c1bd54f52ba966657": "6b2f23a6b88c8587055d72b324e4173c",
".git/objects/c6/30eb220f43445598be63941d84ecee9e8f4315": "f4e5b5d32c374d24c10003d4d05f7f8c",
".git/objects/c8/d10cdc3703bb63b957284a547e878047caff78": "950e661cfaff2a7d8b7244daa6e19699",
".git/objects/cf/c2c41403639356da551aaba0b652af9d9a3492": "cda2a7031165eb05dacfd270cdd08282",
".git/objects/cf/d49bc175f3d34e044da745ca791eebbd5b2cfe": "28e38d0b7e9b0f5b14eaca1770f06315",
".git/objects/d3/163e72d592e5067b33401d4d5652f93af81408": "0c1e7f13e4157d8d8407dabcc8794d0a",
".git/objects/d3/51040c76f124c030296ed6788031835b8048d0": "7cdacd363d18a945a77066ae203652f8",
".git/objects/da/fa2aabc3a904d338786448dc963636ec277c91": "1563d9901b007669e26a00bcc006f97f",
".git/objects/de/8304914a1b87c882bb188625465392936ac095": "3e3bfc0f9a6561abc52f961630824dd2",
".git/objects/df/b79cc77e198243c55f0d48d9318e997ed0872d": "47d07622103b0cc978901c57315ce248",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/abfcbb439c6193072df2308b806ec3f1d5fd3a": "cb433ec836ce8c0373dbfc87e025dccf",
".git/objects/ed/e2014faad4334010768c50ecfef00d3b1157ac": "4881be1a7f52d6a66227db9e9076f988",
".git/objects/f5/dfaa5eee11446e1067111fe131e12166ef6ca0": "2c4187a7ca2881845f165a9d2219cf81",
".git/objects/fa/a967cdbf9530ebeaeafe8a3cdf998c6aa58757": "dcd564fe39f4d35cdf45ceed13b9b238",
".git/ORIG_HEAD": "b1a010bd33cd6b704bfd95963739bf65",
".git/refs/heads/main": "643ec05b0f8c0b7d176367545df8d50b",
".git/refs/remotes/origin/main": "643ec05b0f8c0b7d176367545df8d50b",
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
"img/gamer.png": "01f6c2c3ca9698964e150b6341fe12e3",
"index.html": "3c071cd477600f289c13d22d14994442",
"/": "3c071cd477600f289c13d22d14994442",
"main.dart.js": "4dfc92959f5f0f1dee2d0eb3767b97b6",
"manifest.json": "3d9b369265eb00a2b9f833c932327313",
"styles.css": "955d575a9b2393b5922a7a234b342d41",
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
