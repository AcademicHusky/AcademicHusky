"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTooltipPosition = void 0;
var _reactNative = require("react-native");
/**
 * Return true when the tooltip center x-coordinate relative to the wrapped element is negative.
 * The tooltip will be placed at the starting x-coordinate from the wrapped element.
 */
const overflowLeft = center => {
  return center < 0;
};

/**
 * Return true when the tooltip center x-coordinate + tooltip width is greater than the layout width
 * The tooltip width will grow from right to left relative to the wrapped element.
 */
const overflowRight = (center, tooltipWidth) => {
  const {
    width: layoutWidth
  } = _reactNative.Dimensions.get('window');
  return center + tooltipWidth > layoutWidth;
};

/**
 * Return true when the children y-coordinate + its height + tooltip height is greater than the layout height.
 * The tooltip will be placed at the top of the wrapped element.
 */
const overflowBottom = (childrenY, childrenHeight, tooltipHeight) => {
  const {
    height: layoutHeight
  } = _reactNative.Dimensions.get('window');
  return childrenY + childrenHeight + tooltipHeight > layoutHeight;
};
const getTooltipXPosition = (_ref, _ref2) => {
  let {
    pageX: childrenX,
    width: childrenWidth
  } = _ref;
  let {
    width: tooltipWidth
  } = _ref2;
  const center = childrenX + (childrenWidth - tooltipWidth) / 2;
  if (overflowLeft(center)) return childrenX;
  if (overflowRight(center, tooltipWidth)) return childrenX + childrenWidth - tooltipWidth;
  return center;
};
const getTooltipYPosition = (_ref3, _ref4) => {
  let {
    pageY: childrenY,
    height: childrenHeight
  } = _ref3;
  let {
    height: tooltipHeight
  } = _ref4;
  if (overflowBottom(childrenY, childrenHeight, tooltipHeight)) return childrenY - tooltipHeight;
  return childrenY + childrenHeight;
};
const getTooltipPosition = _ref5 => {
  let {
    children,
    tooltip,
    measured
  } = _ref5;
  if (!measured) return {};
  return {
    left: getTooltipXPosition(children, tooltip),
    top: getTooltipYPosition(children, tooltip)
  };
};
exports.getTooltipPosition = getTooltipPosition;
//# sourceMappingURL=utils.js.map