const flightPath = {
    curviness: 1.25,
    autoRotate: true, 
    values: [
        {x: 100, y: -20}
    ]
}

const tween = new AnimationTimeline();

tween.add{
    TweenLight.to(".paper-plane",  {

        // bezier: flightPath,
        // ease: Power1.easeInOut
        flightPath: {
            duration: 1,
            ease: "power1.easeInOut"
        }  

    })
}