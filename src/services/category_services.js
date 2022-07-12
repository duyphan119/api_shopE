const db = require("../models");
const { Op } = require("sequelize");

const getAll = async (query) => {
  try {
    let { sortBy, sortType, limit, p, include } = query;

    // Không có sortBy hay sortType thì mặc định sort theo id giảm dần
    const order = [[sortBy || "id", sortType || "desc"]];

    let option = {
      where: { parent_id: null },
      order,
    };

    let count;
    let resData;

    // Nếu có limit hoặc p thì phân trang
    if (limit || p) {
      if (limit) {
        limit = parseInt(limit);
        option.limit = limit;
      }
      if (p) {
        p = parseInt(p) - 1;
        option.offset = p * limit;
      }

      // Đếm tổng phần tử
      count = await db.Category.count(option);
    }

    //Nếu có include thì liên kết khoá ngoại
    if (include) {
      option.nest = true;
      option.include = [
        {
          model: db.Category,
          as: "parent",
        },
        {
          model: db.Category,
          as: "children",
          include: [
            {
              model: db.Category,
              as: "parent",
            },
            {
              model: db.Category,
              as: "children",
            },
          ],
        },
      ];
    }

    const items = await db.Category.findAll(option);

    resData = { items };

    if (count) {
      resData.total_result = count;
      resData.total_page = Math.ceil(items.length / count);
      resData.limit = limit;
    }

    return { status: 200, data: resData };
  } catch (error) {
    console.log(error);
    return { status: 500, data: { msg: "error", error } };
  }
};

module.exports = { getAll };
