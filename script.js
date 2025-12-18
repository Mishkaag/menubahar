document.addEventListener('DOMContentLoaded', () => {
    // Данные о блюдах с их ценами (в манатах)
    // Теперь это массив объектов, где каждый объект - это категория блюд
    const menuCategories = [
        {
            title: 'ХОЛОДНЫЕ ЗАКУСКИ',
            dishes: [
                { name: 'Мясное ассорти', price: 30, checked: false, half: true },
                { name: 'Рулетики микс', price: 15, checked: false, half: true },
                { name: 'Мясное / Сырное', price: 50, checked: false, half: true },
                { name: 'Рулетики из огурцов', price: 10, checked: false, half: true },
                { name: 'Мясное ассорти VIP', price: 60, checked: false, half: true },
                { name: 'Капрезе', price: 15, checked: false, half: true },
                { name: 'Сырное плато', price: 20, checked: false, half: true },
                { name: 'Конвертики с ветчиной', price: 15, checked: false, half: true },
                { name: 'Сырное канапе', price: 23, checked: false, half: true },
                { name: 'Баклажановое капризе', price: 14, checked: false },
                { name: 'Овощное ассорти', price: 6, checked: false, half: true },
                { name: 'Закуска с теплыми баклажанами', price: 12, checked: false, half: true },
                { name: 'Овощное ассорти VIP', price: 11, checked: false, half: true },
                { name: 'Холодец на хлебе', price: 15, checked: false, half: true },
                { name: 'Соленое ассорти (садака)', price: 12, checked: false, half: true },
                { name: 'Суши сет (2 вида)', price: 15, checked: false, half: true },
                { name: 'Соленое ассорти (банкет)', price: 8, checked: false, half: true },
                { name: 'Суши сет (3 вида)', price: 25, checked: false, half: true },
                { name: 'Помидоры в свекольном соку', price: 12, checked: false, half: true },
                { name: 'Канапе с красной икрой', price: 15, checked: false, half: true },
                { name: 'Сомса ассорти 3 вида', price: 12, checked: false, half: true },
                { name: 'Селедка с картошкой', price: 25, checked: false, half: true },
                { name: 'Мучной сет', price: 21, checked: false, half: true },
                { name: 'Печеное ассорти Tomus', price: 20, checked: false, half: true },
                { name: 'Мини чебуреки', price: 16, checked: false, half: true },
                { name: 'Арбуз и дыня', price: 8, checked: false, half: true, disabled: true },
                { name: 'Сигара борек', price: 10, checked: false, half: true },
                { name: 'Фрукты в вазе', price: 20, checked: false, half: true},
                { name: 'Цитрусовая закуска', price: 13, checked: false, half: true },
                { name: 'Фруктовая нарезка', price: 20, checked: false, half: true },
                { name: 'Лимоно-ананасовая закуска', price: 16, checked: false, half: true },
                { name: 'Фруктовая нарезка VIP', price: 25, checked: false, half: true },
                { name: 'Брускетты микс', price: 12, checked: false, half: true },
                { name: 'Мороженное', price: 10, checked: false, half: true },
                { name: 'Рулетики с лаваша', price: 10, checked: false, half: true },
                { name: 'Хлеб садака', price: 4, checked: false, half: true },
                { name: 'Куриные ножки с фри', price: 26, checked: false, half: true },
                { name: 'Хлеб банкет', price: 8, checked: false, half: true },
                { name: 'Нагетсы + фри', price: 28, checked: false, half: true },
                { name: 'Рыбное - 1 тарелка', price: 80, checked: false, half: true },
                { name: 'Чикен VIP', price: 32, checked: false, half: true },
                { name: 'Напитки ассорти', price: 25, checked: false, half: true }
            ]
        },
        {
            title: 'САЛАТЫ',
            dishes: [
                { name: 'Оливье', price: 8, checked: false, half: true },
                { name: 'Дамский каприз', price: 16, checked: false, half: true },
                { name: 'Винегрет', price: 5, checked: false, half: true },
                { name: 'Мясной в соевом соусе', price: 18, checked: false, half: true },
                { name: 'Баклажановый салат', price: 10, checked: false, half: true },
                { name: 'Итальянский салат', price: 14, checked: false, half: true },
                { name: 'Цезарь с курицей', price: 14, checked: false, half: true },
                { name: 'Салат "Каприз"', price: 16, checked: false, half: true },
                { name: 'Салат "Ростбиф"', price: 18, checked: false, half: true },
                { name: 'Салат "Белиссимо"', price: 12, checked: false, half: true },
                { name: '"Тайский с мясом"', price: 15, checked: false, half: true },
                { name: 'Салат "Коул Слоу"', price: 12, checked: false, half: true },
                { name: 'Салат с запеченой тыквой', price: 11, checked: false, half: true },
                { name: 'Салат с тыквенным соусом', price: 11, checked: false, half: true },
                { name: 'Греческий салат', price: 8, checked: false, half: true },
                { name: 'Салат с моцареллой и овощами', price: 14, checked: false, half: true },
                { name: 'Салат с морской капустой', price: 12, checked: false, half: true },
                { name: 'Салат с тыквой и свеклой', price: 11, checked: false, half: true },
                { name: 'Теплый с говядиной', price: 16, checked: false, half: true },
                { name: 'Свекла по-адинжански', price: 12, checked: false, half: true },
                { name: 'Теплый с курицей', price: 14, checked: false, half: true },
                { name: 'Теплый с судаком', price: 20, checked: false, half: true },
                { name: 'Салат с курицей в кунжуте', price: 14, checked: false, half: true },
                { name: 'Ницца с тунцом', price: 20, checked: false, half: true },
                { name: 'Куриный в индийском стиле', price: 14, checked: false, half: true },
                { name: 'Телятина с овощами', price: 16, checked: false, half: true },
                { name: 'Фасолевый салат с курицей', price: 14, checked: false, half: true },
                { name: 'Баклажаны по-азиатски', price: 11, checked: false, half: true },
                { name: 'Красная капуста с курицей', price: 12, checked: false, half: true },
                { name: 'Мужской салат', price: 18, checked: false, half: true },
                { name: 'Салат "Тбилиси"', price: 18, checked: false, half: true },
                { name: 'Салат "Мозайка"', price: 10, checked: false, half: true }
            ]
        },
        {
            title: 'ГОРЯЧИЕ БЛЮДА',
            dishes: [
                { name: 'Плов из говядины', price: 33, checked: false, half: true },
                { name: 'Кефте с сыром + рис', price: 50, checked: false, half: true },
                { name: 'Плов (мясо от заказчика)', price: 15, checked: false, half: true },
                { name: 'Кур.ножки + рис (общая)', price: 30, checked: false, half: true },
                { name: 'Ярма с бараниной', price: 12, checked: false, half: true },
                { name: 'Курица в слив.соусе + рис (общая)', price: 40, checked: false, half: true },
                { name: 'Ярма (мясо от заказчика)', price: 10, checked: false, half: true },
                { name: 'Жаркое в горшочке', price: 45, checked: false, half: true },
                { name: 'Дограма с бараниной', price: 30, checked: false, half: true },
                { name: 'Жаркое с овощами (общая)', price: 50, checked: false, half: true },
                { name: 'Дограма (мясо от заказчика)', price: 15, checked: false, half: true },
                { name: 'Жаркое + картофель (общая)', price: 50, checked: false, half: true },
                { name: 'Нохут чорба с говядиной', price: 35, checked: false, half: true },
                { name: 'Бахар микс (общая)', price: 55, checked: false, half: true },
                { name: 'Нохут чорба (мясо от заказчика)', price: 15, checked: false, half: true },
                { name: 'Голень ягненка + булгур', price: 55, checked: false, half: true },
                { name: 'Соус с говядиной', price: 35, checked: false, half: true },
                { name: 'Голень ягненка + булгур (общая)', price: 55, checked: false, half: true },
                { name: 'Рисовая каша', price: 15, checked: false, half: true },
                { name: 'Медальоны + овощи (общая)', price: 60, checked: false, half: true },
                { name: 'Долма + голубцы (общая)', price: 24, checked: false, half: true },
                { name: 'Бараньи рёбра + баклажаны (общая)', price: 55, checked: false, half: true },
                { name: 'Манты с фаршем', price: 22, checked: false, half: true },
                { name: 'Говяжий рулет + овощи (общая)', price: 55, checked: false, half: true },
                { name: 'Манты (фарш с тыквой)', price: 22, checked: false, half: true },
                { name: 'Бараний рулет + картофель (общая)', price: 60, checked: false, half: true },
                { name: 'Манты с нарезным мясом', price: 22, checked: false, half: true },
                { name: 'Персидский плов (общая)', price: 40, checked: false, half: true },
                { name: 'Манты ассорти 3 вида', price: 18, checked: false, half: true },
                { name: 'Кебаб микс (общее)', price: 35, checked: false, half: true },
                { name: 'Чебуреки с мясом', price: 8, checked: false, half: true },
                { name: 'Чоп-чиш шашлыки', price: 60, checked: false, half: true },
                { name: 'Куриный рулет + рис', price: 40, checked: false, half: true },
                { name: 'Шашлыки 3 вида', price: 55, checked: false, half: true },
                { name: 'Кур.отбивная + гратен', price: 40, checked: false, half: true },
                { name: 'Шашлыки 5 видов', price: 45, checked: false, half: true },
                { name: 'Куриная грудка + рис', price: 40, checked: false, half: true },
                { name: 'Бахар микс мангал', price: 50, checked: false, half: true },
                { name: 'Куриное соте с овощами', price: 35, checked: false, half: true }
            ]
        }
    ];
   const menuContainer = document.querySelector('.menu-grid');
    const totalPriceElement = document.querySelector('.total-price');

    // Пересчёт общей суммы
    function updateTotalPrice() {
        let total = 0;
        document.querySelectorAll('.menu-item input[type="checkbox"]:checked').forEach(checkbox => {
            const btn = checkbox.closest('.menu-item').querySelector('.half-btn');
            const basePrice = parseFloat(checkbox.dataset.price);
            total += btn && btn.classList.contains('active') ? basePrice / 2 : basePrice;
        });
        totalPriceElement.textContent = `${Math.round(total)} манат`;
    }

    // Создание интерфейса
    menuCategories.forEach(category => {
        const categoryTitle = document.createElement('div');
        categoryTitle.classList.add('category-title');
        categoryTitle.textContent = category.title;
        menuContainer.appendChild(categoryTitle);

        const dishGrid = document.createElement('div');
        dishGrid.classList.add('menu-grid-inner');
        menuContainer.appendChild(dishGrid);

        category.dishes.forEach((dish, index) => {
            const menuItem = document.createElement('div');
            menuItem.classList.add('menu-item');

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `dish-${category.title.replace(/\s/g, '-')}-${index}`;
            checkbox.dataset.price = dish.price;
            checkbox.checked = dish.checked;

            if (dish.disabled) {
                checkbox.disabled = true;
                }

            const label = document.createElement('label');
            label.htmlFor = checkbox.id;
            label.textContent = dish.name;

            if (dish.disabled) {
                checkbox.disabled = true;
                label.title = 'Блюдо временно недоступно';
                }

            // Создаём кнопку только если блюдо поддерживает ½
            let halfBtn = null;
            if (dish.half) {
                halfBtn = document.createElement('button');
                halfBtn.textContent = '0,5';
                halfBtn.classList.add('half-btn');
            }

            // Обработка выбора блюда
            checkbox.addEventListener('change', () => {
                if (checkbox.checked && halfBtn) {
                    halfBtn.style.display = 'inline-block';
                } else if (halfBtn) {
                    halfBtn.style.display = 'none';
                    halfBtn.classList.remove('active');
                }
                updateTotalPrice();
            });

            // Обработка нажатия на кнопку ½
            if (halfBtn) {
                halfBtn.addEventListener('click', () => {
                    halfBtn.classList.toggle('active');
                    updateTotalPrice();
                });
            }

            menuItem.appendChild(checkbox);
            menuItem.appendChild(label);
            if (halfBtn) menuItem.appendChild(halfBtn);
            dishGrid.appendChild(menuItem);
        });
    });

    updateTotalPrice();
});



