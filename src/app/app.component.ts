import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  //aşağıdaki selector kullanılarak app.component dosyası çağrılabilir.
  selector: 'app-root',
  //Aşağıdaki dosya bu componentin template html dosyasıdır. Yani bu dosya çağrıldığında
  //Aşağıdaki html dosyası çalıştırılır.
  templateUrl: './app.component.html',
  //Bu dosya için stiller aşağıdaki css dosyasından alınacaktır.
  //Aynı şekilde bu dosya çağrıldığında aşağıdaki css dosyası kullanılacak.
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = "Fırat";
  year: number = 2022;
  date: Date = new Date();
  bool: boolean = true;

  form: FormGroup = new FormGroup({
    name: new FormControl('Fırat Şakar', Validators.required)
  });
}
