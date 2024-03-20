import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject, map } from 'rxjs';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


// //  REFRESHEER
// const p = new Promise((resolve, reject) => {
//   resolve(100);

//   // reject -> catch -> error
// })

// p.then(console.log);

// const observable$ = new Observable<number>((observer) => {
//   observer.next(101);
//   observer.next(102);
//   observer.next(103);

//   // obs.error(new Error('Something went wrong!'));
//   // obs.complete();
//   return () => {
//     //  cleanup
//   }
// });

// observable$.pipe(map(n => n * 10)).subscribe({
//   next: console.log,
//   error: (err) => console.error('Error from subscribe: ', err),
//   complete: () => console.log('Completed!'),
// });

// SUBJECTS

// const subject$$ = new Subject();
// subject$$.subscribe(data => console.log('Tsveti', data)); // A
// subject$$.next('Start of the movie');

// subject$$.subscribe(data => console.log('Vasu', data)); // B
// subject$$.next('Middle part of the movie');
// subject$$.next('The End');

// const subject$$ = new Subject();
// subject$$.subscribe(data => console.log('A: ', data)); // A
// subject$$.next(100); // only A is listening

// subject$$.subscribe(data => console.log('B: ', data)); // B

// subject$$.subscribe(data => console.log('C: ', data)); // C
// subject$$.next(200); // A, B, C are listening

// setTimeout(() => {
//   subject$$.subscribe(data => console.log('D: ', data)); // D
//   subject$$.next(300); // A, B, C, D are listening 

//   setTimeout(() => {
//     subject$$.subscribe(data => console.log('E: ', data)); // E
//     subject$$.next(400); // A, B, C, D, E are listening 
//   }, 2000);
// }, 2000);

// BEHAVIOR SUBJECTS
// const bSubejct$$ = new BehaviorSubject(100);
// bSubejct$$.subscribe(data => console.log('Subscription 1:', data));

// setTimeout(() => {
//   bSubejct$$.next(200);
//   bSubejct$$.subscribe(data => console.log('Subscription 2:', data));

//   setTimeout(() => {
//     bSubejct$$.next(300);
//     bSubejct$$.subscribe(data => console.log('Subscription 3:', data));
//   }, 2000);
// }, 2000);

// REPLAY SUBJECTS
// const rSubejct$$ = new ReplaySubject(5);

// rSubejct$$.next(1000); // [1000]
// rSubejct$$.subscribe(data => console.log('Subscription 1: ', data));

// for (let i = 1; i <= 30; i++) {
//   rSubejct$$.next(i); // [1000, 1, 2, 3....., 30]
// }

// // [1000, 1, 2, 3....., 30]
// console.log('-------------------'); // [26, 27, 28, 29, 30]
// rSubejct$$.subscribe(data => console.log('Subscription 2: ', data));

// console.log('-------------------'); // [26, 27, 28, 29, 30]
// rSubejct$$.subscribe(data => console.log('Subscription 3: ', data));


// ASYNC SUBJECT

const asyncSubject$$ = new AsyncSubject();
asyncSubject$$.next(1);
asyncSubject$$.next(2);
asyncSubject$$.next(3);
asyncSubject$$.subscribe(data => console.log('Subscribe 1: ', data));
asyncSubject$$.complete()