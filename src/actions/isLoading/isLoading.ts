export const LOADING = 'LOADING';
export const LOADED = 'LOADED';

interface LoadingI {
  type: typeof LOADING;
}

export const loading = (): LoadingI => ({
  type: LOADING,
});

export interface LoadedI {
  type: typeof LOADED;
}

export const loaded = (): LoadedI => ({
  type: LOADED,
});

export type isLoadingActionTypes = LoadingI | LoadedI;
