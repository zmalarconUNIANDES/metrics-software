import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollectorService } from '@modules/collectors/services/collector.service';
import { Collector } from '@modules/collectors/entities/colllector.interface';

@Component({
  selector: 'app-collector-detail',
  templateUrl: './collector-detail.component.html',
  styleUrls: ['./collector-detail.component.css']
})
export class CollectorDetailComponent implements OnInit {
  public collector: Collector;

  constructor(
    private service: CollectorService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.service
      .getCollector(this.route.snapshot.params.id)
      .subscribe((collector: Collector) => (this.collector = collector));
  }
}
