import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urlBuilder } from '@app/commons/utils/url-builder';
import { environment as ENV } from '@environment';
import { HttpClient } from '@angular/common/http';
import { Collector } from '@modules/collectors/entities/colllector.interface';

@Injectable()
export class CollectorService {
  constructor(private http: HttpClient) {}

  public fetchCollectors(): Observable<Collector[]> {
    const url = urlBuilder.services(ENV.api.services.collectors);

    return this.http.get<Collector[]>(url);
  }

  public getCollector(id: string): Observable<Collector> {
    const url = urlBuilder.services(`${ENV.api.services.collectors}/${id}`);

    return this.http.get<Collector>(url);
  }
}
