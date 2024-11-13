// Базовий тип товару
type BaseProduct = {
    id: number;
    name: string;
    price: number;
    description?: string; // Додаткове базове поле
};

// Специфічні типи товарів
type Electronics = BaseProduct & {
    category: 'electronics';
    warrantyPeriod: number; // Специфічне поле для електроніки
};

type Clothing = BaseProduct & {
    category: 'clothing';
    size: string; // Специфічне поле для одягу
    material: string;
};

// Новий тип для книг
type Books = BaseProduct & {
    category: 'books';
    author: string; // Автор книги
    genre: string;  // Жанр книги
    pages: number;  // Кількість сторінок
};

// Функція для пошуку товару за id
const findProduct = <T extends BaseProduct>(products: T[], id: number): T | undefined => {
    return products.find(product => product.id === id);
};

// Функція для фільтрації товарів за максимальною ціною
const filterByPrice = <T extends BaseProduct>(products: T[], maxPrice: number): T[] => {
    return products.filter(product => product.price <= maxPrice);
};

// Тип для елемента кошика
type CartItem<T> = {
    product: T;
    quantity: number;
};

// Додавання товару в кошик
const addToCart = <T extends BaseProduct>(
    cart: CartItem<T>[],
    product: T,
    quantity: number
): CartItem<T>[] => {
    const existingItem = cart.find(item => item.product.id === product.id);

    if (existingItem) {
        existingItem.quantity += quantity; // Оновлюємо кількість, якщо товар вже в кошику
    } else {
        cart.push({ product, quantity }); // Додаємо новий товар у кошик
    }
    
    return cart;
};

// Підрахунок загальної вартості
const calculateTotal = <T extends BaseProduct>(cart: CartItem<T>[]): number => {
    return cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
};

// Створення тестових даних
const electronics: Electronics[] = [
    {
        id: 1,
        name: "Телефон",
        price: 10000,
        category: 'electronics',
        warrantyPeriod: 24 // в місяцях
    },
    {
        id: 2,
        name: "Ноутбук",
        price: 25000,
        category: 'electronics',
        warrantyPeriod: 36
    }
];

const clothing: Clothing[] = [
    {
        id: 3,
        name: "Куртка",
        price: 5000,
        category: 'clothing',
        size: "L",
        material: "Шерсть"
    },
    {
        id: 4,
        name: "Футболка",
        price: 1000,
        category: 'clothing',
        size: "M",
        material: "Бавовна"
    }
];

const books: Books[] = [
    {
        id: 5,
        name: "Великий Гетсбі",
        price: 300,
        category: 'books',
        author: "Френсіс Скотт Фіцджеральд",
        genre: "Класика",
        pages: 180
    },
    {
        id: 6,
        name: "Гаррі Поттер і філософський камінь",
        price: 400,
        category: 'books',
        author: "Дж. К. Роулінг",
        genre: "Фентезі",
        pages: 320
    }
];

// Тестування функцій
const phone = findProduct(electronics, 1);
console.log("Знайдений товар:", phone);

const affordableBooks = filterByPrice(books, 350);
console.log("Доступні книги:", affordableBooks);

let cart: CartItem<BaseProduct>[] = [];
if (phone) {
    cart = addToCart(cart, phone, 1);
}

const book = findProduct(books, 5);
if (book) {
    cart = addToCart(cart, book, 2);
}

console.log("Кошик:", cart);
const total = calculateTotal(cart);
console.log("Загальна вартість:", total);
