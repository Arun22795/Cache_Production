import { CheckCacheModule } from './check-cache.module';

describe('CheckCacheModule', () => {
  let checkCacheModule: CheckCacheModule;

  beforeEach(() => {
    checkCacheModule = new CheckCacheModule();
  });

  it('should create an instance', () => {
    expect(checkCacheModule).toBeTruthy();
  });
});
