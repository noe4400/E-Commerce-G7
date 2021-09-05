const { Router } = require("express");
const router = Router();
const { validate } = require("uuid");
const { Clothe, User, Order } = require("../../../db");
const {
  responseMessage,
  statusCodes: { SUCCESS, ERROR },
} = require("../../../controller/responseMessages");

router.post("/order-add/:userId", async (req, res) => {
  try {
    const {
      body: {
        data: {
          clothe: { quantity, clotheId },
        },
      },
      params: { userId },
    } = req;

    if (clothe && userId && validate(userId) && typeof clothe === "object") {
      const currentClothe = await Clothe.findByPk(clotheId);
      //? Busco dentro del usuario las ordenes que tengan status 'CARRITO'
      const userOrder = await User.findAll({
        where: { id: userId },
        include: {
          model: Order,
          where: {
            status: "CARRITO",
          },
        },
      });

      if (userOrder.length === 0) {
        //? Si no la encuentra devuelve []
        const [user, newOrder] = await Promise.all([
          await User.findByPk(userId),
          //Creo la orden con valor inicial del producto que me llego por id.
          await Order.create({
            total: currentClothe.price,
          }),
        ]);

        await Promise.all([
          //Reduzco el stock por la cantidad
          await newOrder.addClothe(currentClothe, { quantity: quantity }),
          await user.addOrder(newOrder),
        ]);

        return res.json(responseMessage(SUCCESS, user));
      } else {
        //? Si existe la orden la busco por el id que me trae la relacion
        await Order.findByPk(userOrder[0].orders[0].id);
        await Promise.all([
          await currentClothe.decrement(["stock"], { by: quantity }),
          await currentOrder.increment(["total"], { by: price }),
          await currentOrder.addClothe(currentClothe, { quantity: quantity }),
        ]);

        return res.json(responseMessage(SUCCESS, currentOrder));
      }
    } else {
      return res
        .status(400)
        .json(
          responseMessage(ERROR, "Uno de los datos enviados es incorrecto")
        );
    }
  } catch (err) {
    const { message } = err;
    return res.json(responseMessage(ERROR, message));
  }
});
module.exports = router;
