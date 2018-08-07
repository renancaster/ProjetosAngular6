import { TarefasModuleModule } from './tarefas-module.module';

describe('TarefasModuleModule', () => {
  let tarefasModuleModule: TarefasModuleModule;

  beforeEach(() => {
    tarefasModuleModule = new TarefasModuleModule();
  });

  it('should create an instance', () => {
    expect(tarefasModuleModule).toBeTruthy();
  });
});
