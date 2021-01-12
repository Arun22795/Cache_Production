import { LazyOneModule } from './lazy-one.module';

describe('LazyOneModule', () => {
  let lazyOneModule: LazyOneModule;

  beforeEach(() => {
    lazyOneModule = new LazyOneModule();
  });

  it('should create an instance', () => {
    expect(lazyOneModule).toBeTruthy();
  });
});
