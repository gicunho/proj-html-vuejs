/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var introInfo = function introInfo(img, title, text) {
  _classCallCheck(this, introInfo);

  this.img = img;
  this.title = title;
  this.text = text;
};

;

var course = function course(name, price, teacher, teacherPicture, lessons, students, img) {
  _classCallCheck(this, course);

  this.name = name;
  this.price = price;
  this.teacher = teacher;
  this.teacherPicture = teacherPicture;
  this.lessons = lessons;
  this.students = students;
  this.img = img;
};

;

var evento = function evento(name, place, date, month) {
  _classCallCheck(this, evento);

  this.name = name;
  this.place = place;
  this.date = date;
  this.month = month;
};

;

var testimonial = function testimonial(name, profession, picture, text) {
  _classCallCheck(this, testimonial);

  this.name = name;
  this.profession = profession;
  this.picture = picture;
  this.text = text;
};

var bFields = {
  name: 'Blanche Fields',
  pic: './dist/img/73ee246daf47502812ccefc84bf02898 (1).jpeg'
};
var mStrickland = {
  name: 'Maggie Strickland',
  pic: './dist/img/d0d504142acfde820eef2f11feea6253 (1).jpeg'
};
/* Vue */

var myapp = new Vue({
  el: '#root',
  data: {
    navbarLinks: ['Home', 'Pages', 'Courses', 'Features', 'Blog', 'Shop'],
    introInfos: [new introInfo('./dist/img/home-5-image-box-01.png', 'Idea Discussion', 'Get teamed up with the specialists who work and teach coding for years at famous universities.'), new introInfo('./dist/img/home-5-image-box-02.png', 'Web Development', 'Learn to start building a webpage from scratch. You decide your own pace, course and speed.'), new introInfo('./dist/img/home-5-image-box-03.png', 'System Administration', 'Learners are encouraged to study the mechanism and structure of system administration.'), new introInfo('./dist/img/home-5-image-box-04.png', 'Graphic Design', 'Have a passion for graphics and arts? Show your talents with confidence and self-assertiveness.')],
    companyNumbers: [{
      desc: 'finished sessions',
      numb: '1.926'
    }, {
      desc: 'enrolled learners',
      numb: '3.092+'
    }, {
      desc: 'online instructors',
      numb: '200'
    }, {
      desc: 'satisfaction rate',
      numb: '100%'
    }],
    courses: [new course('Learning to Write as a Professional Author', '$40.00', bFields.name, bFields.pic, 20, 50, './dist/img/course-02-480x298.jpg'), new course('Customer-centric Info-Tech Strategies', 'Free', mStrickland.name, mStrickland.pic, 24, 769, './dist/img/stock-full-hd-03-480x298.jpg'), new course('Open Programming Courses for Everyone: Python', '$19.00', mStrickland.name, mStrickland.pic, 17, 62, './dist/img/stock-full-hd-04-480x298.jpg'), new course('Academic Listening and Note-taking', '$26.00', bFields.name, bFields.pic, 14, 67, './dist/img/stock-full-hd-06-480x298.jpg'), new course('Master jQuery in a Short Period of Time', '$39.00', bFields.name, bFields.pic, 6, 51, './dist/img/course-featured-image-01-480x298.jpg'), new course('Introduction to Javascript for Beginners', '$59.00', bFields.name, bFields.pic, 14, 76, './dist/img/stock-full-hd-05-480x298.jpg')],
    coursesFeatures: ['Select & customize courses to your preferences', 'Change the tutor and make arrangements', 'Participate in events to join others', 'Get the desired certificate delivered at house'],
    events: [new evento('Storytelling Workshop', 'Texas, US', 22, 'nov'), new evento('Painting Art Contest 2020', 'New York, US', 10, 'oct'), new evento('International Art Fair 2020', 'Hamburg, Germany', 23, 'nov'), new evento('Street Performance: Call for Artist', 'Illinois, US', 15, 'dec'), new evento('Consumer Food Safety Education Conference', 'Illinois, US', 22, 'jul'), new evento('How meditation improve your mental health?', 'Dubai', 12, 'aug')],
    testimonials: [new testimonial('Mina Hollace', 'Freelancer', './dist/img/testimonial-avata-02.jpg', 'I am free to learn at my own pace, follow my own schedule and choose the subject I like. Great study portal for people like me.'), new testimonial('Madley Pondor', 'IT Specialist', './dist/img/testimonial-avata-04.jpg', 'MaxCoach is my best choice. Their tutors are smart and professional when dealing with students.'), new testimonial('Luvic Dubble', 'Private Tutor', './dist/img/testimonial-avata-01.jpg', 'I am happy with their arrangement of lessons and subjects. They reflect a scientific investigation.')]
  },
  methods: {}
});

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkproj_html_vuejs"] = self["webpackChunkproj_html_vuejs"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./src/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./src/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;