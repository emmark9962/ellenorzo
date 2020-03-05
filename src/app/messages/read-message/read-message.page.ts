import { Component, OnInit } from '@angular/core';
import { KretaService } from 'src/app/_services/kreta.service';
import { Message } from 'src/app/_models/message';
import { DataService } from 'src/app/_services/data.service';
import { Router } from '@angular/router';
import { UserManagerService } from 'src/app/_services/user-manager.service';

@Component({
  selector: 'app-read-message',
  templateUrl: './read-message.page.html',
  styleUrls: ['./read-message.page.scss'],
})
export class ReadMessagePage implements OnInit {
  public message: Message;
  public sans: boolean;
  constructor(
    public userManager: UserManagerService,
    public data: DataService,
    private router: Router,
  ) {
    this.sans = true;
  }

  async ngOnInit() {
    let messageId = this.data.getData('messageId');
    this.message = await this.userManager.currentUser.getMessage(messageId);
    this.sans = false;
  }

  goBack() {
    this.router.navigateByUrl("/messages");
  }

}
