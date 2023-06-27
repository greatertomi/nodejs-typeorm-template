import type { UserConfig } from '@commitlint/types';

const commitlintConfig: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-case': [2, 'always', 'lower-case']
  }
};

module.exports = commitlintConfig;
