import { Component , Inject} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //for initializing without value you can use pipe and undefined type
  name: string = '';
  date: Date | undefined;
  amount: number | undefined;
  miles: number = 0;
  car = {
    make: 'Opel',
    model: 'Corsa',
    year: 2010
  }

  onNameChange(value: string): void{
    this.name = value;
  }

  onDateChange(value: Date): void{
    this.date = value;
  }

  onAmountChange(value: string): void{
    this.amount = parseFloat(value)
  }

  onMilesChange(value: string): void{
    this.miles = parseFloat(value)
  }
}
