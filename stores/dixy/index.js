import axios from "axios";
import fs from "fs";

// import settings from "./settings.js";
import productSchema from "./validation/schemas/product.js";
import productAmountSchema from "./validation/schemas/productAmount.js";
import productListSchema from "./validation/schemas/productList.js";
import storeListSchema from "./validation/schemas/storeList.js";

// Шаблон для парсинга API магазинов
// Один магазин - одна папка, разработка ведётся обособленно
// По окончанию выписать полученные данные

export const getAllProducts = async () => {
    // Важное примечание - в одном магазине могут отсутствовать какие-то позиции
    // Так что надо учесть этот момент и определять товары по всем магазинам
    throw new Error("Not implemented exception");
};

export const getAllStores = async () => {
    const response = await axios.get("https://dixy.ru/local/ajax/components/dixy_shop_points.php");
    const stores = [];
    for (const store of response.data.features) {
        const {
            id,
            geometry: {
                coordinates: [latitude, longitude],
            },
            properties: { address },
        } = store;
        stores.push({ id, name: address, location: { latitude, longitude } });
    }
    return stores;
};

export const getProduct = async (id) => {
    throw new Error("Not implemented exception");
};

export const getProductAmount = async (id) => {
    throw new Error("Not implemented exception");
};

export const testValidation = async (id) => {
    // getAllStores();
    const validators = [
        // [productListSchema, getAllProducts],
        [storeListSchema, getAllStores],
        // [productSchema, getProduct],
        // [productAmountSchema, getProductAmount],
    ];

    for (const [schema, func] of validators) {
        schema(await func());
        console.log(func.name, "=>", schema.errors);
    }
};
