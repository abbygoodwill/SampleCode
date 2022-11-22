import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from "@angular/forms";

@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.scss']
})
export class MetricsComponent {
  projectName = "Abby's Sample Project"
  goalsForm: FormGroup;
  selectItems = [
    { id: 0, name: "Weekly" },
    { id: 1, name: "Monthly" },
    { id: 2, name: "Quarterly" },
    { id: 3, name: "Yearly" },
  ];

  constructor(
    fb: FormBuilder,
    
  ) {
    this.goalsForm= new FormGroup({
      longTermGoal1: new FormControl(),
      longTermTarget1: new FormControl(),
      longTermGoal2: new FormControl(),
      longTermTarget2: new FormControl(),
      shortTermGoal1: new FormControl(),
      shortTermTarget1: new FormControl(),
      shortTermGoal2: new FormControl(),
      shortTermTarget2: new FormControl(),
      checkIn1: new FormControl(),
      checkIn2: new FormControl()
    });
  }

  onSubmit(): void {
    alert('You have submitted your goals, please review the form object in the console!');
    console.log(this.goalsForm.value);
  }

  ngOnInit(): void {
  
  }

}
