if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('menubahar/service-worker.js')
            .then(registration => {
                console.log('Service Worker registered: ', registration);
            })
            .catch(error => {
                console.log('Service Worker registration failed: ', error);
            });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Данные о блюдах с их ценами (в манатах)
    // Теперь это массив объектов, где каждый объект - это категория блюд
    const menuCategories = [
        {
            title: 'ХОЛОДНЫЕ ЗАКУСКИ',
            dishes: [
                { name: 'Мясное ассорти', price: 15, checked: false },
                { name: 'Мясное/Сырное ассорти', price: 12, checked: false },
                { name: 'Сырное канапе', price: 10, checked: false },
                { name: 'Овощное (садака)', price: 8, checked: false },
                { name: 'Овощное (банкет)', price: 10, checked: false },
                { name: 'Соленое ассорти', price: 7, checked: false },
                { name: 'Сомса ассорти', price: 9, checked: false },
                { name: 'Пишме / Хворост', price: 6, checked: false },
                { name: 'Мучной сет', price: 8, checked: false },
                { name: 'Лимоны маслины', price: 5, checked: false },
                { name: 'Лимонная закуска', price: 4, checked: false },
                { name: 'Помидоры в св.соку', price: 6, checked: false },
                { name: 'Брускетты микс', price: 11, checked: false },
                { name: 'Пикантный баклажан', price: 9, checked: false },
                { name: 'Рулетики микс', price: 10, checked: false },
                { name: 'Суши ассорти "VIP"', price: 25, checked: false },
                { name: 'Рыбное ассорти "VIP"', price: 20, checked: false },
                { name: 'Блинчики с икрой', price: 18, checked: false },
                { name: 'Канапе с икрой', price: 17, checked: false },
                { name: 'Холодец (мясной)', price: 14, checked: false },
                { name: 'Селедка с картошкой', price: 13, checked: false },
                { name: 'Селедка канапе', price: 12, checked: false },
                { name: 'Селедка и скумбрия', price: 16, checked: false },
                { name: 'Брускетты ассорти', price: 10, checked: false },
                { name: 'Тарталетки ассорти', price: 9, checked: false },
                { name: 'Закуска "Хумус"', price: 8, checked: false },
                { name: 'Капрезе "VIP"', price: 15, checked: false },
                { name: 'Сухофрукты', price: 7, checked: false },
                { name: 'Печенье "Tomus"', price: 6, checked: false },
                { name: 'Ягоды в мартинице', price: 11, checked: false },
                { name: 'Клубника в мартинице', price: 13, checked: false }
            ]
        },
        {
            title: 'САЛАТЫ',
            dishes: [
                { name: 'Оливье', price: 10, checked: false },
                { name: 'Винегрет', price: 12, checked: false },
                { name: 'Морковный салат', price: 5, checked: false },
                { name: 'Огуречный салат', price: 6, checked: false },
                { name: 'Крабовый салат', price: 10, checked: false },
                { name: 'Дымок', price: 20, checked: false },
                { name: 'Восточный салат', price: 26, checked: false },
                { name: 'Салат "Веддинг"', price: 30, checked: false },
                { name: 'Грузинский салат', price: 20, checked: false },
                { name: 'Весенний салат', price: 22, checked: false },
                { name: 'Греческий салат', price: 23, checked: false },
                { name: 'Свекольный салат', price: 22, checked: false },
                { name: 'Витаминный салат', price: 22, checked: false },
                { name: 'Салат "Бахар"', price: 33, checked: false },
                { name: 'Селедка под шубой', price: 23, checked: false },
                { name: 'Цезарь с курицей', price: 18, checked: false },
                { name: 'Баклажановый салат', price: 18, checked: false },
                { name: 'Салат "Ростбиф"', price: 35, checked: false },
                { name: 'Курица Терияки', price: 40, checked: false },
                { name: 'Нисуаз с тунцом', price: 30, checked: false },
                { name: 'Тайский с мясом', price: 30, checked: false },
                { name: 'Китайский с мясом', price: 22, checked: false },
                { name: 'Микс с овощами', price: 23, checked: false },
                { name: 'Салат Мясной-пай', price: 22, checked: false },
                { name: 'Салат "Пикантный"', price: 25, checked: false },
                { name: 'Салат "Лола росса"', price: 30, checked: false },
                { name: 'Теплый с говядиной', price: 14, checked: false },
                { name: 'Теплый с курицей', price: 13, checked: false },
                { name: 'Тасканский салат', price: 22, checked: false },
                { name: 'Буррато Томатто', price: 33, checked: false }
            ]
        },
        {
            title: 'ГОРЯЧИЕ БЛЮДА',
            dishes: [
                { name: 'Плов из говядины', price: 40, checked: false },
                { name: 'Ярма из баранины', price: 10, checked: false },
                { name: 'Дограма баранина', price: 30, checked: false },
                { name: 'Узбекский плов', price: 40, checked: false },
                { name: 'Нохут чорба баранина', price: 50, checked: false },
                { name: 'Нохут чорба из говядины', price: 50, checked: false },
                { name: 'Чектирме / Шорсу', price: 50, checked: false },
                { name: 'Соус из говядины', price: 55, checked: false },
                { name: 'Рисовая каша (персонально)', price: 15, checked: false },
                { name: 'Пельмени с мясом (персонально)', price: 25, checked: false },
                { name: 'Мини манты с мясом', price: 50, checked: false },
                { name: 'Мини манты фарш', price: 40, checked: false },
                { name: 'Мини манты ассорти', price: 30, checked: false },
                { name: 'Манты - рулет', price: 30, checked: false },
                { name: 'Долма и голубцы', price: 35, checked: false },
                { name: 'Гутапы с мясом', price: 30, checked: false },
                { name: 'Чебуреки с мясом', price: 30, checked: false },
                { name: 'Узбекская сомса', price: 30, checked: false },
                { name: 'Куриная грудка + рис', price: 55, checked: false },
                { name: 'Куриная грудка под сыром', price: 55, checked: false },
                { name: 'Курица в слив.соусе', price: 55, checked: false },
                { name: 'Кур.соте с овощами + булгур', price: 55, checked: false },
                { name: 'Куриный рулет + рис', price: 55, checked: false },
                { name: 'Куриный рулет', price: 50, checked: false },
                { name: 'Куриное фрикасе', price: 60, checked: false },
                { name: 'Медальоны + пюре', price: 100, checked: false },
                { name: 'Медальоны с овощами', price: 100, checked: false },
                { name: 'Жаркое с картофелем', price: 40, checked: false },
                { name: 'Жаркое + картофель', price: 45, checked: false },
                { name: 'Тушеное мясо + картофель', price: 40, checked: false },
                { name: 'Искандер Сач', price: 60, checked: false },
                { name: 'Какмач + картофель', price: 80, checked: false },
                { name: 'Тушенная индейка + овощи', price: 40, checked: false },
                { name: 'Персидский плов (общая подача)', price: 40, checked: false },
                { name: 'Куриные ножки + картофель', price: 69, checked: false },
                { name: 'Осетрина + нохут (персонально)', price: 100, checked: false },
                { name: 'Форель + кус-кус (персонально)', price: 100, checked: false },
                { name: 'Судак + булгур (персонально)', price: 100, checked: false },
                { name: 'Рыба жареная + овощи', price: 200, checked: false },
                { name: 'Рыбный микс + овощи', price: 300, checked: false },
                { name: 'Мясной микс на доске', price: 150, checked: false },
                { name: 'Шашлыки 3 вида', price: 50, checked: false },
                { name: 'Шашлыки 3 вида', price: 60, checked: false },
                { name: 'Шашлыки ассорти (4 вида)', price: 70, checked: false },
                { name: 'Шашлыки ассорти (5 видов)', price: 80, checked: false },
                { name: 'Мангал микс "Аркач"', price: 100, checked: false },
                { name: 'Мангал микс "Бахар"', price: 28, checked: false }
            ]
        }
    ];
    const menuContainer = document.querySelector('.menu-grid'); // Переименовал, чтобы было яснее
    const totalPriceElement = document.querySelector('.total-price');

    // Функция для обновления общей суммы
    function updateTotalPrice() {
        let total = 0;
        document.querySelectorAll('.menu-item input[type="checkbox"]:checked').forEach(checkbox => {
            total += parseFloat(checkbox.dataset.price || 0);
        });
        totalPriceElement.textContent = `${total} манат`;
    }

    // Создание элементов меню на основе данных
    menuCategories.forEach(category => {
        // Создаем заголовок категории
        const categoryTitle = document.createElement('div');
        categoryTitle.classList.add('category-title');
        categoryTitle.textContent = category.title;
        menuContainer.appendChild(categoryTitle);

        // Создаем сетку для блюд в этой категории
        const dishGrid = document.createElement('div');
        dishGrid.classList.add('menu-grid-inner'); // Новый класс для внутренней сетки
        menuContainer.appendChild(dishGrid);

        category.dishes.forEach((dish, index) => {
            const menuItem = document.createElement('div');
            menuItem.classList.add('menu-item');

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            // Используем уникальный ID, комбинируя название категории и индекс
            checkbox.id = `dish-${category.title.replace(/\s/g, '-')}-${index}`;
            checkbox.checked = dish.checked;
            checkbox.dataset.price = dish.price;

            const label = document.createElement('label');
            label.htmlFor = checkbox.id; // Связываем label с checkbox по ID
            label.textContent = dish.name;

            menuItem.appendChild(checkbox);
            menuItem.appendChild(label);
            dishGrid.appendChild(menuItem); // Добавляем в внутреннюю сетку

            checkbox.addEventListener('change', updateTotalPrice);
        });
    });

    // Изначально обновляем сумму при загрузке страницы
    updateTotalPrice();
});
