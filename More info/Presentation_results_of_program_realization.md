# ПРЕДСТАВЛЕННЯ РЕЗУЛЬТАТІВ ПРОГРАМНОЇ РЕАЛІЗАЦІЇ

## 4.1. Загальний огляд веб-сайту

> *Загальний огляд веб-сайту включає детальний аналіз основних аспектів веб-ресурсу. Зокрема, розділ описує зовнішній вигляд головної сторінки, навігацію по сайту та загальні стилі та дизайн, надаючи читачеві повний огляд веб-сайту.*

### 4.1.1. Зовнішній вигляд головної сторінки

На головній сторінці сайту виразно представлено логотип організації, що сприяє візуальній ідентифікації. Навігаційний бар знаходиться у верхній частині, в якому кожен пункт призначений для переходу до різних секцій сайту. Заголовок "Разом ми можемо врятувати життя" надає чітку інформацію про мету та завдання організації. Кнопка "Почніть з малого" із посиланням на події дозволяє відвідувачам швидко долучитися до допомоги.

![Головна сторінка](/images/demonstration/preview.png)

*Код головної сторінки:*

```html
<div class="fullContainer banner" id="homeSection">
    <header>
        <!-- Header section -->
    </header>
    <div class="container">
        <h1>Разом ми можемо <span>врятувати життя</span></h1>
        <p>
            Багато дітей стали жертвами воєнного конфлікту, та їхнє майбутнє потребує нашої турботи та допомоги.
            Ми працюємо над тим, щоб забезпечити їм безпеку, освіту та можливість налагодити своє життя.
            Долучайтеся до нас у цьому важливому завданні!
        </p>
        <a href="https://platforma.volunteer.country/events"><button>Почніть з малого</button></a>
    </div>
</div>
```

### 4.1.2. Навігація по сайту

Навігаційний бар містить пункти, які логічно розділені та ведуть до відповідних розділів сайту. Плавна анімація підкреслює важливість кожного розділу. Кожна секція має свій унікальний ідентифікатор, що дозволяє користувачам легко переходити до конкретної інформації.

![Навігація](/images/demonstration/navigation.png)

*Код навігаційного бару:*

```html
<header>
    <div class="container">
        <div class="logo">
            <img src="images/logo.png" alt="NGO logo" />
        </div>
        <nav>
            <ul>
                <li><a href="#homeSection">Головна</a></li>
                <li><a href="#aboutSection">Про нас</a></li>
                <li><a href="#programsSection">Програми</a></li>
                <li><a href="#educationSection">Освіта</a></li>
                <li><a href="#statisticSection">Статистика</a></li>
                <li><a href="#joinSection">Приєднуйтесь до нас</a></li>
            </ul>
        </nav>
    </div>
</header>
```

*CSS стилі для навігаційного бару:*

```css
header {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    position: fixed;
    z-index: 2;
}

header .container {
    display: flex;
    justify-content: space-between;
}

header .container .logo {
    padding: 15px 0;
    height: 75px;
}

header .container .logo img {
    height: 100%;
}

header nav {
    display: flex;
}

header nav ul {
    list-style-type: none;
    display: flex;
}

header nav ul li {
    display: inline-block;
}

header nav ul li a {
    display: inline-block;
    height: 75px;
    line-height: 75px;
    text-decoration: none;
    text-transform: capitalize;
    font-size: 16px;
    color: white;
    padding: 0 15px;
    transition: 0.3s;
}

header nav ul li a:hover {
    background-color: var(--themeRed);
}
```

### 4.1.3. Загальні стилі та дизайн

Стилі та дизайн сайту відзначаються м'якістю кольорів, зручним шрифтом та чіткою композицією. Використання зображень та відео допомагає візуалізувати інформацію та робить сайт привабливим для відвідувачів. Чітке розташування елементів полегшує взаємодію та навігацію користувачів.

*CSS стилі загального дизайну:*

```css
:root {
    --themeRed: #e43a47;
    --gray: #efefef;
}

html {
    scroll-behavior: smooth;
}

button, body {
    font-family: 'Poppins', sans-serif;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

p {
    font-size: 14px;
    line-height: 26px;
}

.fullContainer {
    width: 100%;
}

.container {
    width: 1140px;
    margin: auto;
}

.sectionTitle {
    width: 300px;
    border-bottom: 3px solid var(--themeRed);
    text-align: center;
    font-size: 2rem;
    font-weight: 200;
    margin: 0 auto 50px;
    position: relative;
    padding: 10px 0;
    text-transform: uppercase;
}

.sectionTitle::after {
    display: inline-block;
    content: "";
    height: 15px;
    width: 15px;
    background-color: var(--themeRed);
    position: absolute;
    left: calc(50% - 10px);
    top: calc(75% - 7px);
    transform: rotate(45deg) translate(50%, 50%);
    border: 3px solid white;
}

section {
    padding: 100px 0;
    position: relative;
}
```

## 4.2. Розділи сайту

> *В цьому розділі детально розглянуті різні розділи веб-сайту, включаючи "Головну", "Про нас", "Програми", "Освіту", "Статистику", "Приєднуйтесь" та "Підписку".*

### 4.2.1. "Головна" (homeSection)

На головній сторінці зосереджено основне вітальне повідомлення та запрошення взяти участь у діяльності організації. Знизу наведена загальна структура головної сторінки та код реалізації з поясненням.

Загальна структура головної сторінки:

- Заголовок із основним повідомленням;
- Підзаголовок із закликом до дії;
- Кнопка для переходу на іншу сторінку або виконання конкретної дії.

*Код реалізації homeSection:*

```html
<div class="container">
    <h1>Разом ми можемо <span>врятувати життя</span></h1>
    <p>
        Багато дітей стали жертвами воєнного конфлікту, та їхнє майбутнє потребує нашої турботи та допомоги.
        Ми працюємо над тим, щоб забезпечити їм безпеку, освіту та можливість налагодити своє життя.
        Долучайтеся до нас у цьому важливому завданні!
    </p>
    <a href="https://platforma.volunteer.country/events"><button>Почніть з малого</button></a>
</div>
```

*Пояснення:*

1. `<div class="container">`: це контейнер, який обгортає всі елементи головної сторінки. Має клас "container", що вказує на використання спеціального стилю для цього блоку.
2. `<h1>`: заголовок першого рівня, який містить текст "Разом ми можемо врятувати життя". Для виділення слова "життя" використовується тег `<span>` для подальшого стилізування.
3. `<p>`: абзац, що містить короткий опис та заклик до дії. В даному випадку, описується проблема та визначається мета організації.
4. `<a href="https://platforma.volunteer.country/events">`: посилання, яке перенаправляє користувача на сторінку подій організації. Використовується кнопка як візуальний елемент для залучення уваги та зручності навігації.
5. `<button>`: кнопка, яка містить текст "Почніть з малого". Користувачі можуть клікнути на цю кнопку, щоб долучитися до подій та допомогти вирішити проблему.

Цей код створює ефективний та привабливий блок на головній сторінці, спонукаючи користувачів долучитися до організації та внести свій внесок у врятовання життів дітей.

### 4.2.2. "Про нас" (aboutSection)

Розділ "Про нас" призначений для відображення важливої інформації про організацію. Тут користувач може дізнатися більше про мету, цілі та діяльність організації. Розділ має структуровану інформацію, а також надає можливість здійснити пожертвування, стати волонтером або надати стипендію.

![Про нас](/images/demonstration/aboutSection.png)

*Код реалізації aboutSection:*

```html
<section class="fullContainer" id="aboutSection">
    <div class="container">
        <h2 class="sectionTitle">Про нас</h2>
        <p>
            Ми - команда відданих та сердечних людей, об'єднаних бажанням допомагати дітям, що постраждали від воєнного конфлікту.
            Наша мета - забезпечити їм тепле майбутнє та можливість отримати всебічну підтримку.
            Ми віримо у потужність спільноти та готові робити все можливе для створення кращого світу для цих дітей.
        </p>
        <div class="cards">
            <div class="donationBox">
                <div class="title">Зробити пожертвування</div>
                <p>
                    Допоможіть нам забезпечити дітей необхідними ресурсами.
                </p>
                <a href="https://www.cdt.org.ua/profile/charitable-assistance-to-children-affected-by-the-war-uk/"><button>Пожертвувати</button></a>
            </div>

            <div class="volunteerBox">
                <div class="title">Стати волонтером</div>
                <p>
                    Приєднуйтеся до нашої команди та допомагайте нам в організації заходів та програм для дітей.
                </p>
                <a href="https://platforma.volunteer.country/events"><button>Станьте зараз</button></a>
            </div>

            <div class="scholarshipBox">
                <div class="title">Надавати стипендію</div>
                <p>
                    Підтримайте дітей в їхньому навчанні та розвитку, даруючи можливість отримати стипендію.
                </p>
                <a href="https://dobro.ua/project/dobro/payment/"><button>Надати зараз</button></a>
            </div>
        </div>
    </div>
</section>
```

*Пояснення:*

1. `<section class="fullContainer" id="aboutSection">`: визначає секцію "Про нас". Має клас "fullContainer" для відповідного стилізування та ідентифікатор "aboutSection" для навігації.
2. `<div class="container">`: контейнер, що обгортає вміст розділу "Про нас". Використовується для відцентровування та відступів.
3. `<h2 class="sectionTitle">`: заголовок розділу "Про нас". Візуально виділяє назву секції.
4. `<p>`: абзац, що містить опис організації та її мету.
5. `<div class="cards">`: контейнер для карток, які представляють можливості: зробити пожертвування, стати волонтером, надати стипендію.

*Код реалізації css стилів aboutSection:*

```css
#aboutSection .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 50px;
    position: relative;
    height: 245px;
}

#aboutSection .cards > div {
    width: 350px;
    background-color: var(--gray);
    padding: 35px;
    color: #444;
    text-align: center;
    border-radius: 5px;
    height: 215px;
    border: 1px solid #ccc;
    transition: 0.4s;
}

#aboutSection .cards > div:hover {
    width: 400px;
    margin-top: -20px;
    border-color: var(--themeRed);
    padding: 55px;
    height: auto;
}

#aboutSection .cards > div .title {
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
}

#aboutSection .cards > div p {
    font-size: 14px;
    margin-top: 15px;
}

#aboutSection .cards > div button {
    border: 1px solid var(--themeRed);
    outline: none;
    padding: 7px 15px;
    margin-top: 15px;
    font-size: 12px;
    border-radius: 3px;
    cursor: pointer;
    transition: 0.3s;
}

#aboutSection .cards > div:hover button {
    background-color: var(--themeRed);
    color: white;
}
```

*Пояснення:*

1. `#aboutSection .cards`: стилі для контейнера, що містить картки.
2. `#aboutSection .cards > div`: стилі для кожної картки перед наведенням.
3. `#aboutSection .cards > div:hover`: стилі для кожної картки під час наведення.
4. `#aboutSection .cards > div .title`: стилі для заголовка в межах кожної картки.
5. `#aboutSection .cards > div p`: стилі для тексту в межах кожної картки.
6. `#aboutSection .cards > div button`: стилі для кнопок в межах кожної картки.
7. `#aboutSection .cards > div:hover button`: стилі для кнопок під час наведення курсора.

### 4.2.3. "Програми" (programsSection)

Розділ "Програми" (programsSection) призначений для відображення переліку та опису різних програм для дітей, які організація реалізує. Кожна програма має свою картку з інформацією та можливістю зробити пожертвування для підтримки цієї програми.

![Програми](/images/demonstration/programsSection.png)

*Код реалізації programsSection:*

```html
<section class="programs" id="programsSection">
    <div class="container">
        <h2 class="sectionTitle">Програми</h2>
        <div class="boxContainer">
            <div class="box">
                <div class="cardImage"></div>
                <div class="programTitle">Освіту - кожній дитині</div>
                <div class="donationCount">
                    Мета пожертви: <span>152.000.000₴</span>
                </div>
                <a href="https://foundation.kse.ua/safe-education/?form=FUNDALUZUGZ"><button>Пожертвувати</button></a>
            </div>
            <div class="box">
                <div class="cardImage"></div>
                <div class="programTitle">Медицина для кожної дитини</div>
                <div class="donationCount">
                    Мета пожертви: <span>200.000.000₴</span>
                </div>
                <a href="https://kiddo.ua/ua/nadannya-dopomogi/"><button>Пожертвувати</button></a>
            </div>
            <div class="box">
                <div class="cardImage"></div>
                <div class="programTitle">Психологічна підтримка</div>
                <div class="donationCount">
                    Мета пожертви: <span>170.000.000₴</span>
                </div>
                <a href="https://voices.org.ua/donat/"><button>Пожертвувати</button></a>
            </div>
            <div class="box">
                <div class="cardImage"></div>
                <div class="programTitle">Постачання товарів першої необхідності</div>
                <div class="donationCount">
                    Мета пожертви: <span>100.000.000₴</span>
                </div>
                <a href="https://spivdiia.org.ua/become-a-ambassador"><button>Пожертвувати</button></a>
            </div>
        </div>
    </div>
</section>
```

*Пояснення:*

1. `<section class="programs" id="programsSection">`: визначає секцію "Програми". Має клас "programs" для відповідного стилізування та ідентифікатор "programsSection" для навігації.
2. `<div class="container">`: контейнер, що обгортає вміст розділу "Програми".
3. `<h2 class="sectionTitle">`: заголовок розділу "Програми". Візуально виділяє назву секції.
4. `<div class="boxContainer">`: контейнер для карток програм.

*Код реалізації css стилів programsSection:*

```css
.programs {
    background-color: #e2e2e2;
}

.programs .boxContainer {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 50px;
}

.programs .boxContainer .box {
    background-color: white;
    text-align: center;
    padding-bottom: 25px;
    border-radius: 5px;
    box-shadow: 0 0 3px 0 #c5c5c5;
    position: relative;
    margin-top: 15px;
}

.programs .boxContainer .box .cardImage {
    width: 100%;
    height: 300px;
    background-position: center;
    background-size: cover;
    position: relative;
    overflow: hidden;
    border-radius: 5px 5px 0 0;
}

.programs .boxContainer .box .cardImage::after {
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    filter: grayscale(100%);
    transition: 0.4s;
}

.programs .boxContainer .box:nth-child(1) .cardImage,
.programs .boxContainer .box:nth-child(1) .cardImage::after {
    background-image: url(/images/programs/1.png);
}

.programs .boxContainer .box:hover .cardImage::after {
    top: 100%;
}

.programs .boxContainer .box .programTitle {
    font-size: 16px;
    margin-top: 15px;
    font-weight: 600;
    color: #444;
}

.programs .boxContainer .box .donationCount {
    font-size: 13px;
    font-weight: 600;
    color: #444;
    margin-top: 10px;
}

.programs .boxContainer .box .donationCount span {
    color: var(--themeRed);
}

.programs .boxContainer .box button {
    position: absolute;
    left: 50%;
    background-color: var(--themeRed);
    color: white;
    transform: translate(-50%);
    bottom: -15px;
    border-radius: 60px;
    padding: 7px 15px;
    border: 0;
    outline: none;
    cursor: pointer;
}
```

*Пояснення:*

1. `.programs`: стилі для секції програм.
2. `.programs .boxContainer`: стилі для контейнера, що містить картки програм.
3. `.programs .boxContainer .box`: стилі для кожної картки програми.
4. `.programs .boxContainer .box .cardImage`: стилі для зображення на кожній картці програми.
5. `.programs .boxContainer .box .cardImage::after`: стилі для ефекту чорно-білого фільтру при наведенні на зображення.
6. `.programs .boxContainer .box:nth-child(1) .cardImage`: стилі для зображення на першій картці програми (аналогічно для інших).
7. `.programs .boxContainer .box:hover .cardImage::after`: стилі для ефекту при наведенні на картку програми.
8. `.programs .boxContainer .box .programTitle`: стилі для заголовка програми на кожній картці.
9. `.programs .boxContainer .box .donationCount`: стилі для відображення мети пожертви на кожній картці.
10. `.programs .boxContainer .box .donationCount span`: стилі для виділення суми мети пожертви.
11. `.programs .boxContainer .box button`: стилі для кнопки "Пожертвувати" на кожній картці програми.

### 4.2.4. "Освіта" (educationSection)

Розділ "Освіта" (educationSection) призначений для відображення відео та інформації, пов'язаної з освітніми програмами організації. Задача цього розділу - підкреслити важливість освіти та підтримки дітей у їхньому навчальному шляху.

![Освіта](/images/demonstration/educationSection.png)

*Код реалізації educationSection:*

```html
<section class="education" id="educationSection">
    <video id="videoPlayer" autoplay muted class="videoPlayer">
        <source src="/video/pupil.mp4" type="video/mp4" />
        Your browser doesn't support HTML5 video
    </video>
    <div class="container">
        <div class="sectionTitle">Освіта</div>
        <div class="educationContainer">
            <h3>
                Освіта – ключ до <br>
                <strong>КРАЩОГО МАЙБУТНЬОГО</strong>
            </h3>
            <p>
                Віримо, що кожна дитина має право на якісну освіту. Наша місія - забезпечити доступ дітей, що постраждали від війни, до навчання та розвитку, створюючи умови для їхнього успішного майбутнього.
            </p>
            <a href="https://childrensfuture.org.ua/uk"><button>Дослідити зараз</button></a>
        </div>
    </div>
</section>
```

*Пояснення:*

1. `<section class="education" id="educationSection">`: визначає секцію "Освіта". Має клас "education" для стилізації та ідентифікатор "educationSection" для навігації.
2. `<video id="videoPlayer" autoplay muted class="videoPlayer">`: тег для відтворення відео. Використовується відео з файлу "pupil.mp4".
3. `<div class="container">`: контейнер, що обгортає вміст розділу "Освіта".
4. `<div class="sectionTitle">`: заголовок розділу "Освіта".
5. `<div class="educationContainer">`: контейнер для інформації про освітні програми.
6. `<h3>`: підзаголовок, що підкреслює ключовий аспект - освіта як ключ до кращого майбутнього.
7. `<p>`: текстовий блок із коротким описом місії та цілей освітніх програм.
8. `<a href="https://childrensfuture.org.ua/uk"><button>Дослідити зараз</button></a>`: кнопка, яка перенаправляє користувача на сторінку освітніх програм.

*Код реалізації css стилів educationSection:*

```css
.education {
    height: 100vh;
    overflow: hidden;
    position: relative;
}

.education .videoPlayer {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
}

.education .sectionTitle {
    color: white;
    text-shadow: 0 0 4px black;
}

.education .educationContainer {
    position: absolute;
    background-color: #00000096;
    width: 600px;
    top: 35vh;
    color: white;
    text-shadow: 0 0 3px black;
    padding: 30px;
}



.education .educationContainer h3 {
    font-size: 35px;
    font-weight: 300;
}

.education .educationContainer p {
    font-size: 15px;
    line-height: 20px;
    margin: 10px 0 30px;
}

.education .educationContainer button {
    background-color: var(--themeRed);
    border: 0;
    color: white;
    padding: 10px 25px;
    font-weight: bold;
    font-size: 14px;
    outline: none;
}
```

*Пояснення:*

1. `.education`: загальні стилі для розділу "Освіта". Висота встановлена в 100% видимого вікна.
2. `.education .videoPlayer`: стилі для позиціонування та розміру відео на фоні.
3. `.education .sectionTitle`: стилі для заголовку розділу. Тінь для кращого контрасту.
4. `.education .educationContainer`: стилі для контейнера інформації про освітні програми.
5. `.education .educationContainer h3`: стилі для підзаголовка.
6. `.education .educationContainer p`: стилі для текстового блоку з описом.
7. `.education .educationContainer button`: стилі для кнопки, яка має вигляд посилання на освітні програми.

*JavaScript код реалізації зациклення відео на фоні розділу:*

```js
document.addEventListener("DOMContentLoaded", function () {
    var videoPlayer = document.getElementById("videoPlayer");

    // Video loops after playback ends
    videoPlayer.addEventListener("ended", function () {
        videoPlayer.currentTime = 0; // Set the time to the beginning
        videoPlayer.play(); // Start playback
    });
});
```

*Пояснення:*

1. `document.addEventListener("DOMContentLoaded", function () { ... }`: очікує на повне завантаження DOM перед виконанням функції.
2. `var videoPlayer = document.getElementById("videoPlayer");`: отримує посилання на відеоелемент за його ідентифікатором.
3. `videoPlayer.addEventListener("ended", function () { ... });`: додає обробник подій, який викликається, коли відео закінчується.
4. `videoPlayer.currentTime = 0;`: встановлює час відтворення відео на початок.
5. `videoPlayer.play();`: запускає відтворення відео.

### 4.2.5. "Статистика" (statisticSection)

Розділ "Статистика" призначений для відображення статистичних даних та графіків, які ілюструють проблеми, з якими стикаються українські діти у зв'язку з війною. Кожен графік детально аналізує певний аспект ситуації.

Графіки реалізовані за допомогою бібліотеки Chart.js, яка надає потужні інструменти для створення і відображення динамічних та інформативних графіків на веб-сайті. Використовуючи цю бібліотеку, розділ "Статистика" створює вражаючі та легко зрозумілі візуальні елементи для кращого розуміння проблем, пов'язаних із ситуацією українських дітей.

Кожен графік, представлений у цьому розділі, використовує `<canvas>` для відображення. Ідентифікатори кожного `<canvas>` елементу (наприклад, `id="deportation"`, `id="psychological"`, тощо) використовуються для підключення JavaScript і визначення конкретного графіку для відображення.

![Статистика](/images/demonstration/statisticSection.png)

*Код реалізації statisticSection:*

```html
<section class="statistic" id="statisticSection">
    <div class="container">
        <div class="sectionTitle">Статистика</div>
        <div class="statisticContainer">

            <div class="graphContainer">
                <canvas id="deportation"></canvas>
                <div class="statisticText">
                    <h2>Графік депортації українських дітей до Росії</h2>
                    <p>
                        Світ стикається з безжальною статистикою депортації українських дітей до Росії, де кожна цифра - це трагічна історія.
                        Ця статистика свідчить не лише про числові дані, але і про руйнацію життів, безжальне порушення прав дітей та глибокий гуманітарний кризис.
                        Ми виражаємо глибоке занепокоєння та відзиваємося до цієї невимовної трагедії, закликаючи до негайних заходів для захисту прав дітей та припинення цього жахливого порушення.
                    </p>
                </div>
            </div>

            <div class="graphContainer">
                <canvas id="psychological"></canvas>
                <div class="statisticText">
                    <h2>Графік Потреби Українських Дітей у Психологічній Допомозі</h2>
                    <p>
                        Результати опитування свідчать, що більшість українських дітей постраждали від психотравматизації внаслідок війни.
                        Ознаки емоційної нестабільності та тривоги присутні у значної кількості дітей, вимагаючи серйозної психологічної підтримки.
                        Крім психічних труднощів, вплив війни виявляється на фізіологічному рівні та у способах сприйняття світу та взаємодії.
                        Засвідчуються проблеми зі сном, апетитом та інші відхилення, що ставлять перед суспільством виклик ретельної уваги до потреб цих дітей та невідкладної психологічної допомоги.
                    </p>
                </div>
            </div>

            <div class="graphContainer">
                <canvas id="surgical"></canvas>
                <div class="statisticText">
                    <h2>Графік Збільшення Кількості Дітей, Постраждалих від Агресії РФ</h2>
                    <p>
                        За останні роки ситуація з кількістю дітей, що стали жертвами агресії Російської Федерації, погіршилася на шокуючому рівні, вимагаючи негайних заходів та уваги. Це трагічне зростання стало справжньою кризою, де багато дітей опинились в обручі страждань та болю.
                        Ця ситуація стає ще більш невиправданою, оскільки не лише кількість загиблих збільшилася, але і велика кількість дітей отримали поранення, стаючи подвійною жертвою.
                        Ці страшні події створюють нагальну потребу в захисті та наданні допомоги цим маленьким беззахисним істотам.
                    </p>
                </div>
            </div>

            <div class="graphContainer">
                <canvas id="conditions"></canvas>
                <div class="statisticText">
                    <h2>Графік Умов та Ситуації Дітей у Військових Конфліктах</h2>
                    <p>
                        Військові конфлікти залишають за собою велику кількість дітей, які опинилися у надзвичайно важких умовах. 
                        Деякі з них переселилися в межах країни або за її межі, втративши свої домівки та стикнувшись з нестабільною ситуацією.
                        Діти без батьківського піклування стають особливо вразливими, а інші втрачають доступ до освіти, що загострює їхню майбутню перспективу.
                        У цьому контексті важливо взяти до уваги загальний вплив військових конфліктів на самопочуття та долю дітей, які змушені переживати ці тяжкі обставини.
                    </p>
                </div>
            </div>

        </div>
    </div>
</section>
```

*Пояснення:*

1. `<section class="statistic" id="statisticSection">`: це секція статистики, яка містить графіки та текстові описи.
2. `<div class="container">`: контейнер для вирівнювання та обмеження ширини вмісту.
3. `<div class="sectionTitle">Статистика</div>`: заголовок розділу "Статистика".
4. `<div class="statisticContainer">`: контейнер, що містить графіки та текстові описи.
5. `.graphContainer`: контейнер для кожного графіку та його текстового опису.
6. `<canvas id="deportation"></canvas>`: HTML-тег `<canvas>`, який служить контейнером для відображення графіку "Депортація українських дітей до Росії". Унікальний ідентифікатор `id="deportation"` буде використаний для підключення JavaScript та відображення графіку.
7. `.statisticText`: контейнер для текстового опису графіку.
8. `.statisticText h2`: заголовок текстового опису графіку, який містить назву графіку.
9. `.statisticText p`: параграф текстового опису графіку, який містить докладний опис та аналіз статистики.

Цей код організований так, щоб створити розділ "Статистика" з декількома графіками та відповідними текстовими описами для кожного графіку. Кожен графік має свій власний JavaScript-файл, розміщений у директорії `.\js\graphs\`.

*Код реалізації css стилів statisticSection:*

```css
.statisticContainer {
    display: flex;
    flex-wrap: wrap;
}

.graphContainer {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

canvas {
    width: 60%;
    max-width: 600px;
    height: auto;
}

.statisticText {
    width: 35%;
}

.statisticText h2 {
    font-size: 2rem;
    margin-bottom: 10px;
    text-transform: uppercase;
    color: var(--themeRed);
}

.statisticText p {
    font-size: 18px;
    line-height: 30px;
    color: #444;
}
```

*Пояснення:*

1. `.statisticContainer`: контейнер для графіків, встановлює flex-розташування та обгортання.
2. `.graphContainer`: контейнер для кожного графіку, встановлює відстань між графіками та розміщення елементів в ряд.
3. `canvas`: стилі для графіку (Canvas), робить його адаптивним та обмежує максимальну ширину.
4. `.statisticText`: контейнер для текстового опису графіку.
5. `.statisticText h2`: стилі для заголовку текстового опису, встановлює розмір шрифту, колір і верхній регістр.
6. `.statisticText p`: стилі для абзацу текстового опису, встановлює розмір шрифту, міжрядковий і колір.

### 4.2.6. "Приєднуйтесь" (joinSection)

Розділ "Приєднуйтесь" створений для розміщення інформації щодо можливості приєднання до організації та підтримки дітей, які потребують допомоги.

![Приєднуйтесь](/images/demonstration/joinSection.png)

*Код реалізації joinSection:*

```html
<section class="join" id="joinSection">
    <div class="container">
        <div class="joinTitle">Кожна дитина заслуговує <span>безпечного та стабільного</span> дитинства</div>
        <p>
            Кожна дитина заслуговує на тепле та заботливе середовище, де вона може виростати в безпеці та стабільності.
            Забезпечення любові, уваги та можливостей для розвитку - це основні аспекти, які формують щасливе та здорове дитинство.
            Ми віримо, що створення такого середовища є важливою метою для кожного суспільства, і прагнемо до цього усією своєю діяльністю.
        </p>
        <a href="https://platforma.volunteer.country/events"><button class="joinNow">Приєднуйтесь до нас</button></a>
        <a href="#programsSection"><button class="joindonate ">Зробити пожертвування</button></a>
    </div>
</section>
```

*Пояснення:*

1. `<section class="join" id="joinSection">`: HTML-код розділу, де `class="join"` визначає стилі для розділу, а `id="joinSection"` ідентифікує його унікально.
2. `.join`: CSS-стилі для розділу "Приєднуйтесь", включаючи фонове зображення та кольорову схему.
3. `.join .joinTitle`: стилі для заголовку розділу, встановлення розміру шрифту та текстових властивостей.
4. `.join button`: загальні стилі для кнопок розділу, включаючи внутрішні відступи та розміри шрифту.
5. `.join button.joinNow` та `.join button.joindonate`: спеціальні стилі для двох різних кнопок з різними кольорами та текстом.

*Код реалізації css стилів joinSection:*

```css
.join {
    background-image: url(/images/pattern.jpg);
    color: white;
}

.join .joinTitle {
    font-size: 40px;
    font-weight: 100;
    text-transform: uppercase;
}

.join .joinTitle span {
    font-weight: 800;
}

.join button {
    padding: 7px 15px;
    margin-top: 20px;
    border: 0;
    outline: none;
    font-weight: 600;
    font-size: 16px;
}

.join button.joinNow {
    margin-right: 10px;
    background-color: #424242;
    color: white;
}

.join button.joindonate {
    background-color: var(--gray);
}
```

*Пояснення:*

1. `.join`: визначення стилів для розділу "Приєднуйтесь", включаючи фонове зображення та білий текст.
2. `.join .joinTitle`: задання стилів для заголовку розділу, встановлення розміру шрифту, ваги та інших текстових властивостей.
3. `.join .joinTitle span`: стилі для частини заголовку, виділеної вагою шрифту.
4. `.join button`: спільні стилі для всіх кнопок у розділі, включаючи внутрішні відступи, обрамлення, вагу шрифту та розмір шрифту.
5. `.join button.joinNow` та `.join button.joindonate`: спеціальні стилі для двох різних кнопок з різними кольорами та текстом.

### 4.2.7. "Підписка" (footer)

Розділ "Підписка" відображає футер сайту, який містить інформацію про можливість підписки та навігаційні посилання.

![Підписка](/images/demonstration/footer.png)

*Код реалізації footer:*

```html
<footer>
    <div class="container">
        <div class="newsLetterContainer">
            <img src="/images/logo.png" alt="logo">
            <p>
                Воєнні конфлікти стають випробуванням для беззахисних дітей, які потребують нашої турботи та підтримки. Наша місія - забезпечити їм безпеку, забезпечити доступ до якісної освіти та дати можливість налагодити своє життя після трагедії. Ми запрошуємо вас приєднатися до нас у цьому важливому завданні, бо разом ми можемо зробити більше для майбутнього цих дітей.
            </p>
            <input type="text" placeholder="Введіть свою електронну адресу">
        </div>
        <div class="linksContainer">
            <div class="title">Навігація</div>
            <ul>
                <li><a href="#homeSection">Головна</a></li>
                <li><a href="#aboutSection">Про нас</a></li>
                <li><a href="#programsSection">Програми</a></li>
                <li><a href="#educationSection">Освіта</a></li>
                <li><a href="#statisticSection">Статистика</a></li>
                <li><a href="#joinSection">Приєднуйтесь до нас</a></li>
            </ul>
        </div>
        <div class="connectContainer">
            <ul>
                <div class="title">Зв'яжіться з нами</div>
                <li><a href="mailto:change@volunteer.country">change@volunteer.country</a></li>
                <li><a href="http://facebook.com/UkrainianVolunteerService">Facebook</a></li>
                <li><a href="https://www.instagram.com/ukrainian_volunteer_service/">Instagram</a></li>
                <li><a href="https://t.me/VolunteerCountry">Telegram</a></li>
            </ul>
        </div>
    </div>
</footer>
```

*Пояснення:*

1. `<footer>`: HTML-код розділу футера.
2. `.container`: CSS-стилі для контейнера футера, використовуючи сітку для розташування вмісту в трьох колонках.
3. `.newsLetterContainer`, `.linksContainer`, `.connectContainer`: стилі для трьох блоків у футері, кожен з яких містить певну інформацію.
4. `.title`: стилі для заголовків у кожному з блоків футера.
5. `footer p`: стилі для абзацу з текстом у блоку "Підписка".
6. `footer .linksContainer ul`: стилі для навігаційних посилань у блоку "Навігація".
7. `footer .newsLetterContainer img`: стилі для логотипу у блоку "Підписка".
8. `footer .newsLetterContainer input`: стилі для введення тексту, де користувач може ввести свою електронну адресу для підписки.
9. `footer .connectContainer ul li a`: стилі для посилань у блоку "Зв'яжіться з нами".

*Код реалізації css стилів footer:*

```css
footer {
    background-color: #181818;
    color: #7f7f7f;
    padding: 50px 0;
    font-size: 14px;
}

footer .container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 50px;
}

footer .title {
    font-size: 20px;
    font-weight: 600;
    text-transform: uppercase;
    border-bottom: 2px solid;
    margin-bottom: 30px;
    padding: 0 0 5px 0;
}

footer p {
    margin-bottom: 10px;
}

footer .linksContainer ul {
    list-style-type: none;
}

footer .linksContainer ul li a{
    text-decoration: none;
    color: #7f7f7f;
    margin-bottom: 10px;
    display: inline-block;
}

footer .newsLetterContainer img {
    height: 40px;
    margin-bottom: 11px;
}

footer .newsLetterContainer input {
    background-color: transparent;
    border: 1px solid #7f7f7f;
    outline: none;
    padding: 10px 15px;
    width: 100%;
    margin-top: 10px;
    color: #ccc;
    border-radius: 30px;
}

footer .connectContainer ul li a{
    text-decoration: none;
    color: #7f7f7f;
    margin-bottom: 10px;
    display: inline-block;
}
```

*Пояснення:*

1. `footer`: визначає стилі для елемента `<footer>`, включаючи колір фону, колір тексту, відступи та розмір шрифту.
2. `footer .container`: застосовує сітку для розташування вмісту футера у трьох колонках з однаковою шириною та відстанню між ними.
3. `footer .title`: встановлює стилі для заголовків у блоках футера, включаючи розмір шрифту, жирність, та стиль тексту.
4. `footer p`: визначає стилі для абзацу з текстом у блоках футера, такі як відступи та розмір шрифту.
5. `footer .linksContainer ul`: встановлює стилі для навігаційних посилань у блоку "Навігація", зокрема забирає маркери списку та встановлює кольори та відступи.
6. `footer .linksContainer ul li a`: визначає стилі для посилань у списку навігації, такі як колір тексту, відступи та стиль тексту при наведенні.
7. `footer .newsLetterContainer img`: встановлює стилі для логотипу у блоку "Підписка", зокрема висоту та відступи.
8. `footer .newsLetterContainer input`: визначає стилі для введення тексту у блоку "Підписка", такі як колір тексту, відступи, рамку та округленість кутів.
9. `footer .connectContainer ul li a`: встановлює стилі для посилань у блоку "Зв'яжіться з нами", такі як колір тексту, відступи та стиль тексту при наведенні.

## 4.3. Використані технології та бібліотеки

> *У даному розділі описано технології та бібліотеки, які були використані у проекті для досягнення певних функціональних можливостей та досягнення певних ефектів.*

### 4.3.1 Використання CSS для стилізації

У цьому підрозділі описано використання CSS для стилізації веб-сайту. CSS-код веб-сайту організований у вигляді різних підрозділів для зручної навігації та обслуговування. Кожен розділ має відповідальність за конкретний аспект стилізації та вигляду різних частин веб-сайту.

- `Common Style`: цей розділ містить загальні стилі, такі як імпорт шрифту, основні стилі для кнопок та тіла сторінки.
- `Home Style`: включає стилі, які використовуються на головній сторінці, такі як фіксований верхній блок з логотипом та навігацією, а також стилі для банеру.
- `AboutSection Style`: містить стилі, які застосовуються до розділу "Про нас". Зокрема, це стилі для карточок з інформацією про організацію.
- `Programs Style`: відповідає за стилізацію секції "Програми". Включає вигляд блоків з програмами, зображеннями та кнопками.
- `Education Section Style`: містить стилі для секції "Освіта", зокрема для відеоплеєра та текстового блоку.
- `Statistic Section Style`: стилі для розділу "Статистика", включаючи графіки та текстовий контент.
- `Join Section Style`: секція для стилізації блоку "Приєднуйтесь", що включає заголовок, кнопки та фонове зображення.
- `Footer Style`: містить стилі для футера, який включає інформацію та посилання на навігаційні розділи.
- `Responsive Styles`: цей розділ включає стилі для адаптації веб-сайту до різних розмірів екрану.

Всі ці розділи дозволяють краще розуміти та управляти стилями для різних частин веб-сайту, полегшуючи підтримку та розширення функціоналу.

### 4.3.2 Використання JavaScript для інтерактивності

JavaScript використовується у проекті для створення інтерактивності та забезпечення додаткового функціоналу.

Для управління відтворенням відео використовується `video.js`. Програмовано додається можливість циклічного відтворення відео після завершення його відтворення.

Для створення діаграм та графіків використовується бібліотека `Chart.js`, яка дозволяє візуалізувати статистичні дані та іншу інформацію. JavaScript використовується для параметризації та керування графіками, налаштовування вигляду, кольорів, легенди та інших аспектів графічного представлення даних.

Використання JavaScript разом із бібліотеками та скриптами сприяє створенню динамічного та інтерактивного інтерфейсу веб-сайту, забезпечуючи користувачам зручний та цікавий досвід.

## Додатки

1. Код файлів:

- [style.css](/css/style.css)
- [video.js](/js/video.js)

- [conditions.js](/js/graphs/conditions.js)
- [deportation.js](/js/graphs/deportation.js)
- [psychological.js](/js/graphs/psychological.js)
- [surgical.js](/js/graphs/surgical.js)

2. Зображення та відео, розташовані у відповідних каталогах:

- [Program 1](/images/programs/1.png)
- [Program 2](/images/programs/2.png)
- [Program 3](/images/programs/3.png)
- [Program 4](/images/programs/4.png)

- [Banner](/images/banner.png)
- [Logo](/images/logo.png)
- [Pattern](/images/pattern.jpg)

- [video.mp4](/video/pupil.mp4)
