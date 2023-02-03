import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MarvelService } from '../../service/marvel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  search: string = '';

  currentPage: number = 1;
  totalPage = 0;

  characters: any[] = [];

  isMobile: boolean = false;

  constructor(
    private marvelService: MarvelService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // verificar mobile/desktop
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      this.isMobile = true;
    }

    // puxar os parametros na volta da tela de detalhe
    this.route.queryParams.subscribe((params) => {
      if (params['page'] || params['search']) {
        this.currentPage = parseInt(params['page']);
        this.search = params['search'];
        let aux = this.currentPage;
        if (this.currentPage == 1) {
          aux = 0;
        } else {
          aux -= 1;
        }
        if (this.currentPage && this.search) {
          this.getMarvelByName(aux * 10);
        } else {
          this.getMarvel(aux * 10);
        }
      } else {
        this.getMarvel(0);
      }
    });
  }

  // paginação
  setPosition(pos: number) {
    if (pos > 0) {
      this.currentPage = pos;
      if (this.search) {
        this.getMarvelByName((pos - 1) * 10);
      } else {
        this.getMarvel((pos - 1) * 10);
      }
      document.getElementById('mainBody')?.scrollTo(0, 0);
    }
  }

  // listar todos
  getMarvel(page: number) {
    this.marvelService.getMarvel(page).subscribe({
      next: (res) => {
        this.characters = res.data.results;
        this.totalPage = Math.ceil(res.data.total / 10);
      },
      error: (err) => {
        this.characters = [];
      },
    });
  }

  // listar todos por nome
  getMarvelByName(index: number) {
    this.marvelService.getMarvelByName(index, this.search).subscribe({
      next: (res) => {
        this.characters = res.data.results;
        this.totalPage = Math.ceil(res.data.total / 10);
        console.log(this.totalPage);
      },
      error: (err) => {
        if (!this.search) {
          this.getMarvel(0);
        }
      },
    });
  }

  // redirect tela detalhe
  redirectDetail(id: number) {
    this.router.navigate([`/${id}`], {
      queryParams: { page: this.currentPage, search: this.search },
    });
  }
}
