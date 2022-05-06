const promotions = new Map();
let message, status;

promotions.set("PR001", { pID: "PR001", pName: "Earphone", pDescription: "Promotion Description" });
promotions.set("PR002", { pID: "PR002", pName: "Watch", pDescription: "Promotion Description" });
promotions.set("PR003", { pID: "PR003", pName: "Bag", pDescription: "Promotion Description" });
promotions.set("PR004", { pID: "PR004", pName: "Wallet", pDescription: "Promotion Description" });

export const addPromotion = async (ctx) => {
    const promotion = ctx.request.body;
    const { pID, pName, pDescription } = promotion;

    if (pID == '') {
        message = 'ID is empty';
        status = 404;
    } else {
        const existingPromotion = promotions.has(pID);
        if (existingPromotion) {
            message = 'Promotion already exists';
            status = 500;
        } else {
            promotions.set(pID, { pID: pID, pName: pName, pDescription: pDescription });
            message = 'Added Promotion successfully';
            status = 200;
        }
    }

    console.log(promotions);
    ctx.body = message;
    ctx.status = status;
}

export const editPromotion = async (ctx) => {
    const pID = ctx.request.params.id;
    const promotion = ctx.request.body;
    const {  pName, pDescription } = promotion;

    if (pID == '') {
        message = 'promotion Id cannot be empty';
        status = 404;
    } else {
        const existingPromotion = promotions.has(pID);
        if (!existingPromotion) {
            message = 'No such promotion';
            status = 500;
        } else {
            promotions.set(pID, { pID: pID, pName: pName, pDescription: pDescription });
            message = 'Updated promotion successfully';
            status = 200;
        }
    }
    ctx.body = message;
    ctx.status = status;
}

export const viewPromotion = async (ctx) => {
    const pID = ctx.request.params.id;
    console.log("id : ", pID);
    console.log(promotions);
    const promotion = promotions.get(pID);
    console.log("promotion : ", promotion);

    ctx.body = promotion;
    ctx.status = 200;
};

export const allPromotions = async (ctx) => {
    const allPromotions = [];
    for (let value of promotions.values()) {
        console.log(value);
        allPromotions.push(value);
    }

    ctx.body = allPromotions;
    ctx.status = 200;
};

export const deletePromotion = async (ctx) => {
    const pID = ctx.request.params.id;

    if (pID == '') {
        message = 'promotion Id cannot be empty';
        status = 404;
    } else {
        const existingPromotion = promotions.has(pID);
        if (!existingPromotion) {
            message = 'No such promotion';
            status = 500;
        } else {
            promotions.delete(pID);
            message = 'Deleted promotion successfully';
            status = 200;
        }
    }
    ctx.body = message;
    ctx.status = status;
};