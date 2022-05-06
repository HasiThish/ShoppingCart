import koa from "koa";
import koaBodyparser from "koa-bodyparser";
import koaJson from "koa-json";
import koaCors from "koa-cors";

import ItemRouter from "./routes/items.js";
import PromotionsRouter from "./routes/promotions.js";
import CustomersRouter from "./routes/customers.js";
import TradersRouter from "./routes/traders.js";

const port = process.env.PORT || 5000;
const app = new koa();

app.use(koaBodyparser());
app.use(koaJson());
app.use(koaCors());

app.use(ItemRouter.routes()).use(ItemRouter.allowedMethods());
app.use(PromotionsRouter.routes()).use(PromotionsRouter.allowedMethods());
app.use(CustomersRouter.routes()).use(CustomersRouter.allowedMethods());
app.use(TradersRouter.routes()).use(TradersRouter.allowedMethods());

app.listen(port, () => console.log(`Server running on port ${port} 🔥`));
