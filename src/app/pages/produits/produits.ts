import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-produits',
  imports: [CommonModule, DialogModule, ButtonModule],
  templateUrl: './produits.html',
  styleUrl: './produits.scss'
})
export class Produits {
  // Toutes les certifications disponibles
  allCertifications = [
    'CE', 'NF', 'Acotherm', 'A2P', 'EN 1634-1', 'EI60', 'EN 60335', 
    'EN 13241-1', 'IP65', 'SGS', 'ISO 9001', 'Qualibat', 'RGE', 
    'NF EN 14351-1', 'CSTBat', 'Kitemark', 'BBA'
  ];

  // Toutes les finitions disponibles
  allFinitions = [
    { id: 'aluminium', name: 'Aluminium', color: '#E5E7EB', icon: '🏗️' },
    { id: 'bois', name: 'Bois', color: '#92400E', icon: '🪵' },
    { id: 'peinture', name: 'Peinture', color: 'linear-gradient(45deg, #EF4444, #3B82F6, #10B981)', icon: '🎨' },
    { id: 'noir', name: 'Noir', color: '#111827', icon: '⚫' },
    { id: 'blanc', name: 'Blanc', color: '#F3F4F6', textColor: 'text-gray-900', icon: '⚪' },
    { id: 'bronze', name: 'Bronze', color: '#B45309', icon: '🟤' },
    { id: 'anthracite', name: 'Anthracite', color: '#374151', icon: '🔘' },
    { id: 'verre', name: 'Verre', color: 'linear-gradient(45deg, #60A5FA, #A5B4FC)', icon: '🔮' }
  ];

  produits: any[] = [
    {
      id: 1,
      name: 'Portes coulissantes premium',
      role: 'Système coulissant élégant pour terrasses',
      images: [
        'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop'
      ],
      description: 'Nos portes coulissantes premium offrent un système d\'ouverture fluide et silencieux. Conçues avec des matériaux de haute qualité, elles assurent une isolation thermique et acoustique exceptionnelle.',
      prix: 1500,
      categorie: 'Portes coulissantes',
      materiaux: 'Aluminium anodisé',
      finitions: ['aluminium', 'noir', 'peinture'],
      dimensions: 'H: 210cm x L: 180cm',
      resistance: 'Classe 4 (vent violent)',
      certification: ['CE', 'NF', 'Acotherm'],
      avantages: [
        'Isolation thermique renforcée',
        'Sécurité anti-effraction',
        'Système coulissant silencieux',
        'Entretien minimal'
      ],
      madeInCanada: true
    },
    {
      id: 2,
      name: "Porte d'entrée contemporaine",
      role: 'Porte principale avec finition anodisée',
      images: [
        'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop'
      ],
      description: 'Porte d\'entrée contemporaine avec finition anodisée de haute qualité. Design épuré offrant sécurité et élégance pour votre habitation.',
      prix: 2200,
      categorie: "Portes d'entrée",
      materiaux: 'Acier laqué',
      finitions: ['anthracite', 'noir', 'peinture', 'bronze'],
      dimensions: 'H: 215cm x L: 90cm',
      resistance: 'Classe 3 anti-effraction',
      certification: ['A2P', 'CE', 'ISO 9001'],
      avantages: [
        '3 points de fermeture',
        'Double joint d\'étanchéité',
        'Paumelles renforcées',
        'Vitrage feuilleté'
      ],
      madeInCanada: true
    },
    {
      id: 3,
      name: 'Porte-fenêtre battante',
      role: 'Ouverture sur jardin avec large vitrage',
      images: [
        'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop'
      ],
      description: 'Porte-fenêtre battante avec large vitrage offrant une vue dégagée sur votre extérieur. Parfaite pour créer une continuité entre intérieur et jardin.',
      prix: 1800,
      categorie: 'Portes-fenêtres',
      materiaux: 'Bois/alu',
      finitions: ['bois', 'aluminium', 'peinture'],
      dimensions: 'H: 220cm x L: 140cm',
      resistance: 'Étanchéité A4',
      certification: ['CE', 'NF', 'Qualibat'],
      avantages: [
        'Double vitrage 4/16/4',
        'Ouverture à 90°',
        'Grille de ventilation intégrée',
        'Poignée sécurisée'
      ],
      madeInCanada: true
    },
    {
      id: 4,
      name: 'Porte coupe-feu',
      role: 'Certifiée EI60 pour sécurité incendie',
      images: [
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=2070&auto=format&fit=crop'
      ],
      description: 'Porte coupe-feu certifiée EI60 offrant une résistance au feu de 60 minutes. Conforme aux normes de sécurité incendie les plus strictes.',
      prix: 2500,
      categorie: 'Portes techniques',
      materiaux: 'Acier galvanisé',
      finitions: ['blanc', 'peinture'],
      dimensions: 'H: 210cm x L: 100cm',
      resistance: 'EI60',
      certification: ['EN 1634-1', 'EI60', 'ISO 9001'],
      avantages: [
        'Résistance feu 60 min',
        'Joint intumescent',
        'Fermeture automatique',
        'Pare-flamme'
      ],
      madeInCanada: true
    },
    {
      id: 5,
      name: 'Baie vitrée motorisée',
      role: "Système d'ouverture automatique",
      images: [
        'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop'
      ],
      description: 'Baie vitrée coulissante avec motorisation intégrée. Commandez l\'ouverture depuis votre smartphone ou une télécommande.',
      prix: 3500,
      categorie: 'Baies coulissantes',
      materiaux: 'Aluminium',
      finitions: ['aluminium', 'blanc', 'bronze', 'peinture'],
      dimensions: 'H: 230cm x L: 300cm',
      resistance: 'Classe 4',
      certification: ['CE', 'NF', 'EN 60335', 'RGE'],
      avantages: [
        'Motorisation silencieuse',
        'Commande à distance',
        'Détection d\'obstacles',
        'Programmation horaire'
      ],
      madeInCanada: true
    },
    {
      id: 6,
      name: 'Porte de garage aluminium',
      role: 'Porte sectionnelle isolée',
      images: [
        'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop'
      ],
      description: 'Porte de garage sectionnelle en aluminium avec isolation renforcée. Design moderne et fonctionnalité optimale.',
      prix: 2800,
      categorie: 'Portes de garage',
      materiaux: 'Aluminium isolé',
      finitions: ['anthracite', 'blanc', 'peinture'],
      dimensions: 'H: 220cm x L: 250cm',
      resistance: 'Étanchéité IP44',
      certification: ['NF', 'CE', 'CSTBat'],
      avantages: [
        'Isolation thermique',
        'Motorisation incluse',
        'Bandes d\'étanchéité',
        'Sécurité anti-pincement'
      ],
      madeInCanada: true
    },
    {
      id: 7,
      name: 'Porte pivotante luxe',
      role: 'Design exclusif pour intérieurs',
      images: [
        'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop'
      ],
      description: 'Porte pivotante de luxe avec système d\'ouverture innovant. Idéale pour les espaces intérieurs design.',
      prix: 4200,
      categorie: 'Portes intérieures',
      materiaux: 'Verre feuilleté',
      finitions: ['verre', 'peinture'],
      dimensions: 'H: 230cm x L: 110cm',
      resistance: 'EN 12600',
      certification: ['CE', 'SGS', 'BBA'],
      avantages: [
        'Système pivot invisible',
        'Verre sécurit feuilleté',
        'Finition sur-mesure',
        'Silencieux'
      ],
      madeInCanada: true
    },
    {
      id: 8,
      name: 'Porte industrielle',
      role: 'Pour ateliers et entrepôts',
      images: [
        'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=2070&auto=format&fit=crop'
      ],
      description: 'Porte industrielle robuste pour ateliers et entrepôts. Conçue pour résister aux conditions difficiles.',
      prix: 3200,
      categorie: 'Portes industrielles',
      materiaux: 'Acier galvanisé',
      finitions: ['aluminium', 'peinture'],
      dimensions: 'H: 300cm x L: 400cm',
      resistance: 'IP65',
      certification: ['EN 13241-1', 'IP65', 'Kitemark'],
      avantages: [
        'Haute résistance',
        'Isolation phonique',
        'Motorisation industrielle',
        'Faible maintenance'
      ],
      madeInCanada: true
    }
  ];

  selectedProduit: any = null;
  dialogVisible: boolean = false;

  showDialog(produit: any) {
    this.selectedProduit = produit;
    this.dialogVisible = true;
  }

  getMainImage(produit: any): string {
    return produit.images ? produit.images[0] : '';
  }

  // Vérifie si une finition est disponible pour le produit
  hasFinition(produit: any, finitionId: string): boolean {
    return produit.finitions && produit.finitions.includes(finitionId);
  }

  // Vérifie si une certification est présente pour le produit
  hasCertification(produit: any, cert: string): boolean {
    return produit.certification && produit.certification.includes(cert);
  }

  // Obtenir les finitions du produit
  getProduitFinitions(produit: any): any[] {
    if (!produit.finitions) return [];
    return this.allFinitions.filter(f => produit.finitions.includes(f.id));
  }

  // Fermer le dialog et réinitialiser
  closeDialog() {
    this.dialogVisible = false;
    this.selectedProduit = null;
  }
}