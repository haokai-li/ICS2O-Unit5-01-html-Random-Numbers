// Copyright (c) 2021 haokai All rights reserved
//
// Created by: haokai
// Created on: May 2021
// This is the Random-Numbers

"use strict"

function enterClicked() {
  // get a number of right answer
  const number = Math.floor(Math.random() * 6) + 1

  //input
  const guess = parseInt(document.getElementById("guess").value)

  // process
  if (guess == number) {
    //output that answer is right
    document.getElementById('answer').innerHTML = "You are right!"
  } else if (guess != number) {
    //output that answer is wrong
    document.getElementById('answer').innerHTML = "You are wrong!"
  }
}