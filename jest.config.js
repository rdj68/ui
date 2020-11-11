// Copyright 2017-2020 @polkadot/ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

const config = require('@polkadot/dev/config/jest.cjs');

module.exports = Object.assign({}, config, {
  moduleNameMapper: {
    '@polkadot/ledger-transports(.*)$': '<rootDir>/packages/ledger-transports/src/node',
    // eslint-disable-next-line sort-keys
    '@polkadot/ledger(.*)$': '<rootDir>/packages/ledger/src/$1',
    '@polkadot/react-(identicon|qr)(.*)$': '<rootDir>/packages/react-$1/src/$2',
    '@polkadot/reactnative-(identicon)(.*)$': '<rootDir>/packages/reactnative-$1/src/$2',
    '@polkadot/ui-(assets|keyring|settings|shared)(.*)$': '<rootDir>/packages/ui-$1/src/$2',
    '\\.(css|less)$': 'empty/object',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'empty/object'
  },
  resolver: '@polkadot/dev/config/jest-resolver.cjs'
});
