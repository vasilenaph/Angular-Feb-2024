import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reduce',
  // pure: true, // by Default, result is memoized, invoked on change of the reference
  // pure: false // not a pure function, not memoized, invoked on every change
})
export class ReducePipe<T> implements PipeTransform {
  user: any;

  transform(array: T[], callbackFn: (acc: any, curr: any) => any,
    initalValue: T
  ): unknown {
    // const sum = (acc, curr) => acc + curr;
    // [1, 2, 3, 4].reduce(sum, 0)
    // console.log('invoked from pipe')
    return array.reduce(callbackFn, initalValue);
  }

}
