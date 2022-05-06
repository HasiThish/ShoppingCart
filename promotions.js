import koaRouter from "koa-router";
import { addPromotion, editPromotion, viewPromotion, allPromotions, deletePromotion } from "../controllers/promotions.js";
const PromotionsRouter = new koaRouter(({ prefix: '/promotions' }));

PromotionsRouter.post("/add", addPromotion);
PromotionsRouter.put("/edit/:id", editPromotion);
PromotionsRouter.get("/get/:id", viewPromotion);
PromotionsRouter.get("/get-all", allPromotions);
PromotionsRouter.delete("/delete/:id", deletePromotion);

export default PromotionsRouter;