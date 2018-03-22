import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @ViewChild('floor_plan') floor_plan_canvas: ElementRef;

  type_data = {
    workshop: {radius: 8, clr: '#B9C3EA', clrhov: '#6E7FF5' },
    activity: {radius: 8, clr: '#B9C3EA', clrhov: '#6E7FF5' },
    food: {radius: 8, clr: 'green', clrhov: '#6E7FF5' },
    important: {radius: 16, clr: '#B9C3EA', clrhov: '#6E7FF5' }
  };

  marker_pos = [
    {x: 362, y: 215, type: 'workshop' },
    {x: 450, y: 270, type: 'workshop' },
    {x: 535, y: 326, type: 'workshop' },
    {x: 667, y: 215, type: 'workshop' },
    {x: 667, y: 330, type: 'workshop' }
  ];

  constructor() { }

  ngOnInit() {
    this.drawMarkers(null);
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e) {
    this.drawMarkers(e);
  }

  drawMarkers(e) {
    const canva = this.floor_plan_canvas.nativeElement;
    const ctx: CanvasRenderingContext2D = canva.getContext('2d');

    const rect = canva.getBoundingClientRect(),
      x = e ? e.clientX - rect.left : 0,
      y = e ? e.clientY - rect.top : 0;
    console.log('x:' + rect.left + ' y: ' + rect.top);
    console.log('x:' + x + ' y: ' + y);

    for (const m of this.marker_pos) {
      ctx.beginPath();
      ctx.moveTo(m.x, m.y);
      ctx.arc(m.x, m.y, this.type_data[m.type].radius, 0, Math.PI * 2);
      ctx.fillStyle = ctx.isPointInPath(x, y) ? this.type_data[m.type].clrhov : this.type_data[m.type].clr;
      ctx.fill();
    }
  }

}
