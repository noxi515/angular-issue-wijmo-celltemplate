import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-grid',
  templateUrl: './sample-grid.component.html',
  styleUrls: ['./sample-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SampleGridComponent implements OnInit {

  readonly data = [];
  readonly autocompleteSource = [
    {
      id: '00000',
      name: 'hoge',
      age: 10,
    },
    {
      id: '00001',
      name: 'fuga',
      age: 20,
    },
    {
      id: '00002',
      name: 'piyo',
      age: 30,
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
