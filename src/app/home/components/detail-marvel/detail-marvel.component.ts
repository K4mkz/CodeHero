import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MarvelService } from '../../service/marvel.service';

@Component({
  selector: 'app-detail-marvel',
  templateUrl: './detail-marvel.component.html',
  styleUrls: ['./detail-marvel.component.css'],
})
export class DetailMarvelComponent implements OnInit {
  search: string = '';
  page: number = 0;

  id: number = 0;

  character: any;

  info = 'Carregando...';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private marvelService: MarvelService
  ) {}

  ngOnInit(): void {
    // ao entrar na tela fazer o scroll pra cima
    document.getElementById('mainBody')?.scrollTo(0, 0);
    this.id = this.route.snapshot.params['id'];
    this.route.queryParams.subscribe((params) => {
      this.page = params['page'];
      this.search = params['search'];
    });
    this.getMarvelById();
  }

  // puxar detalhes do heroi
  getMarvelById() {
    this.marvelService.getMarvelById(this.id).subscribe({
      next: (res) => {
        this.character = res.data.results[0];
      },
      error: (err) => {
        this.info = 'Personagem não encontrado';
      },
    });
  }

  // voltar para tela anterior
  goBack() {
    this.router.navigate(['/'], {
      queryParams: { page: this.page, search: this.search },
    });
  }
}
