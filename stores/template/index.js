import axios from "axios";

import settings from "./settings.js";
import productSchema from "./validation/schemas/product.js";
import productAmountSchema from "./validation/schemas/productAmount.js";
import productListSchema from "./validation/schemas/productList.js";
import storeListSchema from "./validation/schemas/storeList.js";

// Шаблон для парсинга API магазинов
// Один магазин - одна папка, разработка ведётся обособленно
// По окончанию выписать полученные данные

export const getAllProducts = async () => {
    throw new Error("Not implemented exception");
};

export const getAllStores = async () => {
    throw new Error("Not implemented exception");
};

export const getProduct = async (id) => {
    throw new Error("Not implemented exception");
};

export const getProductAmount = async (id) => {
    throw new Error("Not implemented exception");
};

export const testValidation = async (id) => {
    const validators = [
        [productListSchema, getAllProducts],
        [storeListSchema, getAllStores],
        [productSchema, getProduct],
        [productAmountSchema, getProductAmount],
    ];

    for (const [schema, func] of validators) {
        schema(await func());
        console.log(func.name, "=>", schema.errors);
    }
};
