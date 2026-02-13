import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { MessageModule } from 'primeng/message';

interface ContactForm {
    first_name: string;
    last_name: string;
    company: string;
    email: string;
    message: string;
}

@Component({
  selector: 'app-contact',
  imports: [
    CommonModule, 
    FormsModule, 
    ButtonModule, 
    InputTextModule, 
    TextareaModule,
    MessageModule
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  contact: ContactForm = {
    first_name: '',
    last_name: '',
    company: '',
    email: '',
    message: ''
  };
  
  submitted = false;
  loading = false;

  onSubmit(form: any) {
    this.loading = true;
    
    // Envoi à Formspree
    fetch('https://formspree.io/f/mwvqqwbe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.contact)
    })
    .then(response => {
      if (response.ok) {
        // ✅ SUCCÈS : Afficher confirmation + vider formulaire
        this.submitted = true;
        this.loading = false;
        
        // Vider tous les champs
        this.contact = {
          first_name: '',
          last_name: '',
          company: '',
          email: '',
          message: ''
        };
        
        // Réinitialiser l'état du formulaire (ng-touched, etc.)
        form.resetForm();
        
        // Cacher le message après 5 secondes
        setTimeout(() => {
          this.submitted = false;
        }, 5000);
      } else {
        // ❌ ERREUR
        this.loading = false;
        alert('Erreur lors de l\'envoi. Réessaie plus tard.');
      }
    })
    .catch(error => {
      console.error('Erreur:', error);
      this.loading = false;
      alert('Erreur de connexion. Vérifie ta connexion internet.');
    });
  }
}