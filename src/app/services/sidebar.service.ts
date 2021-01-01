import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  public menu: any[] = [
    {
      title: 'Dashboard',
      icon: 'mdi mdi-gauge',
      submenu: [
        {
          title: 'Main',
          url: '/dashboard',
        },
        {
          title: 'ProgressBar',
          url: 'progress',
        },
        {
          title: 'Gráficas',
          url: 'grafica1',
        },
        {
          title: 'Promesas',
          url: 'promises',
        },
        {
          title: 'Rxjs',
          url: 'rxjs',
        },
      ],
    },
  ];

  constructor() {}
}
