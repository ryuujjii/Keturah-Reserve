// export function intro() {
//     let tlIntro = gsap.timeline({ paused: true, delay: 5, });

//     tlIntro.from(".intro .main-section__pl", { autoAlpha: 0 });
//     tlIntro.from(".intro .main-info__value", { autoAlpha: 0, y: 15, stagger: 0.1 }, 0.4);
//     tlIntro.from(".intro .main-info__name", { autoAlpha: 0, y: 15, stagger: 0.1 }, 0.5);
//     tlIntro.from(".intro .main-section__sub-title", { autoAlpha: 0, y: 15 }, 0.8);
//     tlIntro.from(".intro .main-section__title", { autoAlpha: 0, y: 15 }, 0.9);
//     tlIntro.from(".intro .main-section__more-btn-wrap", { autoAlpha: 0, y: 15 }, 1.1);
//     // tlIntro.from(".intro .main-section__btn-3d", { autoAlpha: 0, y: 15 }, 1.2);
//     tlIntro.from(".intro .scroll-down", { autoAlpha: 0, y: 15 }, 1.3);

//     tlIntro.play();

//     ScrollTrigger.create({
//         // start: "top-=1 top",
//         trigger: ".main-section",
//         markers: false,
//         onEnter: () => {
//             tlIntro.reverse();
//         },
//         onLeaveBack: () => {
//             tlIntro.play();
//         },
//     });
// }
