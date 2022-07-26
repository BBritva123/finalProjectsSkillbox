// SWIPERS

function swiperMain() {
     new Swiper('.main-swiper', {
        autoplay: true,
        speed: 5000,
        effect: 'fade',

    })
}

function gallerySwiper() {
    new Swiper('.gallery__swiper', {
        // loop: true,
        speed: 2000,
        slidesPerGroup: 1,
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            // when window width is >= 320px
            120: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 10,
            },

            520: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 20,
            },

            767: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 35,
            },

            1400: {
                slidesPerView: 3,
                slidesPerGroup: 1,
                spaceBetween: 30
            },

            1600: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 50,
            }
        }
    });

}

function eventsSwiper() {
    new Swiper('.events__swiper', {
        loop: false,
        speed: 2000,
        slidesPerGroup: 1,
        slidesPerView: 3,
        spaceBetween: 50,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,

        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {

            120: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 10,
            },

            520: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 20,
            },

            767: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 34,
            },

            1000: {
                slidesPerView: 3,
                slidesPerGroup: 2,
                spaceBetween: 27,
            },

            1400: {
                slidesPerGroup: 1,
                slidesPerView: 3,
                spaceBetween: 50,
            },
        }
    });

}

function projectsSwiper() {
    new Swiper('.projects__swiper', {
        speed: 2000,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            1500: {
                slidesPerGroup: 1,
                slidesPerView: 3,
                spaceBetween: 50,
            },
            //
            1410: {
                slidesPerGroup: 1,
                slidesPerView: 3,
                spaceBetween: 30,
            },

            900: {
                slidesPerGroup: 1,
                slidesPerView: 2,
                spaceBetween: 50,
            },

            650: {
                slidesPerGroup: 1,
                slidesPerView: 2,
                spaceBetween: 35,
            },

            570: {
                slidesPerGroup: 1,
                slidesPerView: 2,
                spaceBetween: 15,
            },

            250: {
                slidesPerGroup: 1,
                slidesPerView: 1,
                spaceBetween: 10,
            },
        }
    })
}

projectsSwiper();
eventsSwiper();
swiperMain();
gallerySwiper();


//DROPDOWN

let buttons = document.querySelectorAll('.header-bottom__button-list')
let blocks = document.querySelectorAll('.painter')

buttons.forEach(button => {

    button.addEventListener('click', function () {
        let thisBlock = this.parentElement.querySelector('.painter')

        blocks.forEach(block => {
            if (block !== thisBlock) {
                block.classList.remove('is-open')
            }
        })

        buttons.forEach(btn => {
            console.log(this)
            console.log(btn)
            if (btn !== this) {
                btn.classList.remove('is-open')
            }
        });

        button.classList.toggle('is-open')
        thisBlock.classList.toggle('is-open')
    })
})

document.addEventListener("click", function(e) {
    let target = e.target;
    if (!target.closest(".header-bottom__list")) {
        document.querySelectorAll(".painter").forEach(el => {
            el.classList.remove("is-open");
        })
        document.querySelectorAll(".header-bottom__button-list").forEach(el => {
            el.classList.remove("is-open");
        });
    }
})

// ACCORDION & TABS

$(function () {
    $(".catalog__accordion").accordion({
        collapsible: true,
        heightStyle: "content",
    });
});
$(function () {
    $("#catalog__tabs").tabs({
        active: 11,
    });
});


// TOOLTIP
function tooltipShow() {
    tippy(document.querySelectorAll('.projects__tooltip'), {
        trigger: 'click',
        placement: 'top',
        theme: 'main',
        arrow: true,
    });
}
tooltipShow();


// SELECT

function select(classSelect) {
    const element = document.querySelector(classSelect);
    new Choices(element, {
        searchEnabled: false,
        position: 'bottom',
        itemSelectText: '',
    });
}

select('.gallery__select')


// SCROLLBAR

document.querySelectorAll('.painter__list').forEach(el => {
    new SimpleBar(el, {
        autoHide: false,
        scrollbarMinSize: 28,
        scrollbarMaxSize: 28,
    });
})

function init() {
    let center = [55.75806550071568, 37.62071708346125];
    let map = new ymaps.Map('map', {
        center: center,
        zoom: 14,
        controls: ['zoomControl', 'geolocationControl']
    }, {
        // Чтобы задать опции через конструктор карты, к названиям опций следует добавить префикс в виде ключа того элемента, для которого задается опция.
        geolocationControlPosition: {
            top: 340,
            right: 20,
        },
        zoomControlPosition: {
            top: 270,
            right: 20,
        },
        zoomControlSize: 'small',
    });
    let placemark = new ymaps.Placemark([55.76048537546929, 37.615395580775704], {}, {
        iconLayout: 'default#image',
        iconImageHref: '../img/contacts/point.png',
        iconImageSize: [20, 20],
        iconImageOffset: [0, 0],
    });
    map.geoObjects.add(placemark);
    map.controls.remove('rulerControl');
    map.controls.remove('searchControl');
    map.controls.remove('trafficControl');
    map.controls.remove('typeSelector');
    map.controls.remove('routeEditor');
    map.controls.remove('fullscreenControl');
    map.controls.remove('routeButtonControl');
    map.controls.remove('routePanelControl');
    map.behaviors.disable('scrollZoom');
    // map.controls.add('smallMapDefaultSet')
    // if (window.innerWidth <= '577') {
    //     map.controls.remove('zoomControl');
    //     map.controls.remove('geolocationControl');
    // } else {
    //     map.controls.add('zoomControl');
    //     map.controls.add('geolocationControl');
    // }
}

ymaps.ready(init);


//BURGER

let buttonBurger = document.querySelector('.header-top__button-burger');
buttonBurger.addEventListener('click', () => {
    let nav = document.querySelector('.header-top__nav')
    let links = document.querySelectorAll('.nav__link')
    buttonBurger.classList.toggle('button-burger_active')
    nav.classList.toggle('is-open')
    if (nav.classList.contains('is-open')) {
        document.querySelector('body').style.overflow = 'hidden'
    } else document.querySelector('body').style.overflow = 'visible'
    links.forEach(link => {
        link.addEventListener('click', () => {
            buttonBurger.classList.remove('button-burger_active')
            nav.classList.remove('is-open')
            document.querySelector('body').style.overflow = 'visible'
        })
    })
});


// SEARCH

let form = document.querySelector('.search__form');
let input = document.querySelector('.search__input');
let buttonOpenForm = document.querySelector('.search__button_close');
let buttonCloseForm = document.querySelector('.search__close');
let label = document.querySelector('.search__label');

buttonOpenForm.addEventListener('click', () => {
    form.classList.add('is-open');
    input.classList.add('is-open');
    buttonOpenForm.classList.add('is-open');
    buttonCloseForm.classList.add('is-open');
    label.classList.add('is-open');
})

buttonCloseForm.addEventListener('click', () => {
    form.classList.remove('is-open');
    input.classList.remove('is-open');
    buttonOpenForm.classList.remove('is-open');
    buttonCloseForm.classList.remove('is-open');
    label.classList.remove('is-open');
})


// VALIDATE & INPUTMASK

const validate = new JustValidate('.contacts__form')

const selector = document.querySelector("#phone");
const im = new Inputmask("+7 (999) 999 99 99");
im.mask(selector)

const placeholder = selector.placeholder;

selector.addEventListener('mouseover', () => {
    input.placeholder = '+7 (___) ___ __ __'
})

selector.addEventListener('mouseout', () => {
    input.placeholder = placeholder;
})


validate.addField('#name', [
    {
        rule: 'required',
        errorMessage: 'Введите Ваше имя:'
    },
    {
        rule: 'minLength',
        value: 2,
        errorMessage: 'Слишком короткое имя'
    },
    {
        rule: 'maxLength',
        value: 10,
        errorMessage: 'Введите имя покороче:'
    },
])

    .addField('#phone', [
        {
            validator: () => {
                const phone = selector.inputmask.unmaskedvalue(); //для отправки телефона без маски и лишних символов
                return Boolean(Number(phone) && phone.length > 0)
            },
            errorMessage: "Введите номер телефона:"
        },
        {
            validator: () => {
                const phone = selector.inputmask.unmaskedvalue(); //для отправки телефона без маски и лишних символов
                return Boolean(Number(phone) && phone.length === 10)
            },
            errorMessage: "Номер введен не полностью:"
        },
        {
            validator: () => {
                const phone = selector.inputmask.unmaskedvalue(); //для отправки телефона без маски и лишних символов
                return Boolean(Number(phone) && phone[0] === '9')
            },
            errorMessage: "Телефон не является мобильным:"
        }
    ])
