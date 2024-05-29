export const ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REFRESH: '/auth/refresh',
    SSO: '/auth/sso',
  },
  KEYWORD: {
    REFRESH: '/auth/refresh',
    SSO: '/auth/sso',
  },
};

export const LOCAL_STORAGE_KEYS = {
  ACCESS_TOKEN: 'access_token',
  REFRESH_TOKEN: 'refresh_token',
  EXPIRED_TIME: 'expired_time',
  TOKEN_TYPE: 'token_type',
};

export const USER_MANAGEMENT_API_ENDPOINT = {
  GET_LIST_USER: 'api/v1/users',
  GET_DROPDOWN_FITLER: 'api/v1/users/get-data-dropdown-for-user',
};

export const KEYWORD_MANAGEMENT = {
  KEYWORD: 'api/v1/keywords',
  LIST_KEYWORD_GROUP: 'api/v1/keywords/get-data-dropdown-for-keyword',
  IMPORT_KEYWORD: 'api/v1/keywords/import-data',
  DUPLICATED_KEYWORD: 'api/v1/keywords/check-duplicate',
  DOWNLOAD_FILE:'api/v1/keywords/download-template'
};

export const KEYWORD_GROUP = {
  GROUP: 'api/v1/keyword-groups',
  LIST_KEYWORD_GROUP: 'api/v1/keywords/get-data-dropdown-for-keyword',
};
export const DATA_SELECTION_CRITERIA = {
  SELECTION_CRITERIA: 'api/v1/selection-criteria',
};

export const SCANNING_JOB = {
  JOB: 'api/v1/scan-jobs',
  LIST_CRITERIA: 'api/v1/selection-criteria/get-data-dropdown-for-criteria',
  HISTORY: 'api/v1/scan-job-histories',
  JOB_RESULT: 'api/v1/scan-job-results'
};

export const AUDIT_LOG = {
  LIST: 'api/v1/audit-logs',
  LIST_MODULE:'api/v1/audit-logs/get-data-dropdown-for-module'
};

export const GET_COUNTRY = {
  GET_COUNTRY_USER: 'api/v1/users/get-user-country-list'
};
export const ROLE_PERMISSION = {
  ROLE_USER:'api/v1/role_permission/get-role-user'
}
