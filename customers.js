const customers = new Map();
let message, status;

customers.set("C001", { CID: "C001", CName: "Hasini", username: "Hasini" ,password: "123456"});
customers.set("C002", { CID: "C002", CName: "Chalani", username: "Chalani", password: "123456"});
customers.set("C003", { CID: "C003", CName: "Kalani", username: "Kalani", password: "123456"});
customers.set("C004", { CID: "C004", CName: "Dilki", username: "Dilki", password: "123456"});

export const addCustomer = async (ctx) => {
    const customer = ctx.request.body;
    const { CID, CName, username, password } = customer;

    if (CID == '') {
        message = 'ID is empty';
        status = 404;
    } else {
        const existingCustomer = customers.has(CID);
        if (existingCustomer) {
            message = 'customer already exists';
            status = 500;
        } else {
            customers.set(CID, { CID: CID, CName: CName, username: username, password: password });
            message = 'Added customer successfully';
            status = 200;
        }
    }

    console.log(customers);
    ctx.body = message;
    ctx.status = status;
}

export const editCustomer = async (ctx) => {
    const CID = ctx.request.params.id;
    const customer = ctx.request.body;
    const { CName, username ,password} = customer;

    if (CID == '') {
        message = 'customer Id cannot be empty';
        status = 404;
    } else {
        const existingCustomer = customers.has(CID);
        if (!existingCustomer) {
            message = 'No such customer';
            status = 500;
        } else {
            customers.set(CID, { CID: CID, CName: CName, username: username, password: password });
            message = 'Updated customer successfully';
            status = 200;
        }
    }
    ctx.body = message;
    ctx.status = status;
}

export const viewCustomer = async (ctx) => {
    const CID = ctx.request.params.id;
    console.log("id : ", CID);
    console.log(customers);
    const customer = customers.get(CID);
    console.log("customer : ", customer);

    ctx.body = customer;
    ctx.status = 200;
};

export const allCustomers = async (ctx) => {
    const allCustomers = [];
    for (let value of customers.values()) {
        console.log(value);
        allCustomers.push(value);
    }

    ctx.body = allCustomers;
    ctx.status = 200;
};

export const deleteCustomer = async (ctx) => {
    const CID = ctx.request.params.id;

    if (CID == '') {
        message = 'customer Id cannot be empty';
        status = 404;
    } else {
        const existingCustomer = customers.has(CID);
        if (!existingCustomer) {
            message = 'No such customer';
            status = 500;
        } else {
            customers.delete(CID);
            message = 'Deleted customer successfully';
            status = 200;
        }
    }
    ctx.body = message;
    ctx.status = status;
};