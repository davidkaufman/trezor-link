/* @flow */

// export is empty, you can import by "trezor-link/parallel", "trezor-link/lowlevel", "trezor-link/bridge"

export type {Transport, AcquireInput, TrezorDeviceInfoWithSession, MessageFromTrezor} from './transport';

import BridgeTransport from './bridge';
import ExtensionTransport from './extension';
import ParallelTransport from './parallel';
import FallbackTransport from './fallback';

import 'whatwg-fetch';

BridgeTransport.setFetch(fetch);

export default {
  Bridge: BridgeTransport,
  Extension: ExtensionTransport,
  Parallel: ParallelTransport,
  Fallback: FallbackTransport,
};
