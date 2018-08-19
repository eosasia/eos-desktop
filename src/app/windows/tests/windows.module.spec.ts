import { WindowsModule } from './windows.module';

describe('WindowsModule', () => {
  let windowsModule: WindowsModule;

  beforeEach(() => {
    windowsModule = new WindowsModule();
  });

  it('should create an instance', () => {
    expect(windowsModule).toBeTruthy();
  });
});
