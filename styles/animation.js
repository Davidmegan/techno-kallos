gsap.from('.header',{duration: 1,y: '-100%', ease: 'bounce'})
gsap.from('li',{ duration: 1,opacity: 0, delay: 1,stagger: .5
})
gsap.from('.logo',{ duration: 1,opacity: 0, delay: 1,
})
gsap.from('.hero-section',{ duration: 1, opacity: 0, delay: 1,
})
gsap.from('.hero-title',{ duration: 1,y:30, opacity: 0, delay: 1.5, 
})
gsap.from('.hero-description',{ duration: 1,y:30, opacity: 0, delay: 2, 
})

gsap.from('.category-title1',{
    opacity:0,x:80,duration:1,delay:0,
    scrollTrigger:{
        trigger:'.category-title1',
        start:'top 30%'
    }
})
gsap.from('.category-title2',{
    opacity:0, x:-100,duration:1,delay:0,
    scrollTrigger:{
        trigger:'.category-title1',
        start:'top 30%'
    }})
gsap.from('.categories',{
    scale:0,
    duration:1,
    delay:0,
    x:40,
    scrollTrigger:{
        trigger:'.category-title1',
        start:'top 30%'
    }
})
gsap.from('.category-text',{ 
    duration: 1,y:30, opacity: 0, delay: 1.5,
    scrollTrigger:{
        trigger:'.category-title1',
        start:'top 30%'
    } 
})
gsap.from('.about-title ',{ 
    duration: 1,y:30, opacity: 0, delay: 0, 
    scrollTrigger:{
        trigger:'.about-title ',
        start:'top 60%'
    }
})
gsap.from('.about-description',{ 
    duration: 1,y:30, opacity: 0, delay: .5,stagger:1, 
    scrollTrigger:{
        trigger:'.about-title ',
        start:'top 60%'
    }
})
gsap.from('.con-tit',{ 
    duration: 1,y:30, opacity: 0, delay:0,stagger:1,
    scrollTrigger:{
        trigger:'.con-tit ',
        start:'top 60%'
    } 
})
gsap.from('.con-con',{
    scale:0,
    duration:1,
    delay:1,
    scrollTrigger:{
        trigger:'.con-tit',
        start:'top 60%'
    }
})
gsap.from('.social-links ',{
    scale:0,
    duration:1,
    delay:1.5,
    stagger:1,
    scrollTrigger:{
        trigger:'.con-tit ',
        start:'top 60%'
    }
})
gsap.from('.footer',{
    duration: 2,y: '100%',delay:.5,
    scrollTrigger:{
        trigger:'.footer ',
        start:'top 100%'
    }
})
