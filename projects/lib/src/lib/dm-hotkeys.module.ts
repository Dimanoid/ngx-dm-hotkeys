import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DmHotkeysHelpComponent } from './dm-hotkeys-help/dm-hotkeys-help.component';

@NgModule({
    declarations: [
        DmHotkeysHelpComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        DmHotkeysHelpComponent
    ]
})
export class DmHotkeysModule { }
