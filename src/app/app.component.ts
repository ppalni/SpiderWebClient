import { Component } from '@angular/core';
import { SidenavItem } from './core/layout/sidenav/sidenav-item/sidenav-item.interface';
import { SidenavService } from './core/layout/sidenav/sidenav.service';

@Component({
  selector: 'fury-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(sidenavService: SidenavService) {
    const menu: SidenavItem[] = [];


    const level5 = {
      name: 'Level 5',
      routeOrFunction: '/level1/level2/level3/level4/level5'
    };

    const level4 = {
      name: 'Level 4',
      subItems: [level5]
    };

    const level3 = {
      name: 'Level 3',
      subItems: [level4]
    };

    const level2 = {
      name: 'Level 2',
      subItems: [level3]
    };

    const level1 = {
      name: 'Level 1',
      subItems: [level2]
    };


    menu.push({
      name: 'PATIENT RECORDS',
      position: 5,
      type: 'subheading',
      customClass: 'first-subheading'
    });

    menu.push({
      name: 'Inpatients',
      routeOrFunction: '/dashboard',
      icon: 'dashboard',
      position: 10,
      pathMatchExact: true,
      subItems: [{name: 'Ward'}, {name: 'Emergency'}]
    });

    menu.push({
      name: 'Outpatients',
      routeOrFunction: '/dashboard',
      icon: 'inbox',
      position: 15,
      badge: '22',
      badgeColor: '#673ab7'
    });

    menu.push({
      name: 'DEPARTMENTS',
      position: 20,
      type: 'subheading',
      customClass: 'subheading'
    });

    menu.push({
      name: 'Cardiology',
      routeOrFunction: '/dashboard',
      icon: 'dashboard',
      position: 25,
      pathMatchExact: true
    });

    menu.push({
      name: 'Neurology',
      routeOrFunction: '/dashboard',
      icon: 'inbox',
      position: 30,
      badge: '22',
      badgeColor: '#673ab7'
    });

    menu.push({
      name: 'Endocrinology',
      routeOrFunction: '/dashboard',
      icon: 'chat',
      position: 35,
      badge: '14',
      badgeColor: '#009688'
    });

    menu.push({
      name: 'Urology',
      routeOrFunction: '/dashboard',
      icon: 'date_range',
      position: 25
    });

    menu.push({
      name: 'Paediatrics',
      routeOrFunction: '/dashboard',
      icon: 'assignment',
      position: 30
    });

    menu.push({
      name: 'PATHOLOGY',
      type: 'subheading',
      position: 35
    });

    menu.push({
      name: 'Appointments',
      routeOrFunction: '/dashboard',
      icon: 'layers',
      position: 40
    });

    menu.push({
      name: 'Reports',
      routeOrFunction: '/dashboard',
      icon: 'layers',
      position: 45
    });

    menu.push({
      name: 'RADIOLOGY/NUCLEAR MEDICINE',
      type: 'subheading',
      position: 50
    });

    menu.push({
      name: 'Appointments',
      routeOrFunction: '/dashboard',
      icon: 'layers',
      position: 55
    });

    menu.push({
      name: 'Reports',
      routeOrFunction: '/dashboard',
      icon: 'layers',
      position: 60
    });

    menu.push({
      name: 'ADMINISTRATION',
      type: 'subheading',
      position: 65
    });

    menu.push({
      name: 'Form Masters',
      routeOrFunction: '/dashboard',
      icon: 'layers',
      position: 70
    });

    menu.push({
      name: 'Notifications',
      routeOrFunction: '/dashboard',
      icon: 'layers',
      position: 75
    });

    // Send all created Items to SidenavService
    menu.forEach(item => {sidenavService.addItem(item); });
  }
}
