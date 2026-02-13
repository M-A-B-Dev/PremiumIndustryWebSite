import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    standalone: true,
    imports: [CommonModule, RouterModule],
    selector: 'app-footer',
    template: `
        <div class="bg-surface-0 dark:bg-surface-950 px-6 md:px-12 lg:px-20 border-t border-surface-200 dark:border-surface-800">
            <div class="py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                
                <!-- Navigation links - order changes on mobile -->
                <div class="flex items-center justify-center sm:justify-start gap-6 order-2 sm:order-1">
                    <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" 
                       class="cursor-pointer text-base text-surface-600 dark:text-surface-400 font-medium leading-normal transition-colors duration-150 hover:text-primary dark:hover:text-primary">
                        Accueil
                    </a>
                    <a routerLink="/produits" routerLinkActive="active" 
                       class="cursor-pointer text-base text-surface-600 dark:text-surface-400 font-medium leading-normal transition-colors duration-150 hover:text-primary dark:hover:text-primary">
                        Produits
                    </a>
                    <a routerLink="/portfolio" routerLinkActive="active" 
                       class="cursor-pointer text-base text-surface-600 dark:text-surface-400 font-medium leading-normal transition-colors duration-150 hover:text-primary dark:hover:text-primary">
                        Portfolio
                    </a>
                    <a routerLink="/contact" routerLinkActive="active" 
                       class="cursor-pointer text-base text-surface-600 dark:text-surface-400 font-medium leading-normal transition-colors duration-150 hover:text-primary dark:hover:text-primary">
                        Contact
                    </a>
                </div>
                
                <!-- Logo + Brand - order changes on mobile -->
                <div class="flex items-center justify-center sm:justify-end gap-4 order-1 sm:order-2">
                    <a routerLink="/" class="flex items-center gap-4">
                        <img src="/demo/images/LogoPremium.png" alt="LogoPremium" class="h-10 w-auto" />
                    </a>
                </div>
            </div>
            
            <!-- Copyright line - plus épuré -->
            <div class="py-6 flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-surface-200 dark:border-surface-800">
                <div class="text-sm text-surface-500 dark:text-surface-400">
                    © 2025 Premium. Tous droits réservés.
                </div>
                <a target="_blank" href="https://github.com/M-A-B-Dev" 
                   class="text-sm text-surface-500 hover:text-surface-900 dark:text-surface-400 dark:hover:text-surface-0 transition-colors">
                    Développé par Marc-Antoine Boulet
                </a>
            </div>
        </div>
    `
})
export class AppFooter {}