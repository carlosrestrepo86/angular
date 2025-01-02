import { Component } from '@angular/core';
import { AuthService, MyDataType } from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ejemplo de @Input'; // Para @Input
  text = ''; // Para @Output

  // Para observable
  name = 'rxjs/Observable';
  users: MyDataType[] = [];

  // Para promesa
  nameApp;

  micontador: number = 10; // Para eventEmitter

  constructor(
    private authService: AuthService
  ){
    // this.getUsers();
    // this.getNamePromise();
    // this.getNameAsyncAwait();
  }

  mostrarNumero(obj){
    this.text = obj.text;
  }

  getUsers() {
    this.authService.getUsers().subscribe(res => {
      this.users = res;
      console.log('Users: ', JSON.stringify(this.users));
    });
  }

  getNamePromise() {
    this.authService.getName().then(res => this.nameApp = res);
  }

  async getNameAsyncAwait() {
    try {
      this.nameApp = await this.authService.getName();
      console.log('Nombre async: ', this.nameApp);
    }
    catch (err) {
      console.log('Error: ', err);
    }
  }

  cambiarContador(event) {
    console.log("event: " + event);
    this.micontador = event;
  }
}
