import { Component } from '@angular/core';
import LedgerLiveApi, { WindowMessageTransport } from '@ledgerhq/live-app-sdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  api: LedgerLiveApi = new LedgerLiveApi(new WindowMessageTransport());

  async ngOnInit() {
    this.api.connect();
    console.log(await this.api.listAccounts());
    console.log(await this.api.listCurrencies());
  }
}
