import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {

  public query: string;

    public constructor() {
        this.query = 'Hospital';
    }

    public ngOnInit() { }

}
