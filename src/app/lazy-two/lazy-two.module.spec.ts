import { LazyTwoModule } from './lazy-two.module';

describe('LazyTwoModule', () => {
  let lazyTwoModule: LazyTwoModule;

  beforeEach(() => {
    lazyTwoModule = new LazyTwoModule();
  });

  it('should create an instance', () => {
    expect(lazyTwoModule).toBeTruthy();
  });
});
