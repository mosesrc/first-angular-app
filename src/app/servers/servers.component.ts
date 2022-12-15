import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: ` <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {
  allowNewServer: boolean = false;
  serverCreationStatus = 'No server was created';
  serverName = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {}

  onCreateServer(evt) {
    console.log(evt);
    this.serverCreationStatus = 'Server was Created';
  }

  onUpdateServerName(evt: Event) {
    this.serverName = (<HTMLInputElement>evt.target).value;
  }
}
