document.addEventListener('DOMContentLoaded', () => {
    // Данные о блюдах с их ценами (в манатах)
    // Теперь это массив объектов, где каждый объект - это категория блюд
    const menuCategories = [
        {
            title: 'ХОЛОДНЫЕ ЗАКУСКИ',
            dishes: [
                { name: 'Мясное ассорти', price: 35, checked: false },
                { name: 'Рулетики микс', price: 15, checked: false },
                { name: 'Мясное / Сырное', price: 50, checked: false },
                { name: 'Рулетики из огурцов', price: 10, checked: false },
                { name: 'Мясное ассорти VIP', price: 60, checked: false },
                { name: 'Капрезе', price: 15, checked: false },
                { name: 'Сырное ассорти', price: 25, checked: false },
                { name: 'Конвертики с ветчиной', price: 15, checked: false },
                { name: 'Сырное канапе', price: 22, checked: false },
                { name: 'Баклажаны с брынзой', price: 12, checked: false },
                { name: 'Овощное ассорти', price: 6, checked: false },
                { name: 'Закуска с теплыми баклажанами', price: 12, checked: false },
                { name: 'Овощное ассорти VIP', price: 8, checked: false },
                { name: 'Холодец на хлебе', price: 15, checked: false },
                { name: 'Соленое ассорти', price: 12, checked: false },
                { name: 'Суши ассорти VIP', price: 25, checked: false },
                { name: 'Помидоры в свекольном соку', price: 12, checked: false },
                { name: 'Канапе с красной икрой', price: 15, checked: false },
                { name: 'Сомса ассорти 3 вида', price: 12, checked: false },
                { name: 'Селедка с картошкой', price: 25, checked: false },
                { name: 'Мучной сет', price: 21, checked: false },
                { name: 'Печеное ассорти Tomus', price: 20, checked: false },
                { name: 'Пишме', price: 4, checked: false },
                { name: 'Арбуз и дыня', price: 8, checked: false },
                { name: 'Сигара борек', price: 12, checked: false },
                { name: 'Клубника в мартинице', price: 10, checked: false },
                { name: 'Лимоны и маслины', price: 14, checked: false },
                { name: 'Фрукты в вазе', price: 20, checked: false },
                { name: 'Лимонная закуска', price: 16, checked: false },
                { name: 'Фруктовая нарезка', price: 20, checked: false },
                { name: 'Брускетты микс', price: 12, checked: false },
                { name: 'Мороженное', price: 10, checked: false },
                { name: 'Рулетики с лаваша', price: 10, checked: false },
                { name: 'Хлеб садака', price: 4, checked: false },
                { name: 'Кур.ножки + картофель', price: 24, checked: false },
                { name: 'Хлеб банкет', price: 8, checked: false },
                { name: 'Нагетсы + фри', price: 28, checked: false },
                { name: 'Напитки ассорти', price: 20, checked: false }
            ]
        },
        {
            title: 'САЛАТЫ',
            dishes: [
                { name: 'Оливье', price: 8, checked: false },
                { name: 'Дамский каприз', price: 16, checked: false },
                { name: 'Винегрет', price: 5, checked: false },
                { name: 'Мясной в соевом соусе', price: 18, checked: false },
                { name: 'Баклажановый салат', price: 9, checked: false },
                { name: 'Итальянский салат', price: 14, checked: false },
                { name: 'Цезарь с курицей', price: 13, checked: false },
                { name: 'Салат "Каприз"', price: 16, checked: false },
                { name: 'Салат "Ростбиф"', price: 18, checked: false },
                { name: 'Салат "Белиссимо"', price: 12, checked: false },
                { name: 'Салат "Тайский"', price: 15, checked: false },
                { name: 'Салат с хрустящими броколли', price: 11, checked: false },
                { name: 'Салат с запеченой тыквой', price: 11, checked: false },
                { name: 'Салат с тыквенным соусом"', price: 11, checked: false },
                { name: 'Греческий салат', price: 8, checked: false },
                { name: 'Салат с моцареллой', price: 14, checked: false },
                { name: 'Салат с морской капустой', price: 12, checked: false },
                { name: 'Салат с тыквой и свеклой', price: 11, checked: false },
                { name: 'Теплый с говядиной', price: 16, checked: false },
                { name: 'Свекла по-адинжански', price: 12, checked: false },
                { name: 'Теплый с курицей', price: 14, checked: false },
                { name: 'Теплый с судаком', price: 20, checked: false },
                { name: 'Салат с курицей в кунжуте', price: 14, checked: false },
                { name: 'Ницца с тунцом', price: 20, checked: false },
                { name: 'Куриный с овощами', price: 14, checked: false },
                { name: 'Телятина с овощами', price: 16, checked: false },
                { name: 'Красная фасоль с курицей', price: 14, checked: false },
                { name: 'Баклажаны по-азиатски', price: 11, checked: false },
                { name: 'Красная капуста с курицей', price: 12, checked: false },
                { name: 'Мужской салат', price: 18, checked: false },
                { name: 'Салат "Тбилиси"', price: 18, checked: false },
                { name: 'Салат "Мозайка"', price: 10, checked: false }
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
