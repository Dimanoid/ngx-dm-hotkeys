import { fakeAsync } from '@angular/core/testing';
import { SpectatorHost, createHostFactory } from '@ngneat/spectator/jest';

import { DmHotkeysService } from '../dm-hotkeys.service';
import { DmHotkeysHelpComponent } from './dm-hotkeys-help.component';

describe('DmHotkeysComponent', () => {
    let spectator: SpectatorHost<DmHotkeysHelpComponent>;
    const createHost = createHostFactory({
        component: DmHotkeysHelpComponent,
        providers: [DmHotkeysService]
    });

    it('should be created', fakeAsync(() => {
        spectator = createHost(`<dm-hotkeys-help></dm-hotkeys-help>`);
        expect(spectator.component).toBeTruthy();
    }));

});
