
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ConversationHistoryComponent } from './conversation-history/conversation-history.component';
import { ConversationControlComponent } from './conversation-control/conversation-control.component';
import { ConversationThreadComponent } from './conversation-thread/conversation-thread.component';
import { SendMessageComponent } from './send-message/send-message.component';
import { UserMessageComponent } from './user-message/user-message.component';
import { SenderMessageComponent } from './sender-message/sender-message.component';
import { ContactComponent } from './contact/contact.component';
import { Contacts } from './contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    ConversationControlComponent,
    ConversationHistoryComponent,
    ConversationThreadComponent,
    SendMessageComponent,
    UserMessageComponent,
    SenderMessageComponent,
    ContactComponent,
        Contacts,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
