'use strict';
/*jshint esversion:6*/
/*jshint node:true*/

let path=require('path');
let webpack=require('webpack');

module.exports={
  entry:'./js/main.jsx',
  output:{
    path:'/dist/',
    filename:'bundle.js'
  },
  module:{
    loaders:[
      {test:/\.css/,loader:'style!css'},
      {
          test: /\.js|jsx$/,
          loader:'babel',
          exclude:/node_modules/,
          query:{
            presets:['es2015','react']
          }
      }
    ]
  }
};
