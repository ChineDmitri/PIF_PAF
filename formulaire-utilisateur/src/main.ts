import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';  // Подставьте правильный путь к вашему AppModule


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
