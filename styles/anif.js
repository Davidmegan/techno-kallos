gsap.from('.header',{duration: 1,y: '-100%', ease: 'bounce'})
gsap.from('li',{ duration: 1,opacity: 0, delay: 1,stagger: .5
})
gsap.from('.logo',{ duration: 1,opacity: 0, delay: 1,
})
gsap.from('.banner',{ duration: 1, opacity: 0, delay: 1,
})
gsap.from('.banner-content',{ duration: 1,y:30, opacity: 0, delay: 1.5, 
})
gsap.from('.gallery',{ duration: 1,y:30, opacity: 0, delay: 2, 
})
gsap.from('.footer',{
    duration: 2,y: '100%',delay:.5,
    scrollTrigger:{
        trigger:'.footer ',
        start:'top 100%'
    }
})
