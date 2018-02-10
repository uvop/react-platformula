# <a href="https://react-platformula.github.io/"><img src="https://raw.githubusercontent.com/react-platformula/react-platformula.github.io/master/logo.svg?sanitize=true" height='60' alt="Platformula Logo" aria-label="React.Platformula.github.io" />&nbsp;React Platformula</a> &middot; [![npm version](https://badge.fury.io/js/react-platformula.svg)](https://badge.fury.io/js/react-platformula) [![Build Status](https://travis-ci.org/uvop/react-platformula.svg?branch=master)](https://travis-ci.org/uvop/react-platformula)

## Introduction
React components and apis which work for Web, Android and iOS!  
simple API and usage in any react project

## Usage
* Install
  ```bash
    npm install --save react-platformula
    # or yarn
    yarn add react-platformula
  ```
* import and use!
  ```js
  import Block, { getCustom as getCustomBlock } from 'react-platformula/block';

  // regular block, which is just like react-native's view
  <Block /> 

  // Red block, not exposing or needing extra dependencies!
  const RedBlock = getCustomBlock({
    backgroundColor: 'red',
  });

  <RedBlock />
  ```
