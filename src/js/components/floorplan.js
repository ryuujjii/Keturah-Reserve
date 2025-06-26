export function floorplan() {

    let floormm = gsap.matchMedia();

    floormm.add("(min-width: 768px)", () => {

        gsap.timeline({
            scrollTrigger: {
                trigger: '.floorplan',
                start: 'top 50%',
            }
        })
            .from('.floorplan__sub', {
                opacity: 0,
                y: 30,
                duration: 0.3,
            })
            .from('.floorplan__title', {
                opacity: 0,
                y: 40,
                duration: 0.5,
            })
            .from('.floorplan__text', {
                opacity: 0,
                y: 30,
                duration: 0.5,
            }, '-=0.2')
            .from('.floorplan__info-item', {
                duration: 0.3,
            })
    })

    // let floorItems = document.querySelectorAll('.floorplan__info-item');

    gsap.timeline({
        scrollTrigger: {
            trigger: '.floorplan__info',
            start: 'top 80%',
        }
    })
        .to('.floorplan__info-item', {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.3,
            stagger: 0.03,
        })

}