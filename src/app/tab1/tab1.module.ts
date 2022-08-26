import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { RectModule } from '../components/rect/rect.module';
import { MatrixModule } from '../components/matrix/matrix.module';
import { WinModalComponent } from '../components/win-modal/win-modal.component';
import { Vibration } from '@awesome-cordova-plugins/vibration/ngx';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    MatrixModule
  ],
  declarations: [Tab1Page, WinModalComponent],
  providers: [Vibration, ScreenOrientation]
})
export class Tab1PageModule {}
