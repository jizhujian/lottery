/**
 * 奖品设置
 * type: 唯一标识，0是默认特别奖的占位符，其它奖品不可使用
 * count: 奖品数量
 * title: 奖品描述
 * text: 奖品标题
 * img: 图片地址
 */
const prizes = [
  {
    type: 0,
    count: 100,
    text: "总经理特别增加奖项",
    title: ""
  },
  {
    type: 1,
    count: 150,
    text: "欢天喜地奖",
    title: "购物卡",
    img: "../img/购物卡.jpg"
  },
  {
    type: 2,
    count: 2,
    text: "特等奖",
    title: "电子产品",
    img: "../img/购物卡.jpg"
  }
];

/**
 * 一次抽取的奖品个数与prizes对应
 */
const EACH_COUNT = [1,15,1];

/**
 * 卡片公司名称标识
 */
const COMPANY = "MoShang";

module.exports = {
  prizes,
  EACH_COUNT,
  COMPANY
};
