import { Module } from '@nestjs/common';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { IConfig } from 'config';

import { CONFIG } from '@microservice-vehicle/module-config/config.provider';
import { ConfigModule } from '@microservice-vehicle/module-config/config.module';

@Module({
  imports: [
    ConfigModule,
    ElasticsearchModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: IConfig) => ({
        node: configService.get('ELASTICSEARCH_NODE'),
        auth: {
          username: configService.get('ELASTICSEARCH_USERNAME'),
          password: configService.get('ELASTICSEARCH_PASSWORD'),
        },
      }),
      inject: [CONFIG],
    }),
  ],
  exports: [ElasticsearchModule],
})
export class SearchModule {}
