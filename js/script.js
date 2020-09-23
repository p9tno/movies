"use strict"
window.addEventListener('DOMContentLoaded', () => {
    //classList, делегирование
    function delegationTEst() {
        const btns = document.querySelectorAll('button');
        //кол-во классов у элемента
        // console.log(btns[0].classList.length);

        // какой класс у эл. по порядку
        // console.log(btns[0].classList.item(1));
        // console.log(btns[0].classList.item(0));

        //добавленик класса
        // btns[0].classList.add('red', grenn);
        //удаление класса
        // btns[0].classList.remove('blue');
        //тоглить классы
        // btns[0].classList.toggle('blue');

        // contains - проверяеть есть ли класс
        if (btns[1].classList.contains('red')) {

        }
        // Иногда нужен именно этот метод с .contains
        // btns[0].addEventListener('click', () => {
        //     if (!btns[1].classList.contains('red')) {
        //         btns[1].classList.add('red');
        //     } else {
        //         btns[1].classList.remove('red');
        //     }
        // });

        //другой метод
        btns[0].addEventListener('click', () => {
            btns[1].classList.toggle('red');
        });

        //УСТАРЕЛЫЙ МЕТОД


        // ДЕЛИГОРОВАНИЕ - событие с родителя на его потомков, даже если мы добавим новый эл., ранее не существовавший

        const wrapper = document.querySelector('.btn-block');
        wrapper.addEventListener('click', (event) => {
            // console.log(event);
            // на какой объект кликнули
            // console.dir(event.target);

            //event.target так как не все элементы на странице поддержиют CLICK
            // событие клик будет работать только на BUTTON
            // if (event.target && event.target.tagName == 'BUTTON') {
            //     console.log('only BUTTON');
            // }
            // событие клик будет работать только на red
            // if (event.target && event.target.classList.contains('red')) {
            //     console.log('only red');
            // }

            // метод у события matches() - какойто эл. совпадает с чем-то. Более продвинутый уровень так как мы указываем селокторы который нас интересуют
            if (event.target && event.target.matches('button.red')) {
                console.log('only button.red');
            }
        });

        // создаем кнопку с классом blue и проверяем ДЕЛИГОРОВАНИЕ + работает та кнопка у которой класс red добавляеться прои клике метод forEach такого не даст
        const btn = document.createElement('button');
        btn.classList.add('red');
        wrapper.append(btn);
    }
    delegationTEst();

    function addTabs() {

        const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__list');

        function hideTabContent() {
            tabsContent.forEach(item => {
                // item.style.display = 'none';
                item.classList.add('hide');
                item.classList.remove('show', 'fade');
            });

            tabs.forEach(item => {
                item.classList.remove('tabheader__item_active');
            });

        };

        function showTabContent(i = 0) {
            // tabsContent[i].style.display = 'block';
            tabsContent[i].classList.add('show', 'fade');
            tabsContent[i].classList.remove('hide');
            tabs[i].classList.add('tabheader__item_active');

        }

        hideTabContent();
        showTabContent();

        tabsParent.addEventListener('click', (event) =>{
            const target = event.target;

            if (target && target.classList.contains('tabheader__item')) {
                tabs.forEach((item, i) => {
                    if (target == item) {
                        hideTabContent();
                        showTabContent(i);
                    }
                });
            }
        });
    }
    addTabs();

    function addAnimation() {
        // const timerId = setTimeout((text) => {
        //     console.log('text');
        // }, 2000, 'hello');

        // записывает уникалтный индификатор setTimeout, нужно для того чтобы различать setTimeout
        // const timerId = setTimeout(logger, 2000);
        // function logger() {
        //     console.log('text');
        // }

        // setTimeout(logger, 2000);
        // function logger() {
        //     console.log('text');
        // }


        // const timerId = setTimeout(logger, 2000);
        //
        // clearInterval(timerId);
        //
        // function logger() {
        //     console.log('text');
        // }

        const btn = document.querySelector('.btn');
        let timerId,
            i = 0;

        // btn.addEventListener('click', () => {
        //     // const timerId = setTimeout(logger, 2000);
        //     timerId = setInterval(logger, 500);
        // });
        //
        // function logger() {
        //     if (i === 3) {
        //         clearInterval(timerId);
        //     }
        //     console.log('text');
        //     i++;
        // }
        //
        // // всегда будет ждать 500, лишь за тем выполнять следующию функцию
        // let id = setTimeout(function log() {
        //     console.log('Hello');
        //     id = setTimeout(log, 500);
        // },500)

        function myAnimation() {
            const elem = document.querySelector('.box');
            let pos = 0;


            const id = setInterval(frame, 10);
            function frame() {
                if (pos === 300) {
                    clearInterval(id);
                } else {
                    pos++;
                    elem.style.top = pos + "px";
                    elem.style.left = pos + "px";
                    console.log(pos);
                }
            }
        }

        btn.addEventListener('click', myAnimation);

    }
    addAnimation();

    function addData() {
        // выводит текущую дату
        // const now = new Date();

        // const now = new Date(2020, 5, 1, 20);

        // const now = new Date();
        // console.log('год',now.getFullYear());
        // console.log('месяц',now.getMonth());
        // console.log('дата',now.getDate());
        // console.log(now.getHours());
        // console.log('- часовой пояс',now.getUTCHours());
        //
        // console.log(now.getDay());

        // console.log(now.getDay());


    }
    addData();

    function timer() {
        //TIMER
        const deadline = '2021-09-20';

        function getTimeRemaining(endtime) {
            //количество секунд до которого будем считать
            const t = Date.parse(endtime) - Date.parse(new Date()),
            // считаем кол-во дней, которое будет отображаться в таймере
                  days = Math.floor(t / (1000 * 60 * 60 * 24)),
                  hours = Math.floor((t / (1000 * 60 * 60) % 24)),
                  minutes = Math.floor((t / 1000 / 60) % 60),
                  seconds = Math.floor((t / 1000) % 60);

            //возвращаем из функции объект

            return {
                'total': t,
                'days': days,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            }
        }

        function getZero(num) {
            if (num >= 0 && num < 10) {
                return `0${num}`;
            } else {
                return num;
            }
        }

        function setClock(selector, endtime) {
            const timer = document.querySelector(selector),
                  days = timer.querySelector('#days'),
                  hours = timer.querySelector('#hours'),
                  minutes = timer.querySelector('#minutes'),
                  seconds = timer.querySelector('#seconds'),
                  timeInterval = setInterval(updateClock, 1000);

            // Что бы не было задержки в секунду при старте
            updateClock();

            function updateClock() {
                const t = getTimeRemaining(endtime);

                days.innerHTML = getZero(t.days);
                hours.innerHTML = getZero(t.hours);
                minutes.innerHTML = getZero(t.minutes);
                seconds.innerHTML = getZero(t.seconds);

                if (t.total <= 0) {
                    clearInterval(timeInterval);
                }

            }
        }

        setClock('.timer', deadline);

    }

    timer();

    function addMadal() {
        const modalTrigger = document.querySelectorAll('[data-modal]'),
        modalCloseBtn = document.querySelector('[data-close]'),
        modal = document.querySelector('.modal');

        modalTrigger.forEach(btn => {
            btn.addEventListener('click', openModal);
        });

        function openModal() {
            // modal.classList.add('show');
            // modal.classList.remove('hide');
            modal.classList.toggle('show');
            document.body.style.overflow = 'hidden';

            //для тогот что бы не открывалось модальное окно по тайму - очищаем
            // clearInterval(modalTimeId);
        }


        function closeModal() {
            // modal.classList.add('hide');
            // modal.classList.remove('show');
            modal.classList.toggle('show');
            document.body.style.overflow = '';
        }
        // мы не вызываем closeModal, так как она сработает после клика
        modalCloseBtn.addEventListener('click', closeModal);


        modal.addEventListener('click', (event) => {
            //если event.target будетсовпадать с кликом на modal то
            if (event.target === modal) {
                closeModal();
            }
        });

        // закрытие по клавише ESC event.code - можно найти код любой клавиши
        document.addEventListener('keydown', (event) => {
            //проверяем что бы модальное окно было открыто
            if (event.code === 'Escape' && modal.classList.contains('show')) {
                closeModal();
                console.log(event.code);
            }
        });

        // открываем окно через время
        // const modalTimeId = setTimeout(openModal, 5000);


        // прокрученная часть  + видимая часть на данный момень без прокрутки >= полной прокрутке   -    Означает что пользыватель долистал до конца страницы
        function showModalByScroll() {
            if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
                openModal();

                //что бы удалить обработчик событий - нужно указать какок событие и с какой функцией
                window.removeEventListener('scroll', showModalByScroll);
            }
        }

        window.addEventListener('scroll', showModalByScroll);

    }

    addMadal();
})
