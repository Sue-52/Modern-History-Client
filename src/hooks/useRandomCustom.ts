// @ts-nocheck
import BMap from "BMap";
// const BMap = require("BMap");

export default function SquareOverlay(center, length, backgroundImage) {
  // console.log(this);
  this._center = center;
  this._length = length;
  this._backgroundImage = backgroundImage;
}
// 复杂的自定义覆盖物
// 定义自定义覆盖物的构造函数
SquareOverlay.prototype = new BMap.Overlay();

// 初始化自定义覆盖物
SquareOverlay.prototype.initialize = function (map) {
  // 保存map对象实例
  this._map = map;
  // 创建div元素，作为自定义覆盖物的容器
  const div = document.createElement("div");
  div.style.position = "absolute";
  // 可以根据参数设置元素外观
  div.style.width = this._length + "px";
  div.style.height = this._length + "px";
  div.style.borderRadius = "50%";
  div.style.backgroundImage = "url(" + this._backgroundImage + ")";
  div.style.backgroundSize = "100% 100%";
  div.style.cursor = "pointer";
  div.style.opacity = 0;
  // 将div添加到覆盖物容器中
  map.getPanes().markerPane.appendChild(div);
  // 保存div实例
  this._div = div;
  // 需要将div元素作为方法的返回值，当调用该覆盖物的show、
  // hide方法，或者对覆盖物进行移除时，API都将操作此元素。
  return div;
};

// 绘制地图覆盖物
SquareOverlay.prototype.draw = function () {
  // 根据地理坐标转换为像素坐标，并设置给容器
  const position = this._map.pointToOverlayPixel(this._center);
  // console.log(position);
  this._div.style.left = position.x - this._length / 2 + "px";
  this._div.style.top = position.y - this._length / 2 + "px";
};

// 自定义覆盖物事件样板
SquareOverlay.prototype.addEventListener = function (event, fun) {
  this._div["on" + event] = fun;
};

// 手动控制覆盖物显示
SquareOverlay.prototype.show = function () {
  // console.log(this._div);
  if (this._div) {
    this._div.style.opacity = 1;
    this._div.style.transition = "all 2s";
  }
};

// 手动控制覆盖物隐藏
SquareOverlay.prototype.hide = function () {
  if (this._div) {
    this._div.style.opacity = 0;
  }
};
