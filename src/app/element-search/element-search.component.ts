import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { take, tap } from 'rxjs/operators';
import { ExhibitionService } from '../exhibition.service';

@Component({
  selector: 'app-element-search',
  templateUrl: './element-search.component.html',
  styleUrls: ['./element-search.component.scss'],
})
export class ElementSearchComponent implements OnInit {
  public searchedElement = '';
  public exhibition: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private exhibitionService: ExhibitionService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.exhibition = this.exhibitionService.getExhibition(id);
  }

  public filter() {
    const id = this.route.snapshot.paramMap.get('id');
    this.exhibition = this.exhibitionService.getExhibition(id);
    console.log(this.searchedElement);
    const names = this.exhibition.elements.map((el: { name: any }) => el.name);
    this.translate
      .get(names)
      .pipe(
        take(1),
        tap((res: any) => {
          this.exhibition.elements = this.exhibitionService
            .getExhibition(1)
            .elements.filter((el: any) => {
              return (
                res[el.name]
                  .toLowerCase()
                  .indexOf(this.searchedElement.toLowerCase()) > -1 ||
                el.id === parseInt(this.searchedElement, 10)
              );
            });
        })
      )
      .subscribe();
  }

  public back() {
    window.history.back();
  }

  public navigate(element: any) {
    const id = this.route.snapshot.paramMap.get('id');
    this.router.navigate([`guide/${id}/element/${element.id}`], {
      replaceUrl: true,
    });
  }
}
