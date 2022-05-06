const traders = new Map();
let message, status;

traders.set("T001", { traderID: "T001", traderName: "Ushan", username: "Ushan", password: "123123" });
traders.set("T002", { traderID: "T002", traderName: "Sandeepa", username: "Sandeepa", password: "123123" });
traders.set("T003", { traderID: "T003", traderName: "Nimni", username: "Nimni", password: "123123" });
traders.set("T004", { traderID: "T004", traderName: "Kalana", username: "Kalana", password: "123123" });

export const addTrader = async (ctx) => {
    const trader = ctx.request.body;
    const { traderID, traderName, username, password } = trader;

    if (traderID == '') {
        message = 'ID is empty';
        status = 404;
    } else {
        const existingTrader = traders.has(traderID);
        if (existingTrader) {
            message = 'trader already exists';
            status = 500;
        } else {
            traders.set(traderID, { traderID: traderID, traderName: traderName, username: username, password: password });
            message = 'Added trader successfully';
            status = 200;
        }
    }

    console.log(traders);
    ctx.body = message;
    ctx.status = status;
}

export const editTrader = async (ctx) => {
    const traderID = ctx.request.params.id;
    const trader = ctx.request.body;
    const { traderName, username, password } = trader;

    if (traderID == '') {
        message = 'trader Id cannot be empty';
        status = 404;
    } else {
        const existingTrader = traders.has(traderID);
        if (!existingTrader) {
            message = 'No such trader';
            status = 500;
        } else {
            traders.set(traderID, { traderID: traderID, traderName: traderName, username: username, password: password });
            message = 'Updated trader successfully';
            status = 200;
        }
    }
    ctx.body = message;
    ctx.status = status;
}

export const viewTrader = async (ctx) => {
    const traderId = ctx.request.params.id;
    console.log("id : ", traderId);
    console.log(traders);
    const trader = traders.get(traderId);
    console.log("trader : ", trader);

    ctx.body = trader;
    ctx.status = 200;
};

export const allTraders = async (ctx) => {
    const allTraders = [];
    for (let value of traders.values()) {
        console.log(value);
        allTraders.push(value);
    }

    ctx.body = allTraders;
    ctx.status = 200;
};

export const deleteTrader = async (ctx) => {
    const traderId = ctx.request.params.id;

    if (traderId == '') {
        message = 'trader Id cannot be empty';
        status = 404;
    } else {
        const existingTrader = traders.has(traderId);
        if (!existingTrader) {
            message = 'No such trader';
            status = 500;
        } else {
            traders.delete(traderId);
            message = 'Deleted trader successfully';
            status = 200;
        }
    }
    ctx.body = message;
    ctx.status = status;
};