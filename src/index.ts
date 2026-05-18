/**
 * @amlplugins/shopify-app-bridge
 *
 * Thin namespaced re-export of the native @shopify/app-bridge SDK.
 *
 * Symmetry rule (.claude/rules/definitions/ageni.md): every @amlplugins/google-*
 * package shares this shape — a single root index re-exporting the wrapped
 * vendor SDK with zero domain modeling on top.
 *
 * Shopify App Bridge — embedded admin app framework with iframe-bridged actions, navigation, toast, resource picker.
 */

import * as _sdk from "@shopify/app-bridge";
export * from "@shopify/app-bridge";
export { _sdk as sdk };
export default _sdk;

import * as _secondary from "@shopify/app-bridge-react";
export * as secondary from "@shopify/app-bridge-react";
export { _secondary };
