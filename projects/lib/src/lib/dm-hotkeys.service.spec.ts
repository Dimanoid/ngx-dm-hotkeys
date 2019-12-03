import { createServiceFactory, SpectatorService } from '@ngneat/spectator';

import { DmHotkeysService } from './dm-hotkeys.service';

describe('DmHotkeysService', () => {
    let spectator: SpectatorService<DmHotkeysService>;
    const createService = createServiceFactory(DmHotkeysService);

    beforeEach(() => spectator = createService());

    it('should be created', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should not has default value', () => {
        const v = spectator.service.getValue();
        expect(v).toBeUndefined();
    });

    it('should set new value', () => {
        spectator.service.setValue(42);
        const v = spectator.service.getValue();
        expect(v).toEqual(42);
    });
});
