import { InjectionToken, Provider } from '@angular/core';
import { IUrlBuilderFactoryOptions, UrlBuilderInjectionToken, UrlBuilderToken } from '../types';

export class UrlBuilderFactory {
  public static readonly API_TOKEN: UrlBuilderInjectionToken = new InjectionToken(UrlBuilderToken.API);

  public static inject(options: IUrlBuilderFactoryOptions): Provider {
    return {
      provide: options.injectionToken,
      useFactory: () => new UrlBuilderFactory(options.basePath)
    };
  }
  constructor(
    private basePath: string
  ) {}

  public buildUrl(...paths: string[]): string {
    return paths.join('/');
  }

  public buildUrlWithBasePath(...paths: string[]): string {
    return this.buildUrl(this.basePath, ...paths);
  }
}
