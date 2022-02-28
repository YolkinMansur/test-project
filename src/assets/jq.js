
import $ from 'jquery'

$(document).ready(function () {
   
    $("button").on('click', function () {
        if($(this).hasClass('first')) {
            $('button').removeClass("active");
            $('.show').show();
            $('.show').not('.first').hide();
            $(this).addClass("active");
        } else if ($(this).hasClass('second')){
            $('button').removeClass("active");
            $('.show').show();
            $('.show').not('.second').hide();
            $(this).addClass("active");
        } else {
            $('button').removeClass("active");
            $('.show').show();
            $('.show').not('.third').hide();
            $(this).addClass("active");
        }
    });

    var y = [];
    var x = '';

    $('.sub').on('click', function () {
        x = $('input').val();
        if (x != '' && x.length >= 5) {
            y.push(x);
            console.log(y);
            $("input").val("");
            $(".out").append("<h1 class='flex justify-between items-center'>" + x + "<i class='fas fa-times-circle'></i>" + "</h1>");
            
            $('h1 i').on('click', function(){
                $(this).parent().remove()
            });
            $('h1').on('click', function(){

            });
        } else {
            console.log('Неверное заполнение либо пусто');
        }
    });
     var a = null;
     var arr1 = [];
     var arr2 = [];
     var bool= false;
    var oper = '';
     var c = null;
     var d = null;
     var ravno = null

    // $(".num-c").click(function(){
    //     a=$(this).val();
    //     $("input").val(a);
    //     console.log(a);
    //  });

    $('.plus').on('click', function () {
        bool = true;
        oper = 'plus';
        console.log("Введите второе число");
        $('.first-num input').val('');
        console.log('Плюс');
        $('.first-arr').html(arr1.join('') + '+');
    });
    $('.ce').on('click', function () {
      if( bool === true){
          arr2 = []
          console.log(arr1);
      }else {
          arr1=[]
        console.log(arr2);
      }
    });
    $('.clean').on('click', function () {
        arr1 = [];
        arr2 = [];
        bool = false;
        console.log('Вычестили');
        $('.first-arr').html('');
        $('.first-num input').val('')
        });

      $('.minus').on('click', function () {
        bool = true;
        oper = 'minus';
        console.log("Введите второе число");
        $('.first-num input').val('');
        console.log('Минус');
        $('.first-arr').html(arr1.join('') + '-');
    });
    
    $('.times').on('click', function () {
        bool = true;
        oper = 'times';
        console.log("Введите второе число");
        $('.first-num input').val('');
        console.log('Умножение');
        $('.first-arr').html(arr1.join('')+ '*');
    });
    $('.divide').on('click', function () {
        bool = true;
        oper = 'divide';
        console.log("Введите второе число");
        $('.first-num input').val('');
        console.log('Деление');
        $('.first-arr').html(arr1.join('')+ '/');
    });



    $('.num-c').on('click', function () {
        a = this.value;
        if (bool === true) {
            arr2.push(a);
            console.log(arr2);
            $('.first-num input').val(arr2.join(''));
        } else {
            arr1.push(a);
            console.log(arr1);
            $('.first-num input').val(arr1.join(''));
        }
    });
   
   
    $('.ravno').on('click', function() {
        c = parseInt(arr1.join(''));
        d = parseInt(arr2.join(''));
        if ( oper === 'plus') {
            ravno = c + d;
            console.log('сумма: ' + ravno);
        } else if (oper === 'minus'){
            ravno = c - d;
            console.log('сумма: ' + ravno);
        }else if (oper === 'times'){
            ravno = c * d;
            console.log('сумма: ' + ravno);
        } else {
            ravno = c / d
            console.log('сумма: ' + ravno);
        }
            
        $('.first-arr').append('' + arr2.join('') );
        
        $('.first-num input').val(ravno);
    });
    // var a = null;
    // var b = [];
    // // var c = null;
    // $('.num-c').on('click',function(){
    //    a=$(this).val();
    //   a = a + a;
    //     console.log(a);
    // })

    var gen = [
        {
            "name": "Страна, где ясли дороже университета: как устроено образование в Швейцарии",
            "date": "21 февраля 2022",
            "topic": "Рассказываем, как швейцарские дети и их родители выбирают образовательные траектории и какие варианты у них есть.",
            "category": "Геймдев",
            "img": "https://248006.selcdn.ru/main/iblock/48c/48cade19af315617e5c40f513442eb6b/cc12aa4f18794399ac0a090e688e1811.png"
        },
        {
            "name": "Не знаем, за что и сколько платим: как IT хочет спасти ЖКХ от коррупции",
            "date": "21 февраля 2022",
            "topic": "Почему российские управляющие компании не готовы к внедрению инноваций и почему перемены всё равно неизбежны.",
            "category": "",
            "img": "https://248006.selcdn.ru/main/iblock/d9f/d9fc76e2d7d1af240abb1b77ee4645ed/4582f91a3fdbf37a79fe5e63e4d40b29.jpg"
        },
        {
            "name": "Мочалки Мэрилин Монро, мячи‑хлебцы и мармеладный квест: 5 красивых упаковок",
            "date": "21 февраля 2022",
            "topic": "Яркое оформление обычных вещей: от стильных латексных перчаток до поп‑арта на бытовых аксессуарах.",
            "category": "Геймдев",
            "img": "https://248006.selcdn.ru/main/iblock/1d5/1d5d90cebaf212c5b6cbf266e96f4165/e681388eafa5412fb2dd8b4529f95398.png"
        },
        {
            "name": "Аренда курсов для корпоративного обучения: стоит ли связываться?",
            "date": "21 февраля 2022",
            "topic": "ем отличается аренда контента от обычной покупки, в каких случаях это выгодно и при каких условиях подойдёт.",
            "category": "Геймдев",
            "img": "https://248006.selcdn.ru/main/iblock/ea9/ea95ff69d62eda0bc7a06d960b372899/768953fb028ab63363a2e06ddebb020f.png"
        },
        {
            "name": "Может ли компания претендовать на весь написанный разработчиком код",
            "date": "21 февраля 2022",
            "topic": "Ха! Программисты — не просто гребцы на галерах, а полноправные владельцы кода, который они пишут. Разбираемся вместе с юристом.",
            "category": "Геймдев",
            "img": "https://248006.selcdn.ru/main/iblock/c30/c308c8611bbea0ddcf727a349b7a38bc/8f8a66e8ccccc902386f71df5c6142f3.png"
        },
        {
            "name": "Вакансии для дизайнеров. Четвёртая неделя февраля",
            "date": "21 февраля 2022",
            "topic": "Каждую неделю мы публикуем самые интересные вакансии и стажировки для дизайнеров. Встречайте свежую подборку!",
            "category": "Геймдев",
            "img": "https://248006.selcdn.ru/main/iblock/e4f/e4f98fbc754e4383ebec1f89cbe73ac0/9ea59fc27dcc2d257b1f3834d7f348f7.png"
        },
        {
            "name": "Страна, где ясли дороже университета: как устроено образование в Швейцарии",
            "date": "21 февраля 2022",
            "topic": "Рассказываем, как швейцарские дети и их родители выбирают образовательные траектории и какие варианты у них есть.",
            "category": "Геймдев",
            "img": "https://248006.selcdn.ru/main/iblock/48c/48cade19af315617e5c40f513442eb6b/cc12aa4f18794399ac0a090e688e1811.png"
        },
        {
            "name": "Не знаем, за что и сколько платим: как IT хочет спасти ЖКХ от коррупции",
            "date": "21 февраля 2022",
            "topic": "Почему российские управляющие компании не готовы к внедрению инноваций и почему перемены всё равно неизбежны.",
            "category": "",
            "img": "https://248006.selcdn.ru/main/iblock/d9f/d9fc76e2d7d1af240abb1b77ee4645ed/4582f91a3fdbf37a79fe5e63e4d40b29.jpg"
        },
        {
            "name": "Мочалки Мэрилин Монро, мячи‑хлебцы и мармеладный квест: 5 красивых упаковок",
            "date": "21 февраля 2022",
            "topic": "Яркое оформление обычных вещей: от стильных латексных перчаток до поп‑арта на бытовых аксессуарах.",
            "category": "Геймдев",
            "img": "https://248006.selcdn.ru/main/iblock/1d5/1d5d90cebaf212c5b6cbf266e96f4165/e681388eafa5412fb2dd8b4529f95398.png"
        },
        {
            "name": "Аренда курсов для корпоративного обучения: стоит ли связываться?",
            "date": "21 февраля 2022",
            "topic": "ем отличается аренда контента от обычной покупки, в каких случаях это выгодно и при каких условиях подойдёт.",
            "category": "Геймдев",
            "img": "https://248006.selcdn.ru/main/iblock/ea9/ea95ff69d62eda0bc7a06d960b372899/768953fb028ab63363a2e06ddebb020f.png"
        },
        {
            "name": "Может ли компания претендовать на весь написанный разработчиком код",
            "date": "21 февраля 2022",
            "topic": "Ха! Программисты — не просто гребцы на галерах, а полноправные владельцы кода, который они пишут. Разбираемся вместе с юристом.",
            "category": "Геймдев",
            "img": "https://248006.selcdn.ru/main/iblock/c30/c308c8611bbea0ddcf727a349b7a38bc/8f8a66e8ccccc902386f71df5c6142f3.png"
        },
        {
            "name": "Вакансии для дизайнеров. Четвёртая неделя февраля",
            "date": "21 февраля 2022",
            "topic": "Каждую неделю мы публикуем самые интересные вакансии и стажировки для дизайнеров. Встречайте свежую подборку!",
            "category": "Геймдев",
            "img": "https://248006.selcdn.ru/main/iblock/e4f/e4f98fbc754e4383ebec1f89cbe73ac0/9ea59fc27dcc2d257b1f3834d7f348f7.png"
        },
       
    ]
var changeIndex = 6;
var status = 0;
var status2 = 0;

    $('.showMore').on('click', function(){
        status = status + 1;
 $.each(gen, function(index, value){
     status2 = status + 1
    if(index >= 6 * status && index < 5 * status2) {
        $('.addBlock').append("<div class='single singleBlock-" + index + "'>" + "<img/>" + "<div class='date'><p></p><small></small></div>" + "<h1></h1>" + "</div>");
        $('.addBlock .singleBlock-' + index + ' h1' ).append(value.name);
        $('.addBlock .singleBlock-' + index + '.date p' ).append(value.date);
        $('.addBlock .singleBlock-' + index + ' .date small' ).append("#" +value.topic);
        $('.addBlock .singleBlock-' + index + ' img').attr('src', value.img);
        return
    }else{
        console.log('не вывел индекс' + index);
    }
 });
    });

    $.each(gen, function(index, value) {
        if(index >= changeIndex){
            return false
        } else{
            $('.addBlock').append("<div class='single singleBlock-" + index + "'>" + "<img/>" + "<div class='date'><p></p><small></small></div>" + "<b></b>" + "<h1></h1>" + "</div>");
            $('.addBlock .singleBlock-' + index + ' h1' ).append(value.name);
            $('.addBlock .singleBlock-' + index + '.date p' ).append(value.date);
            $('.addBlock .singleBlock-' + index + ' .date small' ).append("#" + value.topic);
            $('.addBlock .singleBlock-' + index + ' img').attr('src', value.img);
            return
        }
    });

    var ftext = [];
    // var filteredText =[];
    var inpText = '';
    var eachText = '';
    

    $.each(gen, function (index, value) {
        eachText = value.name;
        ftext.push(eachText);
    });

    $('.inp-filter').on('keyup', function () {
        inpText = $(this).val().toLowerCase();
        console.log(inpText);
        // $('.result p').hide()
        // $('.result p:contains(' + inpText +')').show();
        $.each(ftext, function(index, value){
            let b = value.toLowerCase();
            console.log(index + " " + b)
            // if ($(value + ":contains(" + inpText + ")")){
            //     filteredText.push(b)
            //     // $('.result p').hide()
            //     // $('.result p:contains(' + filteredText +')').show();
            //      $('.result p').append(filteredText[0]);
                // console.log(filteredText);
            // }
        })
    });
    // var a = null;
    // var b = null;
    // var c = null;
    // var obj = {};
    // // var res = [];
    
    // var arr = [
    //     {
    //         "id": 1,
    //         "title": 'Название события',
    //         "desc": 'Описание',
    //         "status": true,
    //     },
    //     {
    //         "id": 2,
    //         "title": 'Название события',
    //         "desc": 'Описание',
    //         "status": true,
    //     },
    //     {
    //         "id": 3,
    //         "title": 'Название события',
    //         "desc": 'Описание',
    //         "status": true,
    //     },
    //     {
    //         "id": 4,
    //         "title": 'Название события',
    //         "desc": 'Описание',
    //         "status": true,
    //     }
    // ]

   
    //      $('select').on('click',function(){
    //          a =parseInt($(this).val());
    //          console.log(a);
    //      });
        
    //      $('.titleSet').on('keyup', function(){
    //         b = $(this).val();
    //         console.log(b);
    //      });
    //      $('.descSet').on('keyup', function(){
    //         c = $(this).val();
    //         console.log(c);
    //      });
    //      $('.subSet').on('click',function(){
    //         obj.id = a;
    //         obj.title = b;
    //         obj.desc = c;
    //         obj.status = true;
    //         if (obj.id != null && obj.title != null && obj.desc != null) {
    //             arr.push(obj);
    //             console.log(arr);
    //             $('.addBlock').remove();
    //             $('.calendar').append('<div class="addBlock"></div>');
    //             $.each(arr, function (index, value) {
    //                 $('.addBlock').append("<div class='single singleBlock-" + index + "'>" + "<img />" + "<div class='date'><p></p><small></small></div>" + "<h1></h1>" + "</div>");
    //                 $('.addBlock .singleBlock-' + index + ' .date p').append("#" + value.id);
    //                 $('.addBlock .singleBlock-' + index + ' .date small').append(value.desc);
    //                 $('.addBlock .singleBlock-' + index + ' h1').append(value.title);
    //             });
    //         } else {
    //             console.log("у вас есть ошибка")
    //         }
    //     });

    });