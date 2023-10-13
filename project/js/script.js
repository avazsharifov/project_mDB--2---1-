/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};




let reklama  = document.querySelector(".promo__adv")

reklama.firstElementChild.remove()

reklama.lastElementChild.remove()
reklama.lastElementChild.remove()
reklama.lastElementChild.remove()



let janr = document.querySelector(".promo__genre")
let header = document.querySelector(".promo__bg")
let title = document.querySelector(".promo__title")
let pilot = document.querySelector(".promo__descr")
let imdbRating = document.querySelector(".promo__ratings span")





janr.innerHTML = "драма"


        





        header.style.backgroundImage = "url(./img/bg.jpg)" 


let filmi = document.querySelector(".promo__interactive-item")



let doc = document.querySelector(".promo__interactive-list")








function  reload(arr) {



    doc.innerHTML = ""

    for(let item of arr) {
        let fiil = document.createElement("li")
        let del = document.createElement("div")
        del.classList.add("delete")
        fiil.classList.add('promo__interactive-item')
        fiil.innerHTML = item.Title
        fiil.append(del)
        
         doc.append(fiil)
          

         fiil.onclick = () => {
              header.style.backgroundImage = "url(" + item.Poster + ")"
              janr.innerHTML = item.Genre
              title.innerHTML = item.Title
              pilot.innerHTML  = item.Plot
              imdbRating.innerHTML =  `IMDb:  ${item.imdbRating}`

         }
        del.onclick= () => {
            let inndex = arr.indexOf(item)

            arr.splice(inndex,1)
            reload(movies)
            

        }


    }


    
}

reload(movies)





        
