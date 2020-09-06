import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExhibitionService } from '../exhibition.service';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-audio-guide',
  templateUrl: './audio-guide.component.html',
  styleUrls: ['./audio-guide.component.scss'],
})
export class AudioGuideComponent implements OnInit {
  public exhibition: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public language: LanguageService,
    private exhibitionService: ExhibitionService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.exhibition = this.exhibitionService.getExhibition(id);
  }

  public navigate(element: any) {
    this.router.navigate([`element/${element.id}`], { relativeTo: this.route });
  }

  public search() {
    this.router.navigate(['search'], { relativeTo: this.route });
  }

  public back() {
    window.history.back();
  }

  public selectLanguage() {
    this.router.navigate(['language'], { relativeTo: this.route });
  }
}
