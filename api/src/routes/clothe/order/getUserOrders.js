const { Router } = require("express");
const router = Router();
const { validate } = require("uuid");
const { Op } = require("sequelize");
const { User, Order, Clothe } = require("../../../db");
const {
  responseMessage,
  statusCodes: { SUCCESS, ERROR },
} = require("../../../controller/responseMessages");

router.get("/user-orders", async (req, res) => {
  try {
    const { userId, orderStatus } = req.query;

    const validStatus = [
      "CARRITO",
      "CONFIRMADO",
      "DESPACHADO",
      "CANCELADO",
      "ENTREGADO",
      "",
    ];
    let response;
    if (validStatus.includes(orderStatus)) {
      if (validate(userId)) {
        response = await User.findAll({
          where: {
            id: userId,
          },
          include: {
            model: Order,
            where: {
              status: { [Op.iLike]: `%${orderStatus}%` },
            },
            include: { all: true },
          },
        });
      } else if (userId === "") {
        response = await User.findAll({
          include: {
            model: Order,
            where: {
              name: { [Op.iLike]: `%${orderStatus}%` },
            },
            include: { all: true },
          },
        });
      } else {
        return res.json(responseMessage(ERROR, "Usuario no valido"));
      }
      if (response.length > 0) {
        return res.json(responseMessage(SUCCESS, response));
      } else {
        return res.json(
          responseMessage(ERROR, "No existen ordenes con ese estado")
        );
      }
    } else {
      return res.json(
        responseMessage(
          ERROR,
          "El estado debe ser de tipo CARRITO - CONFIRMADO - DESPACHADO - CANCELADO - ENTREGADO. En caso de querer ver todas las ordenes, seleccionar TODOS."
        )
      );
    }
  } catch (err) {
    const { message } = err;
    return res.json(responseMessage(ERROR, message));
  }
});

module.exports = router;
