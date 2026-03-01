/**
 * ExtAdapter — Cell Layer
 * Composes organelles per BIOLOGICAL_GOVERNANCE_CONSTITUTION §4.1
 * Layer: cell → depends on → organelle
 */

import { ExternalAdapterOrchestrator } from "@webwaka/organelle-external-adapter";
import { BoundaryContextOrchestrator } from "@webwaka/organelle-boundary-context";

export { ExternalAdapterOrchestrator } from '@webwaka/organelle-external-adapter';
export { BoundaryContextOrchestrator } from '@webwaka/organelle-boundary-context';

/**
 * ExtAdapter Composition
 * Assembles organelle-layer components into a cohesive cell-layer capability.
 */
export class ExtAdapterComposition {
  private externalAdapterOrchestrator: ExternalAdapterOrchestrator;
  private boundaryContextOrchestrator: BoundaryContextOrchestrator;

  constructor() {
    this.externalAdapterOrchestrator = new ExternalAdapterOrchestrator();
    this.boundaryContextOrchestrator = new BoundaryContextOrchestrator();
  }
}

export * from "./types";
