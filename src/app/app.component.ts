import { Component , Inject} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //for initializing without value you can use pipe and undefined type
  name: string = ''
  date: Date | undefined;

  onNameChange(value: string): void{
    this.name = value;
  }

  onDateChange(value: Date): void{
    this.date = value;
  }
}
