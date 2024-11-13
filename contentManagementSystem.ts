// Базовий інтерфейс для всього контенту
interface BaseContent {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt?: Date;
    status: 'draft' | 'published' | 'archived';
}

// Інтерфейс для статей
interface Article extends BaseContent {
    title: string;
    body: string;
    authorId: string;
    tags?: string[];
}

// Інтерфейс для продуктів
interface Product extends BaseContent {
    name: string;
    description: string;
    price: number;
    stock: number;
}

// Generic тип для операцій з контентом
type ContentOperations<T extends BaseContent> = {
    create: (content: T) => void;
    read: (id: string) => T | null;
    update: (content: T) => void;
    delete: (id: string) => void;
};

// Ролі та права доступу
type Role = 'admin' | 'editor' | 'viewer';

type Permission = {
    create: boolean;
    read: boolean;
    update: boolean;
    delete: boolean;
};

// Система прав доступу, налаштована під різні типи контенту
type AccessControl<T extends BaseContent> = {
    role: Role;
    permissions: Permission;
    checkAccess: (operation: keyof Permission, content: T) => boolean;
};

// Тип для результату валідації
type ValidationResult = {
    isValid: boolean;
    errors?: string[];
};

// Базовий тип валідатора
type Validator<T> = {
    validate: (data: T) => ValidationResult;
};

// Приклад валідатора для статей
const articleValidator: Validator<Article> = {
    validate: (data: Article) => {
        const errors: string[] = [];
        if (!data.title) errors.push("Title is required.");
        if (!data.body) errors.push("Body is required.");
        return {
            isValid: errors.length === 0,
            errors,
        };
    }
};

// Система версіонування контенту
type Versioned<T extends BaseContent> = T & {
    version: number;
    previousVersions: T[];
    incrementVersion: () => void;
};

// Функція для створення версійованого контенту
function createVersionedContent<T extends BaseContent>(content: T): Versioned<T> {
    return {
        ...content,
        version: 1,
        previousVersions: [],
        incrementVersion() {
            this.previousVersions.push({ ...content });
            this.version += 1;
        },
    };
}

// Приклад 
const article: Article = {
    id: "1",
    createdAt: new Date(),
    updatedAt: new Date(),
    status: "draft",
    title: "My Article",
    body: "This is the content of the article.",
    authorId: "author123"
};

const versionedArticle = createVersionedContent(article);
versionedArticle.incrementVersion();
console.log(versionedArticle);
