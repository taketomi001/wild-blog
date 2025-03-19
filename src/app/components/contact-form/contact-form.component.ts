import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Message } from '../../model/message.model';

@Component({
  selector: 'app-contact-form',
  imports: [FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {
  newMessage: Message = {
    lastname: '',

    firstname: '',

    email: '',

    content: '',
  };
  onSubmit(): void {
    console.log('Formulaire envoyé !');
  }
}
