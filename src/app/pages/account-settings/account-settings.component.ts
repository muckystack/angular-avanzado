import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  // Se puede crear la referencia del elemento y mandarla como argumento al servicio

  constructor(private settingsServices:SettingsService) { }

  ngOnInit(): void {
    this.settingsServices.checkCurrentTheme();
  }
  
  changeTheme(theme:String) {
    this.settingsServices.changeTheme(theme);
  }

}
