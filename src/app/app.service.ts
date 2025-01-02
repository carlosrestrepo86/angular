import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService{

  mydata: MyDataType[] = [
    {"id":1, "name":"Carlos"},
    {"id":2, "name":"Restrepo"}
  ]

  constructor(){}

  getUsers(): Observable<MyDataType[]>{
    let data = new Observable<MyDataType[]>(observer => {
      setTimeout(() => {
        observer.next(this.mydata);
      }, 2000);
    });
    return data;
  }

  getName() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Carlos Restrepo');
      }, 3000);
    });
    return promise;
  }

}

export class MyDataType
{
  public id: number;
  public name: string;
}
