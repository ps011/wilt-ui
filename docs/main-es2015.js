(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-wilt-nav></app-wilt-nav>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/loader/loader.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/loader/loader.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loader-container\">\n    <div class=\"lds-ripple\">\n        <div></div>\n        <div></div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/wilt-home/wilt-home.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/wilt-home/wilt-home.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mb-5 mt-5\">\n  <div class=\"input-group col-lg-4 col-md-6 col-sm-8 offset-lg-4 offset-md-3 offset-sm-2\">\n    <input type=\"text\" class=\"form-control\" placeholder=\"Search a WIL\">\n    <div class=\"input-group-append\">\n      <span class=\"input-group-text\"><i class=\"now-ui-icons ui-1_zoom-bold\"></i></span>\n    </div>\n  </div>\n</div>\n\n<div class=\"row m-2\">\n  <div class=\"col-lg-4 col-md-12 col-sm-12\" *ngFor=\"let item of wilts; let i = index\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <ul class=\"nav nav-tabs justify-content-center\" role=\"tablist\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#compact-{{i}}\" role=\"tab\" aria-selected=\"true\">\n              <i class=\"now-ui-icons education_paper\"></i>\n              <span>Compact</span>\n            </a>\n          </li>\n          <li class=\"nav-item\" *ngIf=\"item.lengthy.length\">\n            <a class=\"nav-link\" data-toggle=\"tab\" href=\"#lengthy-{{i}}\" role=\"tab\" aria-selected=\"false\">\n              <i class=\"now-ui-icons education_agenda-bookmark\"></i>\n              <span>Lengthy</span>\n            </a>\n          </li>\n          <li class=\"nav-item\" *ngIf=\"item.visuals.length\">\n            <a class=\"nav-link\" data-toggle=\"tab\" href=\"#visuals-{{i}}\" role=\"tab\" aria-selected=\"false\">\n              <i class=\"now-ui-icons education_glasses\"></i>\n              <span>Visuals</span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" data-toggle=\"tab\" href=\"#author-{{i}}\" role=\"tab\" aria-selected=\"false\">\n              <i class=\"now-ui-icons users_single-02\"></i>\n              <span>Author</span>\n            </a>\n          </li>\n        </ul>\n      </div>\n\n      <div class=\"card-body\">\n        <!-- Tab panes -->\n        <div class=\"tab-content text-center\">\n          <div class=\"tab-pane active\" id=\"compact-{{i}}\" role=\"tabpanel\">\n            <h3><b>{{item.compact}}</b></h3>\n          </div>\n          <div class=\"tab-pane\" id=\"lengthy-{{i}}\" role=\"tabpanel\" *ngIf=\"item.lengthy.length\">\n            <p>{{item.lengthy}}</p>\n          </div>\n          <div class=\"tab-pane\" id=\"visuals-{{i}}\" role=\"tabpanel\" *ngIf=\"item.visuals.length\">\n            <div *ngFor=\"let visual of item.visuals\">\n              <img src=\"{{visual}}\" alt=\"Visual\" height=\"180px\">\n            </div>\n          </div>\n          <div class=\"tab-pane\" id=\"author-{{i}}\" role=\"tabpanel\">\n            <p>\n              Posted by <a [routerLink]=\"['/user', item.userId]\"><b>@{{ item.username }}</b></a> on {{item.date | date}}\n            </p>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"card-footer\">\n        <div class=\"bg-transparent d-flex flex-wrap justify-content-between\">\n          <div class=\"text-left my-auto mx-sm-4\"><button class=\"badge badge-primary\" *ngIf=\"item.category\">{{ item.category }} </button></div>\n          <div class=\"text-left my-auto flex-grow-1 mx-sm-4\"><button class=\"badge badge-default\" *ngIf=\"item.tags.length\">{{item.tags.slice(0,8)}}</button></div>\n          <div class=\"text-center mx-sm-2\">\n            <button class=\"btn btn-danger btn-round\"\n            [ngClass]=\"{'btn-simple': !isWiltSaved(item._id)}\" \n            (click)=\"onSaveWilt($event, item)\">\n            <i class=\"now-ui-icons ui-2_favourite-28\"></i> Save</button></div>\n          <div class=\"text-center mx-sm-2\"><button class=\"btn btn-info btn-round\"><i class=\"now-ui-icons ui-1_send\"></i>\n              Share</button></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"fab-btn\">\n  <button class=\"btn btn-primary btn-icon btn-round btn-lg\" (click)=\"openModal(create)\" type=\"button\">\n    <i class=\"now-ui-icons ui-1_simple-add\"></i>\n  </button>\n</div>\n<ng-template #create let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h5 class=\"modal-title text-center\">Modal title</h5>\n    <button type=\"button\" class=\"close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <form [formGroup]=\"createForm\" (ngSubmit)=\"onCreateFormSubmit()\">\n    <div class=\"modal-body\">\n      <div class=\"form-group\">\n        <input type=\"text\" value=\"\" formControlName=\"compact\" placeholder=\"A compact headline for your WILT\"\n          class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n        <input type=\"text\" value=\"\" formControlName=\"category\" placeholder=\"Category of your WILT\" class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n        <input type=\"text\" value=\"\" formControlName=\"tags\" placeholder=\"Tags for your WILT\" class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n        <textarea type=\"text\" value=\"\" formControlName=\"lengthy\" placeholder=\"A lengthy description for your WILT\"\n          class=\"form-control\"></textarea>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"btn btn-primary btn-round\">\n          <input type=\"file\" (change)=\"uploadImage($event)\" formControlName=\"visuals\">\n          <i class=\"now-ui-icons arrows-1_cloud-upload-94\"></i> Upload some Visuals\n        </div>\n      </div>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n      <button type=\"submit\" class=\"btn btn-primary\">Create</button>\n    </div>\n  </form>\n</ng-template>\n<app-loader *ngIf=\"loading\"></app-loader>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/wilt-landing/wilt-landing.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/wilt-landing/wilt-landing.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"landing-page sidebar-collapse\">\n<!-- Navbar -->\n<nav class=\"navbar navbar-expand-lg bg-primary fixed-top navbar-transparent \" color-on-scroll=\"400\">\n  <div class=\"container\">\n<!--    <div class=\"dropdown button-dropdown\">-->\n<!--      <a href=\"#pablo\" class=\"dropdown-toggle\" id=\"navbarDropdown\" data-toggle=\"dropdown\">-->\n<!--        <span class=\"button-bar\"></span>-->\n<!--        <span class=\"button-bar\"></span>-->\n<!--        <span class=\"button-bar\"></span>-->\n<!--      </a>-->\n<!--      <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">-->\n<!--        <a class=\"dropdown-header\">Dropdown header</a>-->\n<!--        <a class=\"dropdown-item\" href=\"#\">Action</a>-->\n<!--        <a class=\"dropdown-item\" href=\"#\">Another action</a>-->\n<!--        <a class=\"dropdown-item\" href=\"#\">Something else here</a>-->\n<!--        <div class=\"dropdown-divider\"></div>-->\n<!--        <a class=\"dropdown-item\" href=\"#\">Separated link</a>-->\n<!--        <div class=\"dropdown-divider\"></div>-->\n<!--        <a class=\"dropdown-item\" href=\"#\">One more separated link</a>-->\n<!--      </div>-->\n<!--    </div>-->\n    <div class=\"navbar-translate\">\n      <a class=\"navbar-brand\" routerLink=\"/\" rel=\"tooltip\" title=\"What I Learned Today?\" data-placement=\"bottom\" target=\"_blank\">\n        WILT\n      </a>\n      <button class=\"navbar-toggler navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navigation\" aria-controls=\"navigation-index\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-bar top-bar\"></span>\n        <span class=\"navbar-toggler-bar middle-bar\"></span>\n        <span class=\"navbar-toggler-bar bottom-bar\"></span>\n      </button>\n    </div>\n    <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\" data-nav-image=\"assets/img/blurred-image-1.jpg\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/signup\">Create an Account</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/login\">Login</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" rel=\"tooltip\" title=\"Follow us on Twitter\" data-placement=\"bottom\" href=\"https://twitter.com/CreativeTim\" target=\"_blank\">\n            <i class=\"fab fa-twitter\"></i>\n            <p class=\"d-lg-none d-xl-none\">Twitter</p>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" rel=\"tooltip\" title=\"Like us on Facebook\" data-placement=\"bottom\" href=\"https://www.facebook.com/CreativeTim\" target=\"_blank\">\n            <i class=\"fab fa-facebook-square\"></i>\n            <p class=\"d-lg-none d-xl-none\">Facebook</p>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" rel=\"tooltip\" title=\"Follow us on Instagram\" data-placement=\"bottom\" href=\"https://www.instagram.com/CreativeTimOfficial\" target=\"_blank\">\n            <i class=\"fab fa-instagram\"></i>\n            <p class=\"d-lg-none d-xl-none\">Instagram</p>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<!-- End Navbar -->\n<div class=\"wrapper\">\n  <div class=\"page-header page-header-small\">\n    <div class=\"page-header-image\" data-parallax=\"true\" style=\"background-image:url('assets/img/bg6.jpg');\">\n    </div>\n    <div class=\"content-center\">\n      <div class=\"container\">\n        <h1 class=\"title\">What I Learned Today?</h1>\n        <div class=\"text-center\">\n          <a class=\"btn btn-primary btn-round\" routerLink=\"/login\">Get Started</a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"section section-about-us\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-8 ml-auto mr-auto text-center\">\n          <h2 class=\"title\">Who we are?</h2>\n          <h5 class=\"description\"><b>We are Engineers🔥!!!!</b> We work in the IT Industry as Software Engineers.\n            Our job is to develop and deliver softwares that can solve real life problems of it's users.\n            WILT is one of those Ideas that popped up in our mind and we thought to give it a proper shape.\n            </h5>\n        </div>\n      </div>\n      <div class=\"separator separator-primary\"></div>\n      <div class=\"section-story-overview\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"image-container image-left\" style=\"background-image: url('assets/img/login.jpg')\">\n              <!-- First image on the left side -->\n              <p class=\"blockquote blockquote-primary\">\"The method of loci is also known as the mind palace technique. This method is a mnemonic device adopted in ancient Roman and Greek rhetorical treatises.\"\n                <br>\n                <br>\n                <small>-WILT</small>\n              </p>\n            </div>\n            <!-- Second image on the left side of the article -->\n            <div class=\"image-container\" style=\"background-image: url('assets/img/bg2.jpg')\"></div>\n          </div>\n          <div class=\"col-md-5\">\n            <!-- First image on the right side, above the article -->\n            <div class=\"image-container image-right\" style=\"background-image: url('assets/img/bg9.jpg')\"></div>\n            <h3>What is WILT 🤔??? </h3>\n            <p>WILT is the acronym for What I Learned Today. We call it like this because this is simple and we love it.\n            </p>\n            <p>\n             Most of us have our own way of remembering things that we learn or encounter during work, travel, reading books, watching movies etc.\n             Some people prefer to write down those things in their notes or in their daily diaries. Some people are confident enough to memorize those.\n            </p>\n             <p>\n               <strong>WILT brings a platform to you and your ideas, leanings and all those one or two liners which you learn, listen, read, encounter during any time of your day</strong>\n            </p>\n            <a routerLink=\"/login\" class=\"btn btn-link btn-primary\">Get Started  <i class=\"now-ui-icons arrows-1_minimal-right\"></i></a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"section section-team text-center\">\n    <div class=\"container\">\n      <h2 class=\"title\">Here is our team</h2>\n      <div class=\"team\">\n        <div class=\"row\">\n<!--          <div class=\"col-md-4\">-->\n<!--            <div class=\"team-player\">-->\n<!--              <img src=\"assets/img/avatar.jpg\" alt=\"Thumbnail Image\" class=\"rounded-circle img-fluid img-raised\">-->\n<!--              <h4 class=\"title\">Romina Hadid</h4>-->\n<!--              <p class=\"category text-primary\">Model</p>-->\n<!--              <p class=\"description\">You can write here details about one of your team members. You can give more details about what they do. Feel free to add some-->\n<!--                <a href=\"#\">links</a> for people to be able to follow them outside the site.</p>-->\n<!--              <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fab fa-twitter\"></i></a>-->\n<!--              <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fab fa-instagram\"></i></a>-->\n<!--              <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fab fa-facebook-square\"></i></a>-->\n<!--            </div>-->\n<!--          </div>-->\n          <div class=\"col-md-6\">\n            <div class=\"team-player\">\n              <img src=\"assets/img/ps.jpg\" alt=\"Thumbnail Image\" class=\"rounded-circle img-fluid img-raised\">\n              <h4 class=\"title\">Prasheel Soni</h4>\n              <p class=\"category text-primary\">The UI/UX Guy</p>\n              <p class=\"description\">Prasheel is a Full Stack Dev. He loves long bike rides and is an avid photographer.</p>\n              <a href=\"https://twitter.com/soniprasheel\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fab fa-twitter\"></i></a>\n              <a href=\"https://linkedin.com/in/ps011\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fab fa-linkedin\"></i></a>\n              <a href=\"https://github.com/ps011\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fab fa-github\"></i></a>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"team-player\">\n              <img src=\"assets/img/avd.jpg\" alt=\"Thumbnail Image\" class=\"rounded-circle img-fluid img-raised\">\n              <h4 class=\"title\">Avdhesh Singh Chouhan</h4>\n              <p class=\"category text-primary\">The Server-Side Dude</p>\n              <p class=\"description\">Avdhesh is a Senior Python Dev. He loves to travel and is a hardcore Barca fan.</p>\n              <a href=\"https://twitter.com/rarenicks\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fab fa-twitter\"></i></a>\n              <a href=\"https://www.linkedin.com/in/avdheshchouhan/\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fab fa-linkedin\"></i></a>\n              <a href=\"https://github.com/rarenicks\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fab fa-github\"></i></a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n<!--  <div class=\"section section-contact-us text-center\">-->\n<!--    <div class=\"container\">-->\n<!--      <h2 class=\"title\">Want to work with us?</h2>-->\n<!--      <p class=\"description\">Your project is very important to us.</p>-->\n<!--      <div class=\"row\">-->\n<!--        <div class=\"col-lg-6 text-center col-md-8 ml-auto mr-auto\">-->\n<!--          <div class=\"input-group input-lg\">-->\n<!--            <div class=\"input-group-prepend\">-->\n<!--                <span class=\"input-group-text\">-->\n<!--                  <i class=\"now-ui-icons users_circle-08\"></i>-->\n<!--                </span>-->\n<!--            </div>-->\n<!--            <input type=\"text\" class=\"form-control\" placeholder=\"First Name...\">-->\n<!--          </div>-->\n<!--          <div class=\"input-group input-lg\">-->\n<!--            <div class=\"input-group-prepend\">-->\n<!--                <span class=\"input-group-text\">-->\n<!--                  <i class=\"now-ui-icons ui-1_email-85\"></i>-->\n<!--                </span>-->\n<!--            </div>-->\n<!--            <input type=\"text\" class=\"form-control\" placeholder=\"Email...\">-->\n<!--          </div>-->\n<!--          <div class=\"textarea-container\">-->\n<!--            <textarea class=\"form-control\" name=\"name\" rows=\"4\" cols=\"80\" placeholder=\"Type a message...\"></textarea>-->\n<!--          </div>-->\n<!--          <div class=\"send-button\">-->\n<!--            <a href=\"#pablo\" class=\"btn btn-primary btn-round btn-block btn-lg\">Send Message</a>-->\n<!--          </div>-->\n<!--        </div>-->\n<!--      </div>-->\n<!--    </div>-->\n<!--  </div>-->\n  <footer class=\"footer footer-default\">\n    <div class=\"container\">\n<!--      <nav>-->\n<!--        <ul>-->\n<!--          <li>-->\n<!--            <a href=\"https://www.creative-tim.com\">-->\n<!--              Creative Tim-->\n<!--            </a>-->\n<!--          </li>-->\n<!--          <li>-->\n<!--            <a href=\"http://presentation.creative-tim.com\">-->\n<!--              About Us-->\n<!--            </a>-->\n<!--          </li>-->\n<!--          <li>-->\n<!--            <a href=\"http://blog.creative-tim.com\">-->\n<!--              Blog-->\n<!--            </a>-->\n<!--          </li>-->\n<!--        </ul>-->\n<!--      </nav>-->\n      <div class=\"copyright\" id=\"copyright\">\n        &copy; 2019\n<!--        <script>-->\n<!--          document.getElementById('copyright').appendChild(document.createTextNode(new Date().getFullYear()))-->\n<!--        </script>-->\n        , Designed with ♥️\n<!--        <a href=\"https://www.invisionapp.com\" target=\"_blank\">Prasheel</a>. Coded by-->\n<!--        <a href=\"https://www.creative-tim.com\" target=\"_blank\">Avdhesh</a>.-->\n      </div>\n    </div>\n  </footer>\n</div>\n<!--   Core JS Files   -->\n<script src=\"assets/js/core/jquery.min.js\" type=\"text/javascript\"></script>\n<script src=\"assets/js/core/popper.min.js\" type=\"text/javascript\"></script>\n<script src=\"assets/js/core/bootstrap.min.js\" type=\"text/javascript\"></script>\n<!--  Plugin for Switches, full documentation here: http://www.jque.re/plugins/version3/bootstrap.switch/ -->\n<script src=\"assets/js/plugins/bootstrap-switch.js\"></script>\n<!--  Plugin for the Sliders, full documentation here: http://refreshless.com/nouislider/ -->\n<script src=\"assets/js/plugins/nouislider.min.js\" type=\"text/javascript\"></script>\n<!--  Plugin for the DatePicker, full documentation here: https://github.com/uxsolutions/bootstrap-datepicker -->\n<script src=\"assets/js/plugins/bootstrap-datepicker.js\" type=\"text/javascript\"></script>\n<!--  Google Maps Plugin    -->\n<script src=\"https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE\"></script>\n<!-- Control Center for Now Ui Kit: parallax effects, scripts for the example pages etc -->\n<script src=\"assets/js/now-ui-kit.js?v=1.2.0\" type=\"text/javascript\"></script>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/wilt-login/wilt-login.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/wilt-login/wilt-login.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header clear-filter\" filter-color=\"orange\">\n  <div class=\"page-header-image\" style=\"background-image:url('assets/img/login.jpg')\"></div>\n  <div class=\"content\">\n    <div class=\"container\">\n      <div class=\"col-md-4 ml-auto mr-auto\">\n        <div class=\"card card-login card-plain\">\n          <form [formGroup]=\"loginForm\" (ngSubmit)=\"onLogin()\">\n            <div class=\"card-header text-center\">\n              <div class=\"logo-container\">\n                <img src=\"assets/img/logo-wilt.png\" alt=\"\" />\n              </div>\n            </div>\n            <div class=\"card-body\">\n              <div class=\"input-group no-border input-lg\">\n                <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">\n                      <i class=\"now-ui-icons users_circle-08\"></i>\n                    </span>\n                </div>\n                <input \n                type=\"text\" \n                id=\"username\" \n                formControlName=\"username\"\n                class=\"form-control\" \n                placeholder=\"Username\" />\n              </div>\n              <div class=\"input-group no-border input-lg\">\n                <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">\n                      <i class=\"now-ui-icons objects_key-25\"></i>\n                    </span>\n                </div>\n                <input \n                type=\"password\" \n                id=\"password\" \n                placeholder=\"Password\" \n                formControlName=\"password\"\n                class=\"form-control\" />\n              </div>\n            </div>\n            <div class=\"card-footer text-center\">\n              <button type=\"submit\" class=\"btn btn-primary btn-round btn-lg btn-block\" >Login</button>\n              <div class=\"pull-left\">\n                <h6>\n                  <a routerLink=\"/signup\" class=\"link\">Create Account</a>\n                </h6>\n              </div>\n              <div class=\"pull-right\">\n                <h6>\n                  <a href=\"#\" class=\"link\">Need Help?</a>\n                </h6>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n  <app-loader *ngIf=\"loading\"></app-loader>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/wilt-nav/wilt-nav.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/wilt-nav/wilt-nav.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg bg-primary\" *ngIf=\"isLoggedIn\">\n  <div class=\"container\">\n    <div class=\"navbar-translate\">\n      <a class=\"navbar-brand\" href=\"#pablo\">W I L T</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-primary\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-bar bar1\"></span>\n        <span class=\"navbar-toggler-bar bar2\"></span>\n        <span class=\"navbar-toggler-bar bar3\"></span>\n      </button>\n    </div>\n\n    <div class=\"collapse navbar-collapse\" id=\"example-navbar-primary\" data-nav-image=\"assets/img/blurred-image-1.jpg\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" routerLink=\"/home\">\n            <i class=\"now-ui-icons objects_globe\"></i>\n            <p>Discover</p>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/profile\">\n            <i class=\"now-ui-icons users_circle-08\"></i>\n            <p>Profile</p>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" (click)=\"logout()\">\n            <i class=\"now-ui-icons media-1_button-power\"></i>\n            <p>Logout</p>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/wilt-page-not-found/wilt-page-not-found.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/wilt-page-not-found/wilt-page-not-found.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>wilt-page-not-found works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/wilt-profile/wilt-profile.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/wilt-profile/wilt-profile.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"profile-page sidebar-collapse\">\n<div class=\"wrapper\">\n  <div class=\"page-header clear-filter\" filter-color=\"orange\">\n    <div class=\"page-header-image\" data-parallax=\"true\" style=\"background-image:url('assets/img/bg5.jpg');\">\n    </div>\n    <div class=\"container\">\n      <div class=\"photo-container\">\n        <img src=\"assets/img/ps.jpg\" alt=\"\">\n      </div>\n      <h3 class=\"title\">Prasheel Soni</h3>\n      <p class=\"category\">Engineer/ Traveller/ Rider</p>\n      <div class=\"content\">\n        <div class=\"social-description\">\n          <h2>58</h2>\n          <p>Likes</p>\n        </div>\n        <div class=\"social-description\">\n          <h2>26</h2>\n          <p>Comments</p>\n        </div>\n        <div class=\"social-description\">\n          <h2>48</h2>\n          <p>WILTs</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"section\">\n    <div class=\"container\">\n      <div class=\"button-container\">\n        <a href=\"#button\" class=\"btn btn-primary btn-round btn-lg\">Follow</a>\n        <a href=\"#button\" class=\"btn btn-default btn-round btn-lg btn-icon\" rel=\"tooltip\" title=\"Follow me on Twitter\">\n          <i class=\"fab fa-twitter\"></i>\n        </a>\n        <a href=\"#button\" class=\"btn btn-default btn-round btn-lg btn-icon\" rel=\"tooltip\" title=\"Follow me on Instagram\">\n          <i class=\"fab fa-instagram\"></i>\n        </a>\n      </div>\n      <h3 class=\"title\">About Prasheel</h3>\n      <h5 class=\"description\">Prasheel is a Full Stack Dev. He loves long bike rides and is an avid photographer </h5>\n      <div class=\"row\">\n        <div class=\"col-md-6 ml-auto mr-auto\">\n          <h4 class=\"title text-center\">Prasheel's WILTs</h4>\n          <div class=\"nav-align-center\">\n            <ul class=\"nav nav-pills nav-pills-primary nav-pills-just-icons\" role=\"tablist\">\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" data-toggle=\"tab\" href=\"#profile\" role=\"tablist\">\n                  <i class=\"now-ui-icons design_image\"></i>\n                </a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#home\" role=\"tablist\">\n                  <i class=\"now-ui-icons location_world\"></i>\n                </a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" data-toggle=\"tab\" href=\"#messages\" role=\"tablist\">\n                  <i class=\"now-ui-icons sport_user-run\"></i>\n                </a>\n              </li>\n            </ul>\n          </div>\n        </div>\n        <!-- Tab panes -->\n        <div class=\"tab-content gallery\">\n          <div class=\"tab-pane active\" id=\"home\" role=\"tabpanel\">\n            <div class=\"col-md-10 ml-auto mr-auto\">\n              <div class=\"row collections\">\n                <div class=\"col-md-6\">\n                  <img src=\"assets/img/bg1.jpg\" alt=\"\" class=\"img-raised\">\n                  <img src=\"assets/img/bg3.jpg\" alt=\"\" class=\"img-raised\">\n                </div>\n                <div class=\"col-md-6\">\n                  <img src=\"assets/img/bg8.jpg\" alt=\"\" class=\"img-raised\">\n                  <img src=\"assets/img/bg7.jpg\" alt=\"\" class=\"img-raised\">\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"tab-pane\" id=\"profile\" role=\"tabpanel\">\n            <div class=\"col-md-10 ml-auto mr-auto\">\n              <div class=\"row collections\">\n                <div class=\"col-md-6\">\n                  <img src=\"assets/img/bg6.jpg\" class=\"img-raised\">\n                  <img src=\"assets/img/bg11.jpg\" alt=\"\" class=\"img-raised\">\n                </div>\n                <div class=\"col-md-6\">\n                  <img src=\"assets/img/bg7.jpg\" alt=\"\" class=\"img-raised\">\n                  <img src=\"assets/img/bg8.jpg\" alt=\"\" class=\"img-raised\">\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"tab-pane\" id=\"messages\" role=\"tabpanel\">\n            <div class=\"col-md-10 ml-auto mr-auto\">\n              <div class=\"row collections\">\n                <div class=\"col-md-6\">\n                  <img src=\"assets/img/bg3.jpg\" alt=\"\" class=\"img-raised\">\n                  <img src=\"assets/img/bg8.jpg\" alt=\"\" class=\"img-raised\">\n                </div>\n                <div class=\"col-md-6\">\n                  <img src=\"assets/img/bg7.jpg\" alt=\"\" class=\"img-raised\">\n                  <img src=\"assets/img/bg6.jpg\" class=\"img-raised\">\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/wilt-signup/wilt-signup.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/wilt-signup/wilt-signup.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header clear-filter\" filter-color=\"orange\">\n  <div class=\"page-header-image\" style=\"background-image:url('assets/img/login.jpg')\"></div>\n  <div class=\"content\">\n    <div class=\"container\">\n      <div class=\"col-md-4 ml-auto mr-auto\">\n        <div class=\"card card-login card-plain\">\n          <form [formGroup]=\"signupForm\" (ngSubmit)=\"onSignup()\">\n            <div class=\"card-header text-center\">\n              <div class=\"logo-container\">\n                <img src=\"assets/img/logo-wilt.png\" alt=\"\" />\n              </div>\n            </div>\n            <div class=\"card-body\">\n              <div class=\"input-group no-border input-lg\">\n                <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">\n                      <i class=\"now-ui-icons users_circle-08\"></i>\n                    </span>\n                </div>\n                <input type=\"text\" formControlName=\"username\" class=\"form-control\" placeholder=\"Username\" />\n              </div>\n              <div class=\"input-group no-border input-lg\">\n                <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">\n                      <i class=\"now-ui-icons users_circle-08\"></i>\n                    </span>\n                </div>\n                <input type=\"text\" formControlName=\"name\" placeholder=\"Enter your Name\" class=\"form-control\" />\n              </div>\n              <div class=\"input-group no-border input-lg\">\n                <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">\n                      <i class=\"now-ui-icons ui-1_email-85\"></i>\n                    </span>\n                </div>\n                <input type=\"email\" formControlName=\"email\" placeholder=\"Email Address\" class=\"form-control\" />\n              </div>\n              <div class=\"input-group no-border input-lg\">\n                <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">\n                      <i class=\"now-ui-icons objects_key-25\"></i>\n                    </span>\n                </div>\n                <input type=\"password\" formControlName=\"password\" placeholder=\"Password\" class=\"form-control\" />\n              </div>\n              <div class=\"input-group no-border input-lg\">\n                <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">\n                      <i class=\"now-ui-icons tech_mobile\"></i>\n                    </span>\n                </div>\n                <input type=\"text\" formControlName=\"mobile\" placeholder=\"Enter your Mobile Number\" class=\"form-control\" />\n              </div>\n            </div>\n            <div class=\"card-footer text-center\">\n              <button type=\"submit\" class=\"btn btn-primary btn-round btn-lg btn-block\">Create Account</button>\n              <div class=\"pull-left\">\n                <h6>\n                  <a routerLink=\"/login\" class=\"link\">Go to Login</a>\n                </h6>\n              </div>\n              <div class=\"pull-right\">\n                <h6>\n                  <a href=\"#pablo\" class=\"link\">Need Help?</a>\n                </h6>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<app-loader *ngIf=\"loading\"></app-loader>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'wilt-ui';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _wilt_login_wilt_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wilt-login/wilt-login.component */ "./src/app/wilt-login/wilt-login.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _wilt_signup_wilt_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./wilt-signup/wilt-signup.component */ "./src/app/wilt-signup/wilt-signup.component.ts");
/* harmony import */ var _wilt_home_wilt_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./wilt-home/wilt-home.component */ "./src/app/wilt-home/wilt-home.component.ts");
/* harmony import */ var _wilt_page_not_found_wilt_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./wilt-page-not-found/wilt-page-not-found.component */ "./src/app/wilt-page-not-found/wilt-page-not-found.component.ts");
/* harmony import */ var _wilt_landing_wilt_landing_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./wilt-landing/wilt-landing.component */ "./src/app/wilt-landing/wilt-landing.component.ts");
/* harmony import */ var _wilt_profile_wilt_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./wilt-profile/wilt-profile.component */ "./src/app/wilt-profile/wilt-profile.component.ts");
/* harmony import */ var _wilt_nav_wilt_nav_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./wilt-nav/wilt-nav.component */ "./src/app/wilt-nav/wilt-nav.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./loader/loader.component */ "./src/app/loader/loader.component.ts");



















const routes = [
    { path: 'login', component: _wilt_login_wilt_login_component__WEBPACK_IMPORTED_MODULE_5__["WiltLoginComponent"] },
    { path: 'signup', component: _wilt_signup_wilt_signup_component__WEBPACK_IMPORTED_MODULE_7__["WiltSignupComponent"] },
    { path: 'home', component: _wilt_home_wilt_home_component__WEBPACK_IMPORTED_MODULE_8__["WiltHomeComponent"] },
    { path: 'profile', component: _wilt_profile_wilt_profile_component__WEBPACK_IMPORTED_MODULE_11__["WiltProfileComponent"] },
    { path: 'user/:id', component: _wilt_profile_wilt_profile_component__WEBPACK_IMPORTED_MODULE_11__["WiltProfileComponent"] },
    { path: '', component: _wilt_landing_wilt_landing_component__WEBPACK_IMPORTED_MODULE_10__["WiltLandingComponent"] },
    { path: '**', component: _wilt_page_not_found_wilt_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__["WiltPageNotFoundComponent"] }
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _wilt_login_wilt_login_component__WEBPACK_IMPORTED_MODULE_5__["WiltLoginComponent"],
            _wilt_signup_wilt_signup_component__WEBPACK_IMPORTED_MODULE_7__["WiltSignupComponent"],
            _wilt_home_wilt_home_component__WEBPACK_IMPORTED_MODULE_8__["WiltHomeComponent"],
            _wilt_page_not_found_wilt_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__["WiltPageNotFoundComponent"],
            _wilt_landing_wilt_landing_component__WEBPACK_IMPORTED_MODULE_10__["WiltLandingComponent"],
            _wilt_profile_wilt_profile_component__WEBPACK_IMPORTED_MODULE_11__["WiltProfileComponent"],
            _wilt_nav_wilt_nav_component__WEBPACK_IMPORTED_MODULE_12__["WiltNavComponent"],
            _loader_loader_component__WEBPACK_IMPORTED_MODULE_18__["LoaderComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbModalModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes),
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].production })
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/loader/loader.component.scss":
/*!**********************************************!*\
  !*** ./src/app/loader/loader.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loader-container {\n  z-index: 99;\n  padding: 10px 0 0 10px;\n  position: absolute;\n  top: calc(50% - 40px);\n  left: calc(50% - 40px);\n  background: rgba(0, 0, 0, 0.25);\n}\n\n.lds-ripple {\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n\n.lds-ripple div {\n  position: absolute;\n  border: 4px solid #f96332;\n  opacity: 1;\n  border-radius: 50%;\n  -webkit-animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n          animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n}\n\n.lds-ripple div:nth-child(2) {\n  -webkit-animation-delay: -0.5s;\n          animation-delay: -0.5s;\n}\n\n@-webkit-keyframes lds-ripple {\n  0% {\n    top: 36px;\n    left: 36px;\n    width: 0;\n    height: 0;\n    opacity: 1;\n  }\n  100% {\n    top: 0px;\n    left: 0px;\n    width: 72px;\n    height: 72px;\n    opacity: 0;\n  }\n}\n\n@keyframes lds-ripple {\n  0% {\n    top: 36px;\n    left: 36px;\n    width: 0;\n    height: 0;\n    opacity: 1;\n  }\n  100% {\n    top: 0px;\n    left: 0px;\n    width: 72px;\n    height: 72px;\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wczExL0RvY3VtZW50cy9Qcm9qZWN0cy93aWx0LXVpL3NyYy9hcHAvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLCtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNFSjs7QURBRTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxzRUFBQTtVQUFBLDhEQUFBO0FDR0o7O0FEREU7RUFDRSw4QkFBQTtVQUFBLHNCQUFBO0FDSUo7O0FERkU7RUFDRTtJQUNFLFNBQUE7SUFDQSxVQUFBO0lBQ0EsUUFBQTtJQUNBLFNBQUE7SUFDQSxVQUFBO0VDS0o7RURIRTtJQUNFLFFBQUE7SUFDQSxTQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxVQUFBO0VDS0o7QUFDRjs7QURuQkU7RUFDRTtJQUNFLFNBQUE7SUFDQSxVQUFBO0lBQ0EsUUFBQTtJQUNBLFNBQUE7SUFDQSxVQUFBO0VDS0o7RURIRTtJQUNFLFFBQUE7SUFDQSxTQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxVQUFBO0VDS0o7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGVyLWNvbnRhaW5lciB7XG4gICAgei1pbmRleDogOTk7XG4gICAgcGFkZGluZzogMTBweCAwIDAgMTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiBjYWxjKDUwJSAtIDQwcHgpO1xuICAgIGxlZnQ6IGNhbGMoNTAlIC0gNDBweCk7XG4gICAgYmFja2dyb3VuZDogcmdiYSgkY29sb3I6ICMwMDAwMDAsICRhbHBoYTogMC4yNSk7XG59XG4ubGRzLXJpcHBsZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gIH1cbiAgLmxkcy1yaXBwbGUgZGl2IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyOiA0cHggc29saWQgI2Y5NjMzMjtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBhbmltYXRpb246IGxkcy1yaXBwbGUgMXMgY3ViaWMtYmV6aWVyKDAsIDAuMiwgMC44LCAxKSBpbmZpbml0ZTtcbiAgfVxuICAubGRzLXJpcHBsZSBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjVzO1xuICB9XG4gIEBrZXlmcmFtZXMgbGRzLXJpcHBsZSB7XG4gICAgMCUge1xuICAgICAgdG9wOiAzNnB4O1xuICAgICAgbGVmdDogMzZweDtcbiAgICAgIHdpZHRoOiAwO1xuICAgICAgaGVpZ2h0OiAwO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0b3A6IDBweDtcbiAgICAgIGxlZnQ6IDBweDtcbiAgICAgIHdpZHRoOiA3MnB4O1xuICAgICAgaGVpZ2h0OiA3MnB4O1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gIH1cbiAgIiwiLmxvYWRlci1jb250YWluZXIge1xuICB6LWluZGV4OiA5OTtcbiAgcGFkZGluZzogMTBweCAwIDAgMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IGNhbGMoNTAlIC0gNDBweCk7XG4gIGxlZnQ6IGNhbGMoNTAlIC0gNDBweCk7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG59XG5cbi5sZHMtcmlwcGxlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG59XG5cbi5sZHMtcmlwcGxlIGRpdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyOiA0cHggc29saWQgI2Y5NjMzMjtcbiAgb3BhY2l0eTogMTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBhbmltYXRpb246IGxkcy1yaXBwbGUgMXMgY3ViaWMtYmV6aWVyKDAsIDAuMiwgMC44LCAxKSBpbmZpbml0ZTtcbn1cblxuLmxkcy1yaXBwbGUgZGl2Om50aC1jaGlsZCgyKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuNXM7XG59XG5cbkBrZXlmcmFtZXMgbGRzLXJpcHBsZSB7XG4gIDAlIHtcbiAgICB0b3A6IDM2cHg7XG4gICAgbGVmdDogMzZweDtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAlIHtcbiAgICB0b3A6IDBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgd2lkdGg6IDcycHg7XG4gICAgaGVpZ2h0OiA3MnB4O1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/loader/loader.component.ts":
/*!********************************************!*\
  !*** ./src/app/loader/loader.component.ts ***!
  \********************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoaderComponent = class LoaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
LoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loader',
        template: __webpack_require__(/*! raw-loader!./loader.component.html */ "./node_modules/raw-loader/index.js!./src/app/loader/loader.component.html"),
        styles: [__webpack_require__(/*! ./loader.component.scss */ "./src/app/loader/loader.component.scss")]
    })
], LoaderComponent);



/***/ }),

/***/ "./src/app/services/nav.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/nav.service.ts ***!
  \*****************************************/
/*! exports provided: NavService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavService", function() { return NavService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavService = class NavService {
    constructor() { }
    hide() { this.visible = false; }
    show() { this.visible = true; }
    toggle() { this.visible = !this.visible; }
    login() { this.loggedIn = true; }
};
NavService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], NavService);



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





let UserService = class UserService {
    constructor(http) {
        this.http = http;
        this.isLoggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this.savedWilts = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
    }
    login(credentials) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].BASE_URL}/users/login`, credentials);
    }
    createUser(user) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].BASE_URL}/users/create`, user);
    }
    validateToken(token) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].BASE_URL}/users/validate`, {
            headers: {
                'Authorization': token
            }
        });
    }
    getUserDetails(id) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].BASE_URL}/users/${id}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
    }
    logout() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].BASE_URL}/users/logout`);
    }
    saveWilt(wilt) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].BASE_URL}/users/save`, {
            userId: JSON.parse(localStorage.getItem('user')).id,
            wiltId: wilt._id
        });
    }
    unsaveWilt(wilt) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].BASE_URL}/users/unsave`, {
            userId: JSON.parse(localStorage.getItem('user')).id,
            wiltId: wilt._id
        });
    }
    setLoggedIn(isLoggedIn) {
        this.isLoggedIn.next(isLoggedIn);
    }
    setSavedWilts(wilts) {
        this.savedWilts.next(wilts);
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ "./src/app/services/wilt.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/wilt.service.ts ***!
  \******************************************/
/*! exports provided: WiltService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WiltService", function() { return WiltService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let WiltService = class WiltService {
    constructor(http) {
        this.http = http;
    }
    createWilt(wilt) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BASE_URL}/wilt/create`, wilt);
    }
    getAllWilts() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BASE_URL}/wilt/`);
    }
    upload(formData) {
        return this.http.post('https://api.cloudinary.com/v1_1/designu/raw/upload', formData);
    }
};
WiltService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
WiltService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], WiltService);



/***/ }),

/***/ "./src/app/wilt-home/wilt-home.component.scss":
/*!****************************************************!*\
  !*** ./src/app/wilt-home/wilt-home.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (max-width: 767px) {\n  .nav-item span {\n    display: none;\n  }\n\n  .nav-tabs {\n    display: -webkit-inline-box;\n    display: inline-flex;\n  }\n\n  .fab-btn {\n    position: fixed;\n    width: 56px;\n    left: 85%;\n    bottom: 25px;\n    margin-right: 15px;\n    margin-left: -28px;\n    float: right;\n  }\n}\n@media only screen and (max-width: 992px) {\n  .nav-tabs {\n    display: -webkit-inline-box;\n    display: inline-flex;\n  }\n\n  .fab-btn {\n    position: fixed;\n    width: 56px;\n    left: 85%;\n    bottom: 25px;\n    margin-right: 15px;\n    margin-left: -28px;\n    float: right;\n  }\n}\n.fab-btn {\n  position: fixed;\n  width: 56px;\n  left: 90%;\n  bottom: 25px;\n  margin-right: 15px;\n  margin-left: -28px;\n  float: right;\n}\n.navbar {\n  margin-bottom: 0;\n}\n.card-header, .card-body {\n  background: #ffe1c1;\n}\n.card-footer {\n  margin-top: 0;\n}\np {\n  color: #141413;\n  font-weight: 500;\n}\nspan {\n  display: inline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wczExL0RvY3VtZW50cy9Qcm9qZWN0cy93aWx0LXVpL3NyYy9hcHAvd2lsdC1ob21lL3dpbHQtaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvd2lsdC1ob21lL3dpbHQtaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVJO0lBQ0UsYUFBQTtFQ0ZKOztFREtBO0lBQ0UsMkJBQUE7SUFBQSxvQkFBQTtFQ0ZGOztFRElBO0lBQ0UsZUFBQTtJQUNBLFdBQUE7SUFDQSxTQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7SUFDQSxZQUFBO0VDREY7QUFDRjtBRElBO0VBQ0U7SUFDRSwyQkFBQTtJQUFBLG9CQUFBO0VDRkY7O0VESUE7SUFDRSxlQUFBO0lBQ0EsV0FBQTtJQUNBLFNBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxrQkFBQTtJQUNBLFlBQUE7RUNERjtBQUNGO0FESUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNGRjtBREtBO0VBQ0UsZ0JBQUE7QUNGRjtBREtBO0VBQ0UsbUJBQUE7QUNGRjtBREtBO0VBQ0UsYUFBQTtBQ0ZGO0FES0E7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNGRjtBREtBO0VBQ0UsZUFBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvd2lsdC1ob21lL3dpbHQtaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5uYXYtaXRlbSB7XG4gICAgc3BhbiB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuICAubmF2LXRhYnMge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB9XG4gIC5mYWItYnRuIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDU2cHg7XG4gICAgbGVmdDogODUlO1xuICAgIGJvdHRvbTogMjVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0yOHB4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5uYXYtdGFicyB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIH1cbiAgLmZhYi1idG4ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogNTZweDtcbiAgICBsZWZ0OiA4NSU7XG4gICAgYm90dG9tOiAyNXB4O1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICBtYXJnaW4tbGVmdDogLTI4cHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICB9XG59XG5cbi5mYWItYnRuIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogNTZweDtcbiAgbGVmdDogOTAlO1xuICBib3R0b206IDI1cHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgbWFyZ2luLWxlZnQ6IC0yOHB4O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5uYXZiYXIge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uY2FyZC1oZWFkZXIsIC5jYXJkLWJvZHl7XG4gIGJhY2tncm91bmQ6ICNmZmUxYzE7XG59XG5cbi5jYXJkLWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbnAge1xuICBjb2xvcjogIzE0MTQxMztcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuc3BhbiB7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cbiIsIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLm5hdi1pdGVtIHNwYW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAubmF2LXRhYnMge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB9XG5cbiAgLmZhYi1idG4ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogNTZweDtcbiAgICBsZWZ0OiA4NSU7XG4gICAgYm90dG9tOiAyNXB4O1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICBtYXJnaW4tbGVmdDogLTI4cHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5uYXYtdGFicyB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIH1cblxuICAuZmFiLWJ0biB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiA1NnB4O1xuICAgIGxlZnQ6IDg1JTtcbiAgICBib3R0b206IDI1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMjhweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gIH1cbn1cbi5mYWItYnRuIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogNTZweDtcbiAgbGVmdDogOTAlO1xuICBib3R0b206IDI1cHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgbWFyZ2luLWxlZnQ6IC0yOHB4O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5uYXZiYXIge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uY2FyZC1oZWFkZXIsIC5jYXJkLWJvZHkge1xuICBiYWNrZ3JvdW5kOiAjZmZlMWMxO1xufVxuXG4uY2FyZC1mb290ZXIge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG5wIHtcbiAgY29sb3I6ICMxNDE0MTM7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbnNwYW4ge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/wilt-home/wilt-home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/wilt-home/wilt-home.component.ts ***!
  \**************************************************/
/*! exports provided: WiltHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WiltHomeComponent", function() { return WiltHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_wilt_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/wilt.service */ "./src/app/services/wilt.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let WiltHomeComponent = class WiltHomeComponent {
    constructor(wiltService, modalService, userService, router) {
        this.wiltService = wiltService;
        this.modalService = modalService;
        this.userService = userService;
        this.router = router;
        this.createForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            compact: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            lengthy: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            visuals: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]([]),
            tags: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]([]),
        });
        this.visualUrls = [];
        this.savedWilts = [];
    }
    ngOnInit() {
        this.userService.isLoggedIn.subscribe((isLoggedIn) => {
            if (!isLoggedIn) {
                if (localStorage.getItem("token")) {
                    this.userService
                        .validateToken(`Bearer ${localStorage.getItem("token")}`)
                        .subscribe((data) => {
                        this.userService.setLoggedIn(true);
                    });
                }
                else {
                    return this.router.navigateByUrl("login");
                }
            }
            this.loading = true;
            this.wiltService.getAllWilts().subscribe(data => {
                this.loading = false;
                this.wilts = data;
            });
            this.userService.getUserDetails(JSON.parse(localStorage.getItem('user')).id)
                .subscribe(user => {
                this.savedWilts = user['saved_wilts'];
                this.userService.setSavedWilts(this.savedWilts);
            });
        });
    }
    openModal(content) {
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    uploadImage(event) {
        this.loading = true;
        const formData = new FormData();
        formData.append("file", event.target.files[0]);
        formData.append("upload_preset", "wilt-ui");
        this.wiltService.upload(formData).subscribe((data) => {
            this.loading = false;
            this.visualUrls.push(data.url);
        });
    }
    onCreateFormSubmit() {
        if (this.createForm.valid) {
            this.loading = true;
            this.wiltService
                .createWilt({
                compact: this.createForm.get("compact").value,
                lengthy: this.createForm.get("lengthy").value,
                category: this.createForm.get("category").value,
                tags: this.createForm.get("tags").value,
                visuals: this.visualUrls,
                userId: JSON.parse(localStorage.getItem('user')).id,
                username: JSON.parse(localStorage.getItem('user')).username
            })
                .subscribe((data) => {
                this.loading = false;
                this.createForm.reset();
                this.modalService.dismissAll();
            });
        }
    }
    onSaveWilt(event, wilt) {
        event.target.classList.toggle('btn-simple');
        this.userService.saveWilt(wilt)
            .subscribe(data => {
            console.log(data);
            this.userService.setSavedWilts(data);
        });
    }
    isWiltSaved(id) {
        return this.savedWilts.indexOf(id) > -1;
    }
};
WiltHomeComponent.ctorParameters = () => [
    { type: _services_wilt_service__WEBPACK_IMPORTED_MODULE_3__["WiltService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
WiltHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-wilt-home",
        template: __webpack_require__(/*! raw-loader!./wilt-home.component.html */ "./node_modules/raw-loader/index.js!./src/app/wilt-home/wilt-home.component.html"),
        styles: [__webpack_require__(/*! ./wilt-home.component.scss */ "./src/app/wilt-home/wilt-home.component.scss")]
    })
], WiltHomeComponent);



/***/ }),

/***/ "./src/app/wilt-landing/wilt-landing.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/wilt-landing/wilt-landing.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-link {\n  padding: 0.5rem 0;\n  background-color: unset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wczExL0RvY3VtZW50cy9Qcm9qZWN0cy93aWx0LXVpL3NyYy9hcHAvd2lsdC1sYW5kaW5nL3dpbHQtbGFuZGluZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvd2lsdC1sYW5kaW5nL3dpbHQtbGFuZGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsdUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3dpbHQtbGFuZGluZy93aWx0LWxhbmRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLWxpbmsge1xuICBwYWRkaW5nOiAwLjVyZW0gMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XG59XG4iLCIuYnRuLWxpbmsge1xuICBwYWRkaW5nOiAwLjVyZW0gMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/wilt-landing/wilt-landing.component.ts":
/*!********************************************************!*\
  !*** ./src/app/wilt-landing/wilt-landing.component.ts ***!
  \********************************************************/
/*! exports provided: WiltLandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WiltLandingComponent", function() { return WiltLandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_nav_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/nav.service */ "./src/app/services/nav.service.ts");



let WiltLandingComponent = class WiltLandingComponent {
    constructor(nav) {
        this.nav = nav;
    }
    ngOnInit() {
        this.nav.hide();
    }
};
WiltLandingComponent.ctorParameters = () => [
    { type: _services_nav_service__WEBPACK_IMPORTED_MODULE_2__["NavService"] }
];
WiltLandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wilt-landing',
        template: __webpack_require__(/*! raw-loader!./wilt-landing.component.html */ "./node_modules/raw-loader/index.js!./src/app/wilt-landing/wilt-landing.component.html"),
        styles: [__webpack_require__(/*! ./wilt-landing.component.scss */ "./src/app/wilt-landing/wilt-landing.component.scss")]
    })
], WiltLandingComponent);



/***/ }),

/***/ "./src/app/wilt-login/wilt-login.component.scss":
/*!******************************************************!*\
  !*** ./src/app/wilt-login/wilt-login.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".link {\n  color: #fff !important;\n  text-transform: none !important;\n  font-weight: normal;\n}\n\n.clear-filter {\n  background: -webkit-gradient(linear, left bottom, left top, from(rgba(44, 44, 44, 0.2)), to(#f96332)) !important;\n  background: linear-gradient(0deg, rgba(44, 44, 44, 0.2), #f96332) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wczExL0RvY3VtZW50cy9Qcm9qZWN0cy93aWx0LXVpL3NyYy9hcHAvd2lsdC1sb2dpbi93aWx0LWxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC93aWx0LWxvZ2luL3dpbHQtbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGdIQUFBO0VBQUEsNEVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3dpbHQtbG9naW4vd2lsdC1sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saW5rIHtcbiAgY29sb3I6ICNmZmYhaW1wb3J0YW50O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5jbGVhci1maWx0ZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSg0NCwgNDQsIDQ0LCAwLjIpLCAjZjk2MzMyKSFpbXBvcnRhbnQ7XG59XG4iLCIubGluayB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5jbGVhci1maWx0ZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSg0NCwgNDQsIDQ0LCAwLjIpLCAjZjk2MzMyKSAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/wilt-login/wilt-login.component.ts":
/*!****************************************************!*\
  !*** ./src/app/wilt-login/wilt-login.component.ts ***!
  \****************************************************/
/*! exports provided: WiltLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WiltLoginComponent", function() { return WiltLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_nav_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/nav.service */ "./src/app/services/nav.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");






let WiltLoginComponent = class WiltLoginComponent {
    constructor(userService, router, navService) {
        this.userService = userService;
        this.router = router;
        this.navService = navService;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
    ngOnInit() {
        this.userService.isLoggedIn.subscribe(isLoggedIn => {
            if (isLoggedIn) {
                this.router.navigateByUrl('/home');
            }
            else if (localStorage.getItem('token')) {
                this.userService.validateToken(`Bearer ${localStorage.getItem('token')}`)
                    .subscribe(data => {
                    this.userService.setLoggedIn(true);
                });
            }
            else {
                localStorage.removeItem('token');
                localStorage.removeItem('user');
            }
        });
    }
    onLogin() {
        this.loading = true;
        this.userService.login(this.loginForm.value)
            .subscribe((data) => {
            this.loading = false;
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
            this.userService.setLoggedIn(true);
        });
    }
};
WiltLoginComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_nav_service__WEBPACK_IMPORTED_MODULE_4__["NavService"] }
];
WiltLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wilt-login',
        template: __webpack_require__(/*! raw-loader!./wilt-login.component.html */ "./node_modules/raw-loader/index.js!./src/app/wilt-login/wilt-login.component.html"),
        styles: [__webpack_require__(/*! ./wilt-login.component.scss */ "./src/app/wilt-login/wilt-login.component.scss")]
    })
], WiltLoginComponent);



/***/ }),

/***/ "./src/app/wilt-nav/wilt-nav.component.scss":
/*!**************************************************!*\
  !*** ./src/app/wilt-nav/wilt-nav.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wczExL0RvY3VtZW50cy9Qcm9qZWN0cy93aWx0LXVpL3NyYy9hcHAvd2lsdC1uYXYvd2lsdC1uYXYuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3dpbHQtbmF2L3dpbHQtbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsZ0JBQUE7QUNDRCIsImZpbGUiOiJzcmMvYXBwL3dpbHQtbmF2L3dpbHQtbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhciB7XG4gbWFyZ2luLWJvdHRvbTogMDtcbn1cbiIsIi5uYXZiYXIge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/wilt-nav/wilt-nav.component.ts":
/*!************************************************!*\
  !*** ./src/app/wilt-nav/wilt-nav.component.ts ***!
  \************************************************/
/*! exports provided: WiltNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WiltNavComponent", function() { return WiltNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_nav_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/nav.service */ "./src/app/services/nav.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");




let WiltNavComponent = class WiltNavComponent {
    constructor(nav, userService) {
        this.nav = nav;
        this.userService = userService;
    }
    ngOnInit() {
        this.userService.isLoggedIn.subscribe(isLoggedIn => this.isLoggedIn = isLoggedIn);
    }
    logout() {
        this.userService.logout()
            .subscribe(_data => {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            this.userService.setLoggedIn(false);
        });
    }
};
WiltNavComponent.ctorParameters = () => [
    { type: _services_nav_service__WEBPACK_IMPORTED_MODULE_2__["NavService"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
WiltNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wilt-nav',
        template: __webpack_require__(/*! raw-loader!./wilt-nav.component.html */ "./node_modules/raw-loader/index.js!./src/app/wilt-nav/wilt-nav.component.html"),
        styles: [__webpack_require__(/*! ./wilt-nav.component.scss */ "./src/app/wilt-nav/wilt-nav.component.scss")]
    })
], WiltNavComponent);



/***/ }),

/***/ "./src/app/wilt-page-not-found/wilt-page-not-found.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/wilt-page-not-found/wilt-page-not-found.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpbHQtcGFnZS1ub3QtZm91bmQvd2lsdC1wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/wilt-page-not-found/wilt-page-not-found.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/wilt-page-not-found/wilt-page-not-found.component.ts ***!
  \**********************************************************************/
/*! exports provided: WiltPageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WiltPageNotFoundComponent", function() { return WiltPageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WiltPageNotFoundComponent = class WiltPageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
WiltPageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wilt-page-not-found',
        template: __webpack_require__(/*! raw-loader!./wilt-page-not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/wilt-page-not-found/wilt-page-not-found.component.html"),
        styles: [__webpack_require__(/*! ./wilt-page-not-found.component.scss */ "./src/app/wilt-page-not-found/wilt-page-not-found.component.scss")]
    })
], WiltPageNotFoundComponent);



/***/ }),

/***/ "./src/app/wilt-profile/wilt-profile.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/wilt-profile/wilt-profile.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpbHQtcHJvZmlsZS93aWx0LXByb2ZpbGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/wilt-profile/wilt-profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/wilt-profile/wilt-profile.component.ts ***!
  \********************************************************/
/*! exports provided: WiltProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WiltProfileComponent", function() { return WiltProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_nav_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/nav.service */ "./src/app/services/nav.service.ts");



let WiltProfileComponent = class WiltProfileComponent {
    constructor(nav) {
        this.nav = nav;
    }
    ngOnInit() {
        this.nav.show();
    }
};
WiltProfileComponent.ctorParameters = () => [
    { type: _services_nav_service__WEBPACK_IMPORTED_MODULE_2__["NavService"] }
];
WiltProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wilt-profile',
        template: __webpack_require__(/*! raw-loader!./wilt-profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/wilt-profile/wilt-profile.component.html"),
        styles: [__webpack_require__(/*! ./wilt-profile.component.scss */ "./src/app/wilt-profile/wilt-profile.component.scss")]
    })
], WiltProfileComponent);



/***/ }),

/***/ "./src/app/wilt-signup/wilt-signup.component.scss":
/*!********************************************************!*\
  !*** ./src/app/wilt-signup/wilt-signup.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".link {\n  color: #fff !important;\n  text-transform: none !important;\n  font-weight: normal;\n}\n\n.clear-filter {\n  background: -webkit-gradient(linear, left bottom, left top, from(rgba(44, 44, 44, 0.2)), to(#f96332)) !important;\n  background: linear-gradient(0deg, rgba(44, 44, 44, 0.2), #f96332) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wczExL0RvY3VtZW50cy9Qcm9qZWN0cy93aWx0LXVpL3NyYy9hcHAvd2lsdC1zaWdudXAvd2lsdC1zaWdudXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3dpbHQtc2lnbnVwL3dpbHQtc2lnbnVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxnSEFBQTtFQUFBLDRFQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC93aWx0LXNpZ251cC93aWx0LXNpZ251cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saW5rIHtcbiAgY29sb3I6ICNmZmYhaW1wb3J0YW50O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5jbGVhci1maWx0ZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSg0NCwgNDQsIDQ0LCAwLjIpLCAjZjk2MzMyKSFpbXBvcnRhbnQ7XG59XG4iLCIubGluayB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5jbGVhci1maWx0ZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSg0NCwgNDQsIDQ0LCAwLjIpLCAjZjk2MzMyKSAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/wilt-signup/wilt-signup.component.ts":
/*!******************************************************!*\
  !*** ./src/app/wilt-signup/wilt-signup.component.ts ***!
  \******************************************************/
/*! exports provided: WiltSignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WiltSignupComponent", function() { return WiltSignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_nav_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/nav.service */ "./src/app/services/nav.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");






let WiltSignupComponent = class WiltSignupComponent {
    constructor(userService, router, navService) {
        this.userService = userService;
        this.router = router;
        this.navService = navService;
        this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
    ngOnInit() {
    }
    onSignup() {
        this.loading = true;
        this.userService.createUser(this.signupForm.value)
            .subscribe(data => {
            this.loading = false;
            // Do something here, save JWT
            this.navService.login();
            this.router.navigateByUrl('/home');
        });
    }
};
WiltSignupComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_nav_service__WEBPACK_IMPORTED_MODULE_4__["NavService"] }
];
WiltSignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wilt-signup',
        template: __webpack_require__(/*! raw-loader!./wilt-signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/wilt-signup/wilt-signup.component.html"),
        styles: [__webpack_require__(/*! ./wilt-signup.component.scss */ "./src/app/wilt-signup/wilt-signup.component.scss")]
    })
], WiltSignupComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    CLOUDINARY_URL: 'https://api.cloudinary.com/v1_1/designu/raw/upload',
    BASE_URL: 'http://localhost:3000'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ps11/Documents/Projects/wilt-ui/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map