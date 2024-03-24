import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  private apiErrror$$ = new BehaviorSubject(null);
  public apiError$ = this.apiErrror$$.asObservable();

  constructor() { }

  setError(error: any): void {
    this.apiErrror$$.next(error);
  }
}
