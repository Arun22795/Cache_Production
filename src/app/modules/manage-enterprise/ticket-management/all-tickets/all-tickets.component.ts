import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-tickets',
  templateUrl: './all-tickets.component.html',
  styleUrls: ['./all-tickets.component.css']
})
export class AllTicketsComponent implements OnInit {

  allTickets: Array<any> = [];
  page: number = 1;
  itemsPerPage: number = 6;

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i <= 50; i++) {
      this.allTickets.push(
        {
          ticketId: `#${i+1}`,
          priority: `Testaccount ${i}- High priority`,
          calender: '25-May-2020 / 01:20 PM',
          name: 'Mathew Perry',
        }
      );
    }
  }

  onChangeRow(event) {
    this.itemsPerPage = event.target.value;
  }



}
