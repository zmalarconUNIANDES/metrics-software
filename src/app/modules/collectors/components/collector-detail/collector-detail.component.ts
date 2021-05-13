import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CollectorService } from '@modules/collectors/services/collector.service';
import { Collector } from '@modules/collectors/entities/colllector.interface';
import { removeSubscriptions } from '@app/commons/utils/util';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-collector-detail',
  templateUrl: './collector-detail.component.html',
  styleUrls: ['./collector-detail.component.scss']
})
export class CollectorDetailComponent implements OnInit, OnDestroy {
  public collector: Collector;

  private subscriptions: Subscription[] = [];

  constructor(
    private service: CollectorService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getCollector();
  }

  ngOnDestroy(): void {
    removeSubscriptions(this.subscriptions);
  }

  public removeArtistToFavorites(id: number): void {
    this.subscriptions.push(
      this.service
        .removeMusician({
          collectorId: this.id,
          musicianId: id.toString()
        })
        .subscribe(() => this.getCollector())
    );
  }

  private getCollector(): void {
    this.collector = undefined;
    this.subscriptions.push(
      this.service
        .getCollector(this.id)
        .subscribe((collector: Collector) => (this.collector = collector))
    );
  }

  get id(): string {
    return this.params.id;
  }

  get params(): Params {
    return this.route.snapshot.params;
  }
}
