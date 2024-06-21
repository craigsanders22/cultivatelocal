"use strict";

module.exports = {
  outputFileExtension: "css",
  compile: function compile(inputContent) {
    return function () {
      return inputContent;
    };
  }
};