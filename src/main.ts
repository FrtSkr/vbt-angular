import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

/*
Proje ilk ayağa kalktığında tsconfig dosyaları çalıştırılır ve buradan main.ts dosyası çağrılır.
main.ts dosyası AppModule classına çağrıda bulunur ve proje burada hayata başlar.
AppModule dosyası da AppComponent'e çağrıda bulunur ve selector kontrolü sağlanır. AppComponente ait selector
nerede çağrıldıysa (index.html) o noktaya AppComponente ait templateUrl (app.component.html) render edilir.
*/
