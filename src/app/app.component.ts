import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-scss';
  nestedLists = [
    {
      label: 'Item 1',
      children: []
    },
    {
      label: 'Item 2',
      children: [
        {
          label: 'Item 2a',
          children: []
        },
        {
          label: 'Item 2b',
          children: []
        },
        {
          label: 'Item 2c',
          children: []
        }
      ]
    },
    {
      label: 'Item 3',
      children: [
        {
          label: 'Item 3a',
          children: []
        },
        {
          label: 'Item 3b',
          children: []
        },
        {
          label: 'Item 3c',
          children: []
        }
      ]
    }
  ];
}
