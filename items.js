const items = new Map();
let message, status;

items.set("IT001", { itemId: "IT001", itemName: "Earphone", price: 1200, quantity: 5 });
items.set("IT002", { itemId: "IT004", itemName: "Watch", price: 1300, quantity: 4 });
items.set("IT003", { itemId: "IT004", itemName: "Bag", price: 1500, quantity: 5 });
items.set("IT004", { itemId: "IT007", itemName: "Wallet", price: 1100, quantity: 3 });

export const addItem = async (ctx) => {
    const item = ctx.request.body;
    const { itemId, itemName, price, quantity } = item;

    if (itemId == '') {
        message = 'ID is empty';
        status = 404;
    } else {
        const existingItem = items.has(itemId);
        if (existingItem) {
            message = 'Item already exists';
            status = 500;
        } else {
            items.set(itemId, { itemId: itemId, itemName: itemName, price: price, quantity: quantity });
            message = 'Added item successfully';
            status = 200;
        }
    }
    
    console.log(items);
    console.log(items);
    ctx.body=message;
    ctx.status = status;
}

export const editItem = async (ctx) => {
    const itemId = ctx.request.params.id;
    const item = ctx.request.body;
    const { itemName, price, quantity } = item;

    if (itemId == '') {
        message = 'Item Id cannot be empty';
        status = 404;
    } else {
        const existingItem = items.has(itemId);
        if (!existingItem) {
            message = 'No such item';
            status = 500;
        } else {
            items.set(itemId, { itemId: itemId, itemName: itemName, price: price, quantity: quantity });
            message = 'Updated item successfully';
            status = 200;
        }
    }
    ctx.body = message;
    ctx.status = status;
}

export const viewItem = async (ctx) => {
    const itemId = ctx.request.params.id;
    console.log("id : ", itemId);
    console.log(items);
    const item = items.get(itemId);
    console.log("item : ", item);

    ctx.body = item;
    ctx.status = 200;
};

export const allItems = async (ctx) => {
    const allItems = [];
    for (let value of items.values()) {
        console.log(value);
        allItems.push(value);
    }

    ctx.body = allItems;
    ctx.status = 200;
};

export const deleteItem = async (ctx) => {
    const itemId = ctx.request.params.id;

    if (itemId == '') {
        message = 'Item Id cannot be empty';
        status = 404;
    } else {
        const existingItem = items.has(itemId);
        if (!existingItem) {
            message = 'No such item';
            status = 500;
        } else {
            items.delete(itemId);
            message = 'Deleted item successfully';
            status = 200;
        }
    }
    ctx.body = message;
    ctx.status = status;
};