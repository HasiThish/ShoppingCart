import koaRouter from "koa-router";
import { addTrader, editTrader, viewTrader, allTraders, deleteTrader } from "../controllers/Traders.js";
const TradersRouter = new koaRouter(({ prefix: '/traders' }));

TradersRouter.post("/add", addTrader);
TradersRouter.put("/edit/:id", editTrader);
TradersRouter.get("/get/:id", viewTrader);
TradersRouter.get("/get-all", allTraders);
TradersRouter.delete("/delete/:id", deleteTrader);

export default TradersRouter;