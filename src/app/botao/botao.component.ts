import { Component } from '@angular/core';

@Component({
  selector: 'app-botao',
  imports: [],
  templateUrl: './botao.component.html',
  styleUrl: './botao.component.css'
})
export class BotaoComponent {
  aberto: boolean = false;
  imagem: string = 'biscoitofechado.png';
  
  alternarEstado() {
    this.aberto = !this.aberto;
    this.imagem = this.aberto ? 'biscoitoaberto.png' : 'biscoitofechado.png';
    localStorage.setItem('aberto', String(this.aberto));
  }
  
}
