import koaRouter from "koa-router";
import { addCustomer, editCustomer, viewCustomer, allCustomers, deleteCustomer } from "../controllers/customers.js";
const CustomersRouter = new koaRouter(({ prefix: '/customers' }));

CustomersRouter.post("/add", addCustomer);
CustomersRouter.put("/edit/:id", editCustomer);
CustomersRouter.get("/get/:id", viewCustomer);
CustomersRouter.get("/get-all", allCustomers);
CustomersRouter.delete("/delete/:id", deleteCustomer);

export default CustomersRouter;