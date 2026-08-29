// Unified-Sovereign-Activation-Kernel-Class-300.ts

import { INITIAL_SOVEREIGN_ENGINES } from "./Unified-Sovereign-Engine-Registry-Initial-Engines-Class-300";
import { UnifiedSovereignEngineRegistryClass300 } from "./Unified-Sovereign-Engine-Registry-Class-300";

import { UnifiedSovereignMetaOrchestratorClass300 } from "./Unified-Sovereign-Meta-Orchestrator-Class-300";
import { UnifiedSovereignDashboardClass300 } from "./Unified-Sovereign-Dashboard-Class-300";
import { UnifiedSovereignConsoleClass300 } from "./Unified-Sovereign-Console-Class-300";
import { UnifiedSovereignInterfaceLayerClass300 } from "./Unified-Sovereign-Interface-Layer-Class-300";

export interface ActivationKernelContext {
  registry: UnifiedSovereignEngineRegistryClass300;
  orchestrator: UnifiedSovereignMetaOrchestratorClass300;
  dashboard: UnifiedSovereignDashboardClass300;
  console: UnifiedSovereignConsoleClass300;
  interfaceLayer: UnifiedSovereignInterfaceLayerClass300;
}

export class UnifiedSovereignActivationKernelClass300 {
  constructor(
    private readonly registryPersistence: any,
    private readonly executor: any
  ) {}

  async boot(): Promise<ActivationKernelContext> {
    const registry = new UnifiedSovereignEngineRegistryClass300(
      this.registryPersistence
    );

    const snapshot = await registry.initializeRegistry(INITIAL_SOVEREIGN_ENGINES);

    const orchestrator = new UnifiedSovereignMetaOrchestratorClass300(
      this.executor
    );

    const dashboard = new UnifiedSovereignDashboardClass300();

    const console = new UnifiedSovereignConsoleClass300(
      snapshot,
      orchestrator,
      dashboard
    );

    const interfaceLayer = new UnifiedSovereignInterfaceLayerClass300(
      snapshot,
      orchestrator,
      dashboard
    );

    return {
      registry,
      orchestrator,
      dashboard,
      console,
      interfaceLayer
    };
  }
}
