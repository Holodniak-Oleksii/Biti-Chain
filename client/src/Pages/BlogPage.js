import React from "react";
import SideBar from "../UI/emelents/extremes/SideBar";
import Header from "../UI/emelents/extremes/Header";
import Hamburger from "../UI/emelents/extremes/Hamburger";
import useMediaQuery from "@mui/material/useMediaQuery";

function BlogPage({AuthVisible}) {

    const matches768 = useMediaQuery('(min-width:768px)')
    return (
        <>
            {matches768 ? <Header position={'sticky'} backgroundColor={'#222222'} AuthVisible={AuthVisible}/>: <Hamburger AuthVisible={AuthVisible}/>}
            <div className={'main_flex'}>
                <SideBar/>
                <div className={'content'}>
                    <div className={'text_start'}  id={'fiat'}>
                        ВСТУП СRYPTOCURRENCY
                    </div>
                    <div className={'text_fiat'}>
                        <img src={'img/text/fiat.png'} className={'img_fiat'} alt={'fiat'}/>
                        <p>Фіатна валюта - це валюта, емісією та контролем якої займається держава. Фіатна валюта може існувати як у готівкою, так і в електронній формі.</p>
                    </div>
                    <p className={'pharagraph_text'} >Чому виникла потреба в альтернативі фіатної валюти?</p>
                    <ol className={'rounded-list'}>
                        <li>Централізація - проблема присутності центрального елемента (наприклад, Центральний банк чи держава), який може впливати на систему (наприклад, скасувати транзакцію або заморозити рахунок).</li>
                        <li>Необмежена емісія &ndash; проблема інфляції, яка виникає через відсутність механізму обмеження емісії.</li>
                        <li>Відсутність прозорості транзакцій &ndash; проблема довіри банківській системі особистих активів та їх безпечного зберігання</li>
                        <li id={'cur'}>Низька швидкість транзакцій &ndash; проблема із затримкою електронних перекладів, навіть всупереч інновації інтернету та прискорення транзакцій (на цей фактор може вплинути, наприклад, розклад роботи банку).</li>
                        <li>Прихована природа ціноутворення комісії &ndash; проблема відсутності прозорості в установці банками розміру комісії.</li>
                        <li>Відсутність анонімності &ndash; проблема вимоги надання банкам повної особистої інформації (KYC)</li>
                    </ol>
                    <p className={'text_center_hi'}><strong>Розглянемо, що таке криптовалюта</strong></p>
                    <div className={'text_fiat'}>
                        <img src={'img/text/bitcoin.png'} className={'img_fiat'} alt={'bitcoin'}/>
                        <p>Криптовалюта (cryptocurrency) децентралізована віртуальна валюта, заснована на математичних алгоритмах та захищена методами криптографії. Перша у світі криптовалюта &ndash; біткоїн &ndash; також є децентралізованою і створювалася насамперед як аналог сучасним грошам.</p>
                    </div>
                    <p className={'pharagraph_text'}>Основні переваги криптовалюти:</p>
                    <ol className={'rounded-list'}>
                        <li>Децентралізація &ndash; відсутність конкретного органу управління, який може одноосібно впливати на систему, а значить заморозити рахунок стає практично неможливо;</li>
                        <li>Обмежена емісія &ndash; наявність механізму (прописаного в коді) контролю емісії в багатьох видів криптовалюти знижують загрозу інфляції.</li>
                        <li>Прозорість транзакцій - транзакції ніхто не контролює і не може регулювати ззовні</li>
                        <li>&nbsp;Швидкість транзакцій &ndash; інфраструктура системи блокчейну більш сучасна і дозволяє швидше проводити транзакції;</li>
                        <li>Зрозуміла природа ціноутворення комісії. комісія за транзакції у криптовалюті стягується тільки за мережеві витрати;</li>
                        <li>&nbsp;Анонімність - використання електронного гаманця дозволяє зберегти анонімність під час проведення транзакцій, оскільки дані гаманця не прив'язані до особистих даними користувача;</li>
                    </ol>
                    <p className={'pharagraph_text'}>Основні недоліки криптовалют</p>
                    <ol className={'rounded-list'}>
                        <li>Необоротний характер транзакції - банківський платіж, ;досконалий помилково, можна скасувати, звернувшись з відповідним запитом до банку. З криптовалютою такі операції практично неможливі.</li>
                        <li>Ризик безповоротної втрати доступу - втрата seed-фрази (інструменту доступу та відновлення криптовалютного гаманця) означає і втрату доступу до криптовалютних заощаджень.</li>
                        <li>Висока мінливість курсу (волатильність) більшість криптовалют є значно більше волатильними, ніж фіатні валюти (за винятком стейблкоїнів).</li>
                    </ol>
                    <p className={'pharagraph_text'} id={'block'}>Де зберігати інформацію про транзакції криптовалюти?</p>
                    <p>Для того, щоб криптовалюта функціонувала незалежно від будь-якого централізованого посередника (наприклад, банку), усім учасникам процесу необхідно мати спосіб запису та зберігання фінансових транзакцій.&nbsp;<strong>Метод запису та зберігання фінансових транзакцій</strong>&nbsp;повинен унеможливлювати використання якогось центрального сервера та бази, як це робиться в банках. Одним з таких рішень є технологія&nbsp;<strong>Блокчейн</strong></p>
                    <p className={'text_center_hi'}><strong>Розглянемо як працює криптовалюта</strong></p>
                    <p className={'pharagraph_text'}>Що таке Blockchain?</p>
                    <div className={'text_fiat'}>
                        <img src={'img/text/blockchain.png'} className={'img_fiat'} alt={'blockchain'}/>
                        <p><strong>Блокчейн (Block &ndash; блок, chain &ndash; ланцюг)&nbsp;</strong>&ndash; це децентралізована база даних, яка призначена для зберігання послідовних блоків із набором характеристик (версія, дата створення, інформація про попередні дії в мережі). Ланцюжок блокчейну можна представити як книгу з можливістю додавати сторінки. Кожна нова сторінка пишеться в режимі &laquo;онлайн&raquo;, а решта не можна редагувати або видалити.</p>
                    </div>
                    <p className={'pharagraph_text'}>Де зберігається криптовалюта?</p>
                    <p id={'money'}>Багато хто часто каже, що криптовалюти &laquo;зберігаються&raquo; в гаманцях, проте технічно це неправильно. Кошти зберігаються в блокчейні: розподіленій, децентралізованій обліковій книзі, яка є базисом екосистеми криптовалют Гаманці ж, своєю чергою, містять важливі дані, які дозволяють користувачеві отримати доступ до цих засобів, безпосередньо всередині блокчейну.</p>
                    <p className={'text_center_hi'}><strong>Розглянемо як використовують криптовалюти</strong></p>
                    <p className={'pharagraph_text'}>Що таке криптогаманець?</p>
                    <div className={'text_fiat'}>
                        <img src={'img/text/гаманець.png'} className={'img_fiat'} alt={'гаманець'}/>
                        <p id={'data'}>Для роботи з криптовалютами зазвичай потрібно спеціальне програмне забезпечення - це програма-гаманець, вбудована або в програмну, або біржову, або апаратне середовище. Вона дозволяє користувачеві працювати з блокчейном та створювати транзакції або отримувати переклади на свою адресу. Кожен гаманець, незалежно від середовища функціонування, містить приватний та публічні ключі.</p>
                    </div>
                    <p className={'pharagraph_text'}>Які дані зберігає криптогаманець?</p>
                    <p>Відкритий ключ - це номер гаманця, який можна відправити будь-кому для переказу коштів. Закритий ключ &ndash; це особлива комбінація символів, що надає доступ до криптовалют, що зберігаються на рахунку, з допомогою неї здійснюються всі транзакції в межах особистого гаманця</p>
                    <p className={'pharagraph_text'} id={'get'}>Яким способом можна отримати криптовалюту?</p>
                    <ol className={'rounded-list'}>
                        <li>Майнінг</li>
                        <li>Покупка на криптовалютних біржах</li>
                    </ol>
                    <p className={'pharagraph_text'} id={'help'}>Як отримати криптовалюту за допомогою майнінгу? </p>
                    <p>Для того, щоб забезпечити функціонування екосистеми блокчейну, необхідно більше учасників (нодів), які зберігають копії блокчейну на своїх комп'ютерах. Щоб мотивувати користувачів створювати ноди та брати участь у формуванні та валідації нових блоків блокчейну, передбачено винагороду у вигляді криптовалюти.</p>
                    <p className={'text_center_hi'} id={'buy'}><strong>Що являє собою майнінг?</strong></p>
                    <div className={'text_fiat'}>
                        <img src={'img/text/mayning.png'} className={'img_fiat'} alt={'mayning'}/>
                        <p>Майнінг, також видобуток (від англ. mining - видобуток корисних копалин) - діяльність з створення нових структур (зазвичай йдеться про нових блоків у блокчейні) для забезпечення функціонування криптовалютних платформ. Сенс цих операцій у тому, що комп'ютер проводить валідацію блоку, а його власник отримує за цю винагороду у вигляді суми криптовалюти, яка стягується за проведення транзакцій з відправника як комісія.</p>
                    </div>
                    <p className={'pharagraph_text'}><strong>Як купити криптовалюту?</strong></p>
                    <p>Є кілька способів купівлі криптовалюти:</p>
                    <ol className={'rounded-list'}>
                        <li>купівля через фізичні АТМ (термінал призначений для обміну фіату на криптовалюти), які присутні у деяких великих містах. Вони дозволяють зберегти порівняно високий рівень анонімності, але беруть високу комісію.</li>
                        <li id={'bank'}>купівля через централізовану біржу є найпоширенішим способом придбати криптовалюту за фіатні гроші, але вимагає обов'язкового підтвердження особи (KYC)</li>
                    </ol>
                    <p className={'text_center_hi'}><strong>Що таке біржа?</strong></p>
                    <div className={'text_fiat'}>
                        <img src={'img/text/finance.png'} className={'img_fiat'} alt={'finance'}/>
                        <p>Біржа &mdash; організація, що забезпечує і що регулює торгівлю цінними паперами, валютами, іншими фінансовими інструментами та їх похідними (опціонами, ф'ючерсами та ін.). Торгівля ведеться за певними правилами, встановленим нормативними документами. Якщо говорити простими словами, то біржа займається обліком укладених угод, забезпечує взаєморозрахунки між сторонами та отримує за це свої комісійні.</p>
                    </div>
                    <p className={'pharagraph_text'}><strong>Що являють собою криптовалютні біржі?</strong></p>
                    <p>Криптовалютні біржі - це електронний майданчик, де торгують криптовалютою (електронними грошима). Біржі можуть займатися обміном між:</p>
                    <ol className={'rounded-list'}>
                        <li>різними видами криптовалют (Bitcoin, Tether, Ethereum, Ripple та іншими). Наприклад, обмін Bitcoin на Tether;</li>
                        <li>криптовалютами та фіатними валютами (долари, євро тощо далі). Наприклад, обмін євро на Bitcoin.</li>
                    </ol>
                    <p className={'text_center_hi'}><strong>Які типи криптовалютних бірж є?</strong></p>
                    <div className={'flex_text'}>
                            <div className={'text_col'}>
                                <img src={'img/text/center.png'} width={'60%'} alt={'center'}/>
                                <p>Централізовані (CEX, centralized exchange)</p>
                            </div>
                            <div className={'text_col'}>
                                <img src={'img/text/seperate.png'} width={'60%'} alt={'seperate'}/>
                                <p>Децентралізовані (DEX, decentralized exchange)</p>
                            </div>
                    </div>
                    <p className={'pharagraph_text'}>Що таке централізована біржа (CEX)?</p>
                    <p>CEX (Centralized Exchange) &ndash; це централізована біржа криптовалют. Як випливає з назви, управління та адміністрування такою біржею лежать на плечах однієї організації, яка виступає як посередник між двома сторонами. Приклади CEX: Coinbase, Кракен, Binance, FTX і т.д. Для реєстрації на такій біржі необхідно пройти KYC (підтвердження особи), вказати банківські реквізити та внести фіатні гроші, щоб придбати криптовалюту (найчастіше стейблкоїнів). Користувачі довіряють свої капітали біржі, і вона розпоряджається ними, за необхідності виконуючи запити користувачів на виведення чи обмін активів (ордер)</p>
                    <p className={'pharagraph_text'}>Що являє собою децентралізована біржа (DEX)?</p>
                    <p>DEX (Decentralized Exchange) &ndash; це децентралізована біржа криптовалют. Така біржа створена на технології блокчейн (розподіленого реєстру), вона не зберігає кошти та персональні дані користувачів на серверах. Приклади DEX: Uniswap, Pancakeswap, SushiSwap тощо. Кошти переводяться між окремими гаманцями за допомогою смартконтракти. Найчастіший представник DEX &ndash; це АММ (автоматичний маркет-мейкер). Їхня суть полягає у створенні пулів ліквідності, в рамках яких потім здійснюється миттєвий обмін.</p>
                    <p className={'pharagraph_text'}>Що таке тренд на біржі?</p>
                    <p>Тренд - це стійка зміна ціни в тому чи іншому напрямі на певному відрізку часу. Простими словами, тренд - це рух ціни вгору або вниз. Зазвичай тренд можна побачити неозброєним оком на графіку.</p>
                    <p>Тренди бувають трьох типів:</p>
                    <ol className={'rounded-list'}>
                        <li>Висхідний (бичачий);</li>
                        <li>Падучий (ведмежий);</li>
                        <li id={'japan'}>Бічний (плоский).</li>
                    </ol>
                    <p className={'text_center_hi'}>Що таке графік "Японські свічки"?</p>
                    <p>Для ухвалення рішення про купівлю або продаж активів використовують найпоширеніший варіант графіка "Японські свічки". Японські свічки - різновид графіка, відображає рух ціни активу за певний проміжок часу (тайм фрейм, наприклад, за 1 хвилину, 1 годину або 1 місяць) у вигляді фігур, які віддалено нагадують свічки, та показує:</p>
                    <ol className={'rounded-list'}>
                        <li>ціну активу на момент відкриття та закриття інтервалу тайм фрейму;</li>
                        <li>max та min ціну за інтервал тайм фрейму, за якою продавався актив.</li>
                    </ol>
                    <p className={'pharagraph_text'}>Який колір може бути &laquo;японська свічка&raquo;?</p>
                    <p>Японська свічка показує настрій ринку, тобто. битва між биками та ведмедями за певний період (тайм фрейм). У класичному японському свічковому аналізі, свічки мають два кольори:</p>
                    <ol className={'rounded-list'}>
                        <li>чорний (ведмеді);</li>
                        <li>білий (бики).</li>
                    </ol>
                    <p>Також у сучасних графічних платформах, свічки мають альтернативні два кольори:</p>
                    <ol className={'rounded-list'}>
                        <li>червоний (ведмеді) &ndash; ціна активу знизилася;</li>
                        <li>зелений (бики) &ndash; ціна активу зросла.</li>
                    </ol>
                    <p className={'pharagraph_text'}>З яких основних параметрів складається "японська свічка"?</p>
                    <p>Якщо буде червона (ведмежа) свічка, то ціна закриття (2) та ціна відкриття (3) поміняються місцями.</p>
                    <ol className={'rounded-list'}>
                        <li>HIGH (1) &ndash; максимальна ціна, за якою відбувалися торги за актив у певний інтервал тайм фрейму (наприклад, протягом 1 дня);</li>
                        <li>LOW (4) &ndash; мінімальна ціна, за якою відбувалися торги за актив у певний інтервал тайм фрейму (наприклад, протягом 1 дня);</li>
                    </ol>
                    <p className={'pharagraph_text'}>З яких основних параметрів складається "японська свічка"?</p>
                    <ol className={'rounded-list'}>
                        <li>CLOSE (2) &ndash; остання ціна (ціна закриття), за якою відбувалися торги за актив у момент завершення інтервалу тайм фрейму (наприклад, у момент настання 6-й хвилині для 5 хвилинного графіка);</li>
                        <li>OPEN (3) &ndash; початкова ціна (ціна відкриття), за якою відбувалися торги за актив у момент початку інтервалу тайм фрейму (наприклад, у момент наступу наступного 5-хвилинного графіка).</li>
                        <li>Верхній гніт (тінь) свічки (5) &ndash; індикатор, який показує наскільки вдалося підняти ціну вгору з початку формування свічки. Наявність такому ґноту вказує на ціну активу не вдалося закріпитися на цьому рівні на ринку. Тобто. ведмедям вдалося знизити ціну активу не дивлячись на спробу биків підвищити ціну.</li>
                        <li>&laquo;Тіло&raquo; свічки (6) &ndash; індикатор, який показує зміну ціни з моменту відкриття та до моменту закриття певного тайм фрейму</li>
                        <li>Нижній ґнот (тінь) свічки (7) &ndash; індикатор, який показує наскільки вдалося знизити ціну вниз з початку формування свічки. Наявність такого ґнота вказує на ціну активу не вдалося закріпитися на цьому рівні над ринком. Тобто. бикам вдалося підвищити ціну активу попри спробу ведмедів знизити ціну.</li>
                    </ol>
                    <p>Необхідно враховувати, що чим довше тіло свічки, тим сильнішим був рух у разі зеленої (бичачий) свічки і вниз у разі червоної (ведмежий) свічки</p>
                    <p className={'pharagraph_text'}>Про що говорить довжина ґноту (тіні) &laquo;японської свічки&raquo;?</p>
                    <p>&nbsp; Довжина ґноту (тіні) свічки говорить про те, наскільки сильна була боротьба, щоб підвищити або знизити ціну активу в певний інтервал тайм фрейму. Таким чином, чим довше гніт (тінь) свічки, тим жорстокішою була боротьба за підвищення або зниження ціни активу та драматичнішим був розворот на ринку певний інтервал тайм фрейму.</p>
                    <p>Нижче детальніше розглянемо які розрізняють варіанти трендів японської свічки&raquo;</p>
                    <p className={'pharagraph_text'}>Які розрізняють варіанти трендів з &laquo;японськими свічками&raquo;?</p>
                    <p>&laquo;Бичий&raquo; (висхідний) тренд &ndash; це період зростання ціни, коли основна тенденція на ринку спрямована нагору. Бики (покупці) штовхають ціни, їх більше, ніж ведмедів (продавців) та візуальне відображення динаміки ціни за вибраний період (графік котирувань) рухається вгору, оскільки ціни ростуть. При цьому більшість свічок будуть пофарбовані в зелений/білий колір.</p>
                    <p className={'pharagraph_text'}>Які розрізняють варіанти трендів із &laquo;японськими свічками&raquo;?</p>
                    <p>&laquo;Ведмежий&raquo; (низхідний) тренд &ndash; це період падіння ціни, коли основна тенденція на графіку низхідна. Ведмедів (продавців) більше, ніж бугаїв (покупців), тому, за законом ринку, ціни падають униз. При цьому більшість свічок будуть пофарбовані в червоний/чорний колір. Нижче детальніше буде розглянуто основні типи &laquo;японських свічок&raquo;.</p>
                    <p className={'pharagraph_text'}>Тип &laquo;японської свічки&raquo;: Марубозу (Marubozu)</p>
                    <p>Марубозу (Marubozu) &ndash; тип свічки, що складається повністю з тіла і в якої немає верхніх ні нижніх тіней.</p>
                    <p>Зелена марубозу (1): означає, що на ринку панували покупці (бики), тобто. Після відкриття торгів у цей період покупці (бики) &laquo;насадили ринок на роги&raquo; і штовхали його вгору аж до закриття.</p>
                    <p>Червона марубоза (2): означає, що на ринку панували продавці (ведмеді), тобто. Після відкриття торгів у цей період, продавці (ведмеді) одразу почали &laquo;топтати&raquo; ринок і успішно це робили до закриття.</p>
                    <p className={'pharagraph_text'}>Тип &laquo;японської свічки&raquo;: Доджі (Doji)</p>
                    <p>Доджі (Doji) &ndash; тип свічки, що має вид хреста, при цьому тіні можуть бути різними. Доджі утворюються коли ціни закриття та відкриття рівні (або дуже близькі). Такий тип свічки демонструє, що на ринку в цей період була нічия: ні покупці (бики) ні продавці (ведмеді) не змогли взяти контроль.</p>
                    <p className={'pharagraph_text'}>Тип &laquo;японської свічки&raquo;: Падаюча зірка (Shooting Star)</p>
                    <p>Падаюча зірка (Shooting Star): означає, що ціна суттєво зростає, а потім відбувається корекція. Такий тип свічки демонструє, що на початку період настрою на ринку був позитивний. Покупці (бики) штовхали ціну високо вгору (ніж і обумовлена висока верхня тінь), але ціна опустилася на колишній рівень. Падаюча зірка розташована на висхідному тренді і віщує низхідний рух.</p>
                    <p className={'pharagraph_text'}>Тип "японської свічки": "Молот" (Hammer)</p>
                    <p>"Молот" (Hammer): означає, що ціна суттєво падає, а потім відбувається корекція. Такий тип свічки демонструє, що на початку період настрою на ринку був негативний. Продавці (ведмеді) тягли ціну вниз з відносно великою силою, але покупці (бики) все-таки витягли ціну вище, ніж і зумовлено коротке тіло та довга нижня тінь свічки. &laquo;Молот&raquo; може віщувати початок висхідного руху. Нижче буде розглянуто один із основних патернів &laquo;японських свічок&raquo;.</p>
                    <p className={'pharagraph_text'}>Патерн "японських свічок": Поглинання (Engulfing pattern)</p>
                    <p>Поглинання (Engulfing pattern) &ndash; патерн, який складається з двох різноспрямованих свічок, при цьому свічка з найбільшим тілом повністю &laquo;поглинає&raquo; тіло попередньої свічки, яка знаходиться всередині цінового діапазону поглинаючої свічки. Такий патерн показує різку зміну настрою ринку і дає непогані точки входу у моменти зміни тренду та закінчення корекційних рухів. Поглинання може передбачати початок розвороту ціни.</p>
                    <p className={'pharagraph_text'}>На що звертають увагу під час аналізу поточної ситуації на ринку та укладання торгових угод (трейдинг)?</p>
                    <p>Всі події, що відбуваються, новини, емоції та рішення учасників біржі вже закладено у ціну, яку відображає графік "японські свічки". Основне правило при аналізі графіка &laquo;японські свічки&raquo; є те, що історія повторюється. Тому при аналізі звертають увагу на фігури, в які складаються свічки на графіку, так звані патерни. У графічному аналізі існують десятки свічкових патернів, які є сигналом до дії. З найбільш популярними патернами можна ознайомитись за посиланням. Для більш глибокого занурення в аналіз японських свічок можете почитати книгу Стіва Нісона &laquo;Японські свічки. Графічний аналіз фінансових ринків&raquo;.</p>
                    <p className={'pharagraph_text'}>Що представляють послуги агрегатори даних?</p>
                    <p>Для щоденної аналітики крипто сектор часто використовують Сервіси агрегатори даних. Агрегатори даних корисні ресурси, які збирають дані про різні коїни з безлічі блокчейнів і бірж, надаючи перевірений дані щодо ситуації на ринку криптовалют у реальному часі. Такі послуги є популярним інструментом для щоденної аналітики, оскільки допомагають швидко оцінити інформацію про той чи інший цифровий актив, капіталізацію ринку та монети зокрема, цінах, обсягів торгів за валютних пар, наявних біржах тощо.</p>
                    <p>Приклад: CoinMarketCap, CoinGecko, CoinStats.</p>
                    <p>Альтернатива сервісів агрегаторів даних: За ринком криптовалют також можна стежити на спеціалізованих сервіси графіків. Вони пропонують великий вибір аналітичних інструментів для більш точного прогнозування ймовірної зміни цін. Найбільш популярним сервісом такого Планом є TradingView.</p>
                </div>
            </div>
        </>
    );
}

export default BlogPage
