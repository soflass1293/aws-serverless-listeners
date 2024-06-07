// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import {
  applyDensity,
  disableMotion,
  Density,
} from "@cloudscape-design/global-styles";
import "@cloudscape-design/global-styles/index.css";
import * as localStorage from "./local-storage";

type CustomWindow = Window & {
  disableMotionForTests: (disa: boolean, target?: Element) => void;
};
(window as unknown as CustomWindow).disableMotionForTests = disableMotion;

// always `true` in this design
export const isVisualRefresh = true;

export let currentDensity: Density =
  localStorage.load("Awsui-Density-Preference") ?? Density.Comfortable;
applyDensity(currentDensity);

export function updateDensity(density: string) {
  applyDensity(density as Density);
  localStorage.save("Awsui-Density-Preference", density);
  currentDensity = density as Density;
}
