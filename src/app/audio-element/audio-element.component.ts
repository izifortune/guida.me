import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExhibitionService } from '../exhibition.service';

@Component({
  selector: 'app-audio-element',
  templateUrl: './audio-element.component.html',
  styleUrls: ['./audio-element.component.scss'],
})
export class AudioElementComponent implements OnInit {
  public exhibition: any;
  public element: any;
  public nextElement: any;
  public prevElement: any;
  public playing = false;

  @ViewChild('audio') audio: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private exhibitionService: ExhibitionService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = this.route.snapshot.paramMap.get('id');
      const elem = this.route.snapshot.paramMap.get('elem');
      this.exhibition = this.exhibitionService.getExhibition(id);
      this.element = this.exhibition.elements.find(
        (el: any) => el.id === parseInt(elem as any, 10)
      );

      this.nextElement = this.exhibition.elements.find(
        (el: any) => el.id === parseInt(elem as any, 10) + 1
      );

      this.prevElement = this.exhibition.elements.find(
        (el: any) => el.id === parseInt(elem as any, 10) - 1
      );
    });
  }

  public navigate(element: any) {
    const id = this.route.snapshot.paramMap.get('id');
    this.router.navigate([`guide/${id}/element/${element.id}`], {
      replaceUrl: true,
    });
  }

  public back() {
    window.history.back();
  }

  public play() {
    this.playing = true;
    this.audio.nativeElement.play();
  }

  public pause() {
    this.playing = false;
    this.audio.nativeElement.pause();
  }
}
