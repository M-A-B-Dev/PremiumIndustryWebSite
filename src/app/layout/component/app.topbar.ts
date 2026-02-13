import { Component, inject, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';
import { LayoutService } from '@/app/layout/service/layout.service';

@Component({
    selector: 'app-topbar',
    standalone: true,
    imports: [RouterModule, CommonModule, StyleClassModule],
    template: `
        <div class="layout-topbar">
            <div class="layout-topbar-logo-container">
                <a class="layout-topbar-logo" routerLink="/">
                    <img class="layout-topbar-logo" src="/demo/images/LogoPremium.png" alt="Logo de Premium Industry (retour page accueil)" />
                </a>
            </div>

            <!-- MENU CENTRAL - Hidden on mobile -->
            <div class="layout-topbar-nav hidden lg:flex">
                <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Accueil</a>
                <a routerLink="/produits" routerLinkActive="active">Produits</a>
                <a routerLink="/portfolio" routerLinkActive="active">Portfolio</a>
                <a routerLink="/contact" routerLinkActive="active">Contact</a>
            </div>

            <div class="layout-topbar-actions">
                <!-- Dark mode toggle - Hidden on mobile, shown in dropdown -->
                <div class="layout-config-menu hidden lg:flex">
                    <button type="button" class="layout-topbar-action" (click)="toggleDarkMode()">
                        <i [ngClass]="{ 'pi ': true, 'pi-moon': layoutService.isDarkTheme(), 'pi-sun': !layoutService.isDarkTheme() }"></i>
                    </button>
                </div>

                <!-- Mobile menu button - Only shown on mobile -->
                <button
                    class="layout-topbar-menu-button layout-topbar-action lg:hidden"
                    pStyleClass="@next"
                    enterFromClass="hidden"
                    enterActiveClass="animate-scalein"
                    leaveToClass="hidden"
                    leaveActiveClass="animate-fadeout"
                    [hideOnOutsideClick]="true"
                >
                    <i class="pi pi-ellipsis-v"></i>
                </button>

                <!-- Mobile dropdown menu -->
                <div class="layout-topbar-menu hidden lg:block">
                    <div class="layout-topbar-menu-content">
                        <!-- Mobile navigation links -->
                        <div class="mobile-nav lg:hidden">
                            <a routerLink="/" routerLinkActive="active" class="layout-topbar-action">
                                <i class="pi pi-home"></i>
                                <span>Accueil</span>
                            </a>
                            <a routerLink="/produits" routerLinkActive="active" class="layout-topbar-action">
                                <i class="pi pi-box"></i>
                                <span>Produits</span>
                            </a>
                            <a routerLink="/portfolio" routerLinkActive="active" class="layout-topbar-action">
                                <i class="pi pi-images"></i>
                                <span>Portfolio</span>
                            </a>
                            <a routerLink="/contact" routerLinkActive="active" class="layout-topbar-action">
                                <i class="pi pi-envelope"></i>
                                <span>Contact</span>
                            </a>

                            <!-- Dark mode toggle for mobile -->
                            <button type="button" class="layout-topbar-action" (click)="toggleDarkMode()">
                                <i [ngClass]="{ 'pi ': true, 'pi-moon': layoutService.isDarkTheme(), 'pi-sun': !layoutService.isDarkTheme() }"></i>
                                <span>Mode Sombre/Clair</span>
                            </button>
                        </div>
                        <!--                         
                        Desktop menu FR-EN
                        <button class="layout-menu-button layout-topbar-action hidden lg:flex" (click)="toggleLang()">
                            <i>{{ currentLang }}</i>
                        </button> -->
                    </div>
                </div>
            </div>
        </div>
    `
})
export class AppTopbar {
    items!: MenuItem[];

    layoutService = inject(LayoutService);

    // currentLang: 'FR' | 'EN' = 'FR'; // FR par défaut

    // toggleLang() {
    //     this.currentLang = this.currentLang === 'FR' ? 'EN' : 'FR';
    //     console.log('Langue actuelle :', this.currentLang);
    // }

    toggleDarkMode() {
        this.layoutService.layoutConfig.update((state) => ({
            ...state,
            darkTheme: !state.darkTheme
        }));
    }
}
