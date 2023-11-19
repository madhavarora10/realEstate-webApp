import NodeCache from 'node-cache';

export default class NodeCacheHelper {
  private static instance: NodeCache;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}

  public static getInstance(): NodeCache {
    if (!NodeCacheHelper.instance) {
      //   const options = {
      //     stdTTL: 100,
      //     checkperiod: 120,
      //   };
      NodeCacheHelper.instance = new NodeCache();
    }

    return NodeCacheHelper.instance;
  }
}
