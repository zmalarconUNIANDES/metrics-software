import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urlBuilder } from '@app/commons/utils/url-builder';
import { environment as ENV } from '@environment';
import { HttpClient } from '@angular/common/http';
import {
  AddArtistToCollectorFavorites,
  Collector
} from '@modules/collectors/entities/colllector.interface';

@Injectable()
export class CollectorService {
  constructor(private http: HttpClient) {}

  public fetchCollectors(): Observable<Collector[]> {
    const url = urlBuilder.services(ENV.api.services.collectors.base);

    return this.http.get<Collector[]>(url);
  }

  public getCollector(id: string): Observable<Collector> {
    const url = urlBuilder.services(
      `${ENV.api.services.collectors.base}/${id}`
    );

    return this.http.get<Collector>(url);
  }

  public addMusician(
    data: AddArtistToCollectorFavorites
  ): Observable<Collector> {
    const url = urlBuilder.services(ENV.api.services.collectors.add_musician, {
      ...data
    });

    return this.http.post<Collector>(url, {});
  }

  public removeMusician(
    data: AddArtistToCollectorFavorites
  ): Observable<Collector> {
    const url = urlBuilder.services(ENV.api.services.collectors.add_musician, {
      ...data
    });

    return this.http.delete<Collector>(url, {});
  }
}
