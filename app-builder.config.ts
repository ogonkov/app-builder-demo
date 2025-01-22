import {type ServiceConfig, defineConfig} from '@gravity-ui/app-builder';

const config = defineConfig((): ServiceConfig => ({
    client: {
        newJsxTransform: true,
    }
}));

export default config;