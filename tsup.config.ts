import { defineConfig, Options as TsupOptions } from 'tsup';

import { TsupConfigBuilder } from './build/TsupConfigBuilder';

// @ts-ignore
import { name as packageName } from './package.json';

export default defineConfig((overrideOptions: TsupOptions) =>
    TsupConfigBuilder.withNewConfig(
        overrideOptions,
        [
        ],
        [
            'common-tags', // 可选库，如果不需要先在 package.json 中删除，再删除该依赖项
        ],
        packageName,
        true,
        // TsupConfigBuilder.ASSETS_PATH_PREFIX,
    ),
);