"use strict";
/*
  11 - Tuple to Object
  -------
  by sinoon (@sinoon) #easy
  
  ### Question
  
  Given an array, transform to a object type and the key/value must in the given array.
  
  For example
  
  ```ts
  const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
  
  const result: TupleToObject<typeof tuple> // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
  ```
  
  > View on GitHub: https://tsch.js.org/11
*/
Object.defineProperty(exports, "__esModule", { value: true });
var tuple = ['tesla', 'model 3', 'model X', 'model Y'];
