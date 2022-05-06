import koaRouter from "koa-router";
import { addItem, viewItem, allItems, editItem, deleteItem } from "../controllers/items.js";

const ItemRouter = new koaRouter(({prefix:'/item'}));

ItemRouter.post("/add", addItem);
ItemRouter.put("/edit/:id", editItem);
ItemRouter.get("/get/:id", viewItem);
ItemRouter.get("/get-all", allItems);
ItemRouter.delete("/delete/:id", deleteItem);

export default ItemRouter;