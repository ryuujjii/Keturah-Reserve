import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { ScrollToPlugin } from "gsap/ScrollToPlugin.js";
import { ExpoScaleEase } from "gsap/EasePack.js";
// import { SplitText } from "gsap/SplitText.min.js";
// import { SmoothScroll } from "smoothscroll-for-websites";
import { Draggable } from "gsap/Draggable.js";
// import { InertiaPlugin } from "gsap/all";
// import { Observer } from "gsap/Observer";
// import { ScrollSmoother } from "gsap/ScrollSmoother.min.js";
// import { DrawSVGPlugin } from "gsap/DrawSVGPlugin.min.js";
// import Lenis from "@studio-freight/lenis";
import Splitting from "splitting";
// import VanillaTilt from "vanilla-tilt";
import Swiper, { Autoplay, Pagination, Navigation } from "swiper";
import { Fancybox, Panzoom } from "@fancyapps/ui";
// import * as THREE from "three";
// const PANOLENS = require("panolens");
// import * as PANOLENS from "Panolens";
// import { Viewer, VideoPlugin, GyroscopePlugin } from "@photo-sphere-viewer";
// import { GyroscopePlugin } from "@photo-sphere-viewer/gyroscope-plugin";
// import { VideoPlugin } from "@photo-sphere-viewer/video-plugin";
// import imagesLoaded from "imagesloaded";
// import ScrollBar, { ScrollbarPlugin } from "smooth-scrollbar";
// import LocomotiveScroll from "locomotive-scroll";
// import initialize from "easy-toggle-state";
// import { SVG } from "@svgdotjs/svg.js";
// import browser from "browser-detect";
// import "bootstrap/js/dist/tab.js";
// import * as bootstrap from "bootstrap";
// import lightGallery from "lightgallery";
// import lgVideo from "lightgallery/plugins/video";
// import lgThumbnail from "lightgallery/plugins/thumbnail";
// import lgZoom from "lightgallery/plugins/mediumZoom";
// import * as bee3Dclassie from "./modules/js/bee3D/dependencies/classie.js";
// import * as bee3Dparallax from "./modules/js/bee3D/dependencies/parallax.custom.js"
// import * as bee3D from "./modules/js/bee3D/bee3D.min.js";
// import SwiperGL from "../files/js/swiper-gl.esm.js";
// import ScrollOut from "scroll-out";
// import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
// import $ from "jquery";
// import proximity from "./modules/js/jquery.proximity.js"
// import LazyLoad from "vanilla-lazyload";
// window.bootstrap = bootstrap;
// import { spline } from "@georgedoescode/spline";
// import SimplexNoise from "simplex-noise";
// import { _vertical } from "gsap/Observer";
// import p5 from "p5";
// import * as createjs from "preload-js";
// import ScrollyVideo from "scrolly-video";

export function plugins() {
	// gsap: gsap,
	// ScrollTrigger: ScrollTrigger,
	// ScrollToPlugin: ScrollToPlugin,
	// ExpoScaleEase: ExpoScaleEase,
	// SmoothScroll: SmoothScroll,
	// Splitting: Splitting,
	// Fancybox: Fancybox,
	// Panzoom: Panzoom,
	// VanillaTilt: VanillaTilt,
	// CanvasScrollClip: CanvasScrollClip,
	window.gsap = gsap;
	window.ScrollTrigger = ScrollTrigger;
	window.Draggable = Draggable;
	window.ExpoScaleEase = ExpoScaleEase;
	window.ScrollToPlugin = ScrollToPlugin;
	// window.SplitText = SplitText;
	// window.createjs = createjs;
	window.Fancybox = Fancybox;
	window.Panzoom = Panzoom;
	// window.SmoothScroll = SmoothScroll;
	window.Splitting = Splitting;
	// window.VanillaTilt = VanillaTilt;
	window.Swiper = Swiper;
	window.Autoplay = Autoplay;
	window.Pagination = Pagination;
	window.Navigation = Navigation;
	// window.Mousewheel = Mousewheel;
	// window.Lenis = Lenis;
}

// export const plugins = {
// 	// gsap: gsap,
// 	// ScrollTrigger: ScrollTrigger,
// 	// ScrollToPlugin: ScrollToPlugin,
// 	// ExpoScaleEase: ExpoScaleEase,
// 	// SmoothScroll: SmoothScroll,
// 	// Splitting: Splitting,
// 	// Fancybox: Fancybox,
// 	// Panzoom: Panzoom,
// 	// VanillaTilt: VanillaTilt,
// 	// CanvasScrollClip: CanvasScrollClip,
// };
