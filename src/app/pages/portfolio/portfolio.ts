import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule, DialogModule, ButtonModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio {
  dialogVisible = false;
  selectedRealisation: any = null;

  realisations: any[] = [
    {
      id: 1,
      name: 'Portes coulissantes premium',
      description: 'Système coulissant élégant pour terrasses avec rails invisibles et fermeture amortie',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop',
      date: 'Janvier 2025',
      lieu: 'Montréal, Québec',
      architecte: 'Studio ArchiDesign',
      entrepreneur: 'Construction Rénovex',
      produitsUtilises: ['Porte coulissante Alu 4500', 'Verre feuilleté 44.2', 'Quincaillerie Fapim'],
      finitions: ['Brossé naturel', 'Aluminium brossé', 'Verre clair']
    },
    {
      id: 2,
      name: 'Porte d\'entrée contemporaine',
      description: 'Porte principale avec finition anodisée brossé et vitrage feuilleté',
      image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070&auto=format&fit=crop',
      date: 'Décembre 2024',
      lieu: 'Laval, Québec',
      architecte: 'Atelier Blanc',
      entrepreneur: 'Menuiserie Prestige',
      produitsUtilises: ['Porte Premium Line', 'Vitrage acoustique 44.1', 'Serrure multipoints'],
      finitions: ['Gris anthracite', 'Noir mat', 'Inox brossé']
    },
    {
      id: 3,
      name: 'Porte-fenêtre battante',
      description: 'Ouverture sur jardin avec large vitrage et seuil plat accessible PMR',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=2070&auto=format&fit=crop',
      date: 'Novembre 2024',
      lieu: 'Brossard, Québec',
      architecte: 'Architecture Nova',
      entrepreneur: 'Fenêtres Québec',
      produitsUtilises: ['Porte-fenêtre Concept 78', 'Vitrage 3 vitrages', 'Poignée design'],
      finitions: ['Blanc pur', 'Gris clair', 'Bois thermochauffé']
    },
    {
      id: 4,
      name: 'Porte coupe-feu',
      description: 'Certifiée EI60 pour sécurité incendie, habillage bois thermolaqué',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop',
      date: 'Octobre 2024',
      lieu: 'Québec, Québec',
      architecte: 'Bureau Technique H',
      entrepreneur: 'Sécurité Portes',
      produitsUtilises: ['Porte coupe-feu EI60', 'Ferme-porte hydraulique', 'Joints intumescents'],
      finitions: ['Chêne clair', 'Mélaminé blanc', 'Stratifié chêne']
    },
    {
      id: 5,
      name: 'Baie vitrée motorisée',
      description: 'Système d\'ouverture automatique avec détecteur de pluie et télécommande',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop',
      date: 'Septembre 2024',
      lieu: 'Gatineau, Québec',
      architecte: 'Design+',
      entrepreneur: 'Automatisme Portes',
      produitsUtilises: ['Baie motorisée SmartSlide', 'Motorisation Somfy', 'Détecteur de pluie'],
      finitions: ['Noir mat', 'Blanc', 'Gris anthracite']
    },
    {
      id: 6,
      name: 'Porte de garage aluminium',
      description: 'Porte sectionnelle isolée avec motorisation silencieuse et éclairage LED',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop',
      date: 'Août 2024',
      lieu: 'Longueuil, Québec',
      architecte: 'Groupe Axis',
      entrepreneur: 'Garacier Pro',
      produitsUtilises: ['Porte sectionnelle AluTherm', 'Motorisation Silencio', 'Éclairage LED'],
      finitions: ['Gris perle', 'Blanc', 'Brun']
    },
    {
      id: 7,
      name: 'Porte pivotante luxe',
      description: 'Design exclusif pour intérieurs, quincaillerie apparente finition or brossé',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop',
      date: 'Juillet 2024',
      lieu: 'Mont-Royal, Québec',
      architecte: 'Luxury Design Studio',
      entrepreneur: 'Ébénisterie d\'art',
      produitsUtilises: ['Porte pivotante Signature', 'Paumelles apparentes or brossé'],
      finitions: ['Or brossé', 'Noyer', 'Laque mate']
    },
    {
      id: 8,
      name: 'Porte industrielle',
      description: 'Pour ateliers et entrepôts, isolation renforcée et passage haute cadence',
      image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=2070&auto=format&fit=crop',
      date: 'Juin 2024',
      lieu: 'Sherbrooke, Québec',
      architecte: 'Industriel Design',
      entrepreneur: 'Portes Industrielles QC',
      produitsUtilises: ['Porte industrielle Rapid 2000', 'Isolation polyuréthane', 'Système anti-panic'],
      finitions: ['Gris métallisé', 'Bleu canard', 'Rouge sécurité']
    },
    {
      id: 9,
      name: 'Porte balcon',
      description: 'Accès sécurisé aux balcons, vitrage feuilleté et serrure multipoints',
      image: 'https://images.unsplash.com/photo-1617103996702-96ff29b1c467?q=80&w=2032&auto=format&fit=crop',
      date: 'Mai 2024',
      lieu: 'Trois-Rivières, Québec',
      architecte: 'Habitat Design',
      entrepreneur: 'Menuiserie Moderne',
      produitsUtilises: ['Porte-balcon Harmony', 'Vitrage feuilleté 33.2', 'Serrure 3 points'],
      finitions: ['Blanc', 'Gris souris', 'Chêne doré']
    },
    {
      id: 10,
      name: 'Porte à galandage',
      description: 'Système coulissant encastré pour optimiser l\'espace, finition laquée',
      image: 'https://images.unsplash.com/photo-1617103996702-96ff29b1c467?q=80&w=2032&auto=format&fit=crop',
      date: 'Avril 2024',
      lieu: 'Rimouski, Québec',
      architecte: 'Espace & Mouvement',
      entrepreneur: 'Agencement Rive',
      produitsUtilises: ['Kit galandage 80 kg', 'Porte laquée', 'Poignée encastrée'],
      finitions: ['Laque blanc', 'Laque gris', 'Laque bleu nuit']
    },
    {
      id: 11,
      name: 'Fenêtre oscillo-battante',
      description: 'Double vitrage haute performance, ouverture 2 positions',
      image: 'https://images.unsplash.com/photo-1617103996702-96ff29b1c467?q=80&w=2032&auto=format&fit=crop',
      date: 'Mars 2024',
      lieu: 'Saguenay, Québec',
      architecte: 'Atelier Fenêtre',
      entrepreneur: 'Vitrerie Plus',
      produitsUtilises: ['Fenêtre Oscillo 1200', 'Double vitrage 4-16-4', 'Crémone standard'],
      finitions: ['Blanc', 'Gris', 'Bois']
    },
    {
      id: 12,
      name: 'Véranda sur mesure',
      description: 'Structure aluminium, toiture vitrée avec stores intégrés',
      image: 'https://images.unsplash.com/photo-1617103996702-96ff29b1c467?q=80&w=2032&auto=format&fit=crop',
      date: 'Février 2024',
      lieu: 'Drummondville, Québec',
      architecte: 'Véranda Design',
      entrepreneur: 'Alu Concept',
      produitsUtilises: ['Structure alu 120 mm', 'Toiture vitrée 44.2', 'Stores électriques'],
      finitions: ['Blanc', 'Gris anthracite', 'Bois thermochauffé']
    }
  ];

  openDialog(realisation: any) {
    this.selectedRealisation = realisation;
    this.dialogVisible = true;
  }

  closeDialog() {
    this.dialogVisible = false;
    this.selectedRealisation = null;
  }
}