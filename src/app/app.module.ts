import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeFrExtra from '@angular/common/locales/extra/fr';
import localeFr from '@angular/common/locales/fr';
import { LOCALE_ID, NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from './../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { InfoModalComponent } from './core/components/info-modal/info-modal.component';
import { FooterComponent } from './core/pages/footer/footer.component';
import { HeaderComponent } from './core/pages/header/header.component';
import { MentionsLegalesComponent } from './core/pages/mentions-legales/mentions-legales.component';
import { OrderModule } from './order/order.module';
import { SharedModule } from './shared/shared.module';

registerLocaleData(localeFr, 'fr-FR', localeFrExtra);
@NgModule({
  declarations: [AppComponent, MentionsLegalesComponent, InfoModalComponent, FooterComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    provideFirestore(() => {
      const firestore = getFirestore();
      // TODO: Pour avoir un émulateur en mode dev, a voir plus tard
      // connectFirestoreEmulator(firestore, 'localhost', 8080);
      // TODO: Pour sauvegarder les données de la db dans le cache pour rationaliser les appels. A voir dans un second temps
      // enableIndexedDbPersistence(firestore);
      return firestore;
    }),
    BrowserAnimationsModule,
    SharedModule,
    OrderModule,
    AuthModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    HttpClientModule,
    MatCheckboxModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' }],
  bootstrap: [AppComponent],
})
export class AppModule { }
